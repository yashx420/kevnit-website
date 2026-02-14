"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "We don't follow trends. We set them ablaze. Normal is dead. Chaos is the new order.";

export function Manifesto() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "center center"],
  });

  const words = text.split(" ");

  return (
    <div className="py-48 md:py-60 bg-black min-h-screen flex flex-col items-center justify-start relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p
          ref={container}
          className="flex flex-wrap gap-x-4 gap-y-2 text-5xl md:text-7xl font-bold leading-tight relative text-center justify-center"
        >
          {words.map((word, i) => {
            const step = 0.2 / words.length;
            const start = i * step;
            const end = start + step;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["#808080", "#ffffff"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.2em] relative z-20"
    >
      {children}
    </motion.span>
  );
};
