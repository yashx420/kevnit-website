"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Heart,
  Star,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone,
  Home,
  Bed,
  Bath,
  Shield,
  CheckCircle,
  Building,
  IndianRupee,
  Camera,
  ArrowRight,
  Users,
  Calendar,
  Mail,
} from "lucide-react";

const properties = [
  {
    id: 0,
    name: "Sea-View Penthouse, Worli",
    price: "₹8.5 Cr",
    config: "4 BHK · 3,200 sqft",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    tag: "Premium",
    emi: "₹4.2L/mo",
    beds: 4,
    baths: 4,
    area: "3,200 sqft",
    loc: "Worli, Mumbai",
    builder: "Lodha Group",
    status: "Ready to Move",
    desc: "Ultra-luxury penthouse with panoramic Arabian Sea views. Italian marble flooring, private terrace of 800 sqft, modular kitchen with Miele appliances. 24/7 concierge, rooftop infinity pool, and 3 dedicated parking spaces.",
    amenities: [
      "Infinity Pool",
      "Private Terrace",
      "Gym",
      "Concierge",
      "Clubhouse",
      "Valet Parking",
    ],
  },
  {
    id: 1,
    name: "Modern Flat, Whitefield",
    price: "₹1.2 Cr",
    config: "3 BHK · 1,850 sqft",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    tag: "Ready to Move",
    emi: "₹62K/mo",
    beds: 3,
    baths: 2,
    area: "1,850 sqft",
    loc: "Whitefield, Bangalore",
    builder: "Prestige Group",
    status: "Ready to Move",
    desc: "Spacious 3 BHK in a gated community with lush green gardens. Vitrified tile flooring, modular kitchen, and balcony overlooking the central park. IT hub proximity — 10 mins from ITPL.",
    amenities: [
      "Swimming Pool",
      "Children's Play Area",
      "Jogging Track",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
    ],
  },
  {
    id: 2,
    name: "Farmhouse, Alibaug",
    price: "₹3.8 Cr",
    config: "5 BHK · Villa · 1 Acre",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    tag: "New Launch",
    emi: "₹1.9L/mo",
    beds: 5,
    baths: 5,
    area: "1 Acre",
    loc: "Alibaug, Maharashtra",
    builder: "Kumar Properties",
    status: "Under Construction",
    desc: "Beachfront villa with private garden and swimming pool. Perfect weekend getaway just 2 hours from Mumbai. Teak wood interiors, open-plan living, and dedicated caretaker quarters.",
    amenities: [
      "Private Pool",
      "Garden",
      "Beach Access",
      "Caretaker",
      "Solar Power",
      "Bore Well",
    ],
  },
  {
    id: 3,
    name: "Smart Home, Gurgaon",
    price: "₹2.1 Cr",
    config: "3 BHK · 2,100 sqft",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    tag: "Smart Home",
    emi: "₹1.05L/mo",
    beds: 3,
    baths: 3,
    area: "2,100 sqft",
    loc: "Sector 65, Gurgaon",
    builder: "DLF Limited",
    status: "Ready to Move",
    desc: "IoT-enabled smart home with Alexa integration, automated lighting, and climate control. Located in DLF's premium enclave with metro connectivity and proximity to Cyber Hub.",
    amenities: [
      "Smart Locks",
      "Home Automation",
      "EV Charging",
      "Rooftop Lounge",
      "Co-working Space",
      "Metro Access",
    ],
  },
  {
    id: 4,
    name: "Heritage Haveli, Jaipur",
    price: "₹5.5 Cr",
    config: "6 BHK · 4,500 sqft",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    tag: "Heritage",
    emi: "₹2.7L/mo",
    beds: 6,
    baths: 4,
    area: "4,500 sqft",
    loc: "C-Scheme, Jaipur",
    builder: "Independent",
    status: "Restored",
    desc: "Meticulously restored 19th-century haveli with original jharokha windows, courtyard, and sandstone façade. Modern amenities seamlessly blended with Rajasthani architectural heritage.",
    amenities: [
      "Courtyard",
      "Jharokha Windows",
      "Rooftop",
      "Servant Quarters",
      "Garden",
      "Car Porch",
    ],
  },
  {
    id: 5,
    name: "Lake-View Apartment, Hyderabad",
    price: "₹95 L",
    config: "2 BHK · 1,200 sqft",
    img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80",
    tag: "Best Value",
    emi: "₹48K/mo",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    loc: "Jubilee Hills, Hyderabad",
    builder: "My Home Group",
    status: "Ready to Move",
    desc: "Affordable luxury 2 BHK with stunning Hussain Sagar lake views. Semi-furnished with wardrobes and AC. Walking distance to GVK One Mall and HITEC City.",
    amenities: [
      "Lake View",
      "Semi-Furnished",
      "Gym",
      "Swimming Pool",
      "Visitor Parking",
      "Intercom",
    ],
  },
];

