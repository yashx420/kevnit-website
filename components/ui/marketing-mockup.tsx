"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Target,
  BarChart3,
  MessageSquare,
  Mail,
  Award,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  ExternalLink,
  Zap,
  Globe,
  Star,
} from "lucide-react";

const caseStudies = [
  {
    id: 0,
    brand: "boAt Lifestyle",
    industry: "D2C Electronics",
    result: "₹12Cr revenue in 90 days",
    metric: "4.8x ROAS",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    tag: "Featured",
    channels: ["Meta Ads", "Google Ads", "Influencer"],
    budget: "₹2.5Cr",
    timeline: "90 days",
    desc: "Scaled boAt's festive season campaign across Meta and Google Ads with a hyper-targeted audience strategy, achieving ₹12Cr in attributed revenue. Implemented dynamic product ads with automated creative testing across 200+ ad variants.",
    strategy:
      "Segmented audiences by purchase intent (wishlisters, cart abandoners, high-value buyers). Built automated creative pipelines with dynamic product feeds. A/B tested 200+ ad variants with AI-powered budget allocation.",
    results: [
      { label: "Revenue", val: "₹12Cr" },
      { label: "ROAS", val: "4.8x" },
      { label: "CTR", val: "3.2%" },
      { label: "CAC", val: "₹180" },
    ],
  },
  {
    id: 1,
    brand: "Mamaearth",
    industry: "D2C Beauty",
    result: "3x organic traffic in 6 months",
    metric: "3x Traffic",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    channels: ["SEO", "Content Marketing", "PR"],
    budget: "₹80L",
    timeline: "6 months",
    desc: "Comprehensive SEO overhaul for Mamaearth's D2C store, growing organic traffic from 500K to 1.5M monthly visitors. Created 200+ SEO-optimized product pages and blog articles targeting high-intent beauty keywords.",
    strategy:
      "Technical SEO audit with 150+ fixes. Content cluster strategy around skincare concerns. Built authority through PR placements in Vogue, Elle, and Femina. Implemented schema markup for product rich snippets.",
    results: [
      { label: "Traffic", val: "1.5M/mo" },
      { label: "Growth", val: "3x" },
      { label: "Keywords", val: "500+ #1" },
      { label: "Revenue", val: "₹8Cr" },
    ],
  },
  {
    id: 2,
    brand: "Lenskart",
    industry: "D2C Eyewear",
    result: "₹25Cr in 6 months via Performance",
    metric: "5.2x ROAS",
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
    tag: "Best ROI",
    channels: ["Google Ads", "YouTube", "WhatsApp"],
    budget: "₹5Cr",
    timeline: "6 months",
    desc: "Full-funnel performance marketing for Lenskart's online store. Built YouTube awareness campaigns driving 50M+ views, combined with Google Shopping ads and WhatsApp remarketing for high-value conversions.",
    strategy:
      "YouTuber collaboration strategy with 20+ creators. Google Shopping feed optimization with dynamic pricing. WhatsApp Business API integration for cart recovery — 32% recovery rate.",
    results: [
      { label: "Revenue", val: "₹25Cr" },
      { label: "ROAS", val: "5.2x" },
      { label: "Views", val: "50M+" },
      { label: "Recovery", val: "32%" },
    ],
  },
  {
    id: 3,
    brand: "Sugar Cosmetics",
    industry: "D2C Beauty",
    result: "10M social reach per month",
    metric: "10M Reach",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    channels: ["Instagram", "YouTube", "Influencer"],
    budget: "₹1.2Cr",
    timeline: "Ongoing",
    desc: "Social media management and influencer marketing for Sugar Cosmetics. Built a creator network of 500+ micro-influencers, achieving 10M+ monthly reach with 4.5% average engagement rate.",
    strategy:
      "Identified and onboarded 500+ micro-influencers across Instagram and YouTube. Created a branded content framework with trending audio strategy. Implemented social commerce via Instagram Shops.",
    results: [
      { label: "Reach", val: "10M/mo" },
      { label: "Engagement", val: "4.5%" },
      { label: "Creators", val: "500+" },
      { label: "Sales", val: "₹3Cr" },
    ],
  },
];

