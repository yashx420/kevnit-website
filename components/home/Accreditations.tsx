"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const accreditations = [
  "/accreds/Importance-1-e1536998812445.png",
  "/accreds/Screenshot 2026-02-16 105626.png",
  "/accreds/Screenshot 2026-02-16 105630.png",
  "/accreds/Screenshot 2026-02-16 105635.png",
  "/accreds/Screenshot 2026-02-16 105638.png",
  "/accreds/Screenshot 2026-02-16 105648.png",
  "/accreds/Screenshot 2026-02-16 105655.png",
  "/accreds/Screenshot 2026-02-16 105700.png",
  "/accreds/Screenshot 2026-02-16 105704.png",
];

export function Accreditations() {
  return (
    <section className="py-12 bg-black border-t border-white/5 overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Our Accreditations
          </p>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-16 item-center min-w-max"
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...accreditations, ...accreditations].map((src, index) => (
              <div
                key={index}
                className="relative h-16 w-32 md:h-20 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Accreditation ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
