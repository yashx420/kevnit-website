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
}

const projects: Project[] = [
  {
    id: "eco-shop",
    title: "EcoShop E-Commerce",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
  },
  {
    id: "fintech-dash",
    title: "FinTech Dashboard",
    category: "SaaS Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    id: "modern-re",
    title: "Modern Real Estate",
    category: "Corporate Website",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Three.js", "Next.js", "PostgreSQL"],
  },
  {
    id: "health-portal",
    title: "Healthcare Portal",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "WebRTC", "AWS"],
  },
];

// --- Mockup Components ---

const EcoShopMockup = () => (
  <div className="w-full bg-[#faf9f6] text-black font-sans min-h-[800px] flex flex-col">
    {/* Nav */}
    <nav className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
      <div className="text-2xl font-bold tracking-tight text-green-800">
        ECO<span className="text-black">SHOP.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <span className="cursor-pointer hover:text-green-700">
          New Arrivals
        </span>
        <span className="cursor-pointer hover:text-green-700">
          Home & Living
        </span>
        <span className="cursor-pointer hover:text-green-700">Zero Waste</span>
        <span className="cursor-pointer hover:text-green-700">About Us</span>
      </div>
      <div className="flex gap-4">
        <Search className="w-5 h-5" />
        <ShoppingCart className="w-5 h-5" />
        <Menu className="w-5 h-5 md:hidden" />
      </div>
    </nav>

    {/* Hero */}
    <div className="relative w-full h-[400px] bg-green-50 flex items-center px-12">
      <div className="max-w-md z-10">
        <span className="text-green-700 font-semibold tracking-wider text-sm mb-2 block">
          SUMMER COLLECTION
        </span>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Sustainable Living Made Beautiful.
        </h1>
        <p className="text-gray-600 mb-8">
          Discover our new range of expertly crafted, 100% biodegradable home
          essentials.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors">
          Shop Now
        </button>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-bl-full shadow-2xl" />
    </div>

    {/* Products grid */}
    <div className="p-12">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold">Trending Now</h2>
        <span className="text-sm font-semibold flex items-center gap-1 cursor-pointer hover:underline">
          View All <ChevronRight className="w-4 h-4" />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            name: "Bamboo Carafe",
            price: "$34.00",
            img: "https://images.unsplash.com/photo-1596263576924-ac19decd2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Organic Linen Throw",
            price: "$89.00",
            img: "https://images.unsplash.com/photo-1583847268964-b28ce8f30bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Recycled Glass Vase",
            price: "$42.00",
            img: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Ceramic Bowl Set",
            price: "$55.00",
            img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-lg">
              <img
                src={item.img}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                alt={item.name}
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm hover:scale-110 transition-transform">
                <Heart className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <div className="flex gap-1 text-yellow-400 my-1">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <p className="text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FinTechMockup = () => (
  <div className="w-full bg-[#0f111a] text-white font-sans min-h-[800px] flex">
    {/* Sidebar */}
    <div className="w-64 border-r border-white/10 p-6 flex flex-col hidden md:flex">
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-12">
        NEXUS.fi
      </div>
      <div className="space-y-2 flex-grow">
        {[
          {
            icon: <Home className="w-5 h-5" />,
            label: "Dashboard",
            active: true,
          },
          {
            icon: <Activity className="w-5 h-5" />,
            label: "Markets",
            active: false,
          },
          {
            icon: <DollarSign className="w-5 h-5" />,
            label: "Portfolios",
            active: false,
          },
          {
            icon: <FileText className="w-5 h-5" />,
            label: "Reports",
            active: false,
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${item.active ? "bg-indigo-500/20 text-indigo-400" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
          >
            {item.icon} <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white cursor-pointer mt-auto">
        <Settings className="w-5 h-5" />{" "}
        <span className="font-medium">Settings</span>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-8 bg-gradient-to-br from-[#0f111a] to-[#16192b]">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-gray-400 text-sm">
            Welcome back, Sarah. Markets are up 2.4% today.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#1e2235] px-4 py-2 rounded-lg flex items-center gap-2 text-sm border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />{" "}
            Live Sync connection active
          </div>
          <img
            src="https://i.pravatar.cc/100?img=5"
            className="w-10 h-10 rounded-full border-2 border-indigo-500"
            alt="Avatar"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl" />
          <span className="text-gray-400 text-sm font-medium">
            Total Balance
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-1">$1.248,502.50</h2>
          <span className="text-green-400 text-sm flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +$14,203 (1.2%)
          </span>
        </div>
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5">
          <span className="text-gray-400 text-sm font-medium">
            Monthly Return
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-1">+4.2%</h2>
          <span className="text-gray-500 text-sm text-sm">
            Avg. market: +2.1%
          </span>
        </div>
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5">
          <span className="text-gray-400 text-sm font-medium">
            Active Assets
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-1">142</h2>
          <span className="text-gray-500 text-sm text-sm">
            Across 4 portfolios
          </span>
        </div>
      </div>

      {/* Chart Mockup */}
      <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5 h-[400px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Portfolio Performance</h3>
          <div className="flex gap-2">
            {["1D", "1W", "1M", "1Y", "ALL"].map((t) => (
              <button
                key={t}
                className={`px-3 py-1 rounded text-xs font-semibold ${t === "1Y" ? "bg-indigo-500 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        {/* Fake graph lines */}
        <div className="flex-1 relative border-l border-b border-gray-700 mt-4 mx-4 flex items-end">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,60 T500,40 T600,70 T700,20 T800,40 T900,10 L900,200 L0,200 Z"
              fill="url(#grad)"
            />
            <path
              d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,60 T500,40 T600,70 T700,20 T800,40 T900,10"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-8 right-24 bg-[#0f111a] border border-indigo-500/50 p-3 rounded-lg text-sm shadow-xl shadow-indigo-500/10">
            <div className="text-gray-400 mb-1">Oct 24, 2023</div>
            <div className="font-bold text-lg text-white">$1,159,200</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ModernRealEstateMockup = () => (
  <div className="w-full bg-white text-gray-900 font-sans min-h-[800px] overflow-hidden relative">
    {/* Nav overlay */}
    <nav className="absolute top-0 w-full z-20 flex justify-between items-center p-8 text-white">
      <div className="text-xl font-bold tracking-[0.2em] uppercase">
        LUMIÈRE
      </div>
      <div className="hidden md:flex gap-12 text-sm tracking-wide">
        <span className="border-b border-white pb-1">Properties</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
          Agents
        </span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
          Journal
        </span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
          Contact
        </span>
      </div>
      <div>
        <Menu className="w-6 h-6" />
      </div>
    </nav>

    {/* Main "3D" Hero split */}
    <div className="h-[700px] flex">
      <div className="w-full md:w-3/5 relative bg-black">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover opacity-80"
          alt="Mansion"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-20 left-16 max-w-lg text-white">
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 border border-white/30 rounded-full text-xs tracking-widest backdrop-blur-md">
              FOR SALE
            </span>
            <span className="px-3 py-1 bg-white text-black rounded-full text-xs tracking-widest font-semibold flex items-center gap-1">
              <Video className="w-3 h-3" /> 3D TOUR
            </span>
          </div>
          <h1 className="text-6xl font-serif mb-4 leading-tight">
            The Beverly
            <br />
            Estate.
          </h1>
          <p className="flex items-center gap-2 text-gray-300 mb-8">
            <MapPin className="w-4 h-4" /> 1400 Summitridge Dr, Beverly Hills
          </p>
          <div className="text-3xl font-light">$24,500,000</div>
        </div>
      </div>

      {/* Details pane */}
      <div className="hidden md:flex flex-col w-2/5  bg-[#f9f9f9]">
        <div className="p-16 flex-1">
          <h3 className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
            Property Details
          </h3>
          <div className="grid grid-cols-2 gap-8 mb-12 border-b border-gray-200 pb-12">
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Bed className="w-5 h-5" /> Bedrooms
              </div>
              <div className="text-2xl font-serif">7</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Bath className="w-5 h-5" /> Bathrooms
              </div>
              <div className="text-2xl font-serif">9</div>
            </div>
            <div>
              <div className="text-gray-500 mb-2">Interior Size</div>
              <div className="text-2xl font-serif">
                12,500{" "}
                <span className="text-sm text-gray-400 font-sans">sq ft</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-2">Lot Size</div>
              <div className="text-2xl font-serif">
                1.2{" "}
                <span className="text-sm text-gray-400 font-sans">acres</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            An architectural masterpiece featuring sweeping panoramic views from
            downtown to the ocean. Fully integrated smart home technology,
            zero-edge infinity pool, and a 12-car subterranean gallery.
          </p>
          <button className="w-full bg-black text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-800 transition-colors">
            Schedule Private Viewing
          </button>
        </div>
      </div>
    </div>
  </div>
);

const HealthPortalMockup = () => (
  <div className="w-full bg-[#f0f4f8] text-gray-800 font-sans min-h-[800px] flex justify-center items-center p-8">
    {/* App Container simulating a rounded desktop window */}
    <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[700px] border border-blue-100">
      <nav className="bg-blue-600 text-white p-4 px-8 flex justify-between items-center shadow-md z-10 relative">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Activity className="w-6 h-6 text-white" /> CareLink
        </div>
        <div className="flex items-center gap-6">
          <span className="text-blue-100 text-sm">Emergency: 911</span>
          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <div className="text-sm font-semibold">Robert Jensen</div>
              <div className="text-xs text-blue-200">Patient ID: #84392</div>
            </div>
            <img
              src="https://i.pravatar.cc/100?img=11"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Avatar"
            />
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 bg-white border-r border-gray-100 p-4 py-8 space-y-2 hidden md:block">
          {[
            "Overview",
            "Appointments",
            "Test Results",
            "Messages",
            "Prescriptions",
            "Billing",
          ].map((item, i) => (
            <div
              key={item}
              className={`p-3 rounded-lg cursor-pointer font-medium text-sm transition-colors ${i === 0 ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}
            >
              {item}
              {item === "Messages" && (
                <span className="float-right bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                  2
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 bg-[#f8fafc] p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold text-blue-900 mb-6">
            Good morning, Robert.
          </h1>

          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm mb-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Upcoming Telehealth Visit
                </h3>
                <p className="text-gray-500 text-sm">
                  Today at 2:30 PM with Dr. Sarah Chen (Cardiology)
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 shadow-lg shadow-blue-600/20">
              Join Waiting Room
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">Recent Lab Results</h3>
                <span className="text-blue-600 text-sm font-medium cursor-pointer">
                  View All
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Comprehensive Metabolic Panel",
                    date: "Oct 12, 2023",
                    status: "Normal",
                    color: "text-green-600 bg-green-50",
                  },
                  {
                    name: "Lipid Panel",
                    date: "Oct 12, 2023",
                    status: "Review",
                    color: "text-yellow-600 bg-yellow-50",
                  },
                ].map((test, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="font-medium text-sm text-gray-800">
                        {test.name}
                      </div>
                      <div className="text-xs text-gray-500">{test.date}</div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${test.color}`}
                    >
                      {test.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">
                  Active Prescriptions
                </h3>
                <button className="text-blue-600 border border-blue-200 px-3 py-1 rounded text-xs font-semibold hover:bg-blue-50">
                  Request Refill
                </button>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Atorvastatin 20mg",
                    prep: "Take 1 tablet by mouth daily",
                    refills: "2 refills remaining",
                  },
                  {
                    name: "Lisinopril 10mg",
                    prep: "Take 1 tablet by mouth daily",
                    refills: "0 refills remaining • Needs renewal",
                  },
                ].map((med, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0">
                      💊
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-800">
                        {med.name}
                      </div>
                      <div className="text-xs text-gray-500 leading-snug">
                        {med.prep}
                        <br />
                        <span
                          className={
                            med.refills.includes("0")
                              ? "text-red-500 font-medium"
                              : "text-green-600"
                          }
                        >
                          {med.refills}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
