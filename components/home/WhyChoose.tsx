"use client";

import { useRef } from "react";
import {
  CheckCircle2,
  Trophy,
  Target,
  Zap,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Innovative Solutions",
    description:
      "We stay ahead of the curve, utilizing the latest technologies to give you a competitive edge.",
  },
  {
    icon: Trophy,
    title: "Proven Reliability",
    description:
      "Our track record speaks for itself. We deliver consistent, high-quality results on time.",
  },
  {
    icon: Target,
    title: "User-Centric Design",
    description:
      "We prioritize the user experience, creating intuitive and engaging interfaces that convert.",
  },
  {
    icon: Clock,
    title: "Agile Development",
    description:
      "Our flexible process ensures we adapt to your needs and deliver value incrementally.",
  },
  {
    icon: Users,
    title: "Growth Focused",
    description:
      "Everything we build is designed with one goal in mind: growing your business.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Support",
    description:
      "We are always here to help, ensuring your digital assets run smoothly around the clock.",
  },
];

export function WhyChoose() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={container}
      className="py-24 bg-black relative overflow-hidden perspective-1000"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#6BC323]/5 blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          <AnimatedWrapper animation="slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Why Businesses Choose{" "}
              <span className="text-[#6BC323]">Kevnit</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just build websites; we build digital ecosystems that
              drive real business results. Our approach combines technical
              expertise with creative strategy.
            </p>

            {/* 3D Rotating Visual Showcase */}
            <div className="relative h-[500px] flex items-center justify-center">
              <motion.div
                style={{ rotate, scale, y }}
                className="relative w-64 h-64 border-2 border-[#6BC323]/30 rounded-full flex items-center justify-center"
              >
                <div className="absolute inset-0 border border-white/10 rounded-full animate-ping-slow opacity-20" />
                <div className="w-48 h-48 bg-gradient-to-br from-[#6BC323] to-emerald-600 rounded-full blur-[40px] opacity-40 absolute" />

                {/* Floating Icons Orbiting */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-[#111] border border-[#6BC323]/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(107,195,35,0.3)]"
                    animate={{
                      x: [
                        60 * Math.cos(i * 2),
                        120 * Math.cos(i * 2 + Math.PI),
                      ],
                      y: [
                        60 * Math.sin(i * 2),
                        120 * Math.sin(i * 2 + Math.PI),
                      ],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <CheckCircle2 className="text-[#6BC323] w-6 h-6" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                style={{ scale, y }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              >
                <div className="text-center">
                  <span className="text-5xl font-bold text-white">100%</span>
                  <p className="text-[#6BC323] text-sm tracking-widest uppercase mt-1">
                    Satisfaction
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <AnimatedWrapper
                key={index}
                animation="fade-up"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
                >
                  <div className="mt-1 p-3 rounded-lg bg-[#00E676]/10 text-[#00E676] h-fit">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E676] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
