"use client";

import { Navbar } from "@/components/layout/Navbar";
import { StickyServiceStack } from "@/components/services/StickyServiceStack";
import { Container } from "@/components/ui/Container";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServicesPage() {
  const { scrollY } = useScroll();

  const titleScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6BC323]/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

        <Container className="text-center relative z-10 px-4">
          <motion.div style={{ scale: titleScale, opacity: titleOpacity }}>
            <h1 className="text-6xl md:text-[10rem] font-bold font-heading mb-6 tracking-tighter leading-none">
              OUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                SERVICES
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mt-20 md:mt-40"
          >
            Digital craftsmanship for the bold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-sm uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          </motion.div>
        </Container>
      </section>

      {/* Stacked Services Showcase */}
      <section className="relative pb-20 md:pb-40">
        <div className="w-full flex justify-center">
          <StickyServiceStack />
        </div>
      </section>

      {/* Footer Call to Action Area */}
      <section className="py-20 md:py-0 md:h-[80vh] bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#6BC323_0%,transparent_70%)] opacity-10 blur-[100px]" />
        <Container className="text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
            Ready to <span className="text-[#6BC323]">Scale?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's build the future of your brand.
          </p>
        </Container>
      </section>
    </main>
  );
}
