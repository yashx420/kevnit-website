"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const campaigns = [
  {
    title: "Global Saas Scaling",
    client: "TechFlow Inc.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "A comprehensive B2B lead generation campaign that resulted in a 300% increase in qualified pipeline over 6 months.",
    metrics: [
      { label: "ROI", value: "+300%", icon: TrendingUp },
      { label: "Leads", value: "2.5k+", icon: Users },
      { label: "CPA", value: "-45%", icon: Target },
    ],
  },
  {
    title: "E-Commerce Holiday Rush",
    client: "StyleNova",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "Multi-channel advertising strategy across Meta, Google, and TikTok for the Q4 holiday season.",
    metrics: [
      { label: "ROAS", value: "4.8x", icon: TrendingUp },
      { label: "Reach", value: "10M+", icon: Users },
      { label: "Conv. Rate", value: "+85%", icon: Target },
    ],
  },
];

export default function MarketingPortfolioPage() {
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6BC323]/10 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10 px-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <motion.div style={{ scale: titleScale, opacity: titleOpacity }}>
            <h1 className="text-5xl md:text-[6rem] font-bold font-heading mb-6 tracking-tighter leading-none">
              DIGITAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC323] to-emerald-500">
                MARKETING
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8"
          >
            Data-driven campaigns that turn attention into revenue. ROI-focused
            strategies across every major channel.
          </motion.p>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-16">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 ${index % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-[#6BC323]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 text-white font-medium bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                      Read Full Case Study <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div
                  className={`px-2 md:px-8 ${index % 2 !== 0 ? "md:order-1" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#6BC323] text-sm font-medium tracking-wide uppercase">
                      Client: {campaign.client}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-[#6BC323] transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg mb-8">
                    {campaign.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    {campaign.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="flex items-center gap-2 text-white/50 mb-2">
                          <metric.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {metric.label}
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
