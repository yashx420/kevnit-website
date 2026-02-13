import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevnit Digital Solutions | Premium Digital Agency",
  description:
    "Top-tier IT & Digital Marketing Agency. Web Development, SEO, Branding, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { CustomCursor } from "@/components/ui/CustomCursor";
import { CursorMatrixEffect } from "@/components/ui/CursorMatrixEffect";
import { GrainNoise } from "@/components/ui/GrainNoise";

// ... (keep imports)

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BackgroundSpotlight } from "@/components/ui/BackgroundSpotlight";

// ... (keep imports)

import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.className} antialiased bg-[#0A0A0A] text-white selection:bg-[#6BC323] selection:text-black cursor-none`}
      >
        <SmoothScroll />
        <BackgroundSpotlight />
        <GrainNoise />
        <div className="relative z-50 bg-[#0A0A0A] mb-0 md:mb-[500px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] min-h-screen">
          <CursorMatrixEffect />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
