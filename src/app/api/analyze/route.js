
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";

// The Golden Ratio constant.
const PHI = 1.618033988749895;
// The size of the grid to divide the image into for analysis.
const GRID_SIZE = 3;
// The intensity threshold for a grid cell to be considered prominent.
const INTENSITY_THRESHOLD = 1;
// The minimum size of a rectangle to be considered, as a percentage of the image's smaller dimension.
const MIN_SIZE = 0.1;
// The maximum size of a rectangle to be considered, as a percentage of the image's smaller dimension.
const MAX_SIZE = 0.9;

// Initialize Gemini. Ensure the GOOGLE_API_KEY is set in the environment variables.
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Finds prominent areas in the image using edge detection.
async function findProminentAreas(imageBuffer) {
    const edges = await sharp(imageBuffer)
        .greyscale()
        .normalize()
        .convolve({ width: 3, height: 3, kernel: [-1, -1, -1, -1, 8, -1, -1, -1, -1] })
        .raw()
        .toBuffer();
    return edges;
}

// Checks if a given ratio is close to the Golden Ratio.
function isGoldenRatio(ratio) {
    const difference = Math.abs(ratio - PHI);
    return difference <= 0.1 * PHI;
}

// Detects Golden Ratios in the image and returns an SVG overlay and rectangle data.
async function detectGoldenRatios(imageBuffer) {
    const metadata = await sharp(imageBuffer).metadata();
    const { width, height } = metadata;

    if (!width || !height) {
        throw new Error("Image width or height is undefined.");
    }

    const edges = await findProminentAreas(imageBuffer);
    const rectanglesData = [];
    const svgRectangles = [];
    const cellWidth = width / GRID_SIZE;
    const cellHeight = height / GRID_SIZE;

    for (let gridX = 0; gridX < GRID_SIZE; gridX++) {
        for (let gridY = 0; gridY < GRID_SIZE; gridY++) {
            const cellStartX = Math.floor(gridX * cellWidth);
            const cellStartY = Math.floor(gridY * cellHeight);

            let cellIntensity = 0;
            for (let y = cellStartY; y < cellStartY + cellHeight; y++) {
                for (let x = cellStartX; x < cellStartX + cellWidth; x++) {
                    if (x < width && y < height) {
                        const idx = y * width + x;
                        cellIntensity += edges[idx] || 0;
                    }
                }
            }
            cellIntensity /= (cellWidth * cellHeight);

            if (cellIntensity > INTENSITY_THRESHOLD) {
                const minSize = Math.min(width, height) * MIN_SIZE;
                const maxSize = Math.min(width, height) * MAX_SIZE;

                for (let size = maxSize; size > minSize; size -= (maxSize - minSize) / 10) {
                    const goldenHeight = size / PHI;
                    if (size <= width && goldenHeight <= height) {
                        const rectData = {
                            x: cellStartX,
                            y: cellStartY,
                            width: size,
                            height: goldenHeight,
                            orientation: 'horizontal',
                            score: isGoldenRatio(size / goldenHeight) ? 100 : (1 - (Math.abs((size / goldenHeight) - PHI) / PHI)) * 100,

                        }
                        rectanglesData.push(rectData);
                        svgRectangles.push(`
                            <rect 
                                x="${rectData.x}"
                                y="${rectData.y}"
                                width="${rectData.width}"
                                height="${rectData.height}"
                                fill="none"
                                stroke="gold"
                                stroke-width="2"
                                opacity="0.6"
                            />`
                        );
                    }

                    const goldenWidth = size / PHI;
                    if (goldenWidth <= width && size <= height) {
                        const rectData = {
                            x: cellStartX,
                            y: cellStartY,
                            width: goldenWidth,
                            height: size,
                            orientation: 'vertical',
                            score: isGoldenRatio(goldenWidth / size) ? 100 : (1 - (Math.abs((goldenWidth / size) - PHI) / PHI)) * 100,

                        }
                        rectanglesData.push(rectData);
                        svgRectangles.push(`
                            <rect 
                                x="${rectData.x}"
                                y="${rectData.y}"
                                width="${rectData.width}"
                                height="${rectData.height}"
                                fill="none"
                                stroke="#FF69B4"
                                stroke-width="2"
                                opacity="0.6"
                            />`
                        );
                    }
                }
            }
        }
    }

    const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            ${svgRectangles.join('')}
        </svg>`;

    return { svg, rectanglesData };
}

// Generates a prompt for Gemini based on the detected rectangles and overall score.
function generatePrompt(rectanglesData, overallScore, width, height) {
    let prompt = `Analyze the composition of this image (width: ${width}, height: ${height}) with an overall Golden Ratio adherence score of ${overallScore.toFixed(2)}%. `;
    prompt += `The image has ${rectanglesData.length} prominent rectangular areas. `;

    if (rectanglesData.length === 0) {
        prompt += "There are no prominent areas. Suggest how to improve the composition by applying Golden Ratio principles."
        return prompt;
    }

    rectanglesData.forEach((rect, index) => {
        prompt += `Rectangle ${index + 1}: located at (x: ${rect.x}, y: ${rect.y}), `;
        prompt += `width: ${rect.width.toFixed(2)}, height: ${rect.height.toFixed(2)}, orientation: ${rect.orientation}, score: ${rect.score.toFixed(2)}%. `;
    });

    prompt += "Based on these rectangles and the overall score, provide suggestions to improve the image composition, focusing on Golden Ratio principles. ";
    prompt += "Suggest specific changes in terms of object placement, cropping, or other compositional adjustments. Be concise."

    return prompt;
}

// Gets a response from Gemini based on the image and prompt.
async function getGeminiResponse(imageBase64, prompt) {

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Use gemini-pro-vision for images
    const image = {
        inlineData: {
            data: imageBase64,
            mimeType: "image/jpeg", // Use image/jpeg
        },
    };

    const result = await model.generateContent([prompt, image]);
    const response = await result.response;
    const text = response.text();
    return text;
}

// The main endpoint for the API. Handles the image upload and analysis.
export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('image');

        if (!file) {
            return NextResponse.json({ error: 'No image file provided.' }, { status: 400 });
        }

        // Get the image buffer directly from the file.
        const buffer = Buffer.from(await file.arrayBuffer());

        const metadata = await sharp(buffer).metadata();
        const { width, height } = metadata;

        if (!width || !height) {
            return NextResponse.json({ error: 'Invalid image dimensions.' }, { status: 400 });
        }

        const ratio = width / height;
        const difference = Math.abs(ratio - PHI);
        const score = (1 - (difference / PHI)) * 100;
        const clampedScore = Math.max(0, Math.min(100, score));
        const originalImageBase64 = buffer.toString('base64');

        const { svg: svgOverlay, rectanglesData } = await detectGoldenRatios(buffer);

        // Composite the SVG overlay onto the image and convert to PNG.
        const processedImageBuffer = await sharp(buffer)
            .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
            .png() // Convert to PNG
            .toBuffer();
        const processedImageBase64 = processedImageBuffer.toString('base64');
        const prompt = generatePrompt(rectanglesData, clampedScore, width, height);

        // Get the Gemini response.
        const geminiResponse = await getGeminiResponse(processedImageBase64, prompt);

        return NextResponse.json({
            success: true,
            originalImage: `data:image/jpeg;base64,${originalImageBase64}`, // Send original as JPEG
            processedImage: `data:image/png;base64,${processedImageBase64}`, // Send processed as PNG
            score: clampedScore,
            geminiResponse: geminiResponse,
        });

    } catch (error) {
        console.error('Error processing image:', error);
        return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
    }
}
