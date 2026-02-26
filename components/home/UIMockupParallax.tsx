"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const webImages = [
  "/UIs/web1.png",
  "/UIs/web2.png",
  "/UIs/web3.png",
  "/UIs/web4.png",
];
const appImages = ["/UIs/app1.png", "/UIs/app2.png", "/UIs/app3.png"];

// Helper: creates a centered, absolutely-positioned image card
function MockupCard({
  src,
  alt,
  w,
  h,
  radius,
  borderWidth,
  borderColor,
  z,
  style,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  radius: string;
  borderWidth: number;
  borderColor: string;
  z: number;
  style: Record<string, unknown>;
}) {
  return (
    <motion.div
      className="absolute overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      style={{
        width: w,
        height: h,
        left: "50%",
        top: "50%",
        marginLeft: -w / 2,
        marginTop: -h / 2,
        borderRadius: radius,
        border: `${borderWidth}px solid ${borderColor}`,
        zIndex: z,
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </motion.div>
  );
}

export function UIMockupParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Title
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.78, 0.88],
    [0, 1, 1, 0],
  );
  const titleY = useTransform(scrollYProgress, [0, 0.06], [40, 0]);

  // === RESTING POSITIONS (spread around viewport, no overlap) ===
  // All offsets are FROM CENTER of viewport.
  // Web images: ~580x360, App images: ~260x500

  // Web 1 — top-left area         resting: x=-380, y=-100
  const w1X = useTransform(
    scrollYProgress,
    [0.05, 0.16, 0.68, 0.88],
    [-1100, -380, -380, -1100],
  );
  const w1Y = useTransform(
    scrollYProgress,
    [0.05, 0.16, 0.68, 0.88],
    [500, -100, -100, 500],
  );
  const w1R = useTransform(
    scrollYProgress,
    [0.05, 0.16, 0.68, 0.88],
    [-14, -3, -3, -14],
  );
  const w1O = useTransform(
    scrollYProgress,
    [0.05, 0.13, 0.72, 0.88],
    [0, 1, 1, 0],
  );

  // App 1 — far right, high       resting: x=480, y=-140
  const a1X = useTransform(
    scrollYProgress,
    [0.1, 0.22, 0.68, 0.88],
    [900, 480, 480, 900],
  );
  const a1Y = useTransform(
    scrollYProgress,
    [0.1, 0.22, 0.68, 0.88],
    [-600, -140, -140, -600],
  );
  const a1R = useTransform(
    scrollYProgress,
    [0.1, 0.22, 0.68, 0.88],
    [20, 6, 6, 20],
  );
  const a1O = useTransform(
    scrollYProgress,
    [0.1, 0.18, 0.72, 0.88],
    [0, 1, 1, 0],
  );

  // Web 2 — right, mid             resting: x=340, y=100
  const w2X = useTransform(
    scrollYProgress,
    [0.15, 0.28, 0.68, 0.88],
    [1100, 340, 340, 1100],
  );
  const w2Y = useTransform(
    scrollYProgress,
    [0.15, 0.28, 0.68, 0.88],
    [500, 100, 100, 500],
  );
  const w2R = useTransform(
    scrollYProgress,
    [0.15, 0.28, 0.68, 0.88],
    [14, 3, 3, 14],
  );
  const w2O = useTransform(
    scrollYProgress,
    [0.15, 0.24, 0.72, 0.88],
    [0, 1, 1, 0],
  );

  // App 2 — far left, low          resting: x=-520, y=200
  const a2X = useTransform(
    scrollYProgress,
    [0.2, 0.34, 0.68, 0.88],
    [-900, -520, -520, -900],
  );
  const a2Y = useTransform(
    scrollYProgress,
    [0.2, 0.34, 0.68, 0.88],
    [700, 200, 200, 700],
  );
  const a2R = useTransform(
    scrollYProgress,
    [0.2, 0.34, 0.68, 0.88],
    [-16, -6, -6, -16],
  );
  const a2O = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.74, 0.9],
    [0, 1, 1, 0],
  );

  // Web 3 — bottom-center-left     resting: x=-200, y=310
  const w3X = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.68, 0.88],
    [200, -200, -200, 200],
  );
  const w3Y = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.68, 0.88],
    [800, 310, 310, 800],
  );
  const w3R = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.68, 0.88],
    [10, -4, -4, 10],
  );
  const w3O = useTransform(
    scrollYProgress,
    [0.25, 0.36, 0.76, 0.9],
    [0, 1, 1, 0],
  );

  // App 3 — center                  resting: x=0, y=50
  const a3X = 0;
  const a3Y = useTransform(
    scrollYProgress,
    [0.3, 0.46, 0.68, 0.88],
    [-700, 50, 50, -700],
  );
  const a3R = useTransform(
    scrollYProgress,
    [0.3, 0.46, 0.68, 0.88],
    [12, 1, 1, 12],
  );
  const a3O = useTransform(
    scrollYProgress,
    [0.3, 0.42, 0.78, 0.92],
    [0, 1, 1, 0],
  );

  // Web 4 — bottom-right            resting: x=300, y=340
  const w4X = useTransform(
    scrollYProgress,
    [0.35, 0.52, 0.68, 0.88],
    [1000, 300, 300, 1000],
  );
  const w4Y = useTransform(
    scrollYProgress,
    [0.35, 0.52, 0.68, 0.88],
    [800, 340, 340, 800],
  );
  const w4R = useTransform(
    scrollYProgress,
    [0.35, 0.52, 0.68, 0.88],
    [18, 5, 5, 18],
  );
  const w4O = useTransform(
    scrollYProgress,
    [0.35, 0.48, 0.78, 0.92],
    [0, 1, 1, 0],
  );

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden [perspective:1800px] pointer-events-none">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6BC323]/5 blur-[150px] rounded-full" />
        </div>

        {/* ---- TEXT SECTION ---- */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-[60] pointer-events-auto px-4 pt-8 md:pt-10 pb-4 text-center"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
            Built by{" "}
            <span className="text-[#6BC323] font-semibold">Kevnit</span>
          </span>
          <Link href="/portfolio" className="inline-block ml-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-7 px-3"
            >
              View Portfolio <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
        </motion.div>

        {/* ---- IMAGES ---- */}
        {/* All anchored to viewport center via left:50%/top:50% + negative margins */}

        <MockupCard
          src={webImages[0]}
          alt="Website UI 1"
          w={580}
          h={360}
          radius="1rem"
          borderWidth={1}
          borderColor="rgba(255,255,255,0.1)"
          z={35}
          style={{ x: w1X, y: w1Y, rotate: w1R, opacity: w1O }}
        />

        <MockupCard
          src={appImages[0]}
          alt="App UI 1"
          w={260}
          h={500}
          radius="2.5rem"
          borderWidth={7}
          borderColor="#1f2937"
          z={10}
          style={{ x: a1X, y: a1Y, rotate: a1R, opacity: a1O }}
        />

        <MockupCard
          src={webImages[1]}
          alt="Website UI 2"
          w={560}
          h={350}
          radius="1rem"
          borderWidth={1}
          borderColor="rgba(255,255,255,0.1)"
          z={40}
          style={{ x: w2X, y: w2Y, rotate: w2R, opacity: w2O }}
        />

        <MockupCard
          src={appImages[1]}
          alt="App UI 2"
          w={250}
          h={480}
          radius="2.5rem"
          borderWidth={7}
          borderColor="#1f2937"
          z={12}
          style={{ x: a2X, y: a2Y, rotate: a2R, opacity: a2O }}
        />

        <MockupCard
          src={webImages[2]}
          alt="Website UI 3"
          w={540}
          h={340}
          radius="1rem"
          borderWidth={1}
          borderColor="rgba(255,255,255,0.1)"
          z={30}
          style={{ x: w3X, y: w3Y, rotate: w3R, opacity: w3O }}
        />

        <MockupCard
          src={appImages[2]}
          alt="App UI 3"
          w={260}
          h={500}
          radius="2.5rem"
          borderWidth={7}
          borderColor="#1f2937"
          z={55}
          style={{ x: a3X, y: a3Y, rotate: a3R, opacity: a3O }}
        />

        <MockupCard
          src={webImages[3]}
          alt="Website UI 4"
          w={520}
          h={330}
          radius="1rem"
          borderWidth={1}
          borderColor="rgba(255,255,255,0.1)"
          z={45}
          style={{ x: w4X, y: w4Y, rotate: w4R, opacity: w4O }}
        />
      </div>
    </section>
  );
}
