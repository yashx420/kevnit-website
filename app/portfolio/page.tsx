"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react";

const portfolios = [
  {
    title: "Web Development",
    description: "High-performance, scalable web experiences",
    icon: Code,
    href: "/portfolio/web-development",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile solutions",
    icon: Smartphone,
    href: "/portfolio/app-development",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-pink-500/50",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that convert",
    icon: Zap,
    href: "/portfolio/digital-marketing",
    color: "from-[#6BC323]/20 to-emerald-500/20",
    border: "group-hover:border-[#6BC323]/50",
  },
];

export default function PortfolioPage() {
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6BC323]/5 blur-[100px] rounded-full pointer-events-none" />

        <Container className="text-center relative z-10 px-4">
          <motion.div style={{ scale: titleScale, opacity: titleOpacity }}>
            <h1 className="text-5xl md:text-[8rem] font-bold font-heading mb-6 tracking-tighter leading-none">
              OUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                PORTFOLIO
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-12 md:mt-24"
          >
            Explore our featured projects across different domains.
          </motion.p>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="relative pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolios.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Link href={item.href} className="block group">
                  <div
                    className={`relative p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${item.border}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex flex-col h-full gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h2>
                        <p className="text-gray-400">{item.description}</p>
                      </div>

                      <div className="mt-auto pt-8 flex items-center justify-between">
                        <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                          View Projects
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
