"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Smartphone,
  Zap,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const portfolios = [
  {
    title: "Web Development",
    description:
      "High-performance websites and web apps built with cutting-edge frameworks. We craft experiences that load fast, rank high, and convert visitors into customers.",
    icon: Code,
    href: "/portfolio/web-development",
    accent: "#00b4d8",
    accentLight: "rgba(0,180,216,0.15)",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    stats: [
      { label: "Projects", value: "50+" },
      { label: "Tech Stacks", value: "12" },
      { label: "Avg. Load Time", value: "<1.5s" },
    ],
    images: ["/UIs/web1.png", "/UIs/web2.png"],
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile apps that users love. From concept to App Store, we deliver polished, performant apps with stunning UI and seamless UX.",
    icon: Smartphone,
    href: "/portfolio/app-development",
    accent: "#c77dff",
    accentLight: "rgba(199,125,255,0.15)",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    stats: [
      { label: "Apps Built", value: "30+" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "5★ Reviews", value: "200+" },
    ],
    images: ["/UIs/app1.png", "/UIs/app2.png"],
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that actually move the needle. SEO, social media, paid ads, and content strategy — all designed to maximize your ROI.",
    icon: Zap,
    href: "/portfolio/digital-marketing",
    accent: "#6BC323",
    accentLight: "rgba(107,195,35,0.15)",
    gradient: "from-[#6BC323]/20 via-emerald-500/10 to-transparent",
    stats: [
      { label: "Campaigns", value: "100+" },
      { label: "Avg. ROI", value: "340%" },
      { label: "Clients", value: "60+" },
    ],
    images: ["/UIs/web3.png", "/UIs/web4.png"],
  },
];

export default function PortfolioPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6BC323]/5 blur-[150px] rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Floating grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <Container className="text-center relative z-10 px-4">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 border border-[#6BC323]/30 rounded-full px-4 py-1.5 mb-8 bg-[#6BC323]/5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#6BC323]" />
                <span className="text-xs tracking-widest uppercase font-medium text-[#6BC323]">
                  Featured Work
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tighter leading-[0.9]">
                <span className="text-white">Our</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
                  Portfolio
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto mt-6 leading-relaxed">
                Explore the projects we&apos;ve delivered across web, mobile,
                and digital marketing.
              </p>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Categories — Large interactive cards */}
      <section className="relative pb-32 pt-8">
        <Container>
          <div className="flex flex-col gap-20 md:gap-28">
            {portfolios.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={item.href} className="group block">
                  <div className="relative rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-700 hover:border-white/10">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Left: Content */}
                      <div
                        className={`p-10 md:p-14 lg:p-16 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                      >
                        {/* Icon + Title */}
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                            style={{
                              backgroundColor: item.accentLight,
                              borderColor: `${item.accent}30`,
                            }}
                          >
                            <item.icon
                              className="w-5 h-5"
                              style={{ color: item.accent }}
                            />
                          </div>
                          <span
                            className="text-xs tracking-[0.3em] uppercase font-semibold"
                            style={{ color: item.accent }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                          {item.title}
                        </h2>

                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                          {item.description}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-8 mb-10">
                          {item.stats.map((stat) => (
                            <div key={stat.label}>
                              <div
                                className="text-xl md:text-2xl font-bold mb-0.5"
                                style={{ color: item.accent }}
                              >
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-500 uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-3 group/cta">
                          <span className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors">
                            Explore Projects
                          </span>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                            style={{
                              backgroundColor: item.accentLight,
                              border: `1px solid ${item.accent}40`,
                            }}
                          >
                            <ArrowRight
                              className="w-4 h-4"
                              style={{ color: item.accent }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right: Preview Images */}
                      <div
                        className={`relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                      >
                        {/* Stacked preview images */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          {/* Image 1 — larger, behind */}
                          <div className="absolute w-[85%] h-[80%] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-700 ease-out">
                            <Image
                              src={item.images[0]}
                              alt={`${item.title} preview`}
                              fill
                              className="object-cover object-top"
                              sizes="600px"
                            />
                          </div>
                          {/* Image 2 — smaller, on top, offset */}
                          <div className="absolute w-[55%] h-[60%] rounded-xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 translate-x-[25%] translate-y-[20%] group-hover:translate-x-[30%] group-hover:translate-y-[15%] group-hover:rotate-2 transition-all duration-700 ease-out z-10">
                            <Image
                              src={item.images[1]}
                              alt={`${item.title} preview 2`}
                              fill
                              className="object-cover object-top"
                              sizes="400px"
                            />
                          </div>
                        </div>

                        {/* Accent gradient overlay */}
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 70% 50%, ${item.accent}20, transparent 70%)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative rounded-3xl border border-white/5 bg-gradient-to-b from-[#0c0c0c] to-[#050505] p-12 md:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(107,195,35,0.08),transparent_60%)] pointer-events-none" />

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight relative z-10">
                Got a project in mind?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto relative z-10">
                Let&apos;s turn your vision into a product people love.
              </p>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center gap-3 bg-[#6BC323] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#58a51c] transition-all duration-300 shadow-[0_0_30px_rgba(107,195,35,0.3)] hover:shadow-[0_0_50px_rgba(107,195,35,0.5)] hover:scale-105"
              >
                Start a Conversation
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
