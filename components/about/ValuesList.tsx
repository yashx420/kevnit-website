"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Shield, Rocket, Users, Target, Eye } from "lucide-react";

const values = [
  {
    title: "Relentless Innovation",
    desc: "We don't settle for 'good enough'. We push boundaries and explore the unknown.",
    icon: Zap,
    color: "#FFD700",
  },
  {
    title: "Unbreakable Trust",
    desc: "We build systems that last and relationships that matter.",
    icon: Shield,
    color: "#3B82F6",
  },
  {
    title: "Explosive Growth",
    desc: "Your success is our rocket fuel. We aim for the stars, together.",
    icon: Rocket,
    color: "#EF4444",
  },
  {
    title: "Radical Collaboration",
    desc: "No silos. Just pure, unadulterated teamwork.",
    icon: Users,
    color: "#10B981",
  },
  {
    title: "Precision Focus",
    desc: "We measure twice, cut once, and hit the bullseye every time.",
    icon: Target,
    color: "#F59E0B",
  },
  {
    title: "Visionary Thinking",
    desc: "Seeing what others miss. Building what others can't.",
    icon: Eye,
    color: "#8B5CF6",
  },
];

export function ValuesList() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-40 bg-black px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          CORE <span className="text-[#6BC323]">DNA</span>
        </h2>

        <div className="flex flex-col gap-4">
          {values.map((item, i) => (
            <motion.div
              key={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              animate={{
                height: hovered === i ? 200 : 80,
                opacity: hovered !== null && hovered !== i ? 0.3 : 1,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] px-8 flex flex-col justify-center cursor-pointer group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, ${item.color}, transparent)`,
                }}
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-mono text-white/20">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <item.icon
                  className={`transform transition-transform duration-500 ${hovered === i ? "rotate-12 scale-125" : ""}`}
                  style={{ color: item.color }}
                  size={32}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === i ? 1 : 0 }}
                className="pt-4 pl-12 max-w-2xl text-gray-400 text-lg"
              >
                {item.desc}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
