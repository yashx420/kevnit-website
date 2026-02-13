"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  value: string; // "0" or "1"
}

export function CursorMatrixEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate a particle every 500ms
    const interval = setInterval(() => {
      if (mousePosRef.current.x === 0 && mousePosRef.current.y === 0) return;
      addParticle(mousePosRef.current.x, mousePosRef.current.y);
    }, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const addParticle = (x: number, y: number) => {
    const id = Date.now() + Math.random();
    // Spawn around the cursor
    const offsetX = (Math.random() - 0.5) * 60; // 60px width spread
    const offsetY = (Math.random() - 0.5) * 60;

    const newParticle: Particle = {
      id,
      x: x + offsetX,
      y: y + offsetY,
      value: Math.random() > 0.5 ? "1" : "0",
    };

    setParticles((prev) => [...prev.slice(-3), newParticle]); // Max 3 particles
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: particle.y, x: particle.x, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0],
              y: particle.y - 30, // Scroll UP (like code scrolling)
              scale: [0.8, 1.2, 0.8], // Pulse size
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setParticles((prev) => prev.filter((p) => p.id !== particle.id));
            }}
            className="absolute text-[#6BC323] font-mono text-xs font-bold select-none"
          >
            {particle.value}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
