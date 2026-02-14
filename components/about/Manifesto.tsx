"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "We don't follow trends. We set them ablaze. Normal is dead. Chaos is the new order.";

export function Manifesto() {
  const words = text.split(" ");

  return (
    <div className="py-48 md:py-60 bg-black min-h-screen flex flex-col items-center justify-start relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="flex flex-wrap gap-x-4 gap-y-2 text-6xl md:text-9xl font-bold leading-tight relative">
          {words.map((word, i) => (
            <Word key={i}>{word}</Word>
          ))}
        </p>
      </div>
    </div>
  );
}

const Word = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.6"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.span
      ref={ref}
      style={{ opacity }}
      className="text-white inline-block mr-[0.2em] relative z-20"
    >
      {children}
    </motion.span>
  );
};
