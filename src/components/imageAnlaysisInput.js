'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { marked } from 'marked';

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
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">Image Analysis</h1>

      <Card className="border-muted/40">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload image</label>
                <input
                  type="file"
                  accept="image/*"
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
                  className="block w-full cursor-pointer rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                {previewUrl && (
                  <div className="mt-2 overflow-hidden rounded-md border">
                    <img src={previewUrl} alt="preview" className="h-40 w-full object-cover" />
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What happens</label>
                <p className="text-sm text-muted-foreground">Well analyze composition, exposure, color, depth, distractions and give actionable improvements for photographers.</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={pending} className="min-w-28">
                {pending ? 'Analyzing…' : 'Analyze image'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {response && (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {previewUrl && (
            <Card className="border-muted/40">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-medium">Image preview</h3>
                <div className="overflow-hidden rounded-md border">
                  <img src={previewUrl} alt="preview" className="max-h-[520px] w-full object-contain" />
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-muted/40">
            <CardContent className="pt-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-medium">Analysis</h3>
                {response?.text && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(response.text);
                      } catch {}
                    }}
                  >
                    Copy
                  </Button>
                )}
              </div>

              {response?.text ? (
                <div
                  className="prose prose-sm max-w-none leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_h3]:mt-4 [&_h3]:mb-2"
                  dangerouslySetInnerHTML={{ __html: marked.parse(response.text) }}
                />
              ) : (
                <pre className="max-h-96 overflow-auto rounded-md bg-muted/30 p-4 text-sm">
{JSON.stringify(response, null, 2)}
                </pre>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

