"use client";

import { motion } from "framer-motion";

const text =
  "We don't follow trends. We set them ablaze. Normal is dead. Chaos is the new order.";

export function Manifesto() {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0.2 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="py-48 md:py-60 bg-black min-h-screen flex flex-col items-center justify-start relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
          className="flex flex-wrap gap-x-4 gap-y-2 text-5xl md:text-6xl font-bold leading-tight relative"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="text-white inline-block mr-[0.2em] relative z-20"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
