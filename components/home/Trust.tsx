"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  Cloud,
  BarChart3,
  Share2,
  Workflow,
  Target,
  Facebook,
  Activity,
} from "lucide-react";

const companies = [
  { name: "AWS", icon: Cloud, color: "text-[#FF9900]" },
  { name: "HubSpot", icon: Share2, color: "text-[#FF7A59]" },
  { name: "n8n", icon: Workflow, color: "text-[#FF6E6E]" },
  { name: "Google Ads", icon: Target, color: "text-[#4285F4]" },
  { name: "Meta Ads", icon: Facebook, color: "text-[#0668E1]" },
  { name: "Google Analytics", icon: BarChart3, color: "text-[#E37400]" },
];

export function Trust() {
  return (
    <section className="mt-16 py-6 bg-black border-y border-white/5 overflow-hidden">
      <Container>
        <p className="text-center text-gray-500 text-xs font-semibold tracking-widest mb-6 uppercase">
          Powered by Trusted Global Platforms
        </p>
        <div className="flex overflow-hidden relative user-select-none max-w-5xl mx-auto">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap min-w-max items-center"
          >
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="flex items-center gap-2 group cursor-default"
              >
                <company.icon
                  className={`w-8 h-8 ${company.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors font-heading">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </Container>
    </section>
  );
}
