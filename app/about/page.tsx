"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/home/CTA";
import { Manifesto } from "@/components/about/Manifesto";
import { StatsCounter } from "@/components/about/StatsCounter";
import { ValuesList } from "@/components/about/ValuesList";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main
      ref={container}
      className="bg-black text-white selection:bg-[#6BC323] selection:text-black"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6BC323]/10 blur-[150px] rounded-full pointer-events-none" />

        <Container className="text-center relative z-10">
          <motion.div style={{ scale: heroScale, opacity: heroOpacity }}>
            <h1 className="text-[12vw] font-bold font-heading leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              WE ARE
              <br />
              <span className="text-[#6BC323]">KEVNIT</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto tracking-wide uppercase">
              Architects of the Digital Future
            </p>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-sm uppercase tracking-widest">
            Scroll to Discover
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* The Manifesto (Scroll Reveal) */}
      <Manifesto />

      {/* Stats Row */}
      <StatsCounter />

      {/* Core Values (Interactive) */}
      <ValuesList />

      {/* Team/Culture Marquee */}
      <section className="py-20 bg-black overflow-hidden border-t border-white/5">
        <div className="flex whitespace-nowrap">
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </section>

      <CTA />
    </main>
  );
}

const MarqueeItem = () => (
  <motion.div
    animate={{ x: "-100%" }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="flex gap-20 pr-20"
  >
    {["CULTURE", "PASSION", "CODE", "DESIGN", "FUTURE", "KEVNIT"].map(
      (text, i) => (
        <span
          key={i}
          className="text-[150px] font-bold font-heading text-transparent stroke-text hover:text-[#6BC323] transition-all duration-300 cursor-default"
        >
          {text}
        </span>
      ),
    )}
  </motion.div>
);
