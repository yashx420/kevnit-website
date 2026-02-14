"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: any;
    deliverables: string[];
    color: string;
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full w-full rounded-3xl border border-white/10 bg-[#111] px-8 py-10 transition-colors hover:border-[#6BC323]/50 overflow-hidden no-cursor-effect"
      onMouseMove={onMouseMove}
    >
      {/* Hover Reveal Effect */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#6BC323]/10 to-blue-500/10 opacity-20"
          style={{
            maskImage: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
          }}
        />
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={style}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6BC323]/20 to-blue-500/20" />
      </motion.div>

      <div className="relative z-20 flex flex-col h-full">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-inner shadow-white/10 group-hover:bg-[#6BC323]/20 group-hover:shadow-[#6BC323]/20 transition-all duration-500">
          <service.icon className="h-8 w-8 text-[#6BC323] group-hover:scale-110 transition-transform duration-500" />
        </div>

        <h3 className="mb-4 text-3xl font-bold font-heading text-white group-hover:text-[#6BC323] transition-colors duration-300">
          {service.title}
        </h3>

        <p className="mb-8 text-gray-400 leading-relaxed">
          {service.description}
        </p>

        <ul className="mb-8 space-y-3 flex-grow">
          {service.deliverables.map((item, i) => (
            <li key={i} className="flex items-center text-sm text-gray-300">
              <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#6BC323]/10 text-[#6BC323]">
                <Check className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-white/5">
          <Link href="/contact" className="w-full">
            <Button
              variant="outline"
              className="w-full group/btn relative overflow-hidden bg-transparent hover:border-[#6BC323] hover:text-[#6BC323]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Project <ArrowUpRight size={16} />
              </span>
              <div className="absolute inset-0 -translate-x-[101%] bg-[#6BC323]/10 group-hover/btn:translate-x-0 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
