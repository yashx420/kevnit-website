"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

function Counter({ value, label, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 font-heading">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="text-[#6BC323] font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>
  );
}

const stats = [
  { value: 150, label: "Projects Delivered", suffix: "+" },
  { value: 98, label: "Happy Clients", suffix: "%" },
  { value: 10, label: "Years Experience", suffix: "+" },
  { value: 25, label: "Team Members", suffix: "" },
];

export function Stats() {
  return (
    <section className="py-20 bg-[#050505] border-y border-white/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
