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

// --- Mockup Components ---

const EcoShopMockup = () => (
  <div className="w-full bg-[#faf9f6] text-black font-sans h-[800px] overflow-y-auto flex flex-col custom-scrollbar">
    {/* Nav */}
    <nav className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-50 shrink-0">
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
        <Search className="w-5 h-5 cursor-pointer" />
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
        <Menu className="w-5 h-5 md:hidden cursor-pointer" />
      </div>
    </nav>

    {/* Hero */}
    <div className="relative w-full h-[500px] bg-green-50 flex items-center px-12 shrink-0">
      <div className="max-w-md z-10">
        <span className="text-green-700 font-semibold tracking-wider text-sm mb-2 block">
          SUMMER COLLECTION
        </span>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Sustainable Living Made Beautiful.
        </h1>
        <p className="text-gray-600 mb-8">
          Discover our new range of expertly crafted, 100% biodegradable home
          essentials. Hand-poured ceramics, organic cotton, and bamboo.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors shadow-lg shadow-black/20">
          Shop Now
        </button>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-bl-[100px] shadow-2xl" />
    </div>

    {/* Featured Categories */}
    <div className="px-12 py-16 bg-white shrink-0">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Kitchenware",
            img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Bath & Body",
            img: "https://images.unsplash.com/photo-1583847268964-b28ce8f30bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Decor",
            img: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
        ].map((cat, i) => (
          <div
            key={i}
            className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={cat.img}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt={cat.name}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold tracking-wide">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Products grid */}
    <div className="p-12 shrink-0 bg-[#faf9f6]">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
          <p className="text-gray-500">
            Our most loved sustainable pieces this week.
          </p>
        </div>
        <span className="text-sm font-semibold flex items-center gap-1 cursor-pointer hover:text-green-700 hover:underline">
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
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-xl">
              <img
                src={item.img}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                alt={item.name}
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm hover:scale-110 transition-transform">
                <Heart className="w-4 h-4 text-gray-400" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 py-3 text-center text-sm font-bold uppercase tracking-wider text-green-800 backdrop-blur-sm">
                Quick Add
              </div>
            </div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <div className="flex gap-1 text-yellow-400 my-1">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current text-gray-300" />
              <span className="text-gray-400 text-xs ml-1">(24)</span>
            </div>
            <p className="text-gray-900 font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Sustainability Mission */}
    <div className="flex bg-green-900 text-white shrink-0">
      <div className="w-1/2 p-16 flex justify-center flex-col">
        <h2 className="text-4xl font-bold mb-6 font-serif">
          1 Product = 1 Tree Planted
        </h2>
        <p className="text-green-100/80 text-lg leading-relaxed mb-8">
          We believe in leaving the world better than we found it. That's why
          every purchase made on EcoShop contributes directly to our global
          reforestation initiatives in partnership with major climate funds.
        </p>
        <div className="flex gap-12 mb-8 border-t border-green-800 pt-8">
          <div>
            <div className="text-3xl font-bold text-green-300 mb-1">142K+</div>
            <div className="text-sm text-green-200">Trees Planted</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-300 mb-1">2.4M</div>
            <div className="text-sm text-green-200">Tons CO₂ Offset</div>
          </div>
        </div>
        <div>
          <button className="border-2 border-green-400 text-green-300 px-6 py-2 rounded-full font-medium hover:bg-green-400 hover:text-green-900 transition-colors">
            Read Our Impact Report
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
    </div>

    {/* Footer */}
    <footer className="bg-white px-12 pt-16 pb-8 border-t border-gray-200 shrink-0">
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div className="col-span-1">
          <div className="text-2xl font-bold tracking-tight text-green-800 mb-4">
            ECO<span className="text-black">SHOP.</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Sustainable design for conscious living. Crafted with the Earth in
            mind.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-green-100 text-gray-500 hover:text-green-700 transition-colors">
              in
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-green-100 text-gray-500 hover:text-green-700 transition-colors">
              tw
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-green-100 text-gray-500 hover:text-green-700 transition-colors">
              ig
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Shop</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="hover:text-green-600 cursor-pointer">
              New Arrivals
            </li>
            <li className="hover:text-green-600 cursor-pointer">Bestsellers</li>
            <li className="hover:text-green-600 cursor-pointer">Kitchenware</li>
            <li className="hover:text-green-600 cursor-pointer">Bath & Body</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="hover:text-green-600 cursor-pointer">Track Order</li>
            <li className="hover:text-green-600 cursor-pointer">Returns</li>
            <li className="hover:text-green-600 cursor-pointer">FAQ</li>
            <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Stay in the Loop</h4>
          <p className="text-gray-500 text-sm mb-4">
            Subscribe to receive updates on new products and sustainability
            tips.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-100 px-4 py-2 rounded-l-lg outline-none text-sm w-full"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-green-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-100">
        &copy; 2024 EcoShop. All rights reserved. Mockup by Kevnit Digital
        Solutions.
      </div>
    </footer>
  </div>
);

const FinTechMockup = () => (
  <div className="w-full bg-[#0f111a] text-white font-sans h-[800px] overflow-y-auto flex custom-scrollbar">
    {/* Sidebar */}
    <div className="w-64 border-r border-white/10 p-6 flex-col hidden md:flex shrink-0 sticky top-0 h-[800px]">
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

    {/* Main Content scrollable area */}
    <div className="flex-1 p-8 bg-gradient-to-br from-[#0f111a] to-[#16192b]">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-gray-400 text-sm">
            Welcome back, Sarah. Markets are up 2.4% today.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#1e2235] px-4 py-2 rounded-lg flex items-center gap-2 text-sm border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />{" "}
            Live Sync active
          </div>
          <img
            src="https://i.pravatar.cc/100?img=5"
            className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 hover:ring-offset-[#0f111a] transition-all"
            alt="Avatar"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer hover:border-indigo-500/50 transition-colors">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/40 transition-colors" />
          <span className="text-gray-400 text-sm font-medium">
            Total Balance
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-1">$1,248,502.50</h2>
          <span className="text-green-400 text-sm flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +$14,203 (1.2%)
          </span>
        </div>
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5 cursor-pointer hover:border-indigo-500/50 transition-colors">
          <span className="text-gray-400 text-sm font-medium">
            Monthly Return
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-1">+4.2%</h2>
          <span className="text-gray-500 text-sm">Avg. market: +2.1%</span>
        </div>
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5 cursor-pointer hover:border-indigo-500/50 transition-colors">
          <span className="text-gray-400 text-sm font-medium">
            Active Assets
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-1">142</h2>
          <span className="text-gray-500 text-sm">Across 4 portfolios</span>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5 h-[400px] flex flex-col mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Portfolio Performance</h3>
          <div className="flex gap-2">
            {["1D", "1W", "1M", "1Y", "ALL"].map((t) => (
              <button
                key={t}
                className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${t === "1Y" ? "bg-indigo-500 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
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

      {/* Lower Section: Transactions & Active Investments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Transactions */}
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Recent Transactions</h3>
            <span className="text-sm text-indigo-400 cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <div className="space-y-4">
            {[
              {
                name: "AAPL - Apple Inc.",
                action: "Buy",
                amount: "$4,250.00",
                date: "Today, 14:32",
                icon: "🍏",
                positive: true,
              },
              {
                name: "US Treasury Bonds",
                action: "Sell",
                amount: "$10,000.00",
                date: "Yesterday",
                icon: "🏦",
                positive: false,
              },
              {
                name: "ETH - Ethereum",
                action: "Buy",
                amount: "$1,800.50",
                date: "Oct 22",
                icon: "⟠",
                positive: true,
              },
              {
                name: "Dividend Payout",
                action: "Deposit",
                amount: "$342.10",
                date: "Oct 20",
                icon: "💰",
                positive: true,
              },
            ].map((tx, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    {tx.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{tx.name}</div>
                    <div className="text-xs text-gray-500">{tx.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-semibold text-sm ${tx.positive ? "text-white" : "text-gray-300"}`}
                  >
                    {tx.action}
                  </div>
                  <div
                    className={`text-xs ${tx.positive ? "text-green-400" : "text-red-400"}`}
                  >
                    {tx.positive ? "+" : "-"}
                    {tx.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Investments */}
        <div className="bg-[#1e2235] p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Top Holdings</h3>
            <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
          </div>
          <div className="space-y-4 w-full">
            {[
              {
                name: "S&P 500 ETF",
                ticker: "VOO",
                allocation: "35%",
                value: "$436,975",
                perf: "+12.4%",
              },
              {
                name: "Technology ETF",
                ticker: "QQQ",
                allocation: "22%",
                value: "$274,670",
                perf: "+24.1%",
              },
              {
                name: "Emerging Markets",
                ticker: "VWO",
                allocation: "15%",
                value: "$187,275",
                perf: "-2.3%",
              },
              {
                name: "Bitcoin Trust",
                ticker: "GBTC",
                allocation: "8%",
                value: "$99,880",
                perf: "+64.2%",
              },
            ].map((asset, i) => (
              <div
                key={i}
                className="group flex flex-col gap-2 p-3 border-b border-white/5 last:border-0 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                    {asset.name}{" "}
                    <span className="text-gray-500 font-normal">
                      ({asset.ticker})
                    </span>
                  </div>
                  <div className="font-bold">{asset.value}</div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 items-center">
                  <div className="flex items-center gap-2 w-1/2">
                    <span>{asset.allocation}</span>
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500"
                        style={{ width: asset.allocation }}
                      />
                    </div>
                  </div>
                  <span
                    className={
                      asset.perf.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {asset.perf} YTD
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ModernRealEstateMockup = () => (
  <div className="w-full bg-white text-gray-900 font-sans h-[800px] overflow-y-auto overflow-x-hidden relative custom-scrollbar">
    {/* Nav overlay */}
    <nav className="absolute top-0 w-full z-20 flex justify-between items-center p-8 text-white bg-gradient-to-b from-black/60 to-transparent">
      <div className="text-xl font-bold tracking-[0.2em] uppercase cursor-pointer hover:opacity-80 transition-opacity">
        LUMIÈRE
      </div>
      <div className="hidden md:flex gap-12 text-sm tracking-wide">
        <span className="border-b border-white pb-1 cursor-pointer">
          Properties
        </span>
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
        <Menu className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    </nav>

    {/* Main "3D" Hero split */}
    <div className="h-[700px] flex flex-col md:flex-row shrink-0 bg-black">
      <div className="w-full md:w-3/5 relative bg-black h-full">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover opacity-80"
          alt="Mansion"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-20 left-16 max-w-lg text-white">
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 border border-white/30 rounded-full text-xs tracking-widest backdrop-blur-md">
              FOR SALE
            </span>
            <span className="px-3 py-1 bg-white text-black rounded-full text-xs tracking-widest font-semibold flex items-center gap-1 cursor-pointer hover:bg-gray-200 transition-colors">
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
          <div className="text-4xl font-light">$24,500,000</div>
        </div>
      </div>

      {/* Details pane */}
      <div className="hidden md:flex flex-col w-2/5 bg-[#f9f9f9] h-full overflow-y-auto">
        <div className="p-16 flex-1 flex flex-col justify-center">
          <h3 className="text-sm font-bold tracking-widest text-gray-400 mb-8 uppercase">
            Property Details
          </h3>
          <div className="grid grid-cols-2 gap-8 mb-12 border-b border-gray-200 pb-12">
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Bed className="w-5 h-5" /> Bedrooms
              </div>
              <div className="text-3xl font-serif">7</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Bath className="w-5 h-5" /> Bathrooms
              </div>
              <div className="text-3xl font-serif">9</div>
            </div>
            <div>
              <div className="text-gray-500 mb-2">Interior Size</div>
              <div className="text-3xl font-serif">
                12,500{" "}
                <span className="text-sm text-gray-400 font-sans">sq ft</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-2">Lot Size</div>
              <div className="text-3xl font-serif">
                1.2{" "}
                <span className="text-sm text-gray-400 font-sans">acres</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            An architectural masterpiece featuring sweeping panoramic views from
            downtown to the ocean. Fully integrated smart home technology,
            zero-edge infinity pool, and a 12-car subterranean gallery.
          </p>
          <button className="w-full bg-black text-white py-5 font-bold tracking-widest uppercase text-sm hover:bg-gray-800 transition-colors cursor-pointer">
            Schedule Private Viewing
          </button>
        </div>
      </div>
    </div>

    {/* Image Gallery */}
    <div className="py-20 px-8 md:px-16 shrink-0 bg-white">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-serif">Gallery</h2>
        <span className="text-sm tracking-widest uppercase font-bold text-gray-500 cursor-pointer hover:text-black transition-colors">
          View All 42 Photos
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 aspect-video bg-gray-100 overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Living Room"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="aspect-video bg-gray-100 overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Kitchen"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="aspect-video bg-gray-100 overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Bathroom"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="col-span-1 md:col-span-2 aspect-video bg-gray-100 overflow-hidden relative group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Pool"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="border border-white text-white px-8 py-3 tracking-widest uppercase text-sm backdrop-blur-sm">
              +38 More
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Neighborhood Insights */}
    <div className="py-20 px-8 md:px-16 bg-[#f4f4f4] shrink-0 border-y border-gray-200">
      <h2 className="text-4xl font-serif mb-12 text-center">
        Neighborhood Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <MapPin className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-xl mb-3">Prime Location</h4>
          <p className="text-gray-500">
            Minutes away from Rodeo Drive shopping, exclusive dining, and
            top-tier entertainment venues.
          </p>
        </div>
        <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6">
            <Star className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-xl mb-3">Top Rated Schools</h4>
          <p className="text-gray-500">
            Located in the prestigious Beverly Hills Unified School District
            with 9/10 average ratings.
          </p>
        </div>
        <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
            <Activity className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-xl mb-3">High Walk Score</h4>
          <p className="text-gray-500">
            Extremely walkable neighborhood with beautifully maintained
            sidewalks and quiet, tree-lined streets.
          </p>
        </div>
      </div>
    </div>

    {/* Contact Agent */}
    <div className="py-20 px-8 md:px-16 shrink-0 bg-white flex flex-col items-center">
      <div className="max-w-3xl w-full border border-gray-200 p-12 flex flex-col md:flex-row gap-12 items-center bg-[#fafafa]">
        <div className="shrink-0 text-center md:text-left">
          <img
            src="https://i.pravatar.cc/200?img=32"
            alt="Agent"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto md:mx-0 mb-4"
          />
          <h3 className="text-2xl font-serif font-bold">Eleanor Vance</h3>
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-1">
            Lead Broker
          </p>
          <p className="text-sm font-semibold">LUMIÈRE Real Estate</p>
        </div>
        <div className="flex-1 w-full">
          <h4 className="text-xl font-bold mb-6">
            Interested in this property?
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 bg-white border border-gray-200 outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 bg-white border border-gray-200 outline-none focus:border-black transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-black transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-black transition-colors"
            />
            <button className="w-full bg-black text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-800 transition-colors mt-2">
              Request Information
            </button>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

          {/* New Sections: Medical History Timeline */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-gray-900">
                Medical History Timeline
              </h3>
              <span className="text-blue-600 text-sm font-medium cursor-pointer">
                Download Full Report
              </span>
            </div>
            <div className="relative border-l-2 border-blue-100 ml-4 space-y-8 pb-4">
              {[
                {
                  date: "Oct 12, 2023",
                  title: "Annual Physical Exam",
                  doctor: "Dr. Emily Smith (Primary Care)",
                  note: "All vitals normal. Renewed cholesterol medication. Next checkup in 6 months.",
                },
                {
                  date: "Jul 05, 2023",
                  title: "Cardiology Consult",
                  doctor: "Dr. Sarah Chen (Cardiology)",
                  note: "Echocardiogram results reviewed. Mild left ventricular hypertrophy noted.",
                },
                {
                  date: "Mar 18, 2023",
                  title: "Flu Vaccination",
                  doctor: "Walgreens Pharmacy",
                  note: "Quadrivalent influenza vaccine administered.",
                },
              ].map((event, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute w-4 h-4 rounded-full bg-blue-500 border-4 border-white -left-[9px] top-1" />
                  <div className="text-sm font-bold text-blue-600 mb-1">
                    {event.date}
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {event.title}
                  </div>
                  <div className="text-xs text-gray-500 font-medium mb-2">
                    {event.doctor}
                  </div>
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {event.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Care Team & Recommended Action */}
          <div className="grid grid-cols-1 gap-6 pb-8">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-4">
                Recommended Actions
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      Schedule colonoscopy
                    </div>
                    <div className="text-xs text-gray-500">
                      Overdue by 2 months based on age bracket.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      Complete pre-visit questionnaire
                    </div>
                    <div className="text-xs text-gray-500">
                      For upcoming telehealth Cardiology visit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EduTechMockup = () => (
  <div className="w-full bg-[#f8f9fa] text-gray-800 font-sans min-h-[800px] flex flex-col">
    {/* Nav */}
    <nav className="bg-indigo-600 text-white p-4 px-8 flex justify-between items-center shadow-md z-10">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Video className="w-6 h-6 text-white" /> LearnSphere
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <span className="cursor-pointer border-b-2 border-white pb-1">
          My Dashboard
        </span>
        <span className="cursor-pointer opacity-80 hover:opacity-100">
          Course Catalog
        </span>
        <span className="cursor-pointer opacity-80 hover:opacity-100">
          Discussions
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-indigo-200" />
        <img
          src="https://i.pravatar.cc/100?img=12"
          className="w-10 h-10 rounded-full border-2 border-indigo-400"
          alt="Avatar"
        />
      </div>
    </nav>
    <div className="flex-1 p-12 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Welcome back, Jessica
      </h1>
      <p className="text-gray-500 mb-8">
        You have 2 upcoming assignments due this week.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">Resume Learning</h2>
            <div className="flex gap-6 items-center">
              <div className="w-48 h-32 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 object-cover relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white">
                    <Video className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-indigo-600 font-semibold mb-1">
                  Advanced UX Design
                </div>
                <div className="font-bold text-lg mb-2">
                  Module 4: Wireframing Principles
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>65% Completed</span>
                  <span>12 mins left</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="w-[65%] bg-indigo-600 h-full rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" /> Upcoming
                Deadlines
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1 border-l-2 border-red-500 pl-3">
                  <span className="text-sm font-semibold text-gray-800">
                    Case Study Submission
                  </span>
                  <span className="text-xs text-red-500 font-medium">
                    Due Tomorrow, 11:59 PM
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-yellow-500 pl-3">
                  <span className="text-sm font-semibold text-gray-800">
                    Peer Review: UI Patterns
                  </span>
                  <span className="text-xs text-gray-500">
                    Due Friday, 11:59 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20 p-6 text-white relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <h3 className="font-bold mb-2">Weekly Goal</h3>
              <div className="text-3xl font-bold mb-1">
                4.5{" "}
                <span className="text-lg font-normal opacity-80">/ 5 hrs</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                You're almost there! Keep it up.
              </p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                View Stats
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold mb-4">My Courses</h3>
            <div className="space-y-4">
              {[
                "Advanced UX Design",
                "Frontend Architecture",
                "Color Theory Basics",
              ].map((c) => (
                <div
                  key={c}
                  className="flex justify-between items-center p-3 rounded-lg border border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <span className="text-sm font-medium">{c}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-indigo-600 font-semibold text-sm hover:underline">
              Browse All Courses
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold mb-4">Recent Achievements</h3>
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              <div className="shrink-0 w-20 flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl border-2 border-yellow-200 shadow-sm">
                  🏆
                </div>
                <div className="text-[10px] font-bold text-center leading-tight">
                  Fast Learner
                </div>
              </div>
              <div className="shrink-0 w-20 flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl border-2 border-blue-200 shadow-sm">
                  🔥
                </div>
                <div className="text-[10px] font-bold text-center leading-tight">
                  7-Day Streak
                </div>
              </div>
              <div className="shrink-0 w-20 flex flex-col items-center gap-2 opacity-50 grayscale cursor-pointer group hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl border-2 border-dashed border-gray-300 shadow-sm group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:border-purple-200">
                  ⭐
                </div>
                <div className="text-[10px] font-bold text-center leading-tight">
                  Master
                </div>
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
