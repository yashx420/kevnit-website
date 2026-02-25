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
  X,
  BarChart,
  Megaphone,
  Globe,
  Zap,
} from "lucide-react";
import { useState } from "react";

export interface Campaign {
  id: string;
  title: string;
  client: string;
  image: string;
  description: string;
  metrics: { label: string; value: string; icon: any }[];
  challenge: string;
  strategy: string;
  execution: string[];
  results: { label: string; value: string; detail: string }[];
}

const campaigns: Campaign[] = [
  {
    id: "global-saas",
    title: "Global SaaS Scaling",
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
    challenge:
      "TechFlow Inc. had a robust product but was struggling to penetrate the highly competitive mid-market SaaS segment. Their existing campaigns suffered from high Customer Acquisition Cost (CAC) and low lead quality.",
    strategy:
      "We shifted the focus from broad awareness to highly targeted Account-Based Marketing (ABM) on LinkedIn, paired with intent-based search campaigns on Google Ads to capture high-intent buyers.",
    execution: [
      "Developed custom landing pages tailored to specific industry verticals.",
      "Launched a gated eBook content strategy to capture high-level leads.",
      "Implemented advanced retargeting across Meta and Google Display Networks.",
      "Configured HubSpot CRM for seamless lead handoff and nurturing.",
    ],
    results: [
      {
        label: "300%",
        value: "Pipeline Volume",
        detail: "Increase in sales qualified leads.",
      },
      {
        label: "-45%",
        value: "CPA Reduction",
        detail: "Cost per acquisition dropped significantly.",
      },
      {
        label: "4.2x",
        value: "ROAS",
        detail: "Return on ad spend across all channels.",
      },
    ],
  },
  {
    id: "ecommerce-holiday",
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
    challenge:
      "StyleNova needed to maximize their Q4 revenue but faced skyrocketing CPMs on standard advertising platforms during the competitive holiday season.",
    strategy:
      "We diversified their ad spend by heavily leaning into TikTok for top-of-funnel viral awareness, while using Google Performance Max and Meta for aggressive bottom-of-funnel conversion.",
    execution: [
      "Partnered with 15 micro-influencers to seed native-looking TikTok content.",
      "Deployed dynamic catalog ads on Meta showing previously viewed items.",
      "Created a tiered discount strategy built into the ad copy.",
      "Optimized the Shopify checkout flow to reduce cart abandonment.",
    ],
    results: [
      {
        label: "$2.1M",
        value: "Q4 Revenue",
        detail: "Record-breaking holiday sales.",
      },
      {
        label: "85%",
        value: "Conversion Rate",
        detail: "Improvement across all traffic sources.",
      },
      {
        label: "4.8x",
        value: "Overall ROAS",
        detail: "Maintained profitability despite high CPMs.",
      },
    ],
  },
  {
    id: "local-seo",
    title: "Local SEO Dominance",
    client: "Elite Dental Care",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "A specialized local SEO and reputation management campaign that secured the #1 map pack ranking in a competitive metro area.",
    metrics: [
      { label: "Traffic", value: "+210%", icon: TrendingUp },
      { label: "New Patients", value: "150/mo", icon: Users },
      { label: "Map Rank", value: "#1", icon: Target },
    ],
    challenge:
      "Elite Dental Care was virtually invisible in local search results, losing critical 'near me' patient searches to established competitors.",
    strategy:
      "A comprehensive local search optimization focusing on Google Business Profile enhancement, hyper-local content creation, and aggressive, ethical review generation.",
    execution: [
      "Fully optimized Google Business Profile with regular updates and Q&A.",
      "Built location-specific service pages targeting localized keywords.",
      "Implemented an automated SMS review request system post-appointment.",
      "Cleaned up inconsistent NAP (Name, Address, Phone) citations across 50+ directories.",
    ],
    results: [
      {
        label: "#1",
        value: "Local Pack",
        detail: "Ranking for 'dentist near me'.",
      },
      {
        label: "150+",
        value: "Monthly Leads",
        detail: "New patient inquiries directly from Google.",
      },
      {
        label: "4.9★",
        value: "Rating Score",
        detail: "Generated over 200 new positive reviews.",
      },
    ],
  },
];

export default function MarketingPortfolioPage() {
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCampaign = campaigns.find((c) => c.id === selectedId);

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
                key={campaign.id}
                layoutId={`campaign-${campaign.id}`}
                onClick={() => setSelectedId(campaign.id)}
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
                  <motion.img
                    layoutId={`image-${campaign.id}`}
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
                    <motion.span
                      layoutId={`client-${campaign.id}`}
                      className="text-[#6BC323] text-sm font-medium tracking-wide uppercase"
                    >
                      Client: {campaign.client}
                    </motion.span>
                  </div>
                  <motion.h3
                    layoutId={`title-${campaign.id}`}
                    className="text-4xl font-bold text-white mb-6 group-hover:text-[#6BC323] transition-colors"
                  >
                    {campaign.title}
                  </motion.h3>
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

      {/* Expanded Campaign Modal */}
      {selectedCampaign && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl"
          onClick={() => setSelectedId(null)}
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
                onClick={() => setSelectedId(null)}
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
                  className="px-4 py-1.5 rounded-full bg-[#6BC323]/10 border border-[#6BC323]/20 text-[#6BC323] text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
                >
                  Client: {selectedCampaign.client}
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
                      <Zap className="w-6 h-6 text-blue-500" />
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
                    <Megaphone className="w-6 h-6 text-[#6BC323]" /> Execution
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedCampaign.execution.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#6BC323]/20 text-[#6BC323] font-bold flex items-center justify-center shrink-0">
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
                        className="bg-gradient-to-br from-[#6BC323]/10 to-transparent p-8 rounded-3xl border border-[#6BC323]/20 text-center"
                      >
                        <div className="text-5xl font-bold text-white mb-2">
                          {result.label}
                        </div>
                        <div className="text-[#6BC323] font-bold text-lg mb-4">
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
    </main>
  );
}
