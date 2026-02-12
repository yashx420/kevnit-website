"use client";

import { useRef } from "react";
import { Code, Smartphone, BarChart, Globe, Zap, Shield, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  { 
    icon: Globe, 
    title: "Website Development", 
    desc: (
      <>
        We build high-performance, responsive websites that captivate your audience. <span className="text-[#00E676] font-bold">Same-Day Prototype:</span> We deliver your first UI prototype on the very day you sign up, iterating until perfection before the final rapid build.
      </>
    ),
    color: "from-[#00E676] to-[#00C853]",
    bg: "bg-[#0b1a10]"
  },
  { 
    icon: Smartphone, 
    title: "App Development", 
    desc: (
      <>
        Native and cross-platform mobile apps. <span className="text-[#00E676] font-bold">Same-Day Prototype:</span> Get a clickable UI prototype on Day 1. We refine it until you're 100% satisfied, then deliver the final app at lightning speed.
      </>
    ),
    color: "from-blue-500 to-cyan-500",
    bg: "bg-[#0b121a]"
  },
  { 
    icon: BarChart, 
    title: "Digital Marketing", 
    desc: "Data-driven strategies to grow your audience. We optimize every campaign to maximize ROI and brand visibility.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-[#1a0b18]"
  },
  { 
    icon: Code, 
    title: "Custom Software", 
    desc: "Scalable enterprise software solutions. We solve complex business problems with robust, secure, and efficient code.",
    color: "from-orange-500 to-red-500",
    bg: "bg-[#1a100b]"
  },
  { 
    icon: Zap, 
    title: "SEO Optimization", 
    desc: "Dominate search rankings. Our expert SEO team drives organic traffic to your site with proven techniques.",
    color: "from-yellow-400 to-orange-400",
    bg: "bg-[#1a180b]"
  },
  { 
    icon: Shield, 
    title: "Cybersecurity", 
    desc: "Protect your digital assets. We implement advanced security measures to safeguard your business from threats.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-[#0b1a15]"
  },
];

export function ServicesPreview() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section ref={container} className="bg-black relative" id="expertise">
      <div className="pt-24 pb-12 text-center sticky top-0 bg-black/80 backdrop-blur-sm z-10 border-b border-white/5 mb-8">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Scroll to explore our comprehensive digital services.
          </p>
          <Link href="/services">
            <Button variant="outline" size="sm">View All Services</Button>
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-y-20 pb-40"> 
        {services.map((service, index) => {
           // Target scale drops slightly for each subsequent card
           const targetScale = 1 - ((services.length - index) * 0.05); 
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

const Card = ({ i, title, desc, icon: Icon, color, bg, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  // Entrance Animation Trigger
  const isInView = useInView(container, { margin: "-10%" });

  // Scroll Animations
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // 3D Depth Effect: Rotate X and Opacity/Blur as it moves back
  // When a card is "active" (scale 1), no rotation. As it scales down, it tilts back.
  // We approximate "active" by checking if scale is near 1 vs targetScale.
  // Actually, 'progress' goes from 0 to 1 over the 'range'.
  // 0 = Start (Card is at top, full size). 1 = End (Card is at back).
  const rotateX = useTransform(progress, range, [0, -5]); // Subtle tilt
  const opacity = useTransform(progress, range, [1, 0.6]); // Fade out slightly
  const blur = useTransform(progress, range, [0, 4]); // Blur slightly
  
  // Internal Parallax
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-24 perspective-1000">
      <motion.div 
        style={{ 
          scale, 
          rotateX,
          opacity,
          filter: `blur(${blur}px)`,
          top: `calc(5vh + ${i * 20}px)`,
        }} 
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`flex flex-col relative w-[85vw] md:w-[60vw] max-w-4xl h-[65vh] rounded-[2rem] overflow-hidden border border-white/10 origin-top shadow-[0_0_50px_rgba(0,0,0,0.5)] ${bg}`}
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row h-full">
           {/* Left: Content */}
           <div className="p-8 md:p-12 flex flex-col justify-between w-full md:w-3/5 relative z-10">
             <div>
               <div className="flex justify-between items-start mb-8">
                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shadow-black/20`}>
                   <Icon className="text-white w-7 h-7" />
                 </div>
                 <span className="text-4xl font-bold text-white/10 font-heading">0{i + 1}</span>
               </div>
               
               <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">{title}</h3>
               <p className="text-lg text-gray-400 leading-relaxed">{desc}</p>
             </div>

             <div className="mt-8">
               <div className="flex items-center gap-3 text-white font-medium cursor-pointer group w-fit">
                 <span className="border-b border-transparent group-hover:border-[#00E676] transition-all">Learn more details</span>
                 <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00E676] group-hover:border-[#00E676] group-hover:text-black transition-all`}>
                    <ArrowUpRight size={16} />
                 </div>
               </div>
             </div>
           </div>

           {/* Right: Visual */}
           <div className="w-full md:w-2/5 h-full relative overflow-hidden bg-white/5 border-l border-white/5 hidden md:block">
             <motion.div style={{ y: contentY }} className="absolute inset-0 flex items-center justify-center">
                <div className={`w-64 h-64 rounded-full bg-gradient-to-br ${color} opacity-20 blur-[80px] animate-pulse-glow`} />
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
