import React from "react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phi Sight - Golden Ratio Image Analysis",
  description:
    "Analyze your images for golden ratio composition and get recommendations for improvement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="5LAzI6TtG6B7At2QTexTSLG1CQQd8X4DNRbCj9KA62w"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-7752985411870799"
        ></meta>
        <meta name='keywords' content="Phi Sight, phisight, golden ratio, enhance image" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7752985411870799"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}