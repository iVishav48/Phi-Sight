"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ImageIcon, Loader2, Upload, Lock } from "lucide-react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { marked } from "marked";

export default function GetStartedPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(null);
  const [processedImageUrl, setProcessedImageUrl] = useState(null);
  const [geminiResponse, setGeminiResponse] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Validate file type
      if (!selectedFile.type.startsWith("image/")) {
        setError("Please upload a valid image file.");
        return;
      }

      // Create a FileReader to read the image
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = document.createElement("img");
        img.onload = () => {
          // Create a canvas to resize the image
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Set the desired maximum width/height
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;

          let width = img.width;
          let height = img.height;

          // Calculate the new dimensions while maintaining aspect ratio
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          // Draw the resized image onto the canvas
          ctx.drawImage(img, 0, 0, width, height);

          // Convert the canvas to a Blob (compressed image)
          canvas.toBlob(
            (blob) => {
              const compressedFile = new File([blob], selectedFile.name, {
                type: selectedFile.type,
                lastModified: Date.now(),
              });

              // Update the state with the compressed file
              setFile(compressedFile);

              // Create a preview from the canvas
              setPreview(canvas.toDataURL());
            },
            selectedFile.type,
            0.8 // Compression quality (0.8 = 80%)
          );
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(selectedFile);

      // Reset analysis states
      setIsAnalyzing(false);
      setAnalysisComplete(false);
      setAnalysisProgress(0);
      setAnalysisResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("/api/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setScore(response.data.score.toFixed(2));
        setProcessedImageUrl(response.data.processedImage);
        setGeminiResponse(response.data.geminiResponse);
      } else {
        setError("Analysis failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.response?.data?.message || "An error occurred during analysis."
      );
    } finally {
      setLoading(false);
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setAnalysisResult({
        score: score,
        recommendations: [
          "Try cropping the image to align with the golden ratio",
          "Adjust the image's composition to follow golden ratio principles",
        ],
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 mt-12 md:py-24 lg:py-32 rounded-lg bg-gradient-to-b from-[#5D4223] to-[#0A0A0A] fade-in">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Get Started with Phi Sight
                </h1>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Upload your image to discover its golden ratio composition and
                  get personalized recommendations.
                </p>
                <p className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
                  <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span>Your Image, Your Machine - No Data Sent to the Cloud</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
              {/* Upload Column */}
              <div className="flex flex-col space-y-4 slide-in-up">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl fade-in fade-up">
                    Upload Your Image
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Select an image to analyze for golden ratio composition. We
                    support JPEG, PNG, and other common image formats.
                  </p>
                </div>

                <div
                  className="flex flex-col cursor-pointer items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-300 p-6 sm:p-10 dark:border-gray-700"
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  {!preview ? (
                    <>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <ImageIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                      </div>
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400 fade-in">
                        Drag and drop your image here, or click to browse
                      </p>
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 fade-in"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </label>
                    </>
                  ) : (
                    <div className="relative w-full max-w-md slide-in-up">
                      <div className="relative overflow-hidden rounded-lg">
                        <Image
                          src={preview || "/placeholder.svg"}
                          alt="Image preview"
                          className="object-cover"
                          layout="responsive"
                          width={300}
                          height={300}
                        />
                        {analysisComplete && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="golden-ratio-overlay opacity-60"></div>
                          </div>
                        )}
                      </div>
                      <div className="mt-6 flex justify-between">
                        {!analysisComplete && (
                          <input
                            type="file"
                            id="file-upload-change"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        )}
                        <div className="mt-6 items-center flex space-x-4">
                          {!analysisComplete && (
                            <Button
                              onClick={() =>
                                document
                                  .getElementById("file-upload-change")
                                  .click()
                              }
                              htmlFor="file-upload-change"
                              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 slide-in-up"
                            >
                              Change Image
                            </Button>
                          )}
                          {!isAnalyzing && !analysisComplete && (
                            <Button
                              onClick={handleAnalyze}
                              className="cursor-pointer inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 slide-in-up"
                            >
                              <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
                                Analyze Image
                              </span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {isAnalyzing && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <p className="text-sm font-medium">Analyzing image...</p>
                    </div>
                    <Progress value={analysisProgress} className="h-2 w-full" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Our AI is analyzing your image for golden ratio elements
                    </p>
                  </div>
                )}
              </div>

              {/* Results Column */}
              <div className="flex flex-col space-y-4 slide-in-up">
                {analysisComplete && analysisResult && (
                  <>
                    {processedImageUrl && (
                      <div>
                        <h2 className="text-xl font-semibold mb-2 fade-in">
                          Processed Image:
                        </h2>
                        <img
                          src={processedImageUrl}
                          alt="Processed"
                          className="max-w-full rounded-lg fade-in"
                        />
                      </div>
                    )}
                    <div className="space-y-2 fade-in">
                      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl ">
                        Analysis Results
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Here's how your image aligns with the golden ratio
                        principles.
                      </p>
                    </div>

                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-medium">
                                Golden Ratio Score
                              </h3>
                              <span className="text-2xl font-bold text-primary">
                                {score}%
                              </span>
                            </div>
                            <Progress value={score} className="h-2 w-full" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {score >= 80
                                ? "Excellent! Your image strongly follows golden ratio principles."
                                : score >= 60
                                ? "Good. Your image has several elements that align with the golden ratio."
                                : "Your image has potential for improvement in golden ratio alignment."}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">
                              Detailed Analysis
                            </h3>
                            <div
                              className="text-white"
                              dangerouslySetInnerHTML={{
                                __html: marked(geminiResponse),
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div
                      className="flex justify-center cursor-pointer border border-dashed border-gray-300 p-6 sm:p-10 dark:border-gray-700"
                      onClick={() => window.location.reload()}
                    >
                      <Button>
                        <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent cursor-pointer">
                          Analyze Another Image
                        </span>
                      </Button>
                    </div>
                  </>
                )}

                {!analysisComplete && (
                  <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-gray-300 p-6 sm:p-10 dark:border-gray-700">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <ArrowRight className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium">
                        Your Analysis Results Will Appear Here
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Upload an image and click "Analyze Image" to see your
                        golden ratio score and recommendations.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
