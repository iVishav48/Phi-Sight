import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart, Camera, Compass, Layers, Lightbulb, Paintbrush } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 slide-in-up">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 mt-12 md:py-24 lg:py-32 rounded-lg bg-gradient-to-b from-[#5D4223] to-[#0A0A0A] ">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services
                </h1>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Discover how InSight can transform your visual content with the power of the golden ratio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Service Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 slide-in-up">
          <div className="container mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary fade-in">
                    Core Service
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl fade-in">
                    Image Analysis
                  </h2>
                  <p className="max-w-[600px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400 fade-in">
                    Our advanced AI analyzes your images to identify golden ratio elements and provides a detailed
                    breakdown of your composition.
                  </p>
                </div>
                <ul className="grid gap-2 fade-in">
                  <li className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    <span>Golden ratio percentage score</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <span>Composition element breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass className="h-5 w-5 text-primary" />
                    <span>Visual golden ratio overlay</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Image analysis example"
                    width={300}
                    height={100}
                    className="rounded-md object-cover max-w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center fade-in">
                    <div className="golden-ratio-grid opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Service Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 rounded-lg bg-gradient-to-t from-[#5D4223] to-[#0A0A0A]  slide-in-up">
          <div className="container mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Composition recommendations example"
                    width={300}
                    height={100}
                    className="rounded-md object-cover max-w-full h-auto fade-in"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="recommendation-arrows opacity-60"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary slide-in-up">
                    Enhanced Service
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl slide-in-up">
                    Composition Recommendations
                  </h2>
                  <p className="max-w-[600px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400 slide-in-up">
                    Receive detailed recommendations to improve your image's composition based on golden ratio
                    principles.
                  </p>
                </div>
                <ul className="grid gap-2 fade-in">
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span>Actionable improvement suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Paintbrush className="h-5 w-5 text-primary" />
                    <span>Visual editing guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-primary" />
                    <span>Reshoot recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center slide-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Additional Services
                </h2>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Enhance your visual content with our specialized services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Batch Processing</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Analyze multiple images at once with our efficient batch processing service.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Paintbrush className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Assisted Editing</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Let our AI help you edit your images to better align with golden ratio principles.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Compass className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Overlays</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get custom golden ratio overlays designed specifically for your creative needs.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/get-started"
                className="inline-flex h-10 items-center border justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 fade-in"
              >
                <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
                  Get Started Now
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
