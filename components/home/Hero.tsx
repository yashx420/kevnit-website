"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const [particles, setParticles] = useState<any[]>([]);

  // Scroll Parallax settings
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Parallax settings
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Generate particles only on the client
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 1000 - 500,
      y: Math.random() * 1000 - 500,
      opacity: Math.random() * 0.5 + 0.1,
      scale: Math.random() * 0.5 + 0.5,
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      moveY: Math.random() * -100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX * 0.05); // Sensitivity
      mouseY.set(moveY * 0.05);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const layer1X = useTransform(springX, (x) => x * -1);
  const layer1Y = useTransform(springY, (y) => y * -1);
  const layer2X = useTransform(springX, (x) => x * 0.5);
  const layer2Y = useTransform(springY, (y) => y * 0.5);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pb-32 perspective-1000">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1 - Moving against mouse & scroll */}
        <motion.div
          style={{ x: layer1X, y: y1 }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#6BC323]/10 blur-[120px] mix-blend-screen opacity-30 md:opacity-100"
        />

        {/* Layer 2 - Moving with mouse & scroll */}
        <motion.div
          style={{ x: layer2X, y: y2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[150px] mix-blend-screen opacity-30 md:opacity-100"
        />

        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full hidden md:block"
            initial={{
              x: p.x,
              y: p.y,
              opacity: p.opacity,
              scale: p.scale,
            }}
            animate={{
              y: [null, p.moveY],
              opacity: [null, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: p.width + "px",
              height: p.height + "px",
              left: "50%",
              top: "50%",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Large Hero Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center mb-10 mt-16 md:mb-6 md:mt-12 md:hidden"
          >
            <motion.div
              style={{ x: layer2X, y: layer1Y }} // Subtle parallax
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
              className="relative h-24 w-56 md:h-28 md:w-64 lg:h-32 lg:w-72 xl:w-80 transform-style-3d cursor-default"
            >
              <Image
                src="/logo.png"
                alt="Kevnit Digital Solutions"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(107,195,35,0.4)]"
                priority
              />
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6BC323]/20 to-transparent blur-3xl opacity-50 animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.span
            className="hidden md:inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#6BC323] text-sm font-medium mb-2 backdrop-blur-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀 Elevate Your Digital Presence
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-10 md:mb-6 leading-tight tracking-tight px-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="inline-block mb-4 md:mb-0"
            >
              We Build
            </motion.span>{" "}
            <br />
            <span className="relative inline-block">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC323] via-[#6BC323] to-[#6BC323] bg-[length:200%_auto] relative z-10"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 3, ease: "linear" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Digital Experiences
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#6BC323] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                style={{ originX: 0 }}
              />
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="inline-block mt-4 md:mt-0"
            >
              That Drive Growth.
            </motion.span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto px-4 md:px-0">
            Kevnit Digital Solutions transforms businesses with cutting-edge web
            development, mobile apps, and data-driven marketing strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="min-w-[200px] text-lg h-14 shadow-[0_0_30px_rgba(107,195,35,0.3)] hover:shadow-[0_0_50px_rgba(107,195,35,0.5)] transition-shadow"
              >
                Get a Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] text-lg h-14 border-white/20 hover:bg-white/5"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