const servicesList = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "SEO",
    stat: "3x Organic Traffic",
    bg: "bg-amber-50",
    tx: "text-amber-600",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Performance Ads",
    stat: "4.2x ROAS Avg.",
    bg: "bg-blue-50",
    tx: "text-blue-600",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Social Media",
    stat: "10M+ Reach/mo",
    bg: "bg-pink-50",
    tx: "text-pink-600",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email & WhatsApp",
    stat: "32% Open Rate",
    bg: "bg-green-50",
    tx: "text-green-600",
  },
];

export const MarketingAgencyMockup = () => {
  const [page, setPage] = useState<"home" | "case-study">("home");
  const [selected, setSelected] = useState(caseStudies[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const sp =
        containerRef.current.closest("[data-lenis-prevent]") ||
        containerRef.current.closest(".overflow-y-auto");
      if (sp) sp.scrollTop = 0;
    }
  }, [page, selected]);

  const openCase = (c: (typeof caseStudies)[0]) => {
    setSelected(c);
    setPage("case-study");
  };

  const Nav = () => (
    <nav className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setPage("home")}
      >
        <Target className="w-5 h-5 text-orange-500" />
        <span className="text-lg font-bold tracking-tight">
          Growth<span className="text-orange-500">Box</span>
        </span>
      </div>
      <div className="hidden md:flex gap-5 text-xs font-medium text-gray-500">
        {["Services", "Results", "About", "Blog"].map((t, i) => (
          <span
            key={i}
            className="cursor-pointer hover:text-orange-500"
            onClick={() => setPage("home")}
          >
            {t}
          </span>
        ))}
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold">
        Free Audit →
      </button>
    </nav>
  );

  if (page === "case-study") {
    const others = caseStudies.filter((c) => c.id !== selected.id).slice(0, 2);
    return (
      <div
        ref={containerRef}
        className="w-full bg-white text-gray-900 font-sans min-h-[900px] flex flex-col"
      >
        <Nav />
        <div className="px-5 py-3 flex items-center gap-2 text-xs text-gray-400 border-b border-gray-100">
          <span
            className="cursor-pointer hover:text-orange-500"
            onClick={() => setPage("home")}
          >
            Home
          </span>
          <ChevronRight className="w-3 h-3" />
          <span
            className="cursor-pointer hover:text-orange-500"
            onClick={() => setPage("home")}
          >
            Case Studies
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 truncate">{selected.brand}</span>
        </div>

        {/* Hero */}
        <div className="relative h-[260px] overflow-hidden">
          <button
            onClick={() => setPage("home")}
            className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={selected.img}
            className="w-full h-full object-cover"
            alt={selected.brand}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex gap-2 mb-2">
              {selected.tag && (
                <span className="text-[10px] font-bold bg-orange-500 px-2.5 py-1 rounded-full">
                  {selected.tag}
                </span>
              )}
              <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {selected.industry}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{selected.brand}</h1>
            <p className="text-white/70 text-sm mt-1">{selected.result}</p>
          </div>
        </div>

        {/* Results Cards */}
        <div className="px-5 py-5">
          <div className="grid grid-cols-4 gap-2">
            {selected.results.map((r, i) => (
              <div
                key={i}
                className="bg-orange-50 rounded-xl p-3 text-center border border-orange-100"
              >
                <div className="text-lg font-black text-orange-600">
                  {r.val}
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="px-6 py-4">
          {/* Campaign Info */}
          <div className="grid grid-cols-3 gap-3 mb-5 text-center">
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="text-xs text-gray-400 mb-0.5">Budget</div>
              <div className="font-bold text-sm">{selected.budget}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="text-xs text-gray-400 mb-0.5">Timeline</div>
              <div className="font-bold text-sm">{selected.timeline}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="text-xs text-gray-400 mb-0.5">Channels</div>
              <div className="font-bold text-sm">
                {selected.channels.length}
              </div>
            </div>
          </div>

          <h3 className="font-bold text-base mb-2">Overview</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {selected.desc}
          </p>

          <h3 className="font-bold text-base mb-2">Strategy</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {selected.strategy}
          </p>

          {/* Channels */}
          <h3 className="font-bold text-base mb-3">Channels Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {selected.channels.map((ch, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-semibold border border-orange-100"
              >
                {ch}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-5 text-center text-white">
            <h4 className="font-bold text-base mb-1">Want similar results?</h4>
            <p className="text-white/70 text-xs mb-3">
              Get a free performance audit for your brand
            </p>
            <button className="bg-white text-orange-600 px-5 py-2.5 rounded-full font-bold text-xs">
              Get Free Audit <ArrowRight className="w-3 h-3 inline ml-1" />
            </button>
          </div>
        </div>

        {/* More */}
        <div className="px-5 py-6 bg-gray-50 border-t border-gray-100">
          <h3 className="font-bold text-base mb-4">More Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer group"
                onClick={() => openCase(c)}
              >
                <div className="h-28 overflow-hidden">
                  <img
                    src={c.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={c.brand}
                  />
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-bold text-orange-500">
                    {c.brand}
                  </span>
                  <p className="text-xs font-semibold mt-0.5">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-gray-900 text-white px-5 py-5 text-xs flex justify-between items-center mt-auto">
          <span className="font-bold text-sm">
            Growth<span className="text-orange-400">Box</span>
          </span>
          <span className="text-gray-500">Mumbai · Delhi · Bengaluru</span>
        </footer>
      </div>
    );
  }

  // HOME
  return (
    <div
      ref={containerRef}
      className="w-full bg-white text-gray-900 font-sans min-h-[900px] flex flex-col"
    >
      <Nav />

      {/* Hero */}
      <div className="px-6 pt-14 pb-10 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold mb-5">
            <Award className="w-3.5 h-3.5" /> #1 Performance Marketing Agency in
            India
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">
            We Don&apos;t Just Market. We{" "}
            <span className="text-orange-500">Multiply</span> Revenue.
          </h1>
          <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            Google Ads, Meta Ads, SEO, and Content — ₹500Cr+ revenue generated
            for 200+ Indian D2C brands.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-orange-500/20">
              Get Your Free Audit
            </button>
            <button className="bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-sm text-gray-700">
              See Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-5 py-10">
        <h2 className="text-lg font-bold mb-2 text-center">
          Full-Funnel Services
        </h2>
        <p className="text-gray-500 text-center mb-6 text-xs">
          Everything you need to dominate digital
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {servicesList.map((s, i) => (
            <div
              key={i}
              className={`${s.bg} border border-gray-100 rounded-xl p-4 text-center cursor-pointer hover:shadow-md transition-all`}
            >
              <div
                className={`w-10 h-10 rounded-xl ${s.bg} ${s.tx} flex items-center justify-center mx-auto mb-2`}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-sm mb-0.5">{s.title}</h3>
              <p className={`${s.tx} text-xs font-semibold`}>{s.stat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results Banner */}
      <div className="mx-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-8">
        <h3 className="text-base font-bold mb-4 text-center">
          Numbers That Speak
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "₹500Cr+", l: "Revenue" },
            { val: "4.2x", l: "Avg. ROAS" },
            { val: "200+", l: "D2C Brands" },
            { val: "10M+", l: "Monthly Reach" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl font-bold">{s.val}</div>
              <div className="text-orange-100 text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="px-5 py-8">
        <h2 className="text-lg font-bold mb-5">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((c) => (
            <div
              key={c.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-md transition-all"
              onClick={() => openCase(c)}
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={c.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={c.brand}
                />
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  {c.channels.slice(0, 2).map((t, j) => (
                    <span
                      key={j}
                      className="text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-sm">{c.brand}</h3>
                <p className="text-orange-500 font-semibold text-xs mt-0.5">
                  {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white px-5 py-5 mt-auto text-xs flex justify-between items-center">
        <span className="font-bold text-sm">
          Growth<span className="text-orange-400">Box</span>
        </span>
        <span className="text-gray-500">Mumbai · Delhi · Bengaluru</span>
      </footer>
    </div>
  );
};
