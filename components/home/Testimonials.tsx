"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechFlow",
    text: "Kevnit Digital Solutions transformed our online presence. Their team delivered a stunning website that increased our leads by 200%. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder, StartUp Inc",
    text: "Professional, creative, and reliable. The mobile app they built for us is flawless and has received amazing feedback from our users.",
  },
  {
    name: "Emily Davis",
    role: "COO, GreenEnergy",
    text: "The SEO results speak for themselves. We are now ranking on the first page for all our key keywords. Truly exceptional service.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
  const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-black relative">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Client Stories</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-white/5 pointer-events-none">
            <Quote size={120} />
          </div>

          <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-[#00E676] text-sm">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prev} className="rounded-full w-12 h-12 p-0">
              <ChevronLeft size={20} />
            </Button>
            <Button variant="outline" size="sm" onClick={next} className="rounded-full w-12 h-12 p-0">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
