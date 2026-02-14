"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Awards Won", value: 25, suffix: "" },
  { label: "Happy Clients", value: 100, suffix: "%" },
];

export function StatsCounter() {
  return (
    <div className="py-20 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function StatItem({ label, value, suffix, delay }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 3,
  });
  const display = useRef(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (display.current) {
        // @ts-ignore
        display.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div ref={ref} className="text-center group">
      <div className="mb-4 relative inline-block">
        <span
          ref={display}
          className="text-5xl md:text-7xl font-bold font-heading text-white group-hover:text-[#6BC323] transition-colors duration-500"
        >
          0
        </span>
        <div className="absolute -inset-4 bg-[#6BC323]/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      </div>
      <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
        {label}
      </p>
    </div>
  );
}
