"use client";

import { useRef } from "react";
import {
  Code,
  Smartphone,
  BarChart,
  Globe,
  Zap,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: (
      <>
        We build high-performance, responsive websites that captivate your
        audience.{" "}
        <span className="text-[#6BC323] font-bold">Same-Day Prototype:</span> We
        deliver your first UI prototype on the very day you sign up, iterating
        until perfection before the final rapid build.
      </>
    ),
    color: "from-[#6BC323] to-[#58a51c]",
    bg: "bg-[#1a2616]",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: (
      <>
        Native and cross-platform mobile apps.{" "}
        <span className="text-[#6BC323] font-bold">Same-Day Prototype:</span>{" "}
        Get a clickable UI prototype on Day 1. We refine it until you're 100%
        satisfied, then deliver the final app at lightning speed.
      </>
    ),
    color: "from-blue-500 to-cyan-500",
    bg: "bg-[#0b121a]",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    desc: "Data-driven strategies to grow your audience. We optimize every campaign to maximize ROI and brand visibility.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-[#1a0b18]",
  },
  {
    icon: Code,
    title: "Custom Software",
    desc: "Scalable enterprise software solutions. We solve complex business problems with robust, secure, and efficient code.",
    color: "from-orange-500 to-red-500",
    bg: "bg-[#1a100b]",
  },
  {
    icon: Zap,
    title: "SEO Optimization",
    desc: "Dominate search rankings. Our expert SEO team drives organic traffic to your site with proven techniques.",
    color: "from-yellow-400 to-orange-400",
    bg: "bg-[#1a180b]",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your digital assets. We implement advanced security measures to safeguard your business from threats.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-[#0b1a15]",
  },
];

export function ServicesPreview() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="expertise" className="relative mt-24" ref={container}>
      <div className="pt-12 pb-6 text-center sticky top-0 bg-black/80 backdrop-blur-md z-40 border-b border-white/5 mb-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Scroll to explore our comprehensive digital services.
            </p>
            <Link href="/services">
              <Button
                variant="outline"
                className="rounded-full px-8 h-10 text-sm border-white/20 hover:bg-[#6BC323]/10 hover:border-[#6BC323] hover:text-[#6BC323] transition-all"
              >
                View All Services
              </Button>
            </Link>
          </motion.div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col items-center gap-y-0 pb-40">
          {services.map((service, index) => {
            // Target scale drops slightly for each subsequent card
            const targetScale = 1 - (services.length - index) * 0.05;
            return (
              <Card
                key={index}
                i={index}
                {...service}
                progress={scrollYProgress}
                range={[index * 0.1, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

interface CardProps {
  i: number;
  title: string;
  desc: React.ReactNode;
  icon: any;
  color: string;
  bg: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  title,
  desc,
  icon: Icon,
  color,
  bg,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Entrance Animation Trigger
  const isInView = useInView(container, { margin: "-10%" });

  // Scroll Animations
  const scale = useTransform(progress, range, [1, targetScale]);

  // 3D Depth Effect: Rotate X and Opacity/Blur as it moves back
  // Removed to keep cards opaque and flat

  // Internal Parallax
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={container}
      className="h-[85vh] flex items-center justify-center sticky top-0 md:top-[calc(8rem+var(--offset))] perspective-1000"
      style={{ "--offset": `${i * 15}px` } as any}
    >
      <motion.div
        style={{
          scale,
          zIndex: 10 + i,
        }}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`
          flex flex-col relative 
          w-full md:w-[85vw] lg:w-[70vw] xl:w-[60vw] max-w-4xl 
          min-h-screen md:min-h-0 md:h-[55vh] lg:h-[60vh] xl:h-[60vh] 
          md:rounded-[2rem] overflow-hidden md:border border-white/10 origin-top shadow-[0_0_50px_rgba(0,0,0,0.5)] ${bg}
          sticky top-0 md:static
        `}
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Content */}
          <div className="p-5 md:p-6 xl:p-8 flex flex-col justify-between w-full md:w-3/5 relative z-10">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${color} shadow-lg`}
                >
                  <Icon className="text-black" size={24} />
                </div>
                <span className="text-6xl md:text-5xl font-bold text-white/5 font-heading">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 leading-tight">
                {title}
              </h3>
              <p className="text-xl md:text-lg text-gray-400 leading-relaxed opacity-90">
                {desc}
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-3 text-white font-medium cursor-pointer group w-fit">
                <span className="border-b border-transparent group-hover:border-[#6BC323] transition-all">
                  Learn more details
                </span>
                <div
                  className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#6BC323] group-hover:border-[#6BC323] group-hover:text-black transition-all`}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="w-full md:w-2/5 h-full relative overflow-hidden bg-white/5 border-l border-white/5 hidden md:block">
            <motion.div
              style={{ y: contentY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className={`w-64 h-64 rounded-full bg-gradient-to-br ${color} opacity-20 blur-[80px] animate-pulse-glow`}
              />
              {/* Decorative Elements */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative z-10 w-40 h-40 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5 flex items-center justify-center"
              >
                <Icon className="w-16 h-16 text-white/80 opacity-50" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
