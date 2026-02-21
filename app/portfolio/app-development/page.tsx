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
}

const projects: Project[] = [
  {
    id: "fittrack-pro",
    title: "FitTrack Pro",
    category: "iOS & Android App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    id: "urban-bites",
    title: "Urban Bites Delivery",
    category: "Food Delivery App",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Node.js", "Stripe"],
  },
  {
    id: "secure-wallet",
    title: "Secure Wallet",
    category: "Fintech App",
    image:
      "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Swift", "Kotlin", "Blockchain"],
  },
];

// --- Mockup Components ---

const FitTrackMockup = () => (
  <div className="w-full bg-black text-white font-sans min-h-[852px] pb-24 relative overflow-hidden font-sans">
    {/* Status bar */}
    <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium">
      <span>9:41</span>
      <div className="flex gap-1">
        <div className="w-4 h-3 bg-white rounded-sm" />
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
    </div>

    <div className="px-6 py-4 flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-sm">Tuesday, 24 Oct</p>
        <h1 className="text-2xl font-bold">Summary</h1>
      </div>
      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg">
        J
      </div>
    </div>

    {/* Rings */}
    <div className="px-6 py-6 flex justify-center">
      <div className="relative w-48 h-48 rounded-full border-[16px] border-gray-800 flex justify-center items-center">
        <div className="absolute inset-[-16px] rounded-full border-[16px] border-red-500 border-r-transparent border-t-transparent rotate-45" />
        <div className="w-32 h-32 rounded-full border-[16px] border-gray-800 flex justify-center items-center">
          <div className="absolute w-32 h-32 rounded-full border-[16px] border-green-500 border-b-transparent border-l-transparent rotate-[120deg]" />
          <div className="w-16 h-16 rounded-full border-[16px] border-gray-800 flex justify-center items-center">
            <div className="absolute w-16 h-16 rounded-full border-[16px] border-blue-500 border-r-transparent border-t-transparent -rotate-12" />
          </div>
        </div>
      </div>
    </div>

    <div className="px-6 grid grid-cols-2 gap-4 mt-4">
      <div className="bg-[#1c1c1e] p-4 rounded-3xl">
        <div className="flex gap-2 items-center text-red-500 font-bold text-sm mb-1">
          <Flame className="w-4 h-4" /> Move
        </div>
        <div className="text-2xl font-bold">
          420{" "}
          <span className="text-gray-500 text-sm font-normal">/ 500 kcal</span>
        </div>
      </div>
      <div className="bg-[#1c1c1e] p-4 rounded-3xl">
        <div className="flex gap-2 items-center text-green-500 font-bold text-sm mb-1">
          <Activity className="w-4 h-4" /> Exercise
        </div>
        <div className="text-2xl font-bold">
          24 <span className="text-gray-500 text-sm font-normal">/ 30 min</span>
        </div>
      </div>
    </div>

    <div className="px-6 mt-6">
      <h2 className="text-lg font-bold mb-4">Today's Workouts</h2>
      <div className="bg-[#1c1c1e] p-4 rounded-3xl flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold">Outdoor Run</div>
            <div className="text-gray-400 text-xs">8:14 AM • 3.2 mi</div>
          </div>
        </div>
        <div className="font-bold">342 kcal</div>
      </div>

      <div className="bg-[#1c1c1e] border-2 border-orange-500/30 p-4 rounded-3xl flex items-center justify-between opacity-80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-orange-400">New Goal Reached!</div>
            <div className="text-gray-400 text-xs text-orange-400/70">
              Completed 4 workouts this week
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Generic App Navbar Bottom */}
    <div className="absolute bottom-0 w-full h-24 bg-[#1c1c1e]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center px-6 pb-6 pt-2">
      <div className="flex flex-col items-center gap-1 text-red-500">
        <Activity className="w-6 h-6" />
        <span className="text-[10px] font-bold">Summary</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-white">
        <Flame className="w-6 h-6" />
        <span className="text-[10px]">Fitness</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-white">
        <Users className="w-6 h-6" />
        <span className="text-[10px]">Sharing</span>
      </div>
    </div>
  </div>
);

