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

    const interval = setInterval(() => {
      // Don't spawn if mouse is at 0,0 (initial state)
      if (mousePosRef.current.x === 0 && mousePosRef.current.y === 0) return;

      addParticle(mousePosRef.current.x, mousePosRef.current.y);
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const addParticle = (x: number, y: number) => {
    const id = Date.now() + Math.random();
    // Random offset within a small radius
    const offsetX = (Math.random() - 0.5) * 40; // 40px spread
    const offsetY = (Math.random() - 0.5) * 40;

    const newParticle: Particle = {
      id,
      x: x + offsetX,
      y: y + offsetY,
      value: Math.random() > 0.5 ? "1" : "0",
    };

    setParticles((prev) => [...prev.slice(-30), newParticle]); // Limit particles
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0.5, y: particle.y, x: particle.x }}
            animate={{
              opacity: [0, 1, 0],
              y: particle.y + 20, // Scroll down/fall effect
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            onAnimationComplete={() => {
              setParticles((prev) => prev.filter((p) => p.id !== particle.id));
            }}
            className="absolute text-[#6BC323] font-mono text-sm font-bold select-none"
            style={{
              textShadow: "0 0 4px rgba(107, 195, 35, 0.5)",
            }}
          >
            {particle.value}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
