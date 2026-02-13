"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  value: string;
}

export function CursorMatrixEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Spawn a new number every 800ms
    const interval = setInterval(() => {
      // Don't spawn if mouse hasn't moved / is at 0,0
      if (mousePosRef.current.x === 0 && mousePosRef.current.y === 0) return;

      addParticle(mousePosRef.current.x, mousePosRef.current.y);
    }, 800);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const addParticle = (x: number, y: number) => {
    const id = Date.now();
    // Huge spread for "way more radius"
    const offsetX = (Math.random() - 0.5) * 400;
    const offsetY = (Math.random() - 0.5) * 400;

    const newParticle: Particle = {
      id,
      x: x + offsetX,
      y: y + offsetY,
      value: Math.random() > 0.5 ? "1" : "0",
    };

    // STRICTLY keep max 2 particles at any time
    setParticles((prev) => [...prev, newParticle].slice(-2));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence mode="popLayout">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0.8, x: particle.x, y: particle.y }}
            animate={{
              opacity: [0, 1, 0],
              y: particle.y - 120, // Longer scroll UP
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              setParticles((prev) => prev.filter((p) => p.id !== particle.id));
            }}
            // Font size sm, no shadow, clean green color
            className="absolute text-[#6BC323] font-mono text-sm font-bold select-none"
            style={{
              marginLeft: "12px", // Offset slightly from cursor center
              marginTop: "12px",
            }}
          >
            {particle.value}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
