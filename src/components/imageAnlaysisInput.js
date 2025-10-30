'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { marked } from 'marked';
import { Upload, Sparkles, Check, Copy } from 'lucide-react';

export default function ImageAnalysisPage() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image.');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    setPending(true);
    setResponse(null);
    try {
      const res = await fetch('/api/image-analysis', { method: 'POST', body: formData });
      const contentType = res.headers.get('content-type') || '';
      const payload = contentType.includes('application/json')
        ? await res.json().catch(() => ({ success: false, error: 'Invalid JSON body' }))
        : { success: false, error: await res.text().catch(() => 'Non-JSON response') };
      if (!res.ok) {
        setResponse({ success: false, error: payload?.error || res.statusText, status: res.status });
      } else {
        setResponse(payload);
      }
    } catch (err) {
      const msg = err?.message || 'Request failed';
      setResponse({ success: false, error: msg });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Golden Ratio Image Analyzer
          </h1>
          <p className="text-lg text-gray-400">
            Upload an image to analyze its composition based on the golden ratio.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Upload and Preview */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-gray-400 transition-colors">
                  <Upload className="h-12 w-12 text-gray-500 mb-4" />
                  <span className="text-lg font-semibold">Click to upload an image</span>
                  <span className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</span>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setImage(file);
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setPreviewUrl(url);
                    } else {
                      setPreviewUrl(null);
                    }
                  }}
                />
              </div>
              {previewUrl && (
                <div className="mt-4 rounded-md overflow-hidden border border-gray-700">
                  <img src={previewUrl} alt="Preview" className="w-full h-auto object-cover" />
                </div>
              )}
              <Button type="submit" disabled={pending} className="w-full h-12 text-lg font-semibold bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white transition-transform transform hover:scale-105">
                {pending ? 'Analyzing...' : 'Analyze Image'}
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Analysis Result */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
            {response ? (
              <div className="space-y-6">
                {previewUrl && (
                  <div className="relative rounded-md overflow-hidden border border-gray-700">
                    <img src={previewUrl} alt="Analyzed" className="w-full h-auto object-cover" />
                    {/* Placeholder for golden ratio overlay */}
                    <div className="absolute inset-0 border-2 border-yellow-400 opacity-50"></div>
                  </div>
                )}
                <div className="prose prose-invert max-w-none">
                  {response.text ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: marked.parse(response.text) }}
                    />
                  ) : (
                    <pre className="bg-gray-800 p-4 rounded-md text-sm whitespace-pre-wrap">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  )}
                </div>
                {response.text && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(response.text)}
                    className="border-gray-600 hover:bg-gray-800"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Analysis
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <Sparkles className="h-16 w-16 mb-4" />
                <p>Your image analysis will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}