export default function TCpage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e0e0e] via-[#1a1207] to-[#000000] bg-[radial-gradient(circle_at_top,rgba(246,200,95,0.08),transparent_55%)] text-gray-100">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-amber-700/50 bg-amber-900/20 text-amber-500 text-xs font-semibold tracking-wider uppercase">
              Legal Agreement
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Terms <span className="text-amber-500">& Conditions</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to InSight Golden Ratio Studio. By accessing or using our
              Golden Ratio Calculator and Image Analysis services, you agree to
              be bound by these Terms and Conditions. If you do not agree with
              any part of these terms, you may not access or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These terms apply to all visitors, users, and others who access or
              use the service.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Services Description
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              InSight provides the following services:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">
                    Golden Ratio Calculator:
                  </span>{" "}
                  Tools to calculate and apply golden ratio principles to your
                  designs and measurements.
                </p>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">
                    AI Image Analysis:
                  </span>{" "}
                  Advanced image analysis using artificial intelligence to
                  evaluate compositional balance and golden ratio alignment.
                </p>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Design Tools:</span>{" "}
                  Professional tools for designers to optimize layouts, create
                  storyboards, and enhance visual campaigns.
                </p>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Account Creation
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To access certain features, you may be required to create an
              account. You are responsible for maintaining the confidentiality
              of your account credentials and for all activities that occur
              under your account.
            </p>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Account Responsibilities
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Provide accurate and complete information during registration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Maintain the security of your password and account</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Notify us immediately of any unauthorized access or security breach</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Accept responsibility for all activities under your account</span>
              </li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Acceptable Use Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to use our services for any unlawful or prohibited
              purpose. Prohibited activities include but are not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">
                  Prohibited Content
                </h4>
                <p className="text-sm text-gray-400">
                  Uploading illegal, harmful, or offensive images
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">System Abuse</h4>
                <p className="text-sm text-gray-400">
                  Attempting to breach security or overload systems
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">
                  Unauthorized Access
                </h4>
                <p className="text-sm text-gray-400">
                  Accessing others' accounts or data
                </p>
              </div>
              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">
                  Commercial Scraping
                </h4>
                <p className="text-sm text-gray-400">
                  Automated data extraction without permission
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Our Content
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The service and its original content, features, and functionality
              are owned by InSight Golden Ratio Studio and are protected by
              international copyright, trademark, patent, trade secret, and
              other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Your Content
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You retain all rights to the images and content you upload to our
              service. By uploading content, you grant us a limited license to
              process, analyze, and display your content solely for the purpose
              of providing our services to you.
            </p>

            <h3 className="text-xl font-semibold text-amber-500 mb-3 mt-6">
              Trademarks
            </h3>
            <p className="text-gray-300 leading-relaxed">
              InSight, the InSight logo, and other marks are trademarks of
              InSight Golden Ratio Studio. You may not use these marks without
              our prior written permission.
            </p>
          </section>

          {/* Payment and Subscriptions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Payment and Subscriptions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some features of our service may be offered on a subscription or
              one-time payment basis. By subscribing or making a payment, you
              agree to the following:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Subscription fees are billed in advance on a recurring basis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>All fees are non-refundable unless required by law</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>We reserve the right to modify pricing with 30 days notice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>You may cancel your subscription at any time through your account settings</span>
              </li>
            </ul>
          </section>

          {/* AI Analysis Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              AI Analysis Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our AI-powered image analysis is provided as a tool to assist with
              design decisions. While we strive for accuracy, the analysis
              results are suggestions and should not be considered as definitive
              professional advice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Users are responsible for their own design decisions and should
              use professional judgment when applying our analysis results.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the maximum extent permitted by law, InSight Golden Ratio
              Studio shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to:
            </p>
            <div className="space-y-3 pl-4">
              <p className="text-gray-300 leading-relaxed">
                Loss of profits, data, use, goodwill, or other intangible losses
                resulting from your access to or use of our services; any
                unauthorized access to or use of our servers or any personal
                information stored therein; any interruption or cessation of
                transmission to or from our service; any bugs, viruses, or
                malware that may be transmitted through our service by any third
                party.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may terminate or suspend your account and access to the service
              immediately, without prior notice or liability, for any reason,
              including if you breach these Terms and Conditions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Upon termination, your right to use the service will cease
              immediately. If you wish to terminate your account, you may simply
              discontinue using the service or contact us to delete your
              account.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Disclaimer of Warranties
            </h2>
            <div className="bg-amber-900/10 border border-amber-700/50 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                The service is provided on an "AS IS" and "AS AVAILABLE" basis
                without warranties of any kind, whether express or implied,
                including but not limited to warranties of merchantability,
                fitness for a particular purpose, non-infringement, or course of
                performance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We do not warrant that the service will be uninterrupted, secure,
                or error-free, or that any defects will be corrected.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to its conflict of law provisions.
              Any disputes arising from these terms will be resolved through
              binding arbitration or in courts of competent jurisdiction.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time
              at our sole discretion. We will provide notice of any material
              changes by:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Posting the new Terms on this page with an updated "Last
                  updated" date
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Sending an email notification to registered users</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>Displaying a prominent notice on our service</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Your continued use of the service after any such changes
              constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-3">
                <span className="text-amber-500">✉</span>
                <span>legal@in-sight.vercel.app</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-amber-500">🌐</span>
                <span>https://in-sight.vercel.app</span>
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-amber-900/5 border border-amber-700/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-3">
              Acknowledgment
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By using InSight Golden Ratio Studio, you acknowledge that you
              have read, understood, and agree to be bound by these Terms and
              Conditions.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-amber-900/30 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} InSight Golden Ratio Studio. All rights
            reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
