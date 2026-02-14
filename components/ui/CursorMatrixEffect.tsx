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
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  // requestRef and previousTimeRef are no longer used with the new logic, but keeping them as they were not explicitly removed.
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const addPoint = (x: number, y: number) => {
      const chars = ["0", "1"];
      const char = chars[Math.floor(Math.random() * chars.length)];

      const newPoint: TrailPoint = {
        id: Date.now() + Math.random(),
        x,
        y,
        char,
      };

      setTrail((prev) => [...prev.slice(-40), newPoint]); // Increased trail length
    };

    const processMovement = (x: number, y: number, target: HTMLElement) => {
      const isBlocked =
        target.closest(".no-cursor-effect") ||
        target.closest("button") ||
        target.closest("a");

      if (isBlocked) {
        lastPos.current = null;
        return;
      }

      if (!lastPos.current) {
        addPoint(x, y);
        lastPos.current = { x, y };
        return;
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.hypot(dx, dy);

      // Interpolation Step (Spatial Throttling)
      // Ensure we have a point every ~15px
      const step = 15;

      if (dist > step) {
        const steps = Math.floor(dist / step);
        // Limit max steps to prevent freezing on huge jumps
        const safeSteps = Math.min(steps, 20);

        for (let i = 1; i <= safeSteps; i++) {
          const tx = lastPos.current.x + (dx / steps) * i;
          const ty = lastPos.current.y + (dy / steps) * i;
          addPoint(tx, ty);
        }
        lastPos.current = { x, y };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      processMovement(e.clientX, e.clientY, e.target as HTMLElement);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
