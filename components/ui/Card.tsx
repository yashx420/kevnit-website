"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    const MotionDiv = motion.div;

    return (
      <MotionDiv
        ref={ref}
        initial={hoverEffect ? { y: 0 } : undefined}
        whileHover={hoverEffect ? { y: -5 } : undefined}
        className={cn(
          "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-shadow duration-300",
          hoverEffect && "hover:shadow-[0_0_20px_rgba(0,230,118,0.2)] hover:border-[#00E676]/30",
          className
        )}
        {...(props as HTMLMotionProps<"div">)}
      >
        {props.children}
      </MotionDiv>
    );
  }
);

Card.displayName = "Card";

export { Card };
