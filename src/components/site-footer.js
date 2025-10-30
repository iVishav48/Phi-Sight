import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo-white.svg" width={40} height={40} alt="Phi Sight Logo" />
              <span className="text-2xl font-bold">Phi Sight</span>
            </Link>
            <p className="text-gray-400">
              Analyze your images with the power of the golden ratio.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/image-analysis" className="text-gray-400 hover:text-white">Image Analysis</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Powered by</h3>
            <a href="https://www.enthyuzm.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/logo-white.svg" width={150} height={30} alt="Enthyuzm Logo" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Phi Sight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}