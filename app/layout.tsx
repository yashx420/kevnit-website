import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevnit Digital Solutions | Premium Digital Agency",
  description:
    "Top-tier IT & Digital Marketing Agency. Web Development, SEO, Branding, and more.",
};

import { CustomCursor } from "@/components/ui/CustomCursor";
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
        className={`${outfit.className} antialiased bg-[#0A0A0A] text-white selection:bg-[#00E676] selection:text-black cursor-none`}
      >
        <SmoothScroll />
        <CustomCursor />
        <BackgroundSpotlight />
        <GrainNoise />
        <div className="relative z-10 bg-black mb-[600px] shadow-2xl min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
