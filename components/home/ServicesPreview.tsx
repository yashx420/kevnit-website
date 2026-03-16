"use client";

import { useRef, useState } from "react";
import {
  Code,
  Smartphone,
  BarChart,
  Globe,
  Zap,
  Shield,
  ArrowUpRight,
  Search,
  Lock,
  Layout,
  Terminal,
  MousePointer2,
  TrendingUp,
} from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: (
      <>
        Stunning, conversion-focused websites built with pixel-perfect
        precision.{" "}
        <span className="text-[#6BC323] font-bold">Same-Day Prototype:</span> We
        deliver your first UI on day one and iterate until it's perfect.
      </>
    ),
    color: "from-[#6BC323] to-[#58a51c]",
    bg: "bg-[#1a2616]/40",
    href: "/portfolio?tab=web",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: (
      <>
        Sleek native and cross-platform mobile experiences.{" "}
        <span className="text-[#6BC323] font-bold">Same-Day Prototype:</span>{" "}
        Get a clickable app UI on Day 1, refined until you're 100% satisfied.
      </>
    ),
    color: "from-blue-500 to-cyan-500",
    bg: "bg-[#0b121a]/40",
    href: "/portfolio?tab=app",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    desc: "Data-driven campaigns that grow your audience and maximize ROI. We craft strategy, manage spend, and deliver measurable results.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-[#1a0b18]/40",
    href: "/portfolio?tab=digital",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    desc: "Viral-ready content, community management, and paid social that builds brand loyalty and drives real engagement across every platform.",
    color: "from-[#E1306C] to-[#F77737]",
    bg: "bg-[#1a0b10]/40",
    href: "/portfolio?tab=smm",
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
];

/* ─── UNIQUE VISUAL COMPONENTS ────────────────────────────────────── */

