"use client"; // Important: Mark this as a Client Component

import React, { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { marked } from "marked";

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
  const [isMounted, setIsMounted] = useState(false); // For hydration fix

  useEffect(() => {
    setIsMounted(true); // Set to true after initial mount
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
    if (!file) {
      return;
    }

    setOriginalImageFile(file);
    setProcessedImageFile(null);
    setProcessedImageURL(null);
    setServerProcessedImageUrl(null);
    setUploadSuccess(false);
    setUploadError(null);
    setGeminiResponse("");
    setScore(null);

    // Compression options
    const options = {
      maxSizeMB: 1, // Maximum size in MB
      maxWidthOrHeight: 1920, // Maximum width or height
      useWebWorker: true, // Use a web worker for better performance
    };

    try {
      // Compress the image
      const compressedFile = await imageCompression(file, options);

      // Set the compressed image file
      setProcessedImageFile(compressedFile);

      // Create a preview URL for the compressed image
      const compressedImageURL = URL.createObjectURL(compressedFile);
      setProcessedImageURL(compressedImageURL);
    } catch (error) {
      console.error("Error compressing image:", error);
      setUploadError("Failed to compress image. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!processedImageFile) {
      setUploadError("Please select and compress an image first.");
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
    <div className="space-y-10 rounded-[32px] border border-white/10 bg-black/30 p-8 shadow-[0_30px_80px_rgba(4,6,12,0.55)] backdrop-blur-xl">
      <div className="space-y-3 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-yellow-200/35 bg-yellow-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-yellow-100/80">
          InSight Sandbox
        </span>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Golden Ratio <span className="gold-gradient-text">Compressor & Analyzer</span>
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
          Compress, upload, and compare golden ratio alignment between original, client-side compression, and server-generated overlays.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="flex cursor-pointer flex-col gap-3 rounded-3xl border border-dashed border-yellow-200/35 bg-black/40 p-6 text-center transition hover:border-yellow-100/70 hover:bg-black/60">
          <span className="text-sm uppercase tracking-[0.32em] text-yellow-200/70">Upload asset</span>
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          <span className="text-lg font-semibold text-slate-100">Drop or browse an image</span>
          <span className="text-xs text-slate-400">Optimizes to 1920px max edge • ~1MB target</span>
        </label>
        <button
          type="submit"
          disabled={uploading}
          className={`gradient-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] ${uploading ? "opacity-70" : ""
            }`}
        >
          {uploading ? "Analyzing..." : "Run Golden Ratio Scan"}
        </button>
      </form>

      {uploadError && <p className="text-center text-sm text-red-400">{uploadError}</p>}
      {uploadSuccess && <p className="text-center text-sm text-green-300">Image analyzed successfully!</p>}

      <div className="grid gap-6 sm:grid-cols-2">
        {isMounted && originalImageURL && (
          <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-lg font-semibold text-slate-50">Original Image</h2>
            <img src={originalImageURL} alt="Original" className="w-full rounded-2xl border border-white/10 object-cover" />
          </div>
        )}
        {isMounted && processedImageURL && (
          <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-lg font-semibold text-slate-50">Compressed (Client)</h2>
            <img src={processedImageURL} alt="Compressed" className="w-full rounded-2xl border border-white/10 object-cover" />
          </div>
        )}
      </div>

      {isMounted && serverProcessedImageUrl && (
        <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-lg font-semibold text-slate-50">Processed (Server Overlay)</h2>
          <img src={serverProcessedImageUrl} alt="Processed by Server" className="w-full rounded-2xl border border-white/10 object-cover" />
        </div>
      )}

      {isMounted && score !== null && (
        <div className="mx-auto w-fit rounded-full border border-yellow-200/35 bg-yellow-200/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-100">
          Golden Ratio Score: {score.toFixed(2)}%
        </div>
      )}

      {isMounted && geminiResponse && (
        <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-6">
          <h2 className="text-lg font-semibold text-slate-50">Composition Analysis</h2>
          <div className="prose prose-invert max-w-none text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: marked(geminiResponse) }} />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
