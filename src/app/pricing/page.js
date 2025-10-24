import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 fade-in">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 mt-12 md:py-24 lg:py-32 rounded-lg bg-gradient-to-b from-[#5D4223] to-[#0A0A0A]">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pricing Plans
                </h1>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Choose the perfect credit pack for your creative needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 fade-in">
  <div className="container mx-auto px-4 sm:px-6 md:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 sm:mb-8">
      Pricing Plans
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
         {/*Free Pack */}
      <div className="rounded-lg border border-gray-300 p-6 shadow-sm slide-in-up">
        <h3 className="text-lg font-bold mb-4">Free Pack</h3>
        <p className="text-sm mb-2">Free credits</p>
        <p className="text-sm font-bold mb-2"></p>
        <p className="text-sm text-gray-500 mb-4 fade-in">
          For users who want to explore our features without any cost.
        </p>
      </div>
      {/* Basic Pack */}
      <div className="rounded-lg border border-gray-300 p-6 shadow-sm slide-in-up">
        <h3 className="text-lg font-bold mb-4">Basic Pack</h3>
        <p className="text-sm mb-2">10 credits</p>
        <p className="text-sm font-bold mb-2">₹199</p>
        <p className="text-sm text-gray-500 mb-4 fade-in">
          Perfect for beginners exploring golden ratio analysis
        </p>
        <Link
          href="/get-started"
          className="inline-flex h-8 sm:h-9 items-center justify-center rounded-md px-3 sm:px-4 text-xs sm:text-sm font-medium shadow transition-colors bg-gray-900 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 slide-in-up"
        >
          Buy Now
        </Link>
      </div>

      {/* Activator Pack */}
      <div className="rounded-lg border border-gray-300 p-6 shadow-sm slide-in-up">
        <h3 className="text-lg font-bold mb-4">Activator Pack</h3>
        <p className="text-sm mb-2">25 credits</p>
        <p className="text-sm font-bold mb-2">₹299</p>
        <p className="text-sm text-gray-500 mb-4 fade-in">
          Unlocks advanced tools for in-depth analysis and batch processing.
        </p>
        <Link
          href="/get-started"
          className="inline-flex h-8 sm:h-9 items-center justify-center rounded-md px-3 sm:px-4 text-xs sm:text-sm font-medium shadow transition-colors bg-gray-900 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 slide-in-up"
        >
          Buy Now
        </Link>
      </div>

      {/* Pro Pack */}
      <div className="rounded-lg border border-gray-400 p-6 shadow-sm slide-in-up">
        <h3 className="text-lg font-bold mb-4">Pro Pack</h3>
        <p className="text-sm mb-2">50 credits</p>
        <p className="text-sm font-bold mb-2 fade-in">
          <span className="line-through text-gray-400">₹999</span> ₹799
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Ideal for photographers and designers seeking detailed analysis
        </p>
        <Link
          href="/get-started"
          className="inline-flex h-8 sm:h-9 items-center justify-center rounded-md px-3 sm:px-4 text-xs sm:text-sm font-medium shadow transition-colors bg-gray-900 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 slide-in-up"
        >
          Buy Now
        </Link>
      </div>

      {/* Expert Pack */}
      <div className="rounded-lg border border-gray-400  p-6 shadow-sm slide-in-up">
        <h3 className="text-lg font-bold mb-4">Expert Pack</h3>
        <p className="text-sm mb-2">150 credits</p>
        <p className="text-sm font-bold mb-2 fade-in">
          <span className="line-through text-gray-400">₹2999</span> ₹1999
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Enhanced analysis for professional creators and artists
        </p>
        <Link
          href="/get-started"
          className="inline-flex h-8 sm:h-9 items-center justify-center rounded-md px-3 sm:px-4 text-xs sm:text-sm font-medium shadow transition-colors bg-gray-900 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 slide-in-up"
        >
          Buy Now
        </Link>
      </div>

      {/* Business Pack */}
      <div className="rounded-lg border border-gray-400 p-6 shadow-sm slide-in-up">
        <h3 className="text-lg font-bold mb-4">Business Pack</h3>
        <p className="text-sm mb-2">400 credits</p>
        <p className="text-sm font-bold mb-2 fade-in">
          <span className="line-through text-gray-400">₹7999</span> ₹4799
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Complete solution for creative agencies and studios
        </p>
        <Link
          href="/get-started"
          className="inline-flex h-8 sm:h-9 items-center justify-center rounded-md px-3 sm:px-4 text-xs sm:text-sm font-medium shadow transition-colors bg-gray-900 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 slide-in-up"
        >
          Buy Now
        </Link>
      </div>
    </div>
  </div>
