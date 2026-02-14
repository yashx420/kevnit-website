"use client";

import { motion } from "framer-motion";

const text =
  "We don't follow trends. We set them ablaze. Normal is dead. Chaos is the new order.";

export function Manifesto() {
  const words = text.split(" ");

  return (
    <div className="py-48 md:py-60 bg-black min-h-screen flex flex-col items-center justify-start relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.05 }}
          className="flex flex-wrap gap-x-4 gap-y-2 text-5xl md:text-6xl font-bold leading-tight relative"
        >
          {words.map((word, i) => (
            <Word key={i}>{word}</Word>
          ))}
        </motion.p>
      </div>
    </div>
  );
}

const Word = ({ children }: { children: string }) => {
  const variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.span
      variants={variants}
      className="text-white inline-block mr-[0.2em] relative z-20"
    >
      {children}
    </motion.span>
  );
};
