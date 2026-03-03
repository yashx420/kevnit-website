"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Code,
  Smartphone,
  Sparkles,
  Shield,
  Zap,
  Play,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Users,
  Clock,
  Globe,
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const caseStudies = [
  {
    id: 0,
    title: "Razorpay Payment Dashboard",
    client: "Razorpay",
    industry: "Fintech",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tag: "Featured",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    duration: "6 months",
    team: "12 engineers",
    result: "40% faster transactions",
    desc: "Built a real-time payment analytics dashboard handling 10M+ transactions daily. Implemented websocket-based live monitoring, custom charting engine, and automated anomaly detection for Razorpay's merchant platform.",
    challenge:
      "Processing and visualizing 10M+ daily transactions with sub-second latency while maintaining 99.99% uptime.",
    solution:
      "Designed a microservices architecture with Redis caching, Apache Kafka for event streaming, and React-based real-time charts with WebSocket updates.",
  },
  {
    id: 1,
    title: "CRED Rewards Platform",
    client: "CRED",
    industry: "Fintech",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
    tech: ["React Native", "Go", "MongoDB", "GCP"],
    duration: "8 months",
    team: "15 engineers",
    result: "2x user engagement",
    desc: "Developed CRED's gamified rewards platform with real-time coin tracking, brand partnerships module, and a personalized recommendation engine that boosted user engagement by 2x.",
    challenge:
      "Creating a seamless gamification system that scales to 20M+ users with real-time reward calculations.",
    solution:
      "Built with Go microservices for high throughput, React Native for cross-platform mobile, and ML-based personalization engine on GCP Vertex AI.",
  },
  {
    id: 2,
    title: "PhonePe Insurance Module",
    client: "PhonePe",
    industry: "InsurTech",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["Flutter", "Python", "TensorFlow", "AWS"],
    duration: "10 months",
    team: "18 engineers",
    result: "₹50Cr premiums processed",
    desc: "End-to-end insurance comparison and purchase module integrated into PhonePe's super app. AI-powered risk assessment, instant policy issuance, and claims tracking for 5M+ users.",
    challenge:
      "Integrating with 15+ insurance providers and creating a unified UX for policy comparison and instant issuance.",
    solution:
      "Built a Flutter-based UI with Python backend orchestrating provider APIs, and TensorFlow models for dynamic pricing and risk scoring.",
  },
  {
    id: 3,
    title: "Zerodha Trading Analytics",
    client: "Zerodha",
    industry: "Trading",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    tag: "Latest",
    tech: ["Vue.js", "Rust", "TimescaleDB", "K8s"],
    duration: "5 months",
    team: "8 engineers",
    result: "3x faster analytics",
    desc: "High-performance trading analytics platform for Zerodha's Kite. Real-time P&L tracking, advanced charting with 50+ indicators, and portfolio heatmaps processing 100K+ concurrent users.",
    challenge:
      "Sub-millisecond latency for live market data visualization with 100K concurrent WebSocket connections.",
    solution:
      "Rust-based data processing pipeline with TimescaleDB for time-series storage, Vue.js frontend with canvas-based charts for maximum rendering performance.",
  },
];

const services = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Web Apps",
    desc: "React, Next.js, Node.js",
    color: "from-cyan-500/20 to-blue-500/10",
    projects: "120+",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile",
    desc: "Flutter, React Native",
    color: "from-pink-500/20 to-rose-500/10",
    projects: "80+",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "AI / ML",
    desc: "LLMs, Computer Vision",
    color: "from-violet-500/20 to-purple-500/10",
    projects: "45+",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "DevOps",
    desc: "AWS, GCP, CI/CD",
    color: "from-emerald-500/20 to-green-500/10",
    projects: "55+",
  },
];

