import React from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  Star,
  ChevronRight,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Users,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle,
  Play,
  Clock,
  ArrowUpRight,
  Utensils,
  Leaf,
  Award,
  Building,
  Code,
  Smartphone,
  Shield,
  TrendingUp,
  Zap,
  Eye,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Home,
  Bed,
  Bath,
  DollarSign,
  Camera,
  Layers,
  ExternalLink,
  Filter,
  Percent,
  IndianRupee,
  Truck,
  Gift,
  ChevronDown,
  Package,
} from "lucide-react";

/* FashionMockup moved to fashion-mockup.tsx */


/* ============================================================
   2. REAL ESTATE — "NestIn" — Premium property platform
   ============================================================ */
export const RealEstateMockup = () => (
  <div className="w-full bg-[#f8f7f4] text-gray-900 font-sans min-h-[900px] flex flex-col">
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 md:px-8 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Home className="w-6 h-6 text-teal-600" />
        <span className="text-xl font-bold tracking-tight">
          <span className="text-teal-600">Nest</span>In
        </span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
        <span className="cursor-pointer hover:text-teal-600 text-teal-600 font-semibold">
          Buy
        </span>
        <span className="cursor-pointer hover:text-teal-600">Rent</span>
        <span className="cursor-pointer hover:text-teal-600">Projects</span>
        <span className="cursor-pointer hover:text-teal-600">Home Loans</span>
      </div>
      <div className="flex gap-3 items-center">
        <button className="text-sm font-semibold text-gray-600 hover:text-teal-600 cursor-pointer">
          Login
        </button>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-700 transition-colors">
          Post Property{" "}
          <span className="ml-1 bg-white/20 px-1 rounded text-[9px]">FREE</span>
        </button>
      </div>
    </nav>

    {/* Hero */}
    <div className="relative h-[420px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Luxury Home"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-center px-8 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
          Your Dream Home in <span className="text-teal-400">India</span>,
          Found.
        </h1>
        <p className="text-white/60 mb-6 text-sm">
          13,000+ verified properties across Mumbai, Delhi, Bangalore, Hyderabad
          & more.
        </p>
        {/* Search */}
        <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
            <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
            <input
              type="text"
              placeholder="Andheri West, Mumbai"
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
            <IndianRupee className="w-4 h-4 text-gray-400 shrink-0" />
            <select className="text-sm outline-none bg-transparent text-gray-600 cursor-pointer">
              <option>₹50L — ₹1Cr</option>
              <option>₹1Cr — ₹3Cr</option>
              <option>₹3Cr+</option>
            </select>
          </div>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-teal-700 transition-colors flex items-center gap-2 whitespace-nowrap">
            <Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>
    </div>

    {/* Featured */}
    <div className="px-6 md:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Featured Properties</h2>
        <span className="text-xs font-bold text-teal-600 cursor-pointer flex items-center gap-1">
          See All <ChevronRight className="w-3 h-3" />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            name: "Sea-View Penthouse, Worli",
            price: "₹8.5 Cr",
            config: "4 BHK · 3,200 sqft",
            img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tag: "Premium",
            emi: "₹4.2L/mo",
          },
          {
            name: "Modern Flat, Whitefield",
            price: "₹1.2 Cr",
            config: "3 BHK · 1,850 sqft",
            img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tag: "Ready to Move",
            emi: "₹62K/mo",
          },
          {
            name: "Farmhouse, Alibaug",
            price: "₹3.8 Cr",
            config: "5 BHK · Villa · 1 Acre",
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tag: "New Launch",
            emi: "₹1.9L/mo",
          },
        ].map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={p.name}
              />
              <span className="absolute top-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
                <Heart className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                EMI: {p.emi}
              </div>
            </div>
            <div className="p-4">
              <div className="text-teal-700 font-bold text-lg mb-0.5">
                {p.price}
              </div>
              <h3 className="font-semibold text-sm mb-1.5">{p.name}</h3>
              <div className="flex gap-3 text-[10px] text-gray-500 font-medium">
                <span>{p.config}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Stats */}
    <div className="bg-teal-600 mx-6 md:mx-8 rounded-2xl p-8 mb-10 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        { val: "13,000+", label: "Properties" },
        { val: "₹2,500Cr+", label: "Transacted" },
        { val: "50+", label: "Cities" },
        { val: "4.8 ★", label: "Google Rating" },
      ].map((s, i) => (
        <div key={i}>
          <div className="text-2xl font-bold mb-0.5">{s.val}</div>
          <div className="text-teal-100 text-xs">{s.label}</div>
        </div>
      ))}
    </div>

    <footer className="bg-gray-900 text-white px-6 py-6 mt-auto">
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span className="font-bold text-white">
          <span className="text-teal-400">Nest</span>In
        </span>
        <span>© 2025 NestIn Realty Pvt. Ltd.</span>
      </div>
    </footer>
  </div>
);

