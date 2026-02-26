"use client";
import { FitTrackMockup, UrbanBitesMockup, SecureWalletMockup } from '@/components/ui/mockups';
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  X,
  Activity,
  Flame,
  Trophy,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Shield,
  CreditCard,
  Bell,
  ChevronRight,
  Fingerprint,
  PieChart,
  ShieldCheck,
  Home,
  Users,
  Search,
  FileText,
  ShoppingCart,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  overview?: string;
  features?: string[];
}

const projects: Project[] = [
  {
    id: "fittrack-pro",
    title: "FitTrack Pro",
    category: "iOS & Android App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Firebase", "HealthKit"],
    overview:
      "A comprehensive fitness tracking application that gamifies workouts and integrates seamlessly with wearable devices to provide real-time health metrics.",
    features: [
      "Native Apple HealthKit and Google Fit integration",
      "Real-time workout tracking with GPS mapping",
      "Social feed for sharing achievements with friends",
      "Personalized AI-driven workout recommendations",
    ],
  },
  {
    id: "urban-bites",
    title: "Urban Bites Delivery",
    category: "Food Delivery App",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Node.js", "Stripe"],
    overview:
      "A localized food delivery platform connecting independent restaurants with customers, featuring real-time driver tracking and split-payment capabilities.",
    features: [
      "Real-time geolocation tracking for deliveries",
      "Dynamic pricing algorithm based on demand",
      "In-app messaging between driver and customer",
      "Seamless group ordering and bill splitting",
    ],
  },
  {
    id: "secure-wallet",
    title: "Secure Wallet",
    category: "Fintech App",
    image:
      "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Swift", "Kotlin", "Blockchain"],
    overview:
      "A next-generation digital wallet supporting multi-currency storage, instant peer-to-peer transfers, and sophisticated expense categorization.",
    features: [
      "Biometric authentication (FaceID/TouchID)",
      "Instant multi-currency conversion at mid-market rates",
      "Automated spending categorization and insights",
      "Virtual disposable cards for secure online shopping",
    ],
  },
];

export default function AppDevPortfolioPage() {
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  // Helper to render the correct mockup component
  const renderMockup = (projectId: string) => {
    switch (projectId) {
      case "fittrack-pro":
        return <FitTrackMockup />;
      case "urban-bites":
        return <UrbanBitesMockup />;
      case "secure-wallet":
        return <SecureWalletMockup />;
      default:
        return (
          <div className="p-20 text-center text-white">Mockup not found</div>
        );
    }
  };

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

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
              APP
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                DEVELOPMENT
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8"
          >
            Award-winning mobile applications designed for ultimate user
            engagement and performance.
          </motion.p>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index % 2 === 0 ? 0 : 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] md:aspect-square rounded-3xl overflow-hidden mb-6 border border-white/10 bg-white/5 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-colors duration-500 z-10" />

                  {/* Simulate a mobile device frame */}
                  <motion.div
                    layoutId={`image-container-${project.id}`}
                    className="relative w-full max-w-[280px] h-full max-h-[580px] rounded-[3rem] border-[8px] border-black overflow-hidden shadow-2xl z-20 group-hover:-translate-y-4 shadow-pink-500/20 transition-all duration-500 bg-black"
                  >
                    <motion.img
                      layoutId={`image-${project.id}`}
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-transparent z-30 flex items-center justify-center pointer-events-none">
                    <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-white font-medium border border-white/10">
                      View Live Interactive Preview{" "}
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.span
                      layoutId={`category-${project.id}`}
                      className="text-pink-400 text-sm font-medium tracking-wide uppercase"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <motion.h3
                    layoutId={`title-${project.id}`}
                    className="text-3xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Expanded Project View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
            data-lenis-prevent
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-[#0A0A0A] w-full max-w-7xl mt-24 mb-auto rounded-[2rem] shadow-2xl border border-white/10 flex flex-col items-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full relative h-[30vh] md:h-[40vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-500/10">
                <button
                  onClick={() => setSelectedId(null)}
                  className="fixed top-6 right-6 z-[110] w-12 h-12 bg-black/50 hover:bg-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />

                <motion.div
                  layoutId={`image-container-${selectedProject.id}`}
                  className="relative h-[80%] aspect-[9/19] rounded-[2rem] border-[6px] border-black overflow-hidden shadow-2xl z-20 mt-10"
                >
                  <motion.img
                    layoutId={`image-${selectedProject.id}`}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                <div className="absolute bottom-12 left-12 right-12 z-20 flex flex-col items-center gap-4 text-center">
                  <motion.span
                    layoutId={`category-${selectedProject.id}`}
                    className="px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
                  >
                    {selectedProject.category}
                  </motion.span>
                  <motion.h3
                    layoutId={`title-${selectedProject.id}`}
                    className="text-4xl md:text-6xl font-bold text-white font-heading"
                  >
                    {selectedProject.title}
                  </motion.h3>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="w-full bg-[#0A0A0A] px-6 py-12 md:py-16 md:px-16 border-b border-white/5">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {selectedProject.overview ||
                          "We engineered a robust mobile application prioritizing fluid animations, intuitive navigation, and offline-first capabilities to ensure a premium user experience."}
                      </p>
                    </div>
                    {selectedProject.features && (
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 mt-8">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-400"
                            >
                              <div className="mt-1 w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-4 md:p-12 pb-24 flex justify-center bg-[#0A0A0A]">
                {/* Native React UI Mockup Showcase for Mobile App */}
                <div className="w-full max-w-[400px] h-[852px] rounded-[3rem] overflow-hidden border-[12px] border-gray-900 bg-black shadow-[0_0_80px_rgba(0,0,0,0.8)] relative">
                  {/* Fake iPhone notch/dynamic island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-[60]" />
                  {renderMockup(selectedProject.id)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}