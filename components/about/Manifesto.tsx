"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "We believe in the UNTAMED power of digital chaos. We don't just build websites; we craft digital experiences that demand attention. Normal is boring. We are here to break the mold.";

export function Manifesto() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center center"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={container}
      className="py-48 md:py-60 bg-black min-h-screen flex flex-col items-center justify-start"
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="flex flex-wrap gap-x-4 gap-y-2 text-4xl md:text-6xl font-bold leading-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const Word = ({ children, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="text-white inline-block mr-[0.2em]"
    >
      {children}
    </motion.span>
  );
};
