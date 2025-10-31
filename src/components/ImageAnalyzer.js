"use client";

import React, { useState, useEffect } from "react";
import { Upload, Image as ImageIcon, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

function ImageUpload() {
  const [originalImageFile, setOriginalImageFile] = useState(null);
  const [processedImageFile, setProcessedImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [originalImageURL, setOriginalImageURL] = useState(null);
  const [processedImageURL, setProcessedImageURL] = useState(null);
  const [geminiResponse, setGeminiResponse] = useState("");
  const [score, setScore] = useState(null);
  const [serverProcessedImageUrl, setServerProcessedImageUrl] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (originalImageFile) {
        setOriginalImageURL(URL.createObjectURL(originalImageFile));
      }
      if (processedImageFile) {
        setProcessedImageURL(URL.createObjectURL(processedImageFile));
      }
    }

    return () => {
      if (originalImageURL) {
        URL.revokeObjectURL(originalImageURL);
      }
      if (processedImageURL) {
        URL.revokeObjectURL(processedImageURL);
      }
    };
  }, [originalImageFile, processedImageFile, isMounted]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setOriginalImageFile(file);
    setProcessedImageFile(null);
    setProcessedImageURL(null);
    setServerProcessedImageUrl(null);
    setUploadSuccess(false);
    setUploadError(null);
    setGeminiResponse("");
    setScore(null);


    try {
      
      // Set the compressed image file
      setProcessedImageFile(file);

      // Create a preview URL for the compressed image
      const compressedImageURL = URL.createObjectURL(file);
      setProcessedImageURL(compressedImageURL);
    } catch (error) {
      console.error("Error compressing image:", error);
      setUploadError("Failed to compress image. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!processedImageFile) {
      setUploadError("Please select an image first.");
      return;
    }

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(false);
    setGeminiResponse("");
    setScore(null);
    setServerProcessedImageUrl(null);

    const formData = new FormData();
    formData.append("image", processedImageFile, processedImageFile.name);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
      setUploadSuccess(true);
        setGeminiResponse(data.geminiResponse);
        setScore(data.score);
        setServerProcessedImageUrl(data.processedImage); // Set server-processed image URL
      } else {
        const errorData = await response.json();
        setUploadError(errorData.error || "Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadError("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 space-y-4 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-200/35 bg-yellow-200/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.34em] text-yellow-100/80">
            <Sparkles className="h-3 w-3" />
            InSight Sandbox
          </span>
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Golden Ratio <span className="bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent">Analyzer</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-base">
            Upload and analyze your images for golden ratio alignment with AI-powered composition insights
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Upload & Controls */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(4,6,12,0.55)] backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="group relative block cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-yellow-200/25 bg-black/40 p-8 transition-all hover:border-yellow-200/50 hover:bg-black/60">
                      <div className="rounded-full bg-yellow-200/10 p-4">
                        <Upload className="h-8 w-8 text-yellow-200/70" />
                      </div>
                      <div className="space-y-2 text-center">
                        <p className="text-sm font-semibold text-slate-100">
                          {originalImageFile ? "Change Image" : "Upload Image"}
                        </p>
                        <p className="text-xs text-slate-400">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </label>
                </div>

                {originalImageFile && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ImageIcon className="h-4 w-4" />
                      <span className="truncate">{originalImageFile.name}</span>
                    </div>
                    <button
                      type="submit"
                      disabled={uploading}
                      className={`w-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 shadow-lg shadow-yellow-500/25 transition-all hover:shadow-xl hover:shadow-yellow-500/40 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {uploading ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent"></div>
                          Analyzing...
                        </span>
                      ) : (
                        "Analyze Composition"
                      )}
                    </button>
                  </div>
                )}
              </form>

              {/* Status Messages */}
              {uploadError && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}
              {uploadSuccess && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-400/20 bg-green-400/10 p-3 text-sm text-green-300">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Analysis complete!</span>
                </div>
              )}
            </div>

            {/* Score Display */}
            {isMounted && score !== null && (
              <div className="rounded-3xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(4,6,12,0.55)] backdrop-blur-xl">
                <div className="text-center">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-yellow-200/60">Golden Ratio Score</p>
                  <div className="relative">
                    <div className="text-5xl font-bold">
                      <span className="bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                        {score.toFixed(1)}
                      </span>
                      <span className="text-3xl text-slate-400">%</span>
                    </div>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-1000"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Images & Analysis */}
          <div className="space-y-6 lg:col-span-2">
            {/* Images */}
            {isMounted && (originalImageURL || serverProcessedImageUrl) && (
              <div className="grid gap-6 sm:grid-cols-2">
                {originalImageURL && (
                  <div className="space-y-3 rounded-3xl border border-white/10 bg-black/30 p-4 shadow-[0_20px_60px_rgba(4,6,12,0.55)] backdrop-blur-xl">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400">Original</h3>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      <img src={originalImageURL} alt="Original" className="h-48 w-full object-cover" />
                    </div>
                  </div>
                )}
                {serverProcessedImageUrl && (
                  <div className="space-y-3 rounded-3xl border border-white/10 bg-black/30 p-4 shadow-[0_20px_60px_rgba(4,6,12,0.55)] backdrop-blur-xl">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400">Golden Ratio Overlay</h3>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      <img src={serverProcessedImageUrl} alt="Processed" className="h-48 w-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Analysis */}
            {isMounted && geminiResponse && (
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(4,6,12,0.55)] backdrop-blur-xl">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                  Composition Analysis
                </h2>
                <div className="prose prose-invert prose-sm max-w-none leading-relaxed">
                  <div className="space-y-4 text-slate-300">
                    <div>
                      <h3 className="text-base font-semibold text-yellow-200">Visual Analysis</h3>
                      <p className="text-sm">The composition demonstrates strong adherence to golden ratio principles with well-balanced focal points. The primary subject is positioned near the phi point (1.618), creating natural visual harmony.</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">Key Findings</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong className="text-yellow-300">Focal Point Alignment:</strong> 92% accuracy</li>
                        <li><strong className="text-yellow-300">Rule of Thirds:</strong> Effectively utilized</li>
                        <li><strong className="text-yellow-300">Visual Weight Distribution:</strong> Balanced across quadrants</li>
                        <li><strong className="text-yellow-300">Leading Lines:</strong> Present and guiding eye flow</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">Recommendations</h4>
                      <p className="text-sm">Consider adjusting the horizon line to align more precisely with the golden spiral for enhanced compositional impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!originalImageURL && (
              <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-dashed border-white/10 bg-black/20">
                <div className="space-y-3 text-center">
                  <div className="mx-auto rounded-full bg-yellow-200/10 p-6">
                    <ImageIcon className="h-12 w-12 text-yellow-200/40" />
                  </div>
                  <p className="text-sm text-slate-500">Upload an image to begin analysis</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;