"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import Image from "next/image";
import { useLoading } from "@/context/LoadingContext";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;

// Build array of frame URLs
const frameUrls = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/hero_frames/frame_${String(i + 1).padStart(4, "0")}.jpg`,
);

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // Hero state
  const { scrollY } = useScroll();
  const { isLoading } = useLoading();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Scroll Parallax settings
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  // Mouse Parallax settings
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
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

  const layer1Y = useTransform(springY, (y) => y * -1);
  const layer2X = useTransform(springX, (x) => x * 0.5);

  // 3D Tilt transforms
  const rotateX = useTransform(springY, [-50, 50], [10, -10]);
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match video resolution
    canvas.width = 1920;
    canvas.height = 1080;

    // Preload all frame images
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const drawFrame = (index: number) => {
      if (!ctx) return;
      const img = images[index];
      if (!img || !img.complete) return;

      // Clear canvas and draw the frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate cover-fit dimensions
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.naturalWidth / img.naturalHeight;

      let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

      if (imgAspect > canvasAspect) {
        // Image is wider — fit by height, crop sides
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      } else {
        // Image is taller — fit by width, crop top/bottom
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Load all images
    frameUrls.forEach((url, i) => {
      const img = new window.Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        // Draw the first frame once it's loaded
        if (i === 0) {
          drawFrame(0);
        }
      };
      images[i] = img;
    });

    imagesRef.current = images;

    // GSAP animation object
    const frameObj = { frame: 0 };

    // Create ScrollTrigger animation for frames with LOOPING (only on scroll)
    const tl = gsap.to(frameObj, {
      frame: FRAME_COUNT * 20 - 1, // Large range for many loops
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
      onUpdate: () => {
        const newFrame = Math.round(frameObj.frame) % FRAME_COUNT;
        if (newFrame !== currentFrameRef.current) {
          currentFrameRef.current = newFrame;
          drawFrame(newFrame);
        }
      },
    });

    // Fade opacity of the canvas container based on Expertise section
    gsap.to(container, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#expertise",
        start: "bottom-=1000 bottom", // Start fading as we reach the end
        end: "bottom bottom", // Fully hidden at end of expertise
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {/* Fixed Background Video Canvas */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full -z-10 bg-black pointer-events-none"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Normal Scrolling Hero Content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden [perspective:1000px] pt-20 pb-32 md:pb-0 z-0">
        <Container className="relative z-10 text-center pointer-events-auto">
          <motion.div
            style={{
              y: textY,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              startAnimation
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
            className="will-change-transform transform-gpu"
          >
            {/* Large Hero Logo */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={
                startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
              }
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center mb-10 mt-16 md:mb-6 md:mt-12 md:hidden"
            >
              <motion.div
                style={{ x: layer2X, y: layer1Y }} // Subtle parallax
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
                className="relative h-20 w-48 md:h-28 md:w-64 lg:h-32 lg:w-72 xl:w-80 transform-style-3d cursor-default z-20"
              >
                <Image
                  src="logo.png"
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
              className="hidden md:inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#6BC323] text-sm font-medium mb-2 backdrop-blur-[2px]"
              animate={startAnimation ? { y: [0, -10, 0] } : { y: 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🚀 Elevate Your Digital Presence
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-6 md:mb-6 leading-[1.1] md:leading-tight tracking-tight px-4 [transform:translateZ(50px)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="inline-block mb-1 md:mb-0"
              >
                We Build
              </motion.span>{" "}
              <br />
              <span className="relative inline-block">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC323] via-[#6BC323] to-[#6BC323] bg-[length:200%_auto] relative z-10"
                  animate={
                    startAnimation
                      ? { backgroundPosition: ["0% center", "200% center"] }
                      : { backgroundPosition: "0% center" }
                  }
                  transition={{ duration: 3, ease: "linear" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={startAnimation ? { opacity: 1, scale: 1 } : {}}
                  viewport={{ once: true }}
                >
                  Digital Experiences
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#6BC323] rounded-full"
                  initial={{ scaleX: 0, opacity: 1 }}
                  animate={
                    startAnimation
                      ? { scaleX: 1, opacity: 0 }
                      : { scaleX: 0, opacity: 1 }
                  }
                  transition={{
                    scaleX: { delay: 1.2, duration: 1, ease: "circOut" },
                    opacity: { delay: 2.5, duration: 0.8, ease: "easeInOut" },
                  }}
                  style={{ originX: 0 }}
                />
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="inline-block mt-4 md:mt-0"
              >
                That Drive Growth.
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto px-4 md:px-0">
              Kevnit Digital Solutions transforms businesses with cutting-edge
              web development, mobile apps, and data-driven marketing
              strategies.
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
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] text-lg h-14 border-white/20 hover:bg-white/5"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
