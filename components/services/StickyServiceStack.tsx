"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
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
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    desc: "Custom, high-performance websites that leave a lasting impression.",
    tags: ["Responsive", "Fast", "SEO Ready"],
    color: "#6BC323",
    portfolioUrl: "/portfolio?tab=web",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    desc: "Native and cross-platform mobile apps for iOS and Android.",
    tags: ["iOS", "Android", "Flutter"],
    color: "#8B5CF6",
    portfolioUrl: "/portfolio?tab=app",
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    desc: "Robust online stores designed to maximize conversions.",
    tags: ["Shopify", "Stripe", "Growth"],
    color: "#F59E0B",
    portfolioUrl: "/portfolio?tab=web",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    desc: "Improve your search rankings and drive organic traffic.",
    tags: ["Audit", "Keywords", "Ranking"],
    color: "#10B981",
    portfolioUrl: "/portfolio?tab=digital",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    desc: "Engage your audience and build brand loyalty.",
    tags: ["Content", "Ads", "Viral"],
    color: "#EC4899",
    portfolioUrl: "/portfolio?tab=smm",
  },
  {
    title: "Paid Advertising",
    icon: Megaphone,
    desc: "Targeted PPC campaigns to generate instant leads.",
    tags: ["Google Ads", "Meta Ads", "ROI"],
    color: "#EF4444",
    portfolioUrl: "/portfolio?tab=digital",
  },
  {
    title: "Branding & Design",
    icon: PenTool,
    desc: "Create a cohesive brand identity that resonates.",
    tags: ["Logo", "UI/UX", "Identity"],
    color: "#6366F1",
    portfolioUrl: "/portfolio?tab=web",
  },
  {
    title: "Website Maintenance",
    icon: Server,
    desc: "Keep your website secure and running smoothly.",
    tags: ["Security", "Backups", "Updates"],
    color: "#14B8A6",
    portfolioUrl: "/portfolio?tab=web",
  },
];

export function StickyServiceStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black/95"
      style={{ height: `${services.length * 40}vh` }}
    >
      <div className="sticky top-0 w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden py-10 px-4 md:px-12">
        {/* Background Ambient Lights - Hidden on mobile */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="hidden md:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6BC323]/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
          <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        </div>

        <div className="relative z-10 w-full max-w-[95rem] mx-auto flex flex-col items-center xl:flex-row xl:items-start xl:justify-between gap-8 mt-12">
          {/* Left Content Area */}
          <div className="flex-1 w-full text-center xl:text-left z-20 xl:pr-10 xl:pt-12">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading text-white mb-4 md:mb-6 uppercase tracking-tighter leading-none">
              Our{" "}
              <span className="text-[#6BC323] block mt-1 md:mt-2">
                Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto xl:mx-0 mb-8 font-medium">
              Keep scrolling to unveil our deck of core competencies. We deliver
              premium, high-converting digital solutions crafted to dominate
              your industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4">
              <div className="px-8 py-4 rounded-full border border-[#6BC323]/30 bg-[#6BC323]/10 text-[#6BC323] backdrop-blur-md text-sm font-bold uppercase tracking-widest motion-safe:animate-pulse">
                Scroll Down To Uncover
              </div>
            </div>
          </div>

          {/* Right Area for Framer Motion Scroll Deck */}
          <div className="flex-1 w-full relative min-h-[440px] md:min-h-[700px] flex items-start justify-center xl:justify-end mt-8 md:mt-16 xl:mt-24 xl:mr-24">
            <div className="w-[320px] sm:w-[500px] md:w-[600px] h-[380px] md:h-[480px] relative max-w-[90vw] [perspective:900px] [transform-style:preserve-3d]">
              {services.map((service, i) => (
                <ScrollCard
                  key={i}
                  i={i}
                  total={services.length}
                  service={service}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ScrollCard = ({ i, total, service, progress }: any) => {
  // activeIndex goes from 0 to total - 1
  const activeIndex = useTransform(progress, [0, 1], [0, total - 1]);

  // offset is the distance of this card from the active index
  // 0 = active, > 0 = waiting behind in the stack, < 0 = scrolled past & falling
  const offset = useTransform(activeIndex, (val) => i - val);

  // When card flies off (offset < 0), it rapidly falls down (800px)
  // When card is waiting (offset > 0), it is stacked slightly up (-40px per index)
  const y = useTransform(
    offset,
    [-1, -0.2, 0, 1, total],
    [800, 200, 0, -40, -total * 40],
  );

  // When stacked, X moves slightly right (40px per index for more horizontal scroll feel)
  const x = useTransform(offset, [-1, 0, 1, total], [-30, 0, 40, total * 40]);

  // When stacked, z drops back creating the 3D deck look
  // When falling off, z pops forward briefly
  const z = useTransform(offset, [-1, 0, 1, total], [100, 0, -45, -total * 45]);

  // A subtle tumble effect as the card falls off
  const rotateZ = useTransform(offset, [-1, -0.5, 0], [-15, -10, 0]);

  // Fade out card immediately when it passes the front slot
  const opacity = useTransform(offset, [-0.5, 0, total], [0, 1, 1]);

  // Cards behind must have a numerically lower z-index so they sit below the front card
  const zIndex = total - i;

  return (
    <motion.div
      className="absolute inset-0 origin-center overflow-hidden border border-white/20 rounded-[3rem] bg-[#0A0A0A] [transform-style:preserve-3d] will-change-transform"
      style={{
        x,
        y,
        z,
        opacity,
        rotateZ,
        skewY: 6, // Match the CardSwap elastic lean
        zIndex,
        boxShadow: "0 15px 30px -10px rgba(0,0,0,0.8)",
        willChange: "transform, opacity",
      }}
    >
      <ServiceCard
        service={{
          ...service,
          description: service.desc,
          deliverables: service.tags,
        }}
        index={i}
      />
    </motion.div>
  );
};
