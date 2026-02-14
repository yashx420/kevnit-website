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

    const spawnTrail = (x: number, y: number, target: HTMLElement) => {
      const isBlocked =
        target.closest(".no-cursor-effect") ||
        target.closest("button") ||
        target.closest("a");

      if (isBlocked) return;

      count++;
      if (count % 3 !== 0) return;

      const chars = ["0", "1"];
      const char = chars[Math.floor(Math.random() * chars.length)];

      const newPoint: TrailPoint = {
        id: Date.now() + Math.random(),
        x,
        y,
        char,
      };

      setTrail((prev) => [...prev.slice(-15), newPoint]);
    };

    const handleMouseMove = (e: MouseEvent) => {
      spawnTrail(e.clientX, e.clientY, e.target as HTMLElement);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      // Use document.elementFromPoint to get the actual element under finger if needed,
      // but e.target is okay for approximation of "start".
      // Actually, for a visual effect, we just want coordinates.
      // Ignoring blocking on touch might be better because fingers cover buttons anyway?
      // Let's keep blocking logic for consistency.
      spawnTrail(touch.clientX, touch.clientY, e.target as HTMLElement);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
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
