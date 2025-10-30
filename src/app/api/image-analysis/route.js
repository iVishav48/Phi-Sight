import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = 'nodejs';
export async function POST(req) {
	try {
		const apiKey = process.env.OPENAI_API_KEY;
		if (!apiKey) {
			return NextResponse.json({ success: false, error: "Missing OPENAI_API_KEY. Set it in .env.local and restart the dev server." }, { status: 500 });
		}

		const openai = new OpenAI({ apiKey });

		const formData = await req.formData();
		const file = formData.get("image");
		if (!file || typeof file === "string") {
			return NextResponse.json({ error: "Missing image" }, { status: 400 });
		}

		const arrayBuffer = await file.arrayBuffer();
		const base64Image = Buffer.from(arrayBuffer).toString("base64");
		const dataUrl = `data:${file.type};base64,${base64Image}`;

		const systemPrompt = `You are a professional photography mentor. Analyze a single uploaded photograph thoroughly and provide constructive, concise, and actionable critique for a photographer looking to improve the image.

Goals:
- Identify the image's subject and focal point
- Evaluate composition (rule of thirds, golden ratio relevance, leading lines, balance, symmetry/asymmetry, framing, negative space)
- Assess exposure, contrast, dynamic range, white balance, color harmony, and mood
- Comment on depth of field, background separation, lens compression, and perspective
- Call out distractions and suggest specific cropping or reframing (include aspect ratio suggestions)
- Note sharpness, motion blur, and noise; suggest improvements
- Provide 3–6 prioritized, actionable improvements with clear steps
- If relevant, suggest post-processing adjustments and recommended capture settings to try next time

Output format:
- Short title that describes the photo (one line)
- Brief strengths (2–3 bullets)
- Improvements (3–6 bullets, imperative, specific)
- Optional: Crop suggestions with aspect ratios (e.g., 4:5 vertical, 16:9 wide) and anchor points
- Optional: Suggested capture settings (ranges) and post-processing tweaks
Keep it friendly, direct, and avoid fluff.`;

		const response = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{ role: "system", content: systemPrompt },
				{
					role: "user",
					content: [
						{ type: "text", text: "Analyze this photograph and provide critique following the requested format." },
						{ type: "image_url", image_url: { url: dataUrl } },
					],
				},
			],
		});

		const text = response.choices?.[0]?.message?.content || "No response";
		return NextResponse.json({ success: true, text });
	} catch (error) {
		console.error("/api/image-analysis error:", error);
		return NextResponse.json({ success: false, error: error?.message || "Something went wrong" }, { status: 500 });
	}
}


