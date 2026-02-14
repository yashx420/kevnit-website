"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "We don't follow trends. We set them ablaze. Normal is dead. Chaos is the new order.";

export function Manifesto() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div className="py-48 md:py-60 bg-black min-h-screen flex flex-col items-center justify-start">
      <div ref={container} className="max-w-6xl mx-auto px-6">
        <p className="text-5xl md:text-7xl font-bold leading-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                isLast={i === words.length - 1}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const Word = ({ children, range, progress, isLast }: any) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`text-white inline-block ${isLast ? "mr-0" : "mr-[0.25em]"}`}
    >
      {children}
    </motion.span>
  );
};
