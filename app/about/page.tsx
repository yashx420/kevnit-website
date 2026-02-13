import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { Target, Lightbulb, Users, Zap, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/home/CTA";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly explore new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "We build robust, secure systems you can count on 24/7.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We never compromise on code quality or user experience.",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "We deliver optimized performance and fast turnaround times.",
  },
  {
    icon: Rocket,
    title: "Growth",
    desc: "Your tailored success is our ultimate metric.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work closely with you as an extension of your team.",
  },
];

import { Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#6BC323] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#111] to-black -z-10" />
        <Container>
          <AnimatedWrapper className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">
              Driving Digital{" "}
              <span className="text-[#6BC323]">Transformation</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Kevnit Digital Solutions is a premier IT and Digital Marketing
              agency dedicated to helping businesses thrive in the digital age.
              We combine technical expertise with creative strategy to build
              digital products that matter.
            </p>
          </AnimatedWrapper>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedWrapper
              animation="slide-in-left"
              className="bg-[#111] p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Our Mission
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To empower businesses with innovative digital solutions that
                  drive growth, efficiency, and competitive advantage in a
                  rapidly evolving market.
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              animation="slide-in-right"
              delay={0.2}
              className="bg-[#111] p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Lightbulb size={120} />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Our Vision
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To be the global partner of choice for comprehensive digital
                  services, known for excellence, integrity, and measurable
                  results.
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-black">
        <Container>
          <AnimatedWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-400">
              The principles that guide everything we do.
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <AnimatedWrapper
                key={index}
                animation="fade-up"
                delay={index * 0.1}
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6BC323]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#6BC323]/10 flex items-center justify-center text-[#6BC323] mb-6 group-hover:scale-110 transition-transform">
                    <val.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {val.title}
                  </h3>
                  <p className="text-gray-400">{val.desc}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
