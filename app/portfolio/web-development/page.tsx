"use client";
import { EcoShopMockup, FinTechMockup, ModernRealEstateMockup, HealthPortalMockup, EduTechMockup } from '@/components/ui/mockups';
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
  ShoppingCart,
  Search,
  Menu,
  Star,
  ChevronRight,
  Activity,
  Users,
  FileText,
  Settings,
  Heart,
  Home,
  DollarSign,
  ArrowUpRight,
  MapPin,
  Bed,
  Bath,
  Video,
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
    id: "eco-shop",
    title: "EcoShop E-Commerce",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
    overview:
      "A high-performance e-commerce platform built for a sustainable lifestyle brand. The goal was to create a seamless, eco-friendly shopping experience with a focus on conversion rate optimization and brand storytelling.",
    features: [
      "Headless Shopify integration for lightning-fast page loads",
      "Custom 3D product viewer for immersive shopping",
      "Dynamic sustainability impact tracker for user purchases",
      "Seamless and secure checkout flow with multiple payment options",
    ],
  },
  {
    id: "fintech-dash",
    title: "FinTech Dashboard",
    category: "SaaS Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "D3.js", "Node.js"],
    overview:
      "A comprehensive B2B financial dashboard that provides real-time market insights and portfolio management. Built to handle massive data streams securely and display them intuitively.",
    features: [
      "Real-time WebSocket data integration for live market updates",
      "Custom D3.js charting library for complex data visualization",
      "Bank-grade security and authentication protocols",
      "Automated custom report generation system",
    ],
  },
  {
    id: "modern-re",
    title: "Modern Real Estate",
    category: "Corporate Website",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Three.js", "Next.js", "PostgreSQL"],
    overview:
      "A luxury real estate platform designed to showcase high-end properties through immersive digital experiences, replacing traditional static listings with interactive 3D tours.",
    features: [
      "Interactive 3D property tours powered by Three.js",
      "Advanced map-based property search with custom filters",
      "Automated showing scheduling system",
      "Agent dashboard for listing management",
    ],
  },
  {
    id: "health-portal",
    title: "Healthcare Portal",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "WebRTC", "AWS", "HIPAA"],
    overview:
      "A HIPAA-compliant patient management platform that connects patients with healthcare providers, featuring secure telehealth capabilities and comprehensive medical record management.",
    features: [
      "End-to-end encrypted WebRTC video consultations",
      "Secure patient health record (EHR) integration",
      "Automated appointment reminders and scheduling",
      "Integrated prescription management system",
    ],
  },
  {
    id: "edutech-lms",
    title: "EduTech LMS",
    category: "E-Learning",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Vue.js", "Laravel", "AWS"],
    overview:
      "A scalable Learning Management System serving over 50,000 active students. The platform delivers interactive courses, real-time assessments, and detailed student progress analytics.",
    features: [
      "Interactive video player with in-video quizzing",
      "Gamified student progression system with badges",
      "Real-time analytics dashboard for educators",
      "Offline-first PWA support for low-bandwidth areas",
    ],
  },
];

export default function WebDevPortfolioPage() {
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  // Helper to render the correct mockup component
  const renderMockup = (projectId: string) => {
    switch (projectId) {
      case "eco-shop":
        return <EcoShopMockup />;
      case "fintech-dash":
        return <FinTechMockup />;
      case "modern-re":
        return <ModernRealEstateMockup />;
      case "health-portal":
        return <HealthPortalMockup />;
      case "edutech-lms":
        return <EduTechMockup />;
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

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
              WEB
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
            We build lightning-fast, scalable, and visually stunning web
            applications that drive real business results.
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
                <motion.div
                  layoutId={`image-container-${project.id}`}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img
                    layoutId={`image-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 text-white font-medium">
                      View Live Interactive Preview{" "}
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.span
                      layoutId={`category-${project.id}`}
                      className="text-cyan-400 text-sm font-medium tracking-wide uppercase"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <motion.h3
                    layoutId={`title-${project.id}`}
                    className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Expanded Project UI View Modal */}
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
              <div className="w-full relative h-[30vh] md:h-[40vh] overflow-hidden">
                <button
                  onClick={() => setSelectedId(null)}
                  className="fixed top-6 right-6 z-[110] w-12 h-12 bg-black/50 hover:bg-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-[#0A0A0A]/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
                <motion.img
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-12 left-12 right-12 z-20 flex flex-col items-center text-center gap-4">
                  <motion.span
                    layoutId={`category-${selectedProject.id}`}
                    className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
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
                          "We built a modern, scalable web application tailored to the client's specific business needs, focusing on high performance, user experience, and robust architecture."}
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
                              <div className="mt-1 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0" />
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

              <div className="w-full p-4 md:p-12 pb-24 bg-[#0A0A0A]">
                {/* Native React UI Mockup Showcase */}
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                  <div className="bg-[#1e1e1e] border-b border-white/10 p-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto w-1/2 bg-black/50 rounded-md py-1 text-center text-xs text-gray-500 font-mono">
                      https://{selectedProject.id}.kevnit.com
                    </div>
                  </div>
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