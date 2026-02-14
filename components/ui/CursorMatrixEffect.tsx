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
  // requestRef is no longer used with the new logic, but keeping it as it was not explicitly removed.
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const addPoints = (coords: { x: number; y: number }[]) => {
      const chars = ["0", "1"];
      const newPoints = coords.map(({ x, y }) => ({
        id: Date.now() + Math.random(),
        x,
        y,
        char: chars[Math.floor(Math.random() * chars.length)],
      }));

      setTrail((prev) => [...prev.slice(-60), ...newPoints]); // Increased trail length & batch update
    };

    const processMovement = (
      x: number,
      y: number,
      target: HTMLElement,
      isTouch: boolean,
    ) => {
      // Blocking logic: Only apply to Mouse. Touch ignores blocking.
      if (!isTouch) {
        const isBlocked =
          target.closest(".no-cursor-effect") ||
          target.closest("button") ||
          target.closest("a");

        if (isBlocked) {
          lastPos.current = null;
          return;
        }
      }

      if (!lastPos.current) {
        addPoints([{ x, y }]);
        lastPos.current = { x, y };
        return;
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.hypot(dx, dy);

      // Interpolation Step (Spatial Throttling)
      // Ensure we have a point every ~5px (Very Dense)
      const step = 5;
      const pointsToAdd = [];

      if (dist > step) {
        const steps = Math.floor(dist / step);
        const safeSteps = Math.min(steps, 50); // Limit max points per frame

        for (let i = 1; i <= safeSteps; i++) {
          const tx = lastPos.current.x + (dx / steps) * i;
          const ty = lastPos.current.y + (dy / steps) * i;
          pointsToAdd.push({ x: tx, y: ty });
        }
      } else {
        // Even if moved slightly, add a point to keep it alive
        pointsToAdd.push({ x, y });
      }

      addPoints(pointsToAdd);
      lastPos.current = { x, y };
    };

    const handleMouseMove = (e: MouseEvent) => {
      processMovement(e.clientX, e.clientY, e.target as HTMLElement, false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      processMovement(
        touch.clientX,
        touch.clientY,
        e.target as HTMLElement,
        true,
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      lastPos.current = { x: touch.clientX, y: touch.clientY };
      addPoints([{ x: touch.clientX, y: touch.clientY }]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
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
