'use client';

import { useState } from 'react';
import { Button } from './ui/button';
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
    <div className="min-h-screen px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-yellow-200/35 bg-yellow-200/10 px-5 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-yellow-100/80">
            InSight Analyzer
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Golden Ratio <span className="gold-gradient-text">Image Analyzer</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
              Upload an image and InSight will layer golden ratio overlays, generate actionable prompts, and grade the composition in seconds.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.38em] text-yellow-100/70">No uploads leave your browser</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          {/* Image Upload and Preview */}
          <div className="glass-panel p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="accent-ring rounded-3xl bg-black/20 p-2">
                <label
                  htmlFor="image-upload"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-[26px] border border-dashed border-yellow-200/30 bg-black/30 px-8 py-16 text-center transition hover:border-yellow-200/70 hover:bg-black/40"
                >
                  <Upload className="mb-5 h-12 w-12 text-yellow-200/70" />
                  <span className="text-lg font-semibold text-slate-100">Drop or select an image</span>
                  <span className="mt-2 text-sm text-slate-400">JPG, PNG, WEBP up to 10MB</span>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-200/25 bg-yellow-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-100/70">
                    <Check className="h-4 w-4" />
                    Golden ratio ready
                  </span>
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
                <div className="rounded-3xl border border-yellow-200/20 bg-black/30 p-2">
                  <div className="overflow-hidden rounded-[22px] border border-white/10">
                    <img src={previewUrl} alt="Preview" className="h-auto w-full object-cover" />
                  </div>
                </div>
              )}
              <Button
                type="submit"
                disabled={pending}
                className="gradient-button inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold uppercase tracking-[0.24em]"
              >
                {pending ? "Analyzing..." : "Analyze Image"}
                <Sparkles className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Analysis Result */}
          <div className="glass-panel p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-50">Insights</h2>
              {response?.score && (
                <span className="rounded-full border border-yellow-200/30 bg-yellow-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-50">
                  {Math.round(response.score)}% Harmony
                </span>
              )}
            </div>
            <div className="mt-6 space-y-6">
              {previewUrl && (
                <div className="relative overflow-hidden rounded-[22px] border border-yellow-200/30">
                  <img src={previewUrl} alt="Analyzed" className="h-auto w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,200,95,0.35),transparent_62%)] opacity-80 mix-blend-screen" />
                </div>
              )}
              {response ? (
                <>
                  <div className="prose prose-invert max-w-none text-sm leading-relaxed text-slate-200">
                    {response.text ? (
                      <div dangerouslySetInnerHTML={{ __html: marked.parse(response.text) }} />
                    ) : (
                      <pre className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300">
                        {JSON.stringify(response, null, 2)}
                      </pre>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-yellow-200/25 bg-yellow-200/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-yellow-100">
                      Composition +
                    </span>
                    <span className="rounded-full border border-yellow-200/25 bg-yellow-200/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-yellow-100">
                      Story Clarity
                    </span>
                    <span className="rounded-full border border-yellow-200/25 bg-yellow-200/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-yellow-100">
                      Color Harmony
                    </span>
                  </div>
                  {response.text && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(response.text)}
                      className="border-yellow-200/35 bg-black/40 text-yellow-100 hover:bg-black/60"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Analysis
                    </Button>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-[26px] border border-white/10 bg-black/40 px-6 py-16 text-center text-slate-400">
                  <Sparkles className="mb-4 h-12 w-12 text-yellow-200/60" />
                  <p className="text-sm uppercase tracking-[0.28em]">
                    Upload an image to reveal InSight&apos;s guidance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