const UrbanBitesMockup = () => (
  <div className="w-full bg-[#f9fafb] text-gray-900 min-h-[852px] pb-24 relative overflow-hidden font-sans">
    {/* Status bar */}
    <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium bg-white">
      <span>9:41</span>
      <div className="flex gap-1 text-black">
        <div className="w-4 h-3 bg-black rounded-sm" />
        <div className="w-3 h-3 bg-black rounded-full" />
      </div>
    </div>

    {/* App Header */}
    <div className="bg-white px-6 pb-4 rounded-b-3xl shadow-sm relative z-20">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
            Delivering to
          </p>
          <div className="flex items-center gap-1 font-bold text-lg">
            <MapPin className="w-5 h-5 text-orange-500" /> Home - 482 Market St{" "}
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        </div>
      </div>
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search restaurants, dishes..."
          className="w-full bg-gray-100 rounded-2xl py-3 pl-12 pr-4 font-medium text-sm outline-none"
        />
      </div>
    </div>

    {/* active order tracking */}
    <div className="px-6 pt-6 relative z-10">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-5 text-white shadow-lg shadow-orange-500/30 overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-lg">Preparing your order</div>
            <div className="font-bold flex items-center gap-1">
              <Clock className="w-4 h-4" /> 15-20 min
            </div>
          </div>
          <p className="text-orange-100 text-sm mb-4">Shake Shack - 2 items</p>

          <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
            <div className="w-1/3 bg-white h-full rounded-full" />
          </div>
          <div className="flex justify-between text-xs mt-2 font-medium text-orange-100 uppercase tracking-wider">
            <span>Accepted</span>
            <span className="text-white">Prep</span>
            <span className="opacity-50">On the way</span>
          </div>
        </div>
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>
    </div>

    <div className="px-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Near You</h2>
        <span className="text-orange-500 font-semibold text-sm">See all</span>
      </div>
      <div className="flex gap-4 overflow-x-hidden">
        {[
          {
            name: "Sweetgreen",
            type: "Healthy • Salads",
            rating: "4.8",
            time: "10-15 min",
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Joe's Pizza",
            type: "Italian • Pizza",
            rating: "4.6",
            time: "25-35 min",
            img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="min-w-[240px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className="h-32 bg-gray-200 relative">
              <img
                src={card.img}
                className="w-full h-full object-cover"
                alt={card.name}
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />{" "}
                {card.rating}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{card.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{card.type}</p>
              <div className="flex items-center gap-2 text-xs font-semibold bg-gray-50 inline-flex px-2 py-1 rounded-md text-gray-700">
                <Clock className="w-3 h-3" /> {card.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* App Navbar Bottom */}
    <div className="absolute bottom-0 w-full h-24 bg-white border-t border-gray-100 flex justify-around items-center px-6 pb-6 pt-2 z-50">
      <div className="flex flex-col items-center gap-1 text-orange-500">
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <Search className="w-6 h-6" />
        <span className="text-[10px]">Search</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <FileText className="w-6 h-6" />
        <span className="text-[10px]">Orders</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <Users className="w-6 h-6" />
        <span className="text-[10px]">Profile</span>
      </div>
    </div>
  </div>
);

const SecureWalletMockup = () => (
  <div className="w-full bg-[#080b12] text-white min-h-[852px] pb-24 relative overflow-hidden font-sans">
    {/* Status bar */}
    <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium bg-[#080b12] z-50 relative">
      <span>9:41</span>
      <div className="flex gap-1">
        <div className="w-4 h-3 bg-white rounded-sm" />
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
    </div>

    {/* Header */}
    <div className="px-6 py-4 flex justify-between items-center relative z-20">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/100?img=33"
          className="w-10 h-10 rounded-full border-2 border-indigo-500"
          alt="Avatar"
        />
        <div>
          <p className="text-gray-400 text-xs">Welcome back,</p>
          <h1 className="text-lg font-bold">Alex Chen</h1>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
        <Fingerprint className="w-5 h-5 text-indigo-400" />
      </div>
    </div>

    {/* Main Card */}
    <div className="px-6 mt-4 relative z-20">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 relative overflow-hidden shadow-2xl shadow-indigo-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mt-20 -mr-20" />
        <p className="text-indigo-100 text-sm font-medium mb-1 relative z-10">
          Total Balance
        </p>
        <h2 className="text-4xl font-bold tracking-tight mb-8 relative z-10">
          $84,290.50
        </h2>

        <div className="flex justify-between items-end relative z-10">
          <div className="flex gap-1 text-indigo-100 tracking-widest font-mono items-center">
            <span>••••</span> <span>••••</span> <span>••••</span>{" "}
            <span className="text-white font-bold ml-1">4092</span>
          </div>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-red-500/80 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-yellow-500/80 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="px-6 mt-8 flex justify-between">
      {[
        { icon: <ExternalLink className="w-6 h-6" />, label: "Send" },
        { icon: <TrendingUp className="w-6 h-6" />, label: "Receive" },
        { icon: <CreditCard className="w-6 h-6" />, label: "Top Up" },
        { icon: <Activity className="w-6 h-6" />, label: "More" },
      ].map((action, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#131620] border border-white/5 flex items-center justify-center text-indigo-400 hover:bg-[#1a1e2b] transition-colors">
            {action.icon}
          </div>
          <span className="text-xs font-semibold text-gray-400">
            {action.label}
          </span>
        </div>
      ))}
    </div>

    {/* Transactions */}
    <div className="px-6 mt-8 bg-[#131620] pt-6 pb-20 rounded-t-[2.5rem] border-t border-white/5 h-full relative z-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Recent Activity</h3>
        <span className="text-indigo-400 font-semibold text-sm">See all</span>
      </div>

      <div className="space-y-4">
        {[
          {
            name: "Apple Store",
            cat: "Electronics",
            amt: "-$999.00",
            icon: <ShoppingCart className="w-5 h-5" />,
            color: "bg-gray-800",
          },
          {
            name: "Stripe",
            cat: "Income",
            amt: "+$4,200.00",
            icon: <TrendingUp className="w-5 h-5" />,
            color: "bg-green-500/20 text-green-400",
          },
          {
            name: "Starbucks",
            cat: "Food & Drink",
            amt: "-$6.50",
            icon: <Flame className="w-5 h-5" />,
            color: "bg-orange-500/20 text-orange-400",
          },
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center p-2">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tx.color}`}
              >
                {tx.icon}
              </div>
              <div>
                <div className="font-bold">{tx.name}</div>
                <div className="text-xs text-gray-500">{tx.cat}</div>
              </div>
            </div>
            <div
              className={`font-bold ${tx.amt.startsWith("+") ? "text-green-400" : "text-white"}`}
            >
              {tx.amt}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* App Navbar Bottom */}
    <div className="absolute bottom-0 w-full h-24 bg-[#080b12]/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-6 pb-6 pt-2 z-50">
      <div className="flex flex-col items-center gap-1 text-indigo-400">
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500">
        <PieChart className="w-6 h-6" />
        <span className="text-[10px]">Stats</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500">
        <ShieldCheck className="w-6 h-6" />
        <span className="text-[10px]">Cards</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500">
        <Users className="w-6 h-6" />
        <span className="text-[10px]">Profile</span>
      </div>
    </div>
  </div>
);

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
