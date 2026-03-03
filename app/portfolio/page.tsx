"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ExternalLink,
  X,
  ArrowRight,
  Sparkles,
  BarChart,
  Megaphone,
  Target,
  Share2,
  Heart,
} from "lucide-react";

import {
  webProjects,
  appProjects,
  digitalCampaigns,
  smmCampaigns,
  Project,
  Campaign,
} from "./data";

import { FashionMockup } from "@/components/ui/fashion-mockup";
import { RealEstateMockup } from "@/components/ui/realestate-mockup";
import { ITCompanyMockup } from "@/components/ui/itcompany-mockup";
import { MarketingAgencyMockup } from "@/components/ui/marketing-mockup";
import { FoodSiteMockup } from "@/components/ui/food-mockup";
import {
  FitTrackMockup,
  UrbanBitesMockup,
  SecureWalletMockup,
} from "@/components/ui/mockups";

type TabType = "web" | "app" | "digital" | "smm";

// Helper to render the correct mockup component
const renderMockup = (projectId: string) => {
  switch (projectId) {
    case "fashion-store":
      return <FashionMockup />;
    case "real-estate":
      return <RealEstateMockup />;
    case "it-company":
      return <ITCompanyMockup />;
    case "marketing-agency":
      return <MarketingAgencyMockup />;
    case "food-site":
      return <FoodSiteMockup />;
    case "fit-track":
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

export function PortfolioContent() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [activeTab, setActiveTab] = useState<TabType>("web");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    // Force scroll to top on mount in case browser layout recalcs push it down
    window.scrollTo(0, 0);
  }, []);

  const searchParams = useSearchParams();
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (
      tabParam === "web" ||
      tabParam === "app" ||
      tabParam === "digital" ||
      tabParam === "smm"
    ) {
      setActiveTab(tabParam as TabType);
    }
  }, [searchParams]);

  const selectedProject = [...webProjects, ...appProjects].find(
    (p) => p.id === selectedProjectId,
  );
  const selectedCampaign = [...digitalCampaigns, ...smmCampaigns].find(
    (c) => c.id === selectedCampaignId,
  );

  const renderWebAndAppGrid = (projects: Project[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          layoutId={`project-${project.id}`}
          onClick={() => setSelectedProjectId(project.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index % 2 === 0 ? 0 : 0.2,
          }}
          className="group cursor-pointer"
        >
          <motion.div
            layoutId={`image-container-${project.id}`}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center mt-4">
              <div
                style={{
                  transform: activeTab === "app" ? "scale(0.35)" : "scale(0.5)",
                  transformOrigin: "top center",
                  width: activeTab === "app" ? "100%" : "200%",
                  height: activeTab === "app" ? "200%" : "200%",
                }}
              >
                {renderMockup(project.id)}
              </div>
            </div>

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
  );

  const renderMarketingGrid = (campaigns: Campaign[], accentColor: string) => (
    <div className="grid grid-cols-1 gap-16">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.id}
          onClick={() => setSelectedCampaignId(campaign.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div
            className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 ${index % 2 !== 0 ? "md:order-2" : ""}`}
          >
            <div
              className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"
              style={{ backgroundColor: `${accentColor}33` }}
            />
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              <span
                className="text-sm font-medium tracking-wide uppercase"
                style={{ color: accentColor }}
              >
                Client: {campaign.client}
              </span>
              {campaign.link && (
                <Link
                  href={campaign.link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 transition-colors group-hover:text-white/80">
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
                    <span className="text-sm font-medium">{metric.label}</span>
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
  );

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6BC323]/5 blur-[150px] rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <Container className="text-center relative z-10 px-4 mt-16">
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
                Explore the projects we've delivered across web, mobile, digital
                marketing, and social media.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Unified Tabbed Grid */}
      <section className="relative pb-32">
        <Container>
          {/* Tab Navigation - horizontally scrollable on mobile */}
          <div className="flex justify-start md:justify-center mb-10 md:mb-16 relative z-20 -mx-4 md:mx-0 px-4 md:px-0 overflow-x-auto pb-2 md:pb-4">
            <div className="inline-flex bg-white/5 backdrop-blur-md border border-white/10 p-1 md:p-1.5 rounded-full whitespace-nowrap min-w-max">
              <button
                onClick={() => setActiveTab("web")}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs md:text-base ${
                  activeTab === "web"
                    ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Web UIs
              </button>
              <button
                onClick={() => setActiveTab("app")}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs md:text-base ${
                  activeTab === "app"
                    ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                App UIs
              </button>
              <button
                onClick={() => setActiveTab("digital")}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs md:text-base ${
                  activeTab === "digital"
                    ? "bg-[#6BC323] text-black shadow-[0_0_20px_rgba(107,195,35,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Digital
              </button>
              <button
                onClick={() => setActiveTab("smm")}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs md:text-base ${
                  activeTab === "smm"
                    ? "bg-[#E1306C] text-white shadow-[0_0_20px_rgba(225,48,108,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Social
              </button>
            </div>
          </div>

          {/* Grid Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "web" && renderWebAndAppGrid(webProjects)}
              {activeTab === "app" && renderWebAndAppGrid(appProjects)}
              {activeTab === "digital" &&
                renderMarketingGrid(digitalCampaigns, "#6BC323")}
              {activeTab === "smm" &&
                renderMarketingGrid(smmCampaigns, "#E1306C")}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Expanded Project UI View Modal (Web Apps / Mobile Apps) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl mockup-popup-open"
            style={{ cursor: "default" }}
            data-mockup-open
            onClick={() => setSelectedProjectId(null)}
            data-lenis-prevent
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-[#0A0A0A] w-full max-w-7xl mt-24 mb-auto rounded-[2rem] shadow-2xl border border-white/10 flex flex-col items-center overflow-hidden mockup-popup-open"
              style={{ cursor: "default" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full relative h-[30vh] md:h-[40vh] overflow-hidden">
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="fixed top-6 right-6 z-[110] w-12 h-12 bg-black/50 hover:bg-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-[#0A0A0A]/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    style={{
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                      width: "200%",
                      height: "200%",
                    }}
                  >
                    {renderMockup(selectedProject.id)}
                  </div>
                </div>

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

              {/* UI Mockup — shown FIRST at the top */}
              <div className="w-full p-4 md:p-8 pt-6 bg-[#0A0A0A] flex justify-center">
                {appProjects.some((p) => p.id === selectedProject.id) ? (
                  /* App Mockup Container */
                  <div className="w-full max-w-[400px] mx-auto rounded-[55px] overflow-hidden border-8 border-zinc-800 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative bg-black transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 pointer-events-none rounded-[47px] ring-1 ring-white/10 inset-ring z-50"></div>
                    {renderMockup(selectedProject.id)}
                  </div>
                ) : (
                  /* Web Mockup Container */
                  <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-[#0A0A0A]">
                    <div className="bg-[#1e1e1e] border-b border-white/10 p-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="mx-auto w-1/2 bg-black/50 rounded-md py-1 text-center text-xs text-gray-500 font-mono truncate px-2">
                        https://{selectedProject.id}.kevnit.com
                      </div>
                    </div>
                    {renderMockup(selectedProject.id)}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="w-full bg-[#0A0A0A] px-6 py-10 md:py-14 md:px-16 border-t border-white/5">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Campaign Modal (Digital & SMM) */}
      <AnimatePresence>
        {selectedCampaign && (
          <div
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCampaignId(null)}
            data-lenis-prevent
          >
            <motion.div
              layoutId={`campaign-${selectedCampaign.id}`}
              className="bg-[#0A0A0A] w-full max-w-7xl mt-24 mb-auto rounded-[2rem] shadow-2xl border border-white/10 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Hero */}
              <div className="w-full relative h-[30vh] md:h-[40vh] overflow-hidden flex items-center justify-center">
                <button
                  onClick={() => setSelectedCampaignId(null)}
                  className="fixed top-6 right-6 z-[110] w-12 h-12 bg-black/50 hover:bg-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />

                <motion.img
                  layoutId={`image-${selectedCampaign.id}`}
                  src={selectedCampaign.image}
                  alt={selectedCampaign.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-12 left-12 right-12 z-20 flex flex-col items-center gap-4 text-center">
                  <motion.span
                    layoutId={`client-${selectedCampaign.id}`}
                    className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase backdrop-blur-md flex items-center gap-2"
                  >
                    Client: {selectedCampaign.client}
                    {selectedCampaign.link && (
                      <Link
                        href={selectedCampaign.link}
                        target="_blank"
                        className="hover:text-gray-300 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </motion.span>
                  <motion.h3
                    layoutId={`title-${selectedCampaign.id}`}
                    className="text-4xl md:text-6xl font-bold text-white font-heading"
                  >
                    {selectedCampaign.title}
                  </motion.h3>
                </div>
              </div>

              {/* Campaign Breakdown */}
              <div className="w-full bg-[#0A0A0A] px-6 py-12 md:py-16 md:px-16">
                <div className="max-w-5xl mx-auto space-y-16">
                  {/* Challenge & Strategy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                        <Target className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        The Challenge
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {selectedCampaign.challenge}
                      </p>
                    </div>

                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                        <Share2 className="w-6 h-6 text-blue-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        Our Strategy
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {selectedCampaign.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Execution */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-white" /> Execution
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedCampaign.execution.map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10"
                        >
                          <div className="w-8 h-8 rounded-full bg-white/20 text-white font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </div>
                          <p className="text-gray-300 pt-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deep Dive Results */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <BarChart className="w-6 h-6 text-yellow-500" /> Deep Dive
                      Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedCampaign.results.map((result, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-3xl border border-white/20 text-center"
                        >
                          <div className="text-5xl font-bold text-white mb-2">
                            {result.label}
                          </div>
                          <div className="text-white font-bold text-lg mb-4">
                            {result.value}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {result.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="pb-32 mt-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative rounded-3xl border border-white/5 bg-gradient-to-b from-[#0c0c0c] to-[#050505] p-12 md:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight relative z-10">
                Ready to transform your brand?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto relative z-10">
                Let's turn your vision into a product people love.
              </p>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
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

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
