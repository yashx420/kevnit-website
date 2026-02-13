"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#6BC323] text-black hover:bg-[#58a51c] shadow-[0_0_10px_rgba(107,195,35,0.4)] hover:shadow-[0_0_20px_rgba(107,195,35,0.6)]",
      outline: "border border-[#6BC323] text-[#6BC323] hover:bg-[#6BC323]/10",
      ghost: "text-white hover:bg-white/10 hover:text-[#6BC323]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    // Using motion.button for animations
    const MotionButton = motion.button;

    return (
      <MotionButton
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as HTMLMotionProps<"button">)}
      >
        {props.children}
      </MotionButton>
    );
  },
);

Button.displayName = "Button";

export { Button, cn };