/* ============================================================
   3. IT COMPANY — "Nexlabs" — Bold dark agency
   ============================================================ */
export const ITCompanyMockup = () => (
  <div className="w-full bg-[#060608] text-white font-sans min-h-[900px] flex flex-col">
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 sticky top-0 bg-[#060608]/95 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-blue-500 rounded-md" />
        <span className="text-lg font-bold tracking-tight">Nexlabs</span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
        <span className="cursor-pointer hover:text-white text-white">
          Solutions
        </span>
        <span className="cursor-pointer hover:text-white">Products</span>
        <span className="cursor-pointer hover:text-white">Company</span>
        <span className="cursor-pointer hover:text-white">Careers</span>
      </div>
      <button className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-violet-100 transition-colors">
        Let&apos;s Talk →
      </button>
    </nav>

    {/* Hero */}
    <div className="px-6 md:px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-500/15 to-transparent rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
          <Zap className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-xs text-violet-400 font-semibold tracking-wider uppercase">
            Now with AI & ML Solutions
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] mb-5 tracking-tight">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
            Digital Products
          </span>{" "}
          That Scale.
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          From MVPs to enterprise platforms, we&apos;ve delivered 300+ projects
          for startups and Fortune 500s across India and worldwide.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-violet-500/20 hover:shadow-2xl hover:shadow-violet-500/30 transition-all">
            View Our Work
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
            <Play className="w-4 h-4" /> 90s Intro
          </button>
        </div>
      </div>
    </div>

    {/* Services — Glassmorphic cards */}
    <div className="px-6 md:px-8 py-14">
      <h2 className="text-xl font-bold mb-8 text-center">Our Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            icon: <Code className="w-5 h-5" />,
            title: "Web Apps",
            desc: "React, Next.js, Node.js",
            color: "from-cyan-500/20 to-blue-500/10",
          },
          {
            icon: <Smartphone className="w-5 h-5" />,
            title: "Mobile",
            desc: "Flutter, React Native",
            color: "from-pink-500/20 to-rose-500/10",
          },
          {
            icon: <Sparkles className="w-5 h-5" />,
            title: "AI / ML",
            desc: "LLMs, Computer Vision",
            color: "from-violet-500/20 to-purple-500/10",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: "DevOps",
            desc: "AWS, GCP, CI/CD",
            color: "from-emerald-500/20 to-green-500/10",
          },
        ].map((s, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${s.color} border border-white/5 rounded-2xl p-5 cursor-pointer group hover:border-white/15 transition-all`}
          >
            <div className="text-white mb-3">{s.icon}</div>
            <h3 className="font-bold text-sm mb-1">{s.title}</h3>
            <p className="text-gray-500 text-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Client logos */}
    <div className="px-6 md:px-8 py-8 text-center border-y border-white/5">
      <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
        Trusted by 300+ companies including
      </p>
      <div className="flex justify-center items-center gap-10 flex-wrap opacity-30">
        {["Flipkart", "Razorpay", "CRED", "Zerodha", "PhonePe"].map((n, i) => (
          <span key={i} className="text-lg font-bold">
            {n}
          </span>
        ))}
      </div>
    </div>

    {/* Stats */}
    <div className="px-6 md:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { val: "300+", label: "Projects" },
          { val: "99.9%", label: "Uptime" },
          { val: "6", label: "Countries" },
          { val: "150+", label: "Engineers" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-3xl font-bold text-violet-400 mb-0.5">
              {s.val}
            </div>
            <div className="text-gray-500 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="px-6 md:px-8 py-14 text-center">
      <div className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-white/5 rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-3">
          Have an idea? Let&apos;s make it real.
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Free 30-min consultation for Indian startups.
        </p>
        <button className="bg-white text-black px-7 py-3 rounded-xl font-bold text-sm hover:bg-violet-100 transition-colors">
          Schedule a Call <ArrowRight className="w-4 h-4 inline ml-1" />
        </button>
      </div>
    </div>

    <footer className="border-t border-white/5 px-6 py-6 mt-auto text-sm text-gray-600 flex justify-between">
      <span className="font-bold text-white">Nexlabs</span>
      <span>Bengaluru · Mumbai · Hyderabad</span>
    </footer>
  </div>
);

/* ============================================================
   4. DIGITAL MARKETING AGENCY — "GrowthBox" — Energetic orange
   ============================================================ */
export const MarketingAgencyMockup = () => (
  <div className="w-full bg-white text-gray-900 font-sans min-h-[900px] flex flex-col">
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <Target className="w-6 h-6 text-orange-500" />
        <span className="text-xl font-bold tracking-tight">
          Growth<span className="text-orange-500">Box</span>
        </span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
        <span className="cursor-pointer hover:text-orange-500">Services</span>
        <span className="cursor-pointer hover:text-orange-500">Results</span>
        <span className="cursor-pointer hover:text-orange-500">About</span>
        <span className="cursor-pointer hover:text-orange-500">Blog</span>
      </div>
      <button className="bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors">
        Free Audit →
      </button>
    </nav>

    {/* Hero */}
    <div className="px-6 md:px-8 pt-16 pb-12 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-6">
          <Award className="w-3 h-3" /> Rated #1 Performance Marketing Agency in
          India
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-4">
          We Don&apos;t Just Market. We{" "}
          <span className="text-orange-500">Multiply</span> Revenue.
        </h1>
        <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto leading-relaxed">
          Google Ads, Meta Ads, SEO, and Content — powered by data, driven by
          results. ₹500Cr+ revenue generated for 200+ Indian D2C brands.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-orange-500 text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors">
            Get Your Free Audit
          </button>
          <button className="bg-white border border-gray-200 px-7 py-3 rounded-full font-bold text-sm hover:border-orange-500 transition-colors text-gray-700">
            See Case Studies
          </button>
        </div>
      </div>
    </div>

    {/* Services */}
    <div className="px-6 md:px-8 py-12">
      <h2 className="text-xl font-bold mb-2 text-center">
        Full-Funnel Services
      </h2>
      <p className="text-gray-500 text-center mb-8 text-sm">
        Everything you need to dominate digital
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
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
        ].map((s, i) => (
          <div
            key={i}
            className={`${s.bg} border border-gray-100 rounded-2xl p-5 text-center group cursor-pointer hover:shadow-md transition-all`}
          >
            <div
              className={`w-10 h-10 rounded-xl ${s.bg} ${s.tx} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
            >
              {s.icon}
            </div>
            <h3 className="font-bold text-sm mb-1">{s.title}</h3>
            <p className={`${s.tx} text-xs font-semibold`}>{s.stat}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Results Banner */}
    <div className="mx-6 md:mx-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white mb-10">
      <h3 className="text-xl font-bold mb-6 text-center">Numbers That Speak</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { val: "₹500Cr+", label: "Revenue Generated" },
          { val: "4.2x", label: "Avg. ROAS" },
          { val: "200+", label: "D2C Brands" },
          { val: "10M+", label: "Monthly Reach" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-2xl font-bold mb-0.5">{s.val}</div>
            <div className="text-orange-100 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Case Studies */}
    <div className="px-6 md:px-8 py-10">
      <h2 className="text-xl font-bold mb-6">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            title: "boAt Lifestyle",
            result: "₹12Cr revenue in 90 days via Meta Ads",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tags: ["Meta Ads", "Performance"],
          },
          {
            title: "Mamaearth D2C",
            result: "3x organic traffic in 6 months via SEO",
            img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tags: ["SEO", "Content"],
          },
        ].map((c, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-md transition-all"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={c.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={c.title}
              />
            </div>
            <div className="p-5">
              <div className="flex gap-2 mb-2">
                {c.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-base mb-1">{c.title}</h3>
              <p className="text-orange-500 font-semibold text-sm">
                {c.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <footer className="bg-gray-900 text-white px-6 py-6 mt-auto text-xs flex justify-between items-center">
      <span className="font-bold text-sm">
        Growth<span className="text-orange-400">Box</span>
      </span>
      <span className="text-gray-500">Mumbai · Delhi · Bengaluru</span>
    </footer>
  </div>
);

/* ============================================================
   5. FOOD / RESTAURANT — "Tambula" — Premium Indian fine dining
   ============================================================ */
export const FoodSiteMockup = () => (
  <div className="w-full bg-[#0e0b07] text-white font-sans min-h-[900px] flex flex-col">
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 sticky top-0 bg-[#0e0b07]/95 backdrop-blur-md z-50">
      <div className="text-xl font-bold tracking-tight">
        <span className="text-amber-400">✦</span> Tambula
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
        <span className="cursor-pointer hover:text-white text-white">Menu</span>
        <span className="cursor-pointer hover:text-white">Our Story</span>
        <span className="cursor-pointer hover:text-white">Gallery</span>
        <span className="cursor-pointer hover:text-white">Events</span>
      </div>
      <button className="bg-amber-500 text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-amber-400 transition-colors">
        Reserve a Table
      </button>
    </nav>

    {/* Hero — cinematic */}
    <div className="relative h-[480px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Fine Dining"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07] via-black/50 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-12">
        <div className="flex items-center gap-2 mb-3">
          {[...Array(3)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
          <span className="text-amber-400 text-sm font-semibold ml-1">
            Times Food Award Winner
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] mb-3">
          A Love Letter to <span className="text-amber-400">Indian</span>{" "}
          Flavours.
        </h1>
        <p className="text-white/50 max-w-lg mb-6 text-sm">
          Modern Indian cuisine rooted in forgotten recipes. Seasonal
          ingredients from 12 states, reimagined for the contemporary palate.
        </p>
        <div className="flex gap-3">
          <button className="bg-amber-500 text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-amber-400 transition-colors shadow-xl shadow-amber-500/15">
            Reserve Now
          </button>
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2 text-white/80">
            <Eye className="w-4 h-4" /> View Menu
          </button>
        </div>
      </div>
    </div>

    {/* Signature Dishes */}
    <div className="px-6 md:px-8 py-14">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold mb-0.5">
            Chef&apos;s Table Signatures
          </h2>
          <p className="text-gray-600 text-xs">
            Tasting menu curated by Chef Vikram Sharma
          </p>
        </div>
        <span className="text-amber-400 text-xs font-semibold cursor-pointer flex items-center gap-1">
          Full Menu <ChevronRight className="w-3 h-3" />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            name: "Lucknowi Galouti Kebab",
            price: "₹850",
            desc: "94-spice blend, saffron paratha, rose raita",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tag: "Signature",
          },
          {
            name: "Nalli Nihari",
            price: "₹1,200",
            desc: "Slow-cooked lamb shank, bone marrow, khamiri roti",
            img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Shahi Kulfi Trio",
            price: "₹450",
            desc: "Kesar-pista, paan, and rose with jaggery crumble",
            img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tag: "Seasonal",
          },
        ].map((d, i) => (
          <div
            key={i}
            className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-amber-500/20 transition-all"
          >
            <div className="h-44 overflow-hidden relative">
              <img
                src={d.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={d.name}
              />
              {d.tag && (
                <span className="absolute top-3 left-3 bg-amber-500 text-black text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {d.tag}
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1.5">
                <h3 className="font-bold text-sm">{d.name}</h3>
                <span className="text-amber-400 font-bold text-sm">
                  {d.price}
                </span>
              </div>
              <p className="text-gray-500 text-xs">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Gallery */}
    <div className="px-6 md:px-8 py-10 bg-white/[0.02]">
      <h2 className="text-xl font-bold mb-5 text-center">The Ambiance</h2>
      <div className="grid grid-cols-4 gap-2 h-40 rounded-2xl overflow-hidden">
        {[
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        ].map((img, i) => (
          <div key={i} className="overflow-hidden cursor-pointer group">
            <img
              src={img}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Gallery"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Reservation */}
    <div className="px-6 md:px-8 py-14 text-center">
      <h3 className="text-2xl font-bold mb-2">Join Us for Dinner</h3>
      <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
        Open Tuesday—Sunday, 7 PM — 11:30 PM. Walk-ins welcome, reservations
        recommended.
      </p>
      <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-400">
        <span className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-amber-400" /> +91 98765 43210
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-400" /> Bandra West, Mumbai
        </span>
      </div>
    </div>

    <footer className="border-t border-white/5 px-6 py-5 mt-auto flex justify-between items-center text-xs text-gray-600">
      <span>
        <span className="text-amber-400">✦</span> Tambula
      </span>
      <span>© 2025 Tambula Fine Dining LLP</span>
    </footer>
  </div>
);