export const ITCompanyMockup = () => {
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
    <nav className="flex items-center justify-between px-5 py-4 border-b border-white/5 sticky top-0 bg-[#060608]/95 backdrop-blur-md z-50">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setPage("home")}
      >
        <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-blue-500 rounded-md" />
        <span className="text-lg font-bold tracking-tight">Nexlabs</span>
      </div>
      <div className="hidden md:flex gap-5 text-xs font-medium text-gray-500">
        {["Solutions", "Case Studies", "Company", "Careers"].map((t, i) => (
          <span
            key={i}
            className="cursor-pointer hover:text-white"
            onClick={() => setPage("home")}
          >
            {t}
          </span>
        ))}
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold">
        Let&apos;s Talk →
      </button>
    </nav>
  );

  if (page === "case-study") {
    const others = caseStudies.filter((c) => c.id !== selected.id).slice(0, 2);
    return (
      <div
        ref={containerRef}
        className="w-full bg-[#060608] text-white font-sans min-h-[900px] flex flex-col"
      >
        <Nav />
        <div className="px-5 py-3 flex items-center gap-2 text-xs text-gray-500 border-b border-white/5">
          <span
            className="cursor-pointer hover:text-violet-400"
            onClick={() => setPage("home")}
          >
            Home
          </span>
          <ChevronRight className="w-3 h-3" />
          <span
            className="cursor-pointer hover:text-violet-400"
            onClick={() => setPage("home")}
          >
            Case Studies
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate">{selected.title}</span>
        </div>

        {/* Hero */}
        <div className="relative h-[280px] overflow-hidden">
          <button
            onClick={() => setPage("home")}
            className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={selected.img}
            className="w-full h-full object-cover"
            alt={selected.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold bg-violet-500/20 text-violet-400 px-2.5 py-1 rounded-full border border-violet-500/20">
                {selected.industry}
              </span>
              {selected.tag && (
                <span className="text-xs font-bold bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full">
                  {selected.tag}
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold">{selected.title}</h1>
            <p className="text-gray-400 text-sm mt-1">
              Client: {selected.client}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="px-6 py-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <Clock className="w-4 h-4 mx-auto text-violet-400 mb-1" />
              <div className="text-sm font-bold">{selected.duration}</div>
              <div className="text-[10px] text-gray-500">Duration</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <Users className="w-4 h-4 mx-auto text-violet-400 mb-1" />
              <div className="text-sm font-bold">{selected.team}</div>
              <div className="text-[10px] text-gray-500">Team Size</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <Zap className="w-4 h-4 mx-auto text-violet-400 mb-1" />
              <div className="text-sm font-bold">{selected.result}</div>
              <div className="text-[10px] text-gray-500">Impact</div>
            </div>
          </div>

          <h3 className="font-bold text-base mb-2">Overview</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {selected.desc}
          </p>

          <h3 className="font-bold text-base mb-2">The Challenge</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {selected.challenge}
          </p>

          <h3 className="font-bold text-base mb-2">Our Solution</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {selected.solution}
          </p>

          {/* Tech Stack */}
          <h3 className="font-bold text-base mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {selected.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg text-xs text-violet-300 font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-white/5 rounded-xl p-5 text-center">
            <h4 className="font-bold mb-1">Have a similar project?</h4>
            <p className="text-gray-500 text-xs mb-3">
              Free 30-min consultation for startups
            </p>
            <button className="bg-white text-black px-5 py-2.5 rounded-lg font-bold text-xs">
              Schedule a Call <ArrowRight className="w-3 h-3 inline ml-1" />
            </button>
          </div>
        </div>

        {/* More Projects */}
        <div className="px-5 py-6 border-t border-white/5">
          <h3 className="font-bold text-base mb-4">More Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((c) => (
              <div
                key={c.id}
                className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openCase(c)}
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={c.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={c.title}
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-violet-400 font-semibold">
                    {c.client}
                  </span>
                  <h4 className="font-bold text-sm mt-0.5">{c.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="border-t border-white/5 px-5 py-5 mt-auto text-sm text-gray-600 flex justify-between">
          <span className="font-bold text-white">Nexlabs</span>
          <span>Bengaluru · Mumbai · Hyderabad</span>
        </footer>
      </div>
    );
  }

  // HOME
  return (
    <div
      ref={containerRef}
      className="w-full bg-[#060608] text-white font-sans min-h-[900px] flex flex-col"
    >
      <Nav />

      {/* Hero */}
      <div className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-500/15 to-transparent rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-semibold tracking-wider uppercase">
              Now with AI & ML Solutions
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-4 tracking-tight">
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Digital Products
            </span>{" "}
            That Scale.
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            From MVPs to enterprise platforms, 300+ projects for startups and
            Fortune 500s across India.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-violet-500/20">
              View Our Work
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2">
              <Play className="w-4 h-4" /> 90s Intro
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-5 py-10">
        <h2 className="text-lg font-bold mb-6 text-center">Our Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${s.color} border border-white/5 rounded-xl p-4 cursor-pointer hover:border-white/15 transition-all`}
            >
              <div className="text-white mb-2">{s.icon}</div>
              <h3 className="font-bold text-sm mb-0.5">{s.title}</h3>
              <p className="text-gray-500 text-xs mb-2">{s.desc}</p>
              <span className="text-violet-400 text-[10px] font-bold">
                {s.projects} projects
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="px-5 py-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold">Featured Work</h2>
          <span className="text-xs font-bold text-violet-400 cursor-pointer flex items-center gap-1">
            All Cases <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((c) => (
            <div
              key={c.id}
              className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden group cursor-pointer hover:border-violet-500/20 transition-all"
              onClick={() => openCase(c)}
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={c.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={c.title}
                />
                {c.tag && (
                  <span className="absolute top-3 left-3 bg-violet-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <span className="text-[10px] text-violet-400 font-semibold uppercase tracking-wider">
                  {c.client} · {c.industry}
                </span>
                <h3 className="font-bold text-sm mt-1">{c.title}</h3>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                  {c.desc}
                </p>
                <div className="flex items-center gap-1 mt-2 text-violet-400 text-xs font-semibold">
                  View Case Study <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="px-5 py-6 text-center border-y border-white/5">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
          Trusted by 300+ companies
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap opacity-30">
          {["Flipkart", "Razorpay", "CRED", "Zerodha", "PhonePe"].map(
            (n, i) => (
              <span key={i} className="text-lg font-bold">
                {n}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "300+", label: "Projects" },
            { val: "99.9%", label: "Uptime" },
            { val: "6", label: "Countries" },
            { val: "150+", label: "Engineers" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-violet-400">{s.val}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/5 px-5 py-5 mt-auto text-sm text-gray-600 flex justify-between">
        <span className="font-bold text-white">Nexlabs</span>
        <span>Bengaluru · Mumbai · Hyderabad</span>
      </footer>
    </div>
  );
};
