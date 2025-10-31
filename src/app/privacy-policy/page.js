export default function PolicyPage() {
  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-black via-[#1a1205] to-black relative overflow-hidden">
      {/* Golden Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,200,95,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(246,200,95,0.05),transparent_70%)]" />

      {/* Main Content */}
      <main className="relative max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-amber-700/50 bg-amber-900/20 text-amber-500 text-xs font-semibold tracking-wider uppercase">
              Legal Document
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Privacy <span className="text-amber-500">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At InSight Golden Ratio Studio, we are committed to protecting
              your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our Golden
              Ratio Calculator and Image Analysis services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Images You Upload
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you use our Image Analysis feature, you may upload images for
              golden ratio analysis. These images are processed temporarily and
              are not stored on our servers unless you explicitly save them to
              your account.
            </p>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Usage Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We automatically collect certain information about your device and
              how you interact with our services, including browser type, IP
              address, pages visited, and time spent on our platform.
            </p>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Account Information
            </h3>
            <p className="text-gray-300 leading-relaxed">
              If you create an account, we collect your email address, username,
              and any other information you choose to provide during
              registration.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">
                    Provide Services:
                  </span>{" "}
                  Process your images and calculations to deliver accurate golden
                  ratio analysis and design insights.
                </p>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">
                    Improve Experience:
                  </span>{" "}
                  Analyze usage patterns to enhance our AI algorithms and user
                  interface.
                </p>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">
                    Communication:
                  </span>{" "}
                  Send you updates, security alerts, and support messages related
                  to your account.
                </p>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Security:</span>{" "}
                  Detect and prevent fraud, abuse, and technical issues.
                </p>
              </div>
            </div>
          </section>

          {/* AI Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Image Processing & AI Analysis
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our AI-powered image analysis processes your uploads in real-time.
              Images are analyzed for compositional balance, golden ratio
              alignment, and design principles. All processing happens securely,
              and images are automatically deleted from our temporary storage
              within 24 hours unless saved to your account.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We do not use your uploaded images to train our AI models without
              your explicit consent.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your data
              only in the following circumstances:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  With service providers who assist in operating our platform
                  (cloud hosting, analytics)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>When required by law or to protect our rights</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>In connection with a business transfer or merger</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>With your explicit consent</span>
              </li>
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your
              information, including encryption in transit and at rest, secure
              authentication protocols, and regular security audits. However, no
              method of transmission over the internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  Access & Export
                </h4>
                <p className="text-sm text-gray-400">
                  Request a copy of your personal data
                </p>
              </div>
              <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Correction</h4>
                <p className="text-sm text-gray-400">
                  Update inaccurate information
                </p>
              </div>
              <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Deletion</h4>
                <p className="text-sm text-gray-400">
                  Request deletion of your data
                </p>
              </div>
              <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Opt-out</h4>
                <p className="text-sm text-gray-400">
                  Unsubscribe from communications
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage patterns, and remember your preferences.
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for users under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe we have inadvertently collected such information, please
              contact us immediately.
            </p>
          </section>

          {/* Policy Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. We will notify you of any
              material changes by posting the new policy on this page and
              updating the "Last updated" date.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-3">
                <span className="text-amber-500">✉</span>
                <span>privacy@in-sight.vercel.app</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-amber-500">🌐</span>
                <span>https://in-sight.vercel.app</span>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-amber-900/30 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} InSight Golden Ratio Studio. All
            rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
