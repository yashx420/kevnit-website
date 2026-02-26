"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 800 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Hide custom cursor when inside mockup popup
      if (target.closest("[data-mockup-open]")) {
        setIsHidden(true);
        setIsHovered(false);
        return;
      }
      setIsHidden(false);
      if (target.closest("button") || target.closest("a")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-[#6BC323] pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovered ? 2.5 : 1,
        display: isHidden ? "none" : "block",
      }}
      animate={{
        backgroundColor: isHovered
          ? "rgba(107, 195, 35, 1)"
          : "rgba(0, 0, 0, 0)",
      }}
    />
  );
}
