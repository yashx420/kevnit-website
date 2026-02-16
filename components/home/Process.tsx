"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We deep-dive into your universe, decoding goals and market dynamics.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Crafting the master plan. A tactical roadmap tailored for dominance.",
    icon: "⚡",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Building the future. Cutting-edge code meets pixel-perfect design.",
    icon: "🛠️",
  },
  {
    number: "04",
    title: "Launch & Scale",
    desc: "Ignition. We deploy, monitor, and accelerate your growth trajectory.",
    icon: "🚀",
  },
];

export function Process() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={container}
      className="pt-32 pb-0 md:pb-16 bg-[#050505] relative overflow-hidden min-h-[150vh]"
    >
      {/* Chaotic Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(107,195,35,0.1),transparent_70%)] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <Container className="relative z-10">
        <AnimatedWrapper className="text-center mb-24">
          <h2
            className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tighter uppercase glitch-text"
            data-text="Our Process"
          >
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            A high-velocity journey from concept to digital reality.
          </p>
        </AnimatedWrapper>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Neural Beam */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-white/10 h-full rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: scaleY, transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#6BC323] via-emerald-400 to-[#6BC323] shadow-[0_0_20px_#6BC323] box-shadow-glow"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
              >
                {/* Connector Nodes (Center) */}
                <div className="absolute left-[20px] md:left-1/2 -ml-[20px] md:-ml-5 w-10 h-10 rounded-full bg-[#0A0A0A] border-4 border-[#6BC323] z-20 flex items-center justify-center shadow-[0_0_15px_#6BC323]">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "pl-16 md:pl-16 md:pr-0" : "pl-16 md:pl-0 md:pr-16 md:text-right"}`}
                >
                  <AnimatedWrapper
                    animation={
                      index % 2 === 0 ? "slide-in-right" : "slide-in-left"
                    }
                    delay={index * 0.1}
                    className="transform-style-3d"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotateY: index % 2 === 0 ? 5 : -5,
                        rotateX: 5,
                        borderColor: "rgba(107, 195, 35, 0.5)",
                        boxShadow: "0 0 30px rgba(107, 195, 35, 0.2)",
                      }}
                      className="group relative bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-[#151515] transition-all duration-500 no-cursor-effect"
                    >
                      {/* Holographic Sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shine pointer-events-none" />

                      <div
                        className={`flex flex-col ${index % 2 !== 0 ? "md:items-end" : "md:items-start"}`}
                      >
                        <span
                          className={`text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white/10 absolute top-4 select-none group-hover:text-white/20 transition-colors ${index % 2 === 0 ? "right-8" : "right-8 md:right-auto md:left-8"}`}
                        >
                          {step.number}
                        </span>

                        <div className="relative mb-4 inline-block">
                          <span className="text-4xl">{step.icon}</span>
                          <div className="absolute inset-0 filter blur-xl opacity-20 md:opacity-50 bg-[#6BC323] rounded-full" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#6BC323] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
