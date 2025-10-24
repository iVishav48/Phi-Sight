"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";

export function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add effect to control body overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/services",
      label: "Services",
      active: pathname === "/services",
    },
    {
      href: "/pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
    {
      href: "/get-started",
      label: "Get Started",
      active: pathname === "/get-started",
    },
  ];

  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      {!isMenuOpen && (
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            className="mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      )}
      {isMenuOpen && (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Close Menu"
          className="absolute right-4 top-4 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close Menu</span>
        </Button>
      )}

      {/* Navigation Menu */}
      <div
        className={cn(
          "fixed lg:static left-0 right-0 z-40 flex flex-col p-4 lg:ml-auto shadow-lg lg:flex lg:flex-row lg:items-center lg:gap-6 lg:p-0 lg:shadow-none bg-[#0a0a0a]",
          isMenuOpen
            ? "top-[64px] h-[calc(100vh-64px)]" // Adjust 64px to match your header height
            : "-top-[100vh] lg:top-0",
          "transition-all duration-300 ease-in-out"
        )}
      >
        {/* Close Button for Mobile */}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 pt-8 lg:pt-0">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium text-center transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}