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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const trailRef = useRef<
    { x: number; y: number; char: string; opacity: number; life: number }[]
  >([]);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const addPoint = (x: number, y: number) => {
      const chars = ["0", "1"];
      const char = chars[Math.floor(Math.random() * chars.length)];
      trailRef.current.push({ x, y, char, opacity: 1, life: 1 });
      if (trailRef.current.length > 30) trailRef.current.shift();
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
      const step = 40;

      if (dist > step) {
        const steps = Math.floor(dist / step);
        const safeSteps = Math.min(steps, 10);
        for (let i = 1; i <= safeSteps; i++) {
          const tx = lastPos.current.x + (dx / steps) * i;
          const ty = lastPos.current.y + (dy / steps) * i;
          addPoint(tx, ty);
        }
        lastPos.current = { x, y };
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      processMovement(e.clientX, e.clientY, e.target as HTMLElement);
    };

    window.addEventListener("pointermove", handlePointerMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 18px monospace";
      ctx.fillStyle = "#6BC323";

      for (let i = 0; i < trailRef.current.length; i++) {
        const p = trailRef.current[i];
        p.life -= 0.02; // Fade speed
        p.opacity = Math.max(0, p.life);

        if (p.opacity > 0) {
          ctx.globalAlpha = p.opacity;
          ctx.fillText(p.char, p.x, p.y + (1 - p.life) * 20); // Subtle fall effect
        }
      }

      trailRef.current = trailRef.current.filter((p) => p.life > 0);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
    />
  );
}
