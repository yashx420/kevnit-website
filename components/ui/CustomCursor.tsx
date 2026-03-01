"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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
    <div
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        display: isHidden ? "none" : "block",
      }}
    >
      {/* Outer Ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-[#6BC323]/50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[#6BC323]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </div>
  );
}
