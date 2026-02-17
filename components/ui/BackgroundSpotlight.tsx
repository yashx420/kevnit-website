"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BackgroundSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { damping: 30, stiffness: 500 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
          window.innerWidth < 768,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY, isMobile]);

  // Disable on mobile for better performance
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Simplified cursor follow - removed for Safari performance */}
      {/* Primary Spotlight (Behind content) - Reduced blur */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[51] will-change-transform"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#00E676]/15 via-blue-500/8 to-transparent blur-[80px]"
          style={{
            willChange: "transform, opacity",
          }}
        />
      </motion.div>

      {/* Secondary Glow - Simplified animation */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[52] will-change-transform"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-[500px] h-[500px] rounded-full bg-gradient-conic from-emerald-500/8 via-purple-500/8 to-emerald-500/8 blur-[60px]"
          style={{
            willChange: "transform",
          }}
        />
      </motion.div>
    </>
  );
}
