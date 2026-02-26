"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We deep-dive into your universe — analyzing goals, audiences, competitors, and opportunities to build a bulletproof foundation.",
    icon: "🔍",
    gradient: "from-emerald-500/20 to-green-500/5",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We craft a tactical roadmap — choosing the right tech stack, defining milestones, and aligning every detail with your business goals.",
    icon: "⚡",
    gradient: "from-blue-500/20 to-indigo-500/5",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Our engineering and design teams bring the blueprint to life — pixel-perfect UIs, clean architecture, and relentless iteration.",
    icon: "🛠️",
    gradient: "from-purple-500/20 to-violet-500/5",
  },
  {
    number: "04",
    title: "Launch & Scale",
    desc: "We deploy to production, set up monitoring and analytics, then continuously optimize for performance and growth.",
    icon: "🚀",
    gradient: "from-orange-500/20 to-amber-500/5",
  },
];

function ProcessCard({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Each card activates when the scroll line reaches its dot — and stays lit
  const activateAt = 0.1 + index * 0.2;

  // Raw triggers (step function: 0 before, 1 after)
  const rawActive = useTransform(
    scrollYProgress,
    [activateAt - 0.06, activateAt],
    [0, 1],
  );

  // Smooth spring for fade-in highlight animation
  const active = useSpring(rawActive, { stiffness: 300, damping: 25 });

  const cardOpacity = useTransform(active, [0, 1], [0.4, 1]);
  const borderOpacity = active;
  const glowIntensity = active;
  const nodeScale = useTransform(active, [0, 1], [1, 1.4]);

  const isRight = index % 2 !== 0;

  return (
    <div
      className={`relative flex items-center ${isRight ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
    >
      {/* Center Node */}
      <motion.div
        className="absolute left-[20px] md:left-1/2 -ml-[20px] md:-ml-5 w-10 h-10 rounded-full bg-[#0A0A0A] border-4 border-[#6BC323] z-20 flex items-center justify-center"
        style={{
          scale: nodeScale,
          boxShadow: useTransform(
            glowIntensity,
            [0, 1],
            [
              "0 0 10px rgba(107,195,35,0.2)",
              "0 0 30px rgba(107,195,35,0.8), 0 0 60px rgba(107,195,35,0.3)",
            ],
          ),
        }}
      >
        <motion.div
          className="w-3 h-3 bg-[#6BC323] rounded-full"
          style={{ opacity: glowIntensity }}
        />
      </motion.div>

      {/* Desktop Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <div
        className={`w-full md:w-1/2 ${isRight ? "pl-16 md:pl-0 md:pr-16 md:text-right" : "pl-16 md:pl-16 md:pr-0"}`}
      >
        <AnimatedWrapper
          animation={isRight ? "slide-in-left" : "slide-in-right"}
          delay={index * 0.1}
          className="transform-style-3d"
        >
          <motion.div
            style={{ opacity: cardOpacity }}
            whileHover={{
              scale: 1.03,
              rotateY: isRight ? -3 : 3,
            }}
            className="group relative bg-[#0c0c0c] backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500 no-cursor-effect"
          >
            {/* Active border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                opacity: borderOpacity,
                boxShadow:
                  "inset 0 0 0 1.5px #6BC323, 0 0 30px rgba(107,195,35,0.15)",
              }}
            />

            {/* Background gradient on activation */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${step.gradient} pointer-events-none rounded-3xl`}
              style={{ opacity: glowIntensity }}
            />

            {/* Holographic shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shine pointer-events-none" />

            <div
              className={`relative flex flex-col ${isRight ? "md:items-end" : "md:items-start"}`}
            >
              {/* Step Number — watermark */}
              <span
                className={`text-6xl md:text-7xl xl:text-8xl font-black absolute top-[-8px] select-none transition-colors duration-500 ${isRight ? "right-0 md:right-auto md:left-0" : "right-0"}`}
                style={{
                  WebkitTextStroke: "1px rgba(107,195,35,0.15)",
                  color: "transparent",
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative mb-5 inline-block">
                <span className="text-4xl">{step.icon}</span>
                <motion.div
                  className="absolute inset-0 filter blur-xl bg-[#6BC323] rounded-full"
                  style={{
                    opacity: useTransform(glowIntensity, [0, 1], [0.1, 0.4]),
                  }}
                />
              </div>

              {/* Title */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-300"
                style={{
                  color: useTransform(
                    glowIntensity,
                    [0, 0.5, 1],
                    ["rgb(255,255,255)", "rgb(107,195,35)", "rgb(107,195,35)"],
                  ),
                }}
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-base">
                {step.desc}
              </p>

              {/* Progress indicator dots */}
              <div
                className={`flex gap-2 mt-6 ${isRight ? "md:flex-row-reverse" : ""}`}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: useTransform(
                        glowIntensity,
                        [0, 1],
                        i <= index
                          ? ["rgba(107,195,35,0.2)", "rgba(107,195,35,1)"]
                          : ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)"],
                      ),
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

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
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(107,195,35,0.1),transparent_70%)]" />
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
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-white/5 h-full rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: scaleY, transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#6BC323] via-emerald-400 to-[#6BC323] shadow-[0_0_20px_#6BC323]"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <ProcessCard
                key={index}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
