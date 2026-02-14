"use client";

import { Navbar } from "@/components/layout/Navbar";
import { ServicesScroll } from "@/components/services/ServicesScroll";
import { Container } from "@/components/ui/Container";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServicesPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6BC323]/10 blur-[150px] pointer-events-none" />

        <Container className="text-center relative z-10">
          <motion.h1
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="text-6xl md:text-9xl font-bold font-heading mb-6 tracking-tighter"
          >
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC323] to-emerald-500">
              SERVICES
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          >
            Scroll down to explore how we transform businesses through digital
            innovation.
          </motion.p>
        </Container>
      </section>

      {/* Horizontal Scroll Showcase */}
      <ServicesScroll />

      {/* Footer Call to Action Area */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#6BC323_0%,transparent_50%)] opacity-5 blur-[100px]" />
        <Container className="text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to <span className="text-[#6BC323]">Scale?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Our team is ready to turn your vision into a digital reality. Let's
            build something extraordinary together.
          </p>
        </Container>
      </section>
    </main>
  );
}
