import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Check, ImageIcon, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-8 md:px-12 lg:px-24">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 fade-in">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 slide-in-up">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                    Discover the{" "}
                    <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
                      Golden
                    </span>{" "}
                    Ratio in Your Images
                  </h1>
                  <p className="max-w-[600px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                    Phi Sight analyzes your images using AI to identify golden
                    ratio elements and provides recommendations to enhance your
                    visual composition.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/get-started"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary px-6 sm:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
                      Get Started
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center slide-in-up">
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square overflow-hidden rounded-lg border bg-background p-2">
                  <div className="golden-spiral-animation absolute inset-0 opacity-50"></div>
                  <Image
                    src="https://media1.tenor.com/m/ZY8ffDfPxjYAAAAd/golden-ratio-goldener-schnitt.gif"
                    alt="Golden ratio visualization"
                    width={500}
                    height={500}
                    className="rounded-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="golden-ratio-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 rounded-lg bg-gradient-to-t from-[#5D4223] to-[#0A0A0A]  fade-in">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  How Phi Sight Works
                </h2>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Our AI-powered platform analyzes your images to identify
                  golden ratio elements and provides recommendations for
                  improvement.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="text-center flex flex-col items-center space-y-4 rounded-lg border p-6 md:p-8 shadow-sm transition-all hover:shadow-md slide-in-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ImageIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Upload Your Image
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simply upload any image you want to analyze for golden ratio
                  composition.
                </p>
              </div>
              <div className="text-center flex flex-col items-center space-y-4 rounded-lg border p-6 md:p-8 shadow-sm transition-all hover:shadow-md slide-in-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold sm:text-xl">AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI powered analysis gives insights about golden ratio elements and composition.
                </p>
              </div>
              <div className="text-center flex flex-col items-center space-y-4 rounded-lg border p-6 md:p-8 shadow-sm transition-all hover:shadow-md slide-in-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Get Recommendations
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive detailed recommendations to improve your image's
                  composition based on the golden ratio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 fade-in">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Why Choose Phi Sight
                </h2>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Elevate your visual content with the power of the golden
                  ratio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4 slide-in-up">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      Advanced AI Analysis
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Powered by cutting-edge AI technology, our analysis is fast and
                      accurate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 slide-in-up">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      Actionable Recommendations
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get specific suggestions to improve your image
                      composition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4 slide-in-up">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      Visual Overlay Guides
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      See golden ratio overlays on your images to understand
                      composition better.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 slide-in-up">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      Percentage Analysis
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get a numerical score showing how closely your image
                      follows the golden ratio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center slide-in-up">
              <Link
                href="/get-started"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm font-medium text-primary-foreground border transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
                  Try Phi Sight Now
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
