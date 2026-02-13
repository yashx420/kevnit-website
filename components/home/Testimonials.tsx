"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    name: "Max Sims",
    role: "Satisfied Client",
    text: "I recently had the pleasure of working with Kevnit for the development of our new website, and I must say that the entire experience exceeded my expectations. From the initial consultation to the final delivery, their team demonstrated a level of professionalism, expertise, and commitment that is truly commendable. The final website they delivered is nothing short of outstanding.",
  },
  {
    name: "Anusha Kumatgi",
    role: "Kevnit Technologies Partner",
    text: "Partnering with Kevnit Technologies has been a game-changer for our business. Their deep understanding of our industry coupled with their technical prowess has propelled our projects to new heights. The team's dedication to quality, timely delivery, and effective project management is commendable.",
  },
  {
    name: "Global Eximm",
    role: "Corporate Client",
    text: "Our experience with Kevnit was really excellent. We have received support and proper responses on time. We really like their time management and commitment. We sincerely thank them and wish them best of luck for future.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (curr) => (curr - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="py-24 bg-black relative">
      <Container>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6"
          >
            Client Stories
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-white/5 pointer-events-none"
          >
            <Quote size={120} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 relative z-10 min-h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
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
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[#6BC323] text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={prev}
              className="rounded-full w-12 h-12 p-0 hover:bg-[#6BC323] hover:text-black hover:border-transparent transition-all"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={next}
              className="rounded-full w-12 h-12 p-0 hover:bg-[#6BC323] hover:text-black hover:border-transparent transition-all"
            >
              <ChevronRight size={20} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
