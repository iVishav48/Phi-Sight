
import Link from "next/link";
import { MainNav } from "../components/main-nav";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center space-x-3">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 soft-glow">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/40 via-yellow-400/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"></span>
            <Image src="/logo.png" width={30} height={30} alt="InSight Logo" className="relative z-10 opacity-90" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[1.75rem] font-semibold uppercase tracking-wide gold-gradient-text drop-shadow">InSight</span>
            <span className="text-xs font-medium tracking-[0.28em] text-slate-400">Golden Ratio Studio</span>
          </span>
        </Link>
        <div className="flex items-center">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
