import Link from "next/link";

import { MainNav } from "../components/main-nav";
import { ThemeToggle } from "../components/theme-toggle";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-12 md:px-12">
      <div className="flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" width={40} height={40} alt="Phi Sight Logo" />
          <span className="text-xl font-bold">Phi Sight</span>
        </Link>
        <div className="flex flex-1 items-center justify-end ">
          <MainNav />
        </div>
      </div>
    </header>
  );
}