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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Phi-Sight (Next.js)</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-2 block w-full text-sm text-slate-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-violet-50 file:text-violet-700
                     hover:file:bg-violet-100"
        />
        <button
          type="submit"
          disabled={uploading}
          className={`${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded`}
        >
          {uploading ? "Analyzing..." : "Analyze Image"}
        </button>
      </form>

      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
      {uploadSuccess && <p style={{ color: "green" }}>Image analyzed successfully!</p>}

      <div className="grid grid-cols-2 gap-4">
        {isMounted && originalImageURL && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Original Image:</h2>
            <img src={originalImageURL} alt="Original" className="max-w-full" />
          </div>
        )}
        {isMounted && processedImageURL && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Compressed Image (Client-Side):</h2>
            <img src={processedImageURL} alt="Compressed" className="max-w-full" />
          </div>
        )}
      </div>

      {isMounted && serverProcessedImageUrl && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Processed Image (Server-Side):</h2>
          <img src={serverProcessedImageUrl} alt="Processed by Server" className="max-w-full" />
        </div>
      )}

      {isMounted && score !== null && (
        <div className="text-xl text-center w-fit mx-auto p-4 rounded-xl text-yellow-700 mt-8 bg-yellow-200">
          Golden Ratio Score: {score.toFixed(2)}%
        </div>
      )}

      {isMounted && geminiResponse && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Composition Analysis:</h2>
          <div
            className="text-gray-800"
            dangerouslySetInnerHTML={{ __html: marked(geminiResponse) }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;