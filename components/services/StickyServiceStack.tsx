"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  Globe,
  Monitor,
  Smartphone,
  ShoppingCart,
  Search,
  Share2,
  Megaphone,
  PenTool,
  Server,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    desc: "Custom, high-performance websites that leave a lasting impression.",
    tags: ["Responsive", "Fast", "SEO Ready"],
    color: "#6BC323",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    desc: "Native and cross-platform mobile apps for iOS and Android.",
    tags: ["iOS", "Android", "Flutter"],
    color: "#8B5CF6",
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    desc: "Robust online stores designed to maximize conversions.",
    tags: ["Shopify", "Stripe", "Growth"],
    color: "#F59E0B",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    desc: "Improve your search rankings and drive organic traffic.",
    tags: ["Audit", "Keywords", "Ranking"],
    color: "#10B981",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    desc: "Engage your audience and build brand loyalty.",
    tags: ["Content", "Ads", "Viral"],
    color: "#EC4899",
  },
  {
    title: "Paid Advertising",
    icon: Megaphone,
    desc: "Targeted PPC campaigns to generate instant leads.",
    tags: ["Google Ads", "Meta Ads", "ROI"],
    color: "#EF4444",
  },
  {
    title: "Branding & Design",
    icon: PenTool,
    desc: "Create a cohesive brand identity that resonates.",
    tags: ["Logo", "UI/UX", "Identity"],
    color: "#6366F1",
  },
  {
    title: "Website Maintenance",
    icon: Server,
    desc: "Keep your website secure and running smoothly.",
    tags: ["Security", "Backups", "Updates"],
    color: "#14B8A6",
  },
];

export function StickyServiceStack() {
  return (
    <div className="relative w-full">
      {services.map((service, i) => (
        <Card
          key={i}
          i={i}
          {...service}
          range={[i * 0.1, 1]}
          targetScale={1 - (services.length - i) * 0.05}
        />
      ))}
    </div>
  );
}

const Card = ({
  i,
  title,
  desc,
  icon: Icon,
  tags,
  color,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-32 md:top-36"
    >
      <motion.div
        style={{
          scale,
          marginTop: i * 30,
        }}
        className="flex flex-col h-[70vh] w-[95vw] md:h-[65vh] md:w-[90vw] max-w-7xl rounded-3xl p-6 md:p-14 border border-white/10 bg-[#0A0A0A] overflow-hidden origin-top shadow-2xl"
      >
        {/* Dynamic Background Glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 blur-[120px] pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${color}, transparent)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 h-full items-center">
          {/* Left Content */}
          <div className="w-full md:w-[60%] flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                <Icon size={32} style={{ color }} />
              </div>
              <span className="text-2xl font-mono text-white/30">0{i + 1}</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 uppercase tracking-tight leading-none">
              {title}
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              {desc}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full border border-white/10 text-base text-gray-300 bg-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="group w-fit border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-6 h-auto"
              >
                Get Quote{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Visual (Abstract Representation) */}
          <div className="w-full md:w-[40%] h-full relative rounded-2xl overflow-hidden border border-white/5 bg-black/50 hidden md:flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" />

            <motion.div style={{ scale: imageScale }} className="relative z-10">
              <Icon
                size={180}
                strokeWidth={0.5}
                style={{ color }}
                className="opacity-80 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              />
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: color,
                    top: `${20 + idx * 15}%`,
                    left: `${20 + idx * 20}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
