"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BackgroundSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 500 }; // Snappier for responsiveness
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Heavy Interaction Layer (follows cursor with mix-blend) */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[40]"
        style={{
          background: useTransform(
            [x, y],
            ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(0, 230, 118, 0.15), transparent 50%)`
          ),
          mixBlendMode: "plus-lighter"
        }}
      />

      {/* Primary Spotlight (Behind content) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-0"
        style={{ 
          x, 
          y, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
      >
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-[#00E676]/20 via-blue-500/10 to-transparent blur-[120px] mix-blend-screen" 
        />
      </motion.div>

      {/* Secondary Orbiting Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-0"
        style={{ 
          x, 
          y, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
      >
        <motion.div 
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-[600px] h-[600px] rounded-full bg-gradient-conic from-emerald-500/10 via-purple-500/10 to-emerald-500/10 blur-[100px] mix-blend-screen"
        />
      </motion.div>
    </>
  );
}





