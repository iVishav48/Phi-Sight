import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Check, ImageIcon, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-8 md:px-12 lg:px-24 bg-black text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 text-center fade-in">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Discover the{" "}
              <span className="bg-gradient-to-tr from-[#E6C203] to-[#5D4223] bg-clip-text text-transparent">
                Golden Ratio
              </span>{" "}
              in Your Images
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
              Phi Sight analyzes your images using AI to identify golden ratio
              elements and provides recommendations to enhance your visual
              composition.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 md:py-32 bg-gray-900 rounded-t-3xl fade-in">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                How Phi Sight Works
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-400 mt-4">
                Our AI-powered platform analyzes your images to identify golden
                ratio elements and provides recommendations for improvement.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white mb-4">
                  <ImageIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Image</h3>
                <p className="text-gray-400">
                  Simply upload any image you want to analyze for golden ratio
                  composition.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                <p className="text-gray-400">
                  Our AI powered analysis gives insights about golden ratio
                  elements and composition.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white mb-4">
                  <Camera className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get Recommendations</h3>
                <p className="text-gray-400">
                  Receive detailed recommendations to improve your image's
                  composition based on the golden ratio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-24 md:py-32 fade-in">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Phi Sight
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-400 mt-4">
                Elevate your visual content with the power of the golden ratio.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Advanced AI Analysis</h3>
                  <p className="text-gray-400 mt-2">
                    Powered by cutting-edge AI technology, our analysis is fast
                    and accurate.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Actionable Recommendations
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Get specific suggestions to improve your image composition.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Visual Overlay Guides</h3>
                  <p className="text-gray-400 mt-2">
                    See golden ratio overlays on your images to understand
                    composition better.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Percentage Analysis</h3>
                  <p className="text-gray-400 mt-2">
                    Get a numerical score showing how closely your image
                    follows the golden ratio.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-tr from-[#E6C203] to-[#5D4223] text-white font-medium shadow-lg transition-transform transform hover:scale-105"
              >
                Try Phi Sight Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}