
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/calculate", label: "Golden Ratio Calculator" },
    { href: "/image-analysis", label: "Image Analysis" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
  ];

  const cta = { href: "/image-analysis", label: "Launch Analyzer" };

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "relative text-lg font-medium text-slate-300 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-yellow-200/90 after:via-yellow-400/70 after:to-yellow-200/90 after:transition-transform after:duration-300",
              pathname === route.href && "text-white after:scale-x-100"
            )}
          >
            {route.label}
          </Link>
        ))}
        <Link
          href={cta.href}
          className="inline-flex items-center rounded-full border border-yellow-300/40 bg-yellow-300/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-yellow-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300/20 hover:text-yellow-100 hover:shadow-[0_12px_25px_rgba(246,200,95,0.25)]"
        >
          {cta.label}
        </Link>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-8 w-8 text-yellow-200" />
        </button>
      </div>

        <div className={`fixed w-full left-0 ${isMenuOpen ? "top-0" : "top-[-100vh]"} mobile-navbar pb-4 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-3xl`}>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-6 right-8">
            <X className="h-8 w-8 text-yellow-200" />
          </button>
          <nav className="flex flex-col items-center mt-8 space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-xl font-medium text-slate-200 transition-colors hover:text-white",
                  pathname === route.href && "text-yellow-400"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="mt-4 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-2xl shadow-yellow-500/25"
              onClick={() => setIsMenuOpen(false)}
            >
              {cta.label}
            </Link>
          </nav>
        </div>
    </>
  );
}
