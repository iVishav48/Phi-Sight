
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
    { href: "/image-analysis", label: "Image Analysis" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-lg font-medium text-gray-300 hover:text-white transition-colors",
              pathname === route.href && "text-white font-semibold"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-8 w-8 text-white" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-8 right-8">
            <X className="h-8 w-8 text-white" />
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-2xl font-medium text-gray-300 hover:text-white transition-colors",
                  pathname === route.href && "text-white font-semibold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