const WebDevVisual = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10">
    <motion.div
      animate={{ y: [-10, 10, -10], rotateX: [2, -2, 2], rotateY: [-5, 5, -5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-64 md:w-72 h-48 md:h-56 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col"
    >
      {/* Browser Header */}
      <div className="h-8 bg-white/10 flex items-center px-3 gap-1.5 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="ml-4 flex-1 h-4 bg-white/5 rounded pl-2 flex items-center">
          <Globe size={10} className="text-white/40" />
        </div>
      </div>
      {/* Browser Content */}
      <div className="p-4 flex flex-col gap-3 flex-1 relative">
        <motion.div className="w-1/3 h-4 rounded-full bg-white/20" />
        <div className="flex gap-3">
          <motion.div
            animate={{ height: ["20px", "40px", "20px"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`w-1/2 rounded-lg bg-gradient-to-br ${color} opacity-40`}
          />
          <div className="w-1/2 flex flex-col gap-2">
            <div className="w-full h-2 rounded-full bg-white/10" />
            <div className="w-4/5 h-2 rounded-full bg-white/10" />
            <div className="w-full h-2 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="mt-auto w-full h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <Layout size={16} className="text-white/50" />
        </div>

        {/* Floating cursor */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-white drop-shadow-lg"
        >
          <MousePointer2 size={24} className="fill-white/20" />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

const AppDevVisual = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10">
    <motion.div
      animate={{
        y: [-15, 15, -15],
        rotateY: [-10, 10, -10],
        rotateZ: [-2, 2, -2],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="w-36 md:w-44 h-72 md:h-80 rounded-[2rem] border-4 border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden relative"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/20 rounded-b-xl backdrop-blur-md z-20" />

      {/* Screen Content - scrolling feed */}
      <div className="p-4 pt-8 flex flex-col gap-3 h-full overflow-hidden relative z-10">
        <motion.div
          animate={{ y: [0, -150, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-col gap-3"
        >
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-full h-20 rounded-xl bg-white/5 border border-white/10 flex p-3 gap-3"
            >
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} opacity-50 shrink-0`}
              />
              <div className="flex flex-col gap-2 w-full">
                <div className="w-full h-2 rounded-full bg-white/20" />
                <div className="w-2/3 h-2 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating notification */}
      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r ${color} shadow-lg text-[10px] font-bold text-white whitespace-nowrap z-20`}
      >
        New Install
      </motion.div>
    </motion.div>
  </div>
);

const MarketingVisual = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10">
    <motion.div
      animate={{ rotateX: [10, 20, 10], rotateY: [-15, 15, -15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-64 h-64 flex items-end justify-center gap-4 pb-10"
    >
      {/* Bar Chart */}
      {[40, 70, 50, 100, 80].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`w-8 rounded-t-lg bg-gradient-to-t ${color} opacity-80 border-t border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
        />
      ))}

      {/* Trending line and dot */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center gap-1 shadow-xl"
      >
        <TrendingUp size={28} className="text-white" />
        <span className="text-xs font-bold text-white drop-shadow-md">
          +124%
        </span>
      </motion.div>
    </motion.div>
  </div>
);

const SoftwareVisual = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10">
    <motion.div
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative w-48 h-48 [transform-style:preserve-3d]"
    >
      {/* Center node */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center z-20 shadow-[0_0_30px_rgba(255,255,255,0.2)]`}
      >
        <Terminal size={24} className="text-white drop-shadow-md" />
      </div>

      {/* Orbiting nodes */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          style={{ rotateZ: deg }}
          className="absolute inset-0 border border-white/10 rounded-full"
        >
          <motion.div
            animate={{ rotateZ: -deg }} // counter rotate so icon stays upright
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
          >
            <Code size={18} className="text-white/70" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const SEOVisual = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10">
    <div className="w-64 h-56 flex flex-col gap-3">
      {/* Search Bar */}
      <div className="w-full h-10 rounded-full bg-white/10 border border-white/20 flex items-center px-4 gap-2 backdrop-blur-md">
        <Search size={14} className="text-white/50" />
        <motion.div
          animate={{ width: ["0%", "50%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="h-2 rounded-full bg-white/30"
        />
      </div>

      {/* Results */}
      <div className="flex-1 relative mt-2">
        {/* Top result animated */}
        <motion.div
          animate={{
            y: [20, 0, 20],
            scale: [0.95, 1.05, 0.95],
            zIndex: [10, 20, 10],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 w-full h-16 rounded-xl bg-gradient-to-r ${color} shadow-[0_0_30px_rgba(255,255,255,0.2)] p-3 flex gap-3 items-center`}
        >
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white text-xs backdrop-blur-sm">
            #1
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="w-3/4 h-2 rounded bg-white/80" />
            <div className="w-full h-1.5 rounded bg-white/40" />
          </div>
        </motion.div>

        {/* Other results static/faded */}
        <div className="absolute top-20 w-full h-12 rounded-xl bg-white/5 border border-white/10 p-3 flex gap-3 items-center opacity-50">
          <div className="w-8 h-8 rounded-lg bg-white/10" />
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="w-2/3 h-2 rounded bg-white/20" />
            <div className="w-full h-1.5 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SecurityVisual = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10">
    <div className="relative w-56 h-56 rounded-full border border-white/20 bg-black/40 flex items-center justify-center backdrop-blur-sm overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00ff9d_1px,transparent_1px),linear-gradient(to_bottom,#00ff9d_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Radar Sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 origin-center"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.4) 100%)",
        }}
      />

      {/* Center Shield */}
      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`relative z-20 w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]`}
      >
        <Lock size={32} className="text-white" />
      </motion.div>

      {/* Floating threat dots */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute top-10 left-10 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red]"
      />
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
        className="absolute bottom-16 right-12 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red]"
      />
    </div>
  </div>
);

const VisualSwitch = ({ title, color }: { title: string; color: string }) => {
  switch (title) {
    case "Website Development":
      return <WebDevVisual color={color} />;
    case "App Development":
      return <AppDevVisual color={color} />;
    case "Digital Marketing":
      return <MarketingVisual color={color} />;
    case "Custom Software":
      return <SoftwareVisual color={color} />;
    case "SEO Optimization":
      return <SEOVisual color={color} />;
    case "Cybersecurity":
      return <SecurityVisual color={color} />;
    default:
      return <WebDevVisual color={color} />;
  }
};

/* ─── MAIN COMPONENTS ──────────────────────────────────────────────── */

export function ServicesPreview() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="expertise" className="relative mt-12 md:mt-24" ref={container}>
      <div className="pt-12 pb-6 text-center sticky top-0 bg-transparent backdrop-blur-sm z-40 border-b border-white/5 mb-4 md:mb-8">
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
        <div className="flex flex-col items-center gap-y-0 pb-10 md:pb-40">
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
  href?: string;
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
  href,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scroll Animations
  const scale = useTransform(progress, range, [1, targetScale]);

  // Internal Parallax
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Hover state (CSS hover blocked by z-50 Link overlay, so we track manually)
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={container}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-[calc(8rem+var(--offset))] perspective-1000"
      style={{ "--offset": `${i * 15}px` } as any}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          scale,
          zIndex: 10 + i,
        }}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={
          href ? { boxShadow: "0 0 80px rgba(107,195,35,0.12)" } : undefined
        }
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`
          flex flex-col relative 
          w-full md:w-[85vw] lg:w-[70vw] xl:w-[60vw] max-w-4xl 
          min-h-[50vh] md:min-h-0 md:h-[55vh] lg:h-[60vh] xl:h-[60vh] 
          rounded-3xl md:rounded-[2rem] overflow-hidden md:border border-white/10 origin-top shadow-[0_0_50px_rgba(0,0,0,0.5)] ${bg} backdrop-blur-md
          no-cursor-effect
        `}
      >
        {href && (
          <Link
            href={href}
            className="absolute inset-0 z-50 rounded-3xl md:rounded-[2rem]"
            aria-label={`View ${title} portfolio`}
          />
        )}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Content */}
          <div className="p-4 md:p-6 xl:p-8 flex flex-col justify-between w-full md:w-3/5 relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${color} shadow-lg`}
                >
                  <Icon className="text-black" size={24} />
                </div>
                <span className="text-6xl md:text-5xl font-bold text-white/5 font-heading">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold font-heading text-white mb-2 md:mb-4 leading-tight">
                {title}
              </h3>
              <p className="text-xl md:text-lg text-gray-400 leading-relaxed opacity-90">
                {desc}
              </p>
            </div>
            {href && (
              <div className="mt-8">
                <div className="relative inline-flex items-center gap-3 font-semibold text-white">
                  <span className="relative">
                    View Portfolio
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#6BC323] to-cyan-400 rounded-full"
                      animate={{ width: isHovered ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </span>
                  <motion.div
                    className="w-9 h-9 rounded-full border flex items-center justify-center"
                    animate={{
                      backgroundColor: isHovered
                        ? "#6BC323"
                        : "rgba(255,255,255,0.05)",
                      borderColor: isHovered
                        ? "#6BC323"
                        : "rgba(255,255,255,0.2)",
                      scale: isHovered ? 1.15 : 1,
                      boxShadow: isHovered
                        ? "0 0 20px rgba(107,195,35,0.6)"
                        : "none",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      animate={{ color: isHovered ? "#000" : "#fff" }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Unique Visual */}
          <div className="w-full md:w-2/5 h-full relative overflow-hidden hidden md:flex items-center justify-center border-l border-white/5 bg-[#050505]">
            {/* Tech grid background */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">
              <div
                className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br ${color} opacity-20 blur-[100px] animate-pulse-glow mix-blend-screen pointer-events-none`}
              />
            </div>

            <motion.div
              style={{ y: contentY }}
              className="relative w-full h-full flex items-center justify-center [perspective:1000px] z-10 pointer-events-none"
            >
              <VisualSwitch title={title} color={color} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
