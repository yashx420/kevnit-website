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

      {/* Stacked Services Showcase */}
      <section className="relative w-full">
        <div className="w-full flex justify-center">
          <StickyServiceStack />
        </div>
      </section>

      {/* Footer Call to Action Area */}
      <section className="py-10 md:py-0 md:h-[80vh] bg-black flex items-center justify-center relative overflow-hidden">
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