</section>

        {/* Feature Comparison Section */}
        {/* Feature Comparison Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 fade-in">
  <div className="container mx-auto px-4 sm:px-6 md:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 sm:mb-8">
      Feature Comparison
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base slide-in-up">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-4 text-left font-medium">Feature</th>
            <th className="p-4 text-center font-medium">Basic</th>
            <th className="p-4 text-center font-medium">Activator</th>
            <th className="p-4 text-center font-medium">Pro</th>
            <th className="p-4 text-center font-medium">Expert</th>
            <th className="p-4 text-center font-medium">Business</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-4 font-medium">Credits Included</td>
            <td className="p-4 text-center">10</td>
            <td className="p-4 text-center">25</td>
            <td className="p-4 text-center">50</td>
            <td className="p-4 text-center">150</td>
            <td className="p-4 text-center">400</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Daily Free Credits</td>
            <td className="p-4 text-center">5</td>
            <td className="p-4 text-center">5</td>
            <td className="p-4 text-center">5</td>
            <td className="p-4 text-center">5</td>
            <td className="p-4 text-center">5</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Basic Analysis</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Supported Formats (All*)</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Basic Support</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">In-depth Analysis</td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Multi-image Analysis</td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Batch Processing</td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Detailed Analysis</td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Enhanced Analysis</td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-center">✔</td>
            <td className="p-4 text-center">✔</td>
          </tr>
          <tr className="border-t">
            <td className="p-4 font-medium">Ideal For</td>
            <td className="p-4 text-center">Beginners</td>
            <td className="p-4 text-center">Advanced Users</td>
            <td className="p-4 text-center">Designers</td>
            <td className="p-4 text-center">Professionals</td>
            <td className="p-4 text-center">Agencies</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
      *Supported formats include HEIF, JPG, PNG, and WEBP.
    </p>
  </div>
</section>

        {/* FAQ Section */}
        <section className="w-full fade-in">
  <div className="container mx-auto">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[900px] text-base sm:text-lg md:text-xl lg:text-lg text-gray-500 dark:text-gray-400">
          Get answers to common questions about our services and pricing.
        </p>
      </div>
    </div>
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
      <div className="rounded-lg border border-fit bg-card p-6 slide-in-up">
        <h3 className="text-lg sm:text-xl font-bold text-left">Do unused credits expire?</h3>
        <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 text-left leading-relaxed">
          No, purchased credits never expire. You can use them whenever you need. However, daily free credits expire at the end of the day if not used.
        </p>
      </div>
      <div className="rounded-lg border border-fit bg-card p-6 slide-in-up">
        <h3 className="text-lg sm:text-xl font-bold text-left">What's included in the Activator Pack?</h3>
        <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 text-left leading-relaxed">
          The Activator Pack unlocks advanced tools, including multi-image analysis and batch processing. You can seamlessly upload HEIF, JPG, PNG, and WEBP images to enhance your creative projects.
        </p>
      </div>
      <div className="rounded-lg border border-fit bg-card p-6 slide-in-up">
        <h3 className="text-lg sm:text-xl font-bold text-left">Can I upgrade my plan?</h3>
        <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 text-left leading-relaxed">
          Yes, you can purchase additional credit packs at any time. Your existing credits will be added to your new ones.
        </p>
      </div>
      <div className="rounded-lg border border-fit bg-card p-6 slide-in-up">
        <h3 className="text-lg sm:text-xl font-bold text-left">What happens to my daily free credits?</h3>
        <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 text-left leading-relaxed">
          You receive 5 free credits every day. These credits expire at the end of the day if unused.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Get Started Link */}
        <div className="flex justify-center pb-14 fade-in">
          <Link
            href="/get-started"
            className="inline-flex h-10 items-center border justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
              Get Started Now
            </span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}