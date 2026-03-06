"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
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
    portfolioUrl?: string;
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(250);
  const y = useMotionValue(250);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  function onMouseLeave() {
    x.set(250);
    y.set(250);
  }

  const maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative h-full w-full rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-none md:backdrop-blur-2xl overflow-hidden shadow-none md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-500`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Dynamic Base Gradients for Richer Background */}
      <div
        className="absolute inset-0 transition-opacity duration-700 opacity-20 group-hover:opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${service.color}50, transparent 40%),
                       radial-gradient(circle at 0% 100%, ${service.color}30, transparent 40%)`,
        }}
      />

      {/* Interactive Cursor Glow - Hidden on mobile */}
      <motion.div
        className="hidden md:block pointer-events-none absolute -inset-px rounded-[3.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${service.color}80, #ffffff80)`,
          }}
        />
      </motion.div>

      {/* Premium Typography Watermark (01, 02, etc) */}
      <div className="absolute -right-4 -top-10 pointer-events-none select-none overflow-hidden zoom-out-150">
        <span
          className="text-[200px] md:text-[250px] font-black font-heading leading-none"
          style={{
            WebkitTextStroke: `2px ${service.color}30`,
            color: "transparent",
            opacity: 0.5,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Oversized Icon Watermark */}
      <div className="absolute -right-10 -bottom-10 pointer-events-none select-none opacity-[0.03] blur-[2px] group-hover:opacity-10 group-hover:blur-md transition-all duration-700">
        <service.icon
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] -rotate-12"
          style={{ color: service.color }}
        />
      </div>

      {/* Content Container - Much tighter padding */}
      <div className="relative z-20 flex flex-col h-full p-6 md:p-8 lg:p-10">
        {/* Top Section: Icon & Title */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 mb-4 md:mb-6">
          <div
            className="flex-shrink-0 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-white/20 shadow-lg group-hover:scale-110 transition-all duration-500 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))`,
              boxShadow: `0 8px 32px 0 ${service.color}30, inset 0 1px 0 0 rgba(255,255,255,0.2)`,
            }}
          >
            {/* Icon inner glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${service.color}80, transparent 70%)`,
              }}
            />
            <service.icon
              className="h-6 w-6 md:h-8 md:w-8 relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              style={{ color: service.color }}
            />
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tight leading-none uppercase transition-opacity duration-500 group-hover:opacity-100">
            {service.title}
          </h3>
        </div>

        {/* Middle Section: Description & Tags */}
        <div className="flex-grow flex flex-col justify-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-300/90 mb-6 md:mb-8 leading-relaxed max-w-2xl font-medium">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-5">
            {service.deliverables.map((item, i) => (
              <span
                key={i}
                className="group/tag relative flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full border border-white/5 text-xs md:text-sm font-bold tracking-wider uppercase text-white/90 bg-white/[0.03] backdrop-blur-none md:backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] hover:border-white/20"
                style={{
                  boxShadow: `0 2px 6px -2px rgba(0,0,0,0.2), md:0 4px 12px -5px rgba(0,0,0,0.5)`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: service.color,
                    boxShadow: `0 0 8px ${service.color}`,
                  }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section: Actions */}
        <div className="pt-3 md:pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 mt-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto group/btn relative overflow-hidden text-black rounded-full font-bold px-6 py-4 md:py-6 text-sm md:text-base hover:-translate-y-1 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                boxShadow: `0 10px 30px -10px ${service.color}, inset 0 2px 0 0 rgba(255,255,255,0.4), inset 0 -2px 0 0 rgba(0,0,0,0.1)`,
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
                Get Your Quote{" "}
                <ArrowUpRight
                  size={20}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </span>
            </Button>
          </Link>
          <Link
            href={service.portfolioUrl || "/portfolio"}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border border-white/10 hover:border-white/30 text-white hover:text-white rounded-full bg-white/[0.02] hover:bg-white/[0.08] backdrop-blur-none md:backdrop-blur-md px-6 py-4 md:py-6 text-sm md:text-base transition-all duration-300 shadow-none md:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