export const RealEstateMockup = () => {
  const [page, setPage] = useState<"home" | "detail">("home");
  const [selected, setSelected] = useState(properties[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const sp =
        containerRef.current.closest("[data-lenis-prevent]") ||
        containerRef.current.closest(".overflow-y-auto");
      if (sp) sp.scrollTop = 0;
      containerRef.current.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }
  }, [page, selected]);

  const openDetail = (p: (typeof properties)[0]) => {
    setSelected(p);
    setPage("detail");
  };

  const Nav = () => (
    <nav className="flex items-center justify-between px-5 py-3.5 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setPage("home")}
      >
        <Home className="w-5 h-5 text-teal-600" />
        <span className="text-lg font-bold tracking-tight">
          <span className="text-teal-600">Nest</span>In
        </span>
      </div>
      <div className="hidden md:flex gap-5 text-xs font-medium text-gray-500">
        {["Buy", "Rent", "Projects", "Home Loans"].map((t, i) => (
          <span
            key={i}
            className={`cursor-pointer hover:text-teal-600 ${i === 0 ? "text-teal-600 font-semibold" : ""}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <button className="text-xs font-semibold text-gray-600">Login</button>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-xs font-bold">
          Post Property{" "}
          <span className="ml-1 bg-white/20 px-1 rounded text-[9px]">FREE</span>
        </button>
      </div>
    </nav>
  );

  if (page === "detail") {
    const similar = properties.filter((p) => p.id !== selected.id).slice(0, 3);
    return (
      <div
        ref={containerRef}
        className="w-full bg-[#f8f7f4] text-gray-900 font-sans min-h-[900px] flex flex-col"
      >
        <Nav />
        <div className="px-5 py-3 flex items-center gap-2 text-xs text-gray-400 bg-white border-b border-gray-100">
          <span
            className="cursor-pointer hover:text-teal-600"
            onClick={() => setPage("home")}
          >
            Home
          </span>
          <ChevronRight className="w-3 h-3" />
          <span
            className="cursor-pointer hover:text-teal-600"
            onClick={() => setPage("home")}
          >
            Properties
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 font-medium truncate">
            {selected.name}
          </span>
        </div>

        {/* Property Hero Image */}
        <div className="relative h-[300px] overflow-hidden">
          <button
            onClick={() => setPage("home")}
            className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={selected.img}
            className="w-full h-full object-cover"
            alt={selected.name}
          />
          <span className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {selected.tag}
          </span>
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1">
            <Camera className="w-3.5 h-3.5" /> 12 Photos
          </div>
        </div>

        {/* Details */}
        <div className="px-6 py-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold mb-1">{selected.name}</h1>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {selected.loc}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-teal-700">
                {selected.price}
              </div>
              <div className="text-xs text-gray-400">EMI: {selected.emi}</div>
            </div>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-4 gap-3 my-5 bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-center">
              <Bed className="w-5 h-5 mx-auto text-teal-600 mb-1" />
              <div className="text-sm font-bold">{selected.beds}</div>
              <div className="text-[10px] text-gray-400">Bedrooms</div>
            </div>
            <div className="text-center">
              <Bath className="w-5 h-5 mx-auto text-teal-600 mb-1" />
              <div className="text-sm font-bold">{selected.baths}</div>
              <div className="text-[10px] text-gray-400">Bathrooms</div>
            </div>
            <div className="text-center">
              <Building className="w-5 h-5 mx-auto text-teal-600 mb-1" />
              <div className="text-sm font-bold">{selected.area}</div>
              <div className="text-[10px] text-gray-400">Area</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-5 h-5 mx-auto text-teal-600 mb-1" />
              <div className="text-sm font-bold">{selected.status}</div>
              <div className="text-[10px] text-gray-400">Status</div>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {selected.desc}
          </p>

          {/* Builder */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400 mb-0.5">Builder</div>
              <div className="font-bold text-sm">{selected.builder}</div>
            </div>
            <button className="bg-teal-50 text-teal-600 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> Contact
            </button>
          </div>

          {/* Amenities */}
          <h3 className="font-bold text-base mb-3">Amenities</h3>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {selected.amenities.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-gray-600 border border-gray-100 flex items-center gap-1.5"
              >
                <CheckCircle className="w-3 h-3 text-teal-500" /> {a}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-teal-600 text-white py-3.5 rounded-xl font-bold text-sm">
              Schedule Visit
            </button>
            <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* EMI Calculator preview */}
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-6">
            <h4 className="font-bold text-sm mb-2 flex items-center gap-1.5">
              <IndianRupee className="w-4 h-4 text-teal-600" /> EMI Calculator
            </h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-lg font-black text-teal-700">
                  {selected.emi}
                </div>
                <div className="text-[10px] text-gray-500">Monthly EMI</div>
              </div>
              <div>
                <div className="text-lg font-black text-teal-700">8.5%</div>
                <div className="text-[10px] text-gray-500">Interest Rate</div>
              </div>
              <div>
                <div className="text-lg font-black text-teal-700">20 Yrs</div>
                <div className="text-[10px] text-gray-500">Tenure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar */}
        <div className="px-5 py-6 bg-white border-t border-gray-100">
          <h3 className="font-bold text-base mb-4">Similar Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {similar.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-gray-100 overflow-hidden cursor-pointer group"
                onClick={() => openDetail(p)}
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={p.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={p.name}
                  />
                </div>
                <div className="p-3">
                  <div className="text-teal-700 font-bold text-sm">
                    {p.price}
                  </div>
                  <h4 className="text-xs font-semibold truncate">{p.name}</h4>
                  <div className="text-[10px] text-gray-400">{p.config}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-gray-900 text-white px-5 py-5 text-xs flex justify-between items-center mt-auto">
          <span className="font-bold text-sm">
            <span className="text-teal-400">Nest</span>In
          </span>
          <span className="text-gray-500">© 2025 NestIn Realty Pvt. Ltd.</span>
        </footer>
      </div>
    );
  }

  // HOME
  return (
    <div
      ref={containerRef}
      className="w-full bg-[#f8f7f4] text-gray-900 font-sans min-h-[900px] flex flex-col"
    >
      <Nav />

      {/* Hero */}
      <div className="relative h-[320px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Home"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-7 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Your Dream Home in <span className="text-teal-400">India</span>,
            Found.
          </h1>
          <p className="text-white/60 mb-5 text-sm">
            13,000+ verified properties across Mumbai, Delhi, Bangalore & more.
          </p>
          <div className="bg-white rounded-xl p-2 shadow-xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
              <input
                type="text"
                placeholder="Andheri West, Mumbai"
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <IndianRupee className="w-4 h-4 text-gray-400 shrink-0" />
              <select className="text-sm outline-none bg-transparent text-gray-600">
                <option>₹50L — ₹1Cr</option>
                <option>₹1Cr — ₹3Cr</option>
                <option>₹3Cr+</option>
              </select>
            </div>
            <button className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 whitespace-nowrap">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="px-5 py-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold">Featured Properties</h2>
          <span className="text-xs font-bold text-teal-600 cursor-pointer flex items-center gap-1">
            See All <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.slice(0, 6).map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openDetail(p)}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={p.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={p.name}
                />
                <span className="absolute top-2.5 left-2.5 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
                  <Heart className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                  EMI: {p.emi}
                </div>
              </div>
              <div className="p-4">
                <div className="text-teal-700 font-bold text-lg mb-0.5">
                  {p.price}
                </div>
                <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
                <div className="text-xs text-gray-500">{p.config}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-teal-600 mx-5 rounded-2xl p-6 mb-8 text-white grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { val: "13,000+", label: "Properties" },
          { val: "₹2,500Cr+", label: "Transacted" },
          { val: "50+", label: "Cities" },
          { val: "4.8 ★", label: "Rating" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-xl font-bold">{s.val}</div>
            <div className="text-teal-100 text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-900 text-white px-5 py-5 mt-auto text-xs flex justify-between items-center">
        <span className="font-bold text-sm">
          <span className="text-teal-400">Nest</span>In
        </span>
        <span className="text-gray-500">© 2025 NestIn Realty Pvt. Ltd.</span>
      </footer>
    </div>
  );
};
