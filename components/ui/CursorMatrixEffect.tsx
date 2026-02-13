"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  char: string;
}

export function CursorMatrixEffect() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let count = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Check if hovering over a card or interactive element
      const target = e.target as HTMLElement;
      const isBlocked =
        target.closest(".no-cursor-effect") ||
        target.closest("button") ||
        target.closest("a");

      if (isBlocked) return;

      count++;
      // Limit spawn rate
      if (count % 3 !== 0) return;

      const chars = ["0", "1"];
      const char = chars[Math.floor(Math.random() * chars.length)];

      const newPoint: TrailPoint = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        char,
      };

      setTrail((prev) => [...prev.slice(-15), newPoint]); // Keep trail short
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Cleanup old points
    const interval = setInterval(() => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {trail.map((point) => (
          <motion.span
            key={point.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5, y: 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute text-[#6BC323] font-mono text-lg font-bold leading-none select-none"
            style={{
              left: point.x,
              top: point.y,
              textShadow: "0 0 5px #6BC323",
            }}
          >
            {point.char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
