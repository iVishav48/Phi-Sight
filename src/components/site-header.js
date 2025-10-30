
import Link from "next/link";
import { MainNav } from "../components/main-nav";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo-white.svg" width={40} height={40} alt="Phi Sight Logo" />
          <span className="text-2xl font-bold text-white">Phi Sight</span>
        </Link>
        <div className="flex items-center">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
