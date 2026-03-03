import React from "react";
import {
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
  Menu,
  Bath,
  Bed,
  Video,
  ExternalLink,
  Heart,
  Settings,
  ArrowUpRight,
  MoreHorizontal,
  ChevronLeft,
  ChevronDown,
  Calendar,
  MessageSquare,
  Plus,
  File,
  Layers,
  Lock,
  PlayCircle,
  Award,
  CheckCircle,
  DollarSign,
  Camera,
  Receipt,
  ShoppingBag,
  Target,
  HelpCircle,
  Play,
  Pause,
} from "lucide-react";

import { useState, useEffect } from "react";

export const FitTrackMockup = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-transparent outline-none ring-0">
      <div className="relative w-[380px] h-[812px] bg-black text-white rounded-[50px] overflow-hidden shadow-2xl border-[8px] border-zinc-800 flex flex-col font-sans shrink-0">
        {/* Dynamic Island Notch */}
        <div className="absolute top-0 inset-x-0 h-[30px] flex justify-center z-50 mt-2 pointer-events-none">
          <div className="w-[120px] h-[30px] bg-black rounded-full flex items-center justify-between px-3">
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-zinc-800/50" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar pb-24 pt-12 relative z-10 scroll-smooth">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-2 pb-2 text-xs font-medium sticky top-0 bg-black/80 backdrop-blur-md z-30">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 bg-white rounded-sm" />
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>

          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Tuesday, 24 Oct</p>
              <h1 className="text-3xl font-bold mt-1">Summary</h1>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-800">
              <img
                src="https://i.pravatar.cc/100?img=11"
                className="w-full h-full object-cover"
                alt="Profile"
              />
            </div>
          </div>

          {/* SUMMARY TAB */}
          {activeTab === "summary" && (
            <div className="animate-in fade-in duration-500">
              {/* Active Workout Banner */}
              <div className="px-6 mb-6">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-[32px] p-6 relative overflow-hidden shadow-[0_8px_30px_rgb(220,38,38,0.3)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-1">
                        <Flame className="w-4 h-4" /> Outdoor Run
                      </div>
                      <div className="text-4xl font-bold tracking-tight mb-4">
                        4.2<span className="text-xl text-white/70">km</span>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <p className="text-white/60 mb-0.5">Time</p>
                          <p className="font-bold">24:15</p>
                        </div>
                        <div>
                          <p className="text-white/60 mb-0.5">Pace</p>
                          <p className="font-bold">5'42"</p>
                        </div>
                      </div>
                    </div>
                    {/* Interactive Play/Pause Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(!isPlaying);
                      }}
                      className="w-14 h-14 bg-white text-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer z-50 relative"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      )}
                    </button>
                  </div>
                  {/* Progress Bar (Indicates active status) */}
                  <div className="mt-5 w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-300 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Activity Rings (Visual representation) */}
              <div className="px-6 mb-8 mt-4 grid grid-cols-3 gap-4">
                {[
                  {
                    value: "80%",
                    label: "Move",
                    color: "text-red-500",
                    ring: "border-red-500/20",
                  },
                  {
                    value: "60%",
                    label: "Exercise",
                    color: "text-green-500",
                    ring: "border-green-500/20",
                  },
                  {
                    value: "40%",
                    label: "Stand",
                    color: "text-blue-500",
                    ring: "border-blue-500/20",
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-20 h-20 rounded-full border-[6px] ${stat.ring} flex items-center justify-center mb-2`}
                    >
                      <span className={`font-bold ${stat.color} text-lg`}>
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recent Workouts */}
              <div className="px-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Recent</h2>
                  <span className="text-red-500 text-sm font-medium cursor-pointer hover:underline">
                    Show All
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "HIIT Session",
                      time: "Today • 45 min",
                      cal: "420 kcal",
                      icon: <Flame className="w-6 h-6" />,
                      color: "text-red-500",
                      bg: "bg-red-500/20",
                    },
                    {
                      title: "Pool Swim",
                      time: "Yesterday • 30 min",
                      cal: "310 kcal",
                      icon: <Activity className="w-6 h-6" />,
                      color: "text-blue-500",
                      bg: "bg-blue-500/20",
                    },
                    {
                      title: "Core Training",
                      time: "Yesterday • 20 min",
                      cal: "150 kcal",
                      icon: <CheckCircle className="w-6 h-6" />,
                      color: "text-orange-500",
                      bg: "bg-orange-500/20",
                    },
                  ].map((workout, i) => (
                    <div
                      key={i}
                      className="bg-[#1c1c1e] p-4 rounded-3xl flex items-center justify-between hover:bg-[#2c2c2e] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 ${workout.bg} rounded-full flex items-center justify-center ${workout.color} group-hover:scale-110 transition-transform`}
                        >
                          {workout.icon}
                        </div>
                        <div>
                          <div className="font-bold">{workout.title}</div>
                          <div className="text-gray-400 text-xs mt-1">
                            {workout.time}
                          </div>
                        </div>
                      </div>
                      <div className="font-bold text-lg">{workout.cal}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FITNESS TAB */}
          {activeTab === "fitness" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="px-6 mb-6">
                <h1 className="text-3xl font-bold mb-4">Workouts</h1>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Running",
                      icon: <Activity />,
                      bg: "bg-green-500",
                    },
                    { title: "Cycling", icon: <Activity />, bg: "bg-blue-500" },
                    { title: "Swimming", icon: <Users />, bg: "bg-cyan-500" },
                    {
                      title: "Strength",
                      icon: <Trophy />,
                      bg: "bg-purple-500",
                    },
                  ].map((type, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-3xl ${type.bg} text-white flex flex-col items-center justify-center h-32 gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-${type.bg.split("-")[1]}-500/30`}
                    >
                      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                        {type.icon}
                      </div>
                      <span className="font-bold">{type.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <h2 className="text-xl font-bold mb-4">Training Plans</h2>
                <div className="space-y-4">
                  {[
                    "Couch to 5K",
                    "Half Marathon Prep",
                    "Core Crusher 30 Days",
                  ].map((plan, i) => (
                    <div
                      key={i}
                      className="bg-[#1c1c1e] p-5 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-[#2c2c2e] transition-colors border border-white/5"
                    >
                      <div>
                        <h3 className="font-bold text-lg">{plan}</h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {8 - i} weeks • {i + 3}x/week
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SHARING TAB */}
          {activeTab === "sharing" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="px-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-3xl font-bold">Activity</h1>
                  <button className="w-10 h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center hover:bg-[#2c2c2e] transition-colors cursor-pointer">
                    <Users className="w-5 h-5 text-red-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: "Sarah J.",
                      action: "completed a workout",
                      type: "Morning Run",
                      stats: "5.2 km in 28:40",
                      time: "2 hours ago",
                      img: "https://i.pravatar.cc/150?img=5",
                    },
                    {
                      name: "Mike T.",
                      action: "earned an award",
                      type: "Perfect Week",
                      stats: "7/7 Move Goals",
                      time: "5 hours ago",
                      img: "https://i.pravatar.cc/150?img=8",
                      award: true,
                    },
                    {
                      name: "Jessica R.",
                      action: "completed a workout",
                      type: "HIIT Session",
                      stats: "450 kcal in 40 min",
                      time: "Yesterday",
                      img: "https://i.pravatar.cc/150?img=9",
                    },
                  ].map((feed, i) => (
                    <div
                      key={i}
                      className="bg-[#1c1c1e] p-5 rounded-3xl border border-white/5 relative group cursor-pointer"
                    >
                      <div className="flex gap-4">
                        <img
                          src={feed.img}
                          alt={feed.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#2c2c2e]"
                        />
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-bold text-white">
                              {feed.name}
                            </span>{" "}
                            <span className="text-gray-400">{feed.action}</span>
                          </p>
                          <div
                            className={`mt-3 p-3 rounded-2xl flex items-center gap-3 ${feed.award ? "bg-orange-500/10 border border-orange-500/20" : "bg-black/50"}`}
                          >
                            {feed.award ? (
                              <Award className="w-8 h-8 text-orange-500" />
                            ) : (
                              <Activity className="w-8 h-8 text-red-500" />
                            )}
                            <div>
                              <h4 className="font-bold text-white">
                                {feed.type}
                              </h4>
                              <p className="text-xs text-gray-400 mt-1">
                                {feed.stats}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-xs text-gray-500">
                              {feed.time}
                            </span>
                            <div className="flex gap-3">
                              <button className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors text-xs font-bold">
                                <Heart className="w-4 h-4" /> 12
                              </button>
                              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-xs font-bold">
                                <MessageSquare className="w-4 h-4" /> 3
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full h-24 bg-[#1c1c1e]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center px-6 pb-6 pt-2 z-40">
          <button
            onClick={() => setActiveTab("summary")}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "summary" ? "text-red-500 scale-110" : "text-gray-500 hover:text-white"}`}
          >
            <Activity className="w-6 h-6" />
            <span className="text-[10px] font-bold">Summary</span>
          </button>
          <button
            onClick={() => setActiveTab("fitness")}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "fitness" ? "text-red-500 scale-110" : "text-gray-500 hover:text-white"}`}
          >
            <Flame className="w-6 h-6" />
            <span className="text-[10px] font-bold">Fitness</span>
          </button>
          <button
            onClick={() => setActiveTab("sharing")}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "sharing" ? "text-red-500 scale-110" : "text-gray-500 hover:text-white"}`}
          >
            <Users className="w-6 h-6" />
            <span className="text-[10px] font-bold">Sharing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const UrbanBitesMockup = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full bg-[#f9fafb] text-gray-900 h-[852px] relative overflow-hidden font-sans flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-28">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium bg-white sticky top-0 z-50">
          <span>9:41</span>
          <div className="flex gap-1 text-black">
            <div className="w-4 h-3 bg-black rounded-sm" />
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
        </div>

        {activeTab === "home" && (
          <div className="animate-in fade-in duration-500">
            {/* App Header */}
            <div className="bg-white px-6 pb-6 rounded-b-3xl shadow-sm relative z-40">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                    Delivering to
                  </p>
                  <div className="flex items-center gap-1 font-bold text-lg cursor-pointer">
                    <MapPin className="w-5 h-5 text-orange-500" /> Home - 482
                    Market St <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="relative cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
                </div>
              </div>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search restaurants, dishes..."
                  className="w-full bg-gray-100/80 hover:bg-gray-100 focus:bg-white rounded-2xl py-4 pl-12 pr-4 font-medium text-sm outline-none border border-transparent focus:border-orange-500 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Active order tracking */}
            <div className="px-6 pt-6 relative z-10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-lg shadow-orange-500/30 overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-xl">
                      Preparing your order
                    </div>
                    <div className="font-bold flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full text-sm">
                      <Clock className="w-4 h-4" /> 15-20 min
                    </div>
                  </div>
                  <p className="text-orange-100 text-sm mb-5 font-medium">
                    Shake Shack - 2 items
                  </p>

                  <div className="w-full bg-black/20 h-2.5 rounded-full overflow-hidden mb-2">
                    <div className="w-1/3 bg-white h-full rounded-full animate-pulse" />
                  </div>
                  <div className="flex justify-between text-xs font-bold text-orange-100 uppercase tracking-wider">
                    <span>Accepted</span>
                    <span className="text-white">Prep</span>
                    <span className="opacity-50">On the way</span>
                  </div>
                </div>
                <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-black/10 rounded-full blur-xl" />
              </div>
            </div>

            {/* Popular Categories */}
            <div className="px-6 mt-8">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                {[
                  { icon: "🍔", label: "Burger" },
                  { icon: "🍕", label: "Pizza" },
                  { icon: "🥗", label: "Healthy" },
                  { icon: "🍣", label: "Sushi" },
                  { icon: "☕", label: "Coffee" },
                ].map((cat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-3xl group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Featured Near You</h2>
                <span className="text-orange-500 font-semibold text-sm cursor-pointer hover:underline">
                  See all
                </span>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  {
                    name: "Sweetgreen",
                    type: "Healthy • Salads",
                    rating: "4.8",
                    time: "10-15 min",
                    fee: "$1.49 fee",
                    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  },
                  {
                    name: "Joe's Pizza",
                    type: "Italian • Pizza",
                    rating: "4.6",
                    time: "25-35 min",
                    fee: "Free delivery",
                    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  },
                  {
                    name: "Sushi Nakazawa",
                    type: "Japanese • Sushi",
                    rating: "4.9",
                    time: "40-50 min",
                    fee: "$3.99 fee",
                    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group hover:shadow-md transition-all"
                  >
                    <div className="h-40 bg-gray-200 relative overflow-hidden">
                      <img
                        src={card.img}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={card.name}
                      />
                      <div className="absolute top-3 right-3 bg-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />{" "}
                        {card.rating}
                      </div>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                        {card.time}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-xl mb-1">{card.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{card.type}</p>
                      <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                          <Clock className="w-3.5 h-3.5" /> {card.time}
                        </span>
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                          <Activity className="w-3.5 h-3.5" /> {card.fee}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "search" && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 px-6 pt-2">
            <h1 className="text-3xl font-bold mb-6">Search</h1>
            <div className="relative mb-6">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Dishes, restaurants, cuisines..."
                className="w-full bg-white shadow-sm rounded-2xl py-4 pl-12 pr-4 font-medium text-sm outline-none border border-gray-100 focus:border-orange-500 transition-all"
              />
            </div>
            <h2 className="text-lg font-bold mb-4">Top Cuisines</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "American", color: "bg-blue-100", img: "🍔" },
                { name: "Mexican", color: "bg-red-100", img: "🌮" },
                { name: "Indian", color: "bg-orange-100", img: "🍛" },
                { name: "Healthy", color: "bg-green-100", img: "🥗" },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`h-24 rounded-2xl ${c.color} p-4 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <span className="text-xl leading-none">{c.img}</span>
                  <span className="font-bold text-gray-800">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 px-6 pt-2">
            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
            <div className="space-y-4">
              {[
                {
                  name: "Shake Shack",
                  items: "2 items",
                  price: "$24.50",
                  date: "Today, 1:45 PM",
                  status: "Delivered",
                  icon: "🍔",
                },
                {
                  name: "Sweetgreen",
                  items: "1 item",
                  price: "$15.00",
                  date: "Yesterday",
                  status: "Delivered",
                  icon: "🥗",
                },
                {
                  name: "Joe's Pizza",
                  items: "3 items",
                  price: "$32.40",
                  date: "Oct 20",
                  status: "Delivered",
                  icon: "🍕",
                },
              ].map((order, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-xl">
                        {order.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{order.name}</h3>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                    </div>
                    <span className="font-bold">{order.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-gray-50 pt-3 mt-1">
                    <span className="text-gray-500">
                      {order.items} • {order.status}
                    </span>
                    <button className="text-orange-500 font-bold px-3 py-1.5 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="animate-in fade-in duration-500">
            <div className="bg-white px-6 py-8 rounded-b-[40px] shadow-sm flex items-center gap-5">
              <img
                src="https://i.pravatar.cc/150?img=11"
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                alt="Profile"
              />
              <div>
                <h1 className="text-2xl font-bold">Alex Chen</h1>
                <p className="text-gray-500 text-sm">alex.chen@example.com</p>
                <div className="mt-2 text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full inline-block">
                  Gold Member
                </div>
              </div>
            </div>
            <div className="px-6 mt-8 space-y-4">
              {[
                {
                  icon: <MapPin />,
                  text: "Saved Addresses",
                  val: "Home, Work",
                },
                {
                  icon: <CreditCard />,
                  text: "Payment Methods",
                  val: "Visa ending in 4242",
                },
                { icon: <Bell />, text: "Notifications", val: "On" },
                { icon: <HelpCircle />, text: "Help & Support", val: "" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.text}</h4>
                      {item.val && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.val}
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* App Navbar Bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center px-6 pb-6 pt-2 z-50 rounded-b-[3rem]">
        <div
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === "home" ? "text-orange-500" : "text-gray-400 hover:text-gray-900"}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div
          onClick={() => setActiveTab("search")}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === "search" ? "text-orange-500" : "text-gray-400 hover:text-gray-900"}`}
        >
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-bold">Search</span>
        </div>
        <div
          onClick={() => setActiveTab("orders")}
          className={`flex flex-col items-center gap-1 relative cursor-pointer transition-colors ${activeTab === "orders" ? "text-orange-500" : "text-gray-400 hover:text-gray-900"}`}
        >
          <FileText className="w-6 h-6" />
          {activeTab !== "orders" && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full" />
          )}
          <span className="text-[10px] font-bold">Orders</span>
        </div>
        <div
          onClick={() => setActiveTab("profile")}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === "profile" ? "text-orange-500" : "text-gray-400 hover:text-gray-900"}`}
        >
          <Users className="w-6 h-6" />
          <span className="text-[10px] font-bold">Profile</span>
        </div>
      </div>
    </div>
  );
};

export const SecureWalletMockup = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full bg-[#080b12] text-white h-[852px] relative overflow-hidden font-sans flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-28">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium bg-[#080b12]/90 backdrop-blur-md sticky top-0 z-50">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-white rounded-sm" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>

        {activeTab === "home" && (
          <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="px-6 py-4 flex justify-between items-center relative z-20">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=33"
                  className="w-12 h-12 rounded-full border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"
                  alt="Avatar"
                />
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Welcome back,</p>
                  <h1 className="text-xl font-bold tracking-tight">
                    Alex Chen
                  </h1>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative cursor-pointer hover:bg-white/10 transition-colors">
                <Fingerprint className="w-6 h-6 text-indigo-400" />
              </div>
            </div>

            {/* Main Card */}
            <div className="px-6 mt-4 relative z-20">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-7 relative overflow-hidden shadow-2xl shadow-indigo-500/30 group cursor-pointer">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mt-20 -mr-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-xl -mb-10 -ml-10" />

                <div className="flex justify-between items-center mb-2 relative z-10">
                  <p className="text-indigo-100 text-sm font-medium">
                    Total Balance
                  </p>
                  <div className="bg-white/20 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-md text-white flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +2.4%
                  </div>
                </div>

                <h2 className="text-5xl font-bold tracking-tight mb-8 relative z-10">
                  $84,290.50
                </h2>

                <div className="flex justify-between items-end relative z-10">
                  <div className="flex gap-2 text-indigo-100 tracking-widest font-mono items-center text-lg">
                    <span>••••</span> <span>••••</span> <span>••••</span>{" "}
                    <span className="text-white font-bold ml-1">4092</span>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/80 mix-blend-multiply border-2 border-transparent" />
                    <div className="w-10 h-10 rounded-full bg-yellow-500/80 mix-blend-multiply border-2 border-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 mt-8 flex justify-between gap-4">
              {[
                { icon: <ExternalLink className="w-6 h-6" />, label: "Send" },
                { icon: <TrendingUp className="w-6 h-6" />, label: "Receive" },
                { icon: <CreditCard className="w-6 h-6" />, label: "Top Up" },
                { icon: <Activity className="w-6 h-6" />, label: "More" },
              ].map((action, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 cursor-pointer group flex-1"
                >
                  <div className="w-full aspect-square max-w-[4rem] rounded-2xl bg-[#131620] border border-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg">
                    {action.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-200 transition-colors">
                    {action.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Asset Allocation */}
            <div className="px-6 mt-10">
              <h3 className="text-lg font-bold mb-4">Asset Allocation</h3>
              <div className="bg-[#131620] rounded-[2rem] p-6 border border-white/5 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500 border-r-purple-500 border-b-blue-500 border-l-cyan-500 relative flex items-center justify-center rotate-45">
                      <div className="w-full h-full absolute inset-0 rounded-full border-4 border-transparent opacity-50 bg-gradient-to-tr from-indigo-500 to-purple-500 blur-sm -z-10" />
                      <div className="w-10 h-10 bg-[#080b12] rounded-full absolute -rotate-45 flex items-center justify-center font-bold text-xs">
                        $
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl">4 Assets</div>
                      <div className="text-gray-400 text-xs">
                        Diversified Portfolio
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Bitcoin",
                      sym: "BTC",
                      val: "$45,200",
                      pct: "55%",
                      fill: "w-[55%] bg-yellow-500",
                    },
                    {
                      name: "Ethereum",
                      sym: "ETH",
                      val: "$24,100",
                      pct: "30%",
                      fill: "w-[30%] bg-indigo-400",
                    },
                    {
                      name: "Solana",
                      sym: "SOL",
                      val: "$8,500",
                      pct: "10%",
                      fill: "w-[10%] bg-green-400",
                    },
                  ].map((coin, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-semibold mb-2">
                        <span className="text-white">
                          {coin.name}{" "}
                          <span className="text-gray-500 font-normal">
                            {coin.sym}
                          </span>
                        </span>
                        <span>{coin.val}</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${coin.fill}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div className="px-6 mt-10 pb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Recent Activity</h3>
                <span className="text-indigo-400 font-semibold text-sm cursor-pointer hover:underline">
                  See all
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Apple Store",
                    cat: "Electronics • Dec 24",
                    amt: "-$999.00",
                    icon: <ShoppingCart className="w-5 h-5" />,
                    color: "bg-gray-800 text-white",
                  },
                  {
                    name: "Stripe Subscriptions",
                    cat: "Income • Dec 23",
                    amt: "+$4,200.00",
                    icon: <TrendingUp className="w-5 h-5" />,
                    color: "bg-green-500/20 text-green-400",
                  },
                  {
                    name: "Starbucks Coffee",
                    cat: "Food & Drink • Dec 22",
                    amt: "-$6.50",
                    icon: <Flame className="w-5 h-5" />,
                    color: "bg-orange-500/20 text-orange-400",
                  },
                  {
                    name: "Uber Rides",
                    cat: "Transport • Dec 21",
                    amt: "-$24.00",
                    icon: <Activity className="w-5 h-5" />,
                    color: "bg-purple-500/20 text-purple-400",
                  },
                ].map((tx, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-[#131620] rounded-2xl border border-white/5 hover:bg-[#1a1e2b] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${tx.color}`}
                      >
                        {tx.icon}
                      </div>
                      <div>
                        <div className="font-bold text-white mb-0.5">
                          {tx.name}
                        </div>
                        <div className="text-xs text-gray-400">{tx.cat}</div>
                      </div>
                    </div>
                    <div
                      className={`font-bold text-lg ${tx.amt.startsWith("+") ? "text-green-400" : "text-white"}`}
                    >
                      {tx.amt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 px-6 pt-4">
            <h1 className="text-3xl font-bold mb-6">Analytics</h1>

            <div className="bg-[#131620] rounded-[2rem] p-6 border border-white/5 shadow-xl mb-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Total Spent</p>
                  <h2 className="text-3xl font-bold mt-1">$4,290.50</h2>
                </div>
                <div className="bg-indigo-500/20 px-3 py-1.5 rounded-xl text-indigo-400 text-sm font-bold flex items-center gap-1">
                  This Month <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Mock Bar Chart */}
              <div className="h-40 flex items-end justify-between gap-2 mt-8">
                {[40, 70, 45, 90, 65, 85, 50].map((h, i) => (
                  <div
                    key={i}
                    className="w-full flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className="w-full bg-white/10 rounded-t-lg relative group-hover:bg-indigo-500/50 transition-colors"
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${h * 12}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {"SMTWTFS"[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Top Spending Categories</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Shopping",
                  val: "$1,240",
                  icon: <ShoppingBag />,
                  color: "text-purple-400",
                  bg: "bg-purple-500/20",
                },
                {
                  name: "Food & Dining",
                  val: "$850",
                  icon: <Flame />,
                  color: "text-orange-400",
                  bg: "bg-orange-500/20",
                },
                {
                  name: "Transportation",
                  val: "$340",
                  icon: <Activity />,
                  color: "text-blue-400",
                  bg: "bg-blue-500/20",
                },
              ].map((cat, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 bg-[#131620] rounded-2xl border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.bg} ${cat.color}`}
                    >
                      {cat.icon}
                    </div>
                    <span className="font-bold">{cat.name}</span>
                  </div>
                  <span className="font-bold">{cat.val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "cards" && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 px-6 pt-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">My Cards</h1>
              <button className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Virtual Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-7 relative overflow-hidden shadow-2xl shadow-indigo-500/30 mb-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mt-20 -mr-20" />
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-xl tracking-widest font-bold opacity-80">
                  Virtual Card
                </div>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/80 mix-blend-multiply" />
                  <div className="w-10 h-10 rounded-full bg-yellow-500/80 mix-blend-multiply" />
                </div>
              </div>
              <div className="font-mono tracking-widest text-2xl mb-4">
                4092 8210 4920 1928
              </div>
              <div className="flex justify-between text-sm uppercase tracking-wider font-semibold opacity-80">
                <div>
                  <div className="text-[10px] opacity-60">Card Holder</div>
                  <div>Alex Chen</div>
                </div>
                <div>
                  <div className="text-[10px] opacity-60">Valid Thru</div>
                  <div>12/28</div>
                </div>
              </div>
            </div>

            {/* Physical Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-7 relative overflow-hidden shadow-xl mb-8 border border-white/10">
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-xl tracking-widest font-bold opacity-80">
                  Physical Card
                </div>
                <div className="font-bold italic text-2xl tracking-tighter opacity-80">
                  VISA
                </div>
              </div>
              <div className="font-mono tracking-widest text-2xl mb-4 opacity-70">
                **** **** **** 8839
              </div>
              <div className="flex justify-between text-sm uppercase tracking-wider font-semibold opacity-80">
                <div>
                  <div className="text-[10px] opacity-60">Card Holder</div>
                  <div>Alex Chen</div>
                </div>
                <div>
                  <div className="text-[10px] opacity-60">Valid Thru</div>
                  <div>08/26</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Card Settings</h3>
            <div className="bg-[#131620] rounded-2xl border border-white/5 overflow-hidden">
              <div className="p-4 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">Lock Card</span>
                </div>
                <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-gray-400 rounded-full absolute top-0.5 left-0.5" />
                </div>
              </div>
              <div className="p-4 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">Online Payments</span>
                </div>
                <div className="w-12 h-6 bg-indigo-500 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">Change PIN</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="animate-in fade-in duration-500 px-6 pt-4 pb-10">
            <h1 className="text-3xl font-bold mb-8">Profile</h1>

            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-4">
                <img
                  src="https://i.pravatar.cc/150?img=33"
                  className="w-24 h-24 rounded-full border-4 border-[#131620] shadow-xl"
                  alt="Profile"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <h2 className="text-2xl font-bold">Alex Chen</h2>
              <p className="text-gray-400">@alexchen • Joined 2024</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  Account Details
                </h3>
                <div className="bg-[#131620] rounded-2xl border border-white/5 overflow-hidden">
                  {[
                    { label: "Personal Information", icon: <Users /> },
                    { label: "Payment Limits", icon: <DollarSign /> },
                    { label: "Security & Privacy", icon: <ShieldCheck /> },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 flex justify-between items-center border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  App Settings
                </h3>
                <div className="bg-[#131620] rounded-2xl border border-white/5 overflow-hidden">
                  {[
                    { label: "Notifications", icon: <Bell /> },
                    { label: "Appearance", icon: <Target /> },
                    { label: "Help & Support", icon: <HelpCircle /> },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 flex justify-between items-center border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 rounded-xl text-red-400 font-bold bg-red-400/10 hover:bg-red-400/20 transition-colors border border-red-400/20 mt-4">
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>

      {/* App Navbar Bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-[#080b12]/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-6 pb-6 pt-2 z-50 rounded-b-[3rem]">
        <div
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === "home" ? "text-indigo-400" : "text-gray-500 hover:text-gray-300"}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div
          onClick={() => setActiveTab("stats")}
          className={`flex flex-col items-center gap-1 relative cursor-pointer transition-colors ${activeTab === "stats" ? "text-indigo-400" : "text-gray-500 hover:text-gray-300"}`}
        >
          <PieChart className="w-6 h-6" />
          {activeTab !== "stats" && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full" />
          )}
          <span className="text-[10px] font-bold">Stats</span>
        </div>
        <div
          onClick={() => setActiveTab("cards")}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === "cards" ? "text-indigo-400" : "text-gray-500 hover:text-gray-300"}`}
        >
          <ShieldCheck className="w-6 h-6" />
          <span className="text-[10px] font-bold">Cards</span>
        </div>
        <div
          onClick={() => setActiveTab("profile")}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === "profile" ? "text-indigo-400" : "text-gray-500 hover:text-gray-300"}`}
        >
          <Users className="w-6 h-6" />
          <span className="text-[10px] font-bold">Profile</span>
        </div>
      </div>
    </div>
  );
};

export const EcoShopMockup = () => (
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

export const FinTechMockup = () => (
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

export const ModernRealEstateMockup = () => (
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

export const HealthPortalMockup = () => (
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

export const EduTechMockup = () => (
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
                You&apos;re almost there! Keep it up.
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
