"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Star,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone,
  Clock,
  Eye,
  Calendar,
  Users,
  Flame,
  Leaf,
  Award,
  Heart,
  Wine,
} from "lucide-react";

const dishes = [
  {
    id: 0,
    name: "Lucknowi Galouti Kebab",
    price: "₹850",
    category: "Starters",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tag: "Signature",
    desc: "94-spice blend, saffron paratha, rose raita",
    fullDesc:
      "Our legendary Galouti Kebab is crafted from a 94-spice blend passed down through seven generations of Lucknowi master chefs. Minced lamb is slow-marinated for 12 hours, then cooked on a sigri at precise temperature. Served on house-made saffron paratha with rose-infused raita and pickled onions.",
    chef: "Chef Vikram Sharma",
    origin: "Awadhi Cuisine",
    spice: "Medium",
    veg: false,
    pair: "Sula Riesling, Amrut Fusion",
  },
  {
    id: 1,
    name: "Nalli Nihari",
    price: "₹1,200",
    category: "Mains",
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    desc: "Slow-cooked lamb shank, bone marrow, khamiri roti",
    fullDesc:
      "This Old Delhi classic is slow-cooked for 8 hours until the bone marrow melts into a rich, aromatic gravy. Our recipe traces back to the Mughal-era canteens of Chandni Chowk. Served with house-baked khamiri roti and garnished with julienned ginger, green chillies, and fresh coriander.",
    chef: "Chef Vikram Sharma",
    origin: "Mughlai Cuisine",
    spice: "Mild-Medium",
    veg: false,
    pair: "Grover La Réserve Red, Kingfisher Ultra",
  },
  {
    id: 2,
    name: "Shahi Kulfi Trio",
    price: "₹450",
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
    tag: "Seasonal",
    desc: "Kesar-pista, paan, and rose with jaggery crumble",
    fullDesc:
      "A trio of artisanal kulfis churned in-house: Kesar-Pista made with Kashmiri saffron and Iranian pistachios, Calcutta Paan with aged betel and cardamom, and Gulab with Kannauj rose petals. Served on a bed of jaggery crumble with silver varq.",
    chef: "Pastry Chef Priya Nair",
    origin: "North Indian",
    spice: "None",
    veg: true,
    pair: "Masala Chai, Sula Brut Rosé",
  },
  {
    id: 3,
    name: "Dal Makhani 48-Hour",
    price: "₹650",
    category: "Mains",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    tag: "Chef's Pick",
    desc: "48-hour slow-cooked black lentils, fresh cream, tandoori naan",
    fullDesc:
      "Our signature Dal Makhani simmers for a full 48 hours on low flame, allowing the black urad dal to develop a deep, smoky richness. Finished with hand-churned butter from Amul and fresh cream. Served with tandoori naan baked in our 600°C clay oven.",
    chef: "Chef Vikram Sharma",
    origin: "Punjabi Cuisine",
    spice: "Mild",
    veg: true,
    pair: "Lassi, Sula Chenin Blanc",
  },
  {
    id: 4,
    name: "Hyderabadi Dum Biryani",
    price: "₹950",
    category: "Mains",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    desc: "Dum-cooked lamb biryani with saffron and aged basmati",
    fullDesc:
      "Layered with aged basmati rice, saffron-infused milk, and slow-cooked lamb shoulder. Sealed with dough and cooked dum-style for 2 hours. Each portion is a complete masterpiece of Hyderabadi Nawabi tradition. Served with mirchi ka salan and raita.",
    chef: "Chef Vikram Sharma",
    origin: "Hyderabadi Cuisine",
    spice: "Medium",
    veg: false,
    pair: "Raita, Fratelli Sette",
  },
  {
    id: 5,
    name: "Truffle Paneer Tikka",
    price: "₹750",
    category: "Starters",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    tag: "New",
    desc: "Cottage cheese with black truffle, tandoor-grilled",
    fullDesc:
      "A contemporary twist on the classic — artisanal paneer marinated in truffle oil, hung curd, and Kashmiri chilli. Grilled in our charcoal tandoor at 400°C and finished with shaved black truffle and micro herbs. A vegetarian showstopper.",
    chef: "Chef Vikram Sharma",
    origin: "Modern Indian",
    spice: "Mild",
    veg: true,
    pair: "Grover Viognier, Craft Lager",
  },
];

export const FoodSiteMockup = () => {
  const [page, setPage] = useState<"home" | "dish">("home");
  const [selected, setSelected] = useState(dishes[0]);
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

  const openDish = (d: (typeof dishes)[0]) => {
    setSelected(d);
    setPage("dish");
  };

  const Nav = () => (
    <nav className="flex items-center justify-between px-5 py-4 border-b border-white/5 sticky top-0 bg-[#0e0b07]/95 backdrop-blur-md z-50">
      <div
        className="text-lg font-bold tracking-tight cursor-pointer"
        onClick={() => setPage("home")}
      >
        <span className="text-amber-400">✦</span> Tambula
      </div>
      <div className="hidden md:flex gap-5 text-xs font-medium text-gray-500">
        {["Menu", "Our Story", "Gallery", "Events"].map((t, i) => (
          <span
            key={i}
            className="cursor-pointer hover:text-white"
            onClick={() => setPage("home")}
          >
            {t}
          </span>
        ))}
      </div>
      <button className="bg-amber-500 text-black px-4 py-2 rounded-lg text-xs font-bold">
        Reserve a Table
      </button>
    </nav>
  );

  if (page === "dish") {
    const similar = dishes
      .filter((d) => d.id !== selected.id && d.category === selected.category)
      .slice(0, 2);
    const moreDishes =
      similar.length < 2
        ? [
            ...similar,
            ...dishes
              .filter(
                (d) => d.id !== selected.id && d.category !== selected.category,
              )
              .slice(0, 2 - similar.length),
          ]
        : similar;
    return (
      <div
        ref={containerRef}
        className="w-full bg-[#0e0b07] text-white font-sans min-h-[900px] flex flex-col"
      >
        <Nav />
        <div className="px-5 py-3 flex items-center gap-2 text-xs text-gray-500 border-b border-white/5">
          <span
            className="cursor-pointer hover:text-amber-400"
            onClick={() => setPage("home")}
          >
            Home
          </span>
          <ChevronRight className="w-3 h-3" />
          <span
            className="cursor-pointer hover:text-amber-400"
            onClick={() => setPage("home")}
          >
            Menu
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate">{selected.name}</span>
        </div>

        {/* Dish Image */}
        <div className="relative h-[300px] overflow-hidden">
          <button
            onClick={() => setPage("home")}
            className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={selected.img}
            className="w-full h-full object-cover"
            alt={selected.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07] via-[#0e0b07]/40 to-transparent" />
          {selected.tag && (
            <span className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {selected.tag}
            </span>
          )}
          <div className="absolute bottom-5 left-5 right-5">
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              {selected.category}
            </span>
            <h1 className="text-2xl font-bold mt-1">{selected.name}</h1>
            <div className="text-amber-400 font-bold text-lg mt-1">
              {selected.price}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="px-6 py-6">
          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <Flame className="w-4 h-4 mx-auto text-amber-400 mb-1" />
              <div className="text-sm font-bold">{selected.spice}</div>
              <div className="text-[10px] text-gray-500">Spice Level</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              {selected.veg ? (
                <Leaf className="w-4 h-4 mx-auto text-green-400 mb-1" />
              ) : (
                <Flame className="w-4 h-4 mx-auto text-red-400 mb-1" />
              )}
              <div className="text-sm font-bold">
                {selected.veg ? "Veg" : "Non-Veg"}
              </div>
              <div className="text-[10px] text-gray-500">Type</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <MapPin className="w-4 h-4 mx-auto text-amber-400 mb-1" />
              <div className="text-sm font-bold truncate">
                {selected.origin}
              </div>
              <div className="text-[10px] text-gray-500">Origin</div>
            </div>
          </div>

          <h3 className="font-bold text-base mb-2">About This Dish</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {selected.fullDesc}
          </p>

          {/* Chef */}
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Crafted by</div>
              <div className="font-bold text-sm">{selected.chef}</div>
            </div>
            <Award className="w-5 h-5 text-amber-400" />
          </div>

          {/* Pairing */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
            <h4 className="font-bold text-sm mb-1 flex items-center gap-1.5">
              <Wine className="w-4 h-4 text-amber-400" /> Recommended Pairing
            </h4>
            <p className="text-gray-400 text-xs">{selected.pair}</p>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mb-5">
            <button className="flex-1 bg-amber-500 text-black py-3.5 rounded-xl font-bold text-sm">
              Reserve & Pre-Order
            </button>
            <button className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center hover:border-amber-500">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* More Dishes */}
        <div className="px-5 py-6 border-t border-white/5">
          <h3 className="font-bold text-base mb-4">More from the Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreDishes.map((d) => (
              <div
                key={d.id}
                className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openDish(d)}
              >
                <div className="h-28 overflow-hidden">
                  <img
                    src={d.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={d.name}
                  />
                </div>
                <div className="p-3 flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm">{d.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{d.desc}</p>
                  </div>
                  <span className="text-amber-400 font-bold text-sm shrink-0 ml-2">
                    {d.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="border-t border-white/5 px-5 py-5 mt-auto flex justify-between items-center text-xs text-gray-600">
          <span>
            <span className="text-amber-400">✦</span> Tambula
          </span>
          <span>© 2025 Tambula Fine Dining LLP</span>
        </footer>
      </div>
    );
  }

  // HOME
  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0e0b07] text-white font-sans min-h-[900px] flex flex-col"
    >
      <Nav />

      {/* Hero */}
      <div className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Fine Dining"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07] via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end px-7 pb-8">
          <div className="flex items-center gap-2 mb-2">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-amber-400 text-xs font-semibold ml-1">
              Times Food Award Winner
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-2">
            A Love Letter to <span className="text-amber-400">Indian</span>{" "}
            Flavours.
          </h1>
          <p className="text-white/50 max-w-lg mb-5 text-sm">
            Modern Indian cuisine from 12 states, reimagined for the
            contemporary palate.
          </p>
          <div className="flex gap-3">
            <button className="bg-amber-500 text-black px-6 py-3 rounded-lg font-bold text-sm shadow-xl shadow-amber-500/15">
              Reserve Now
            </button>
            <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 text-white/80">
              <Eye className="w-4 h-4" /> View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="px-5 py-5 flex gap-3 overflow-x-auto border-b border-white/5">
        {["🔥 All", "🥘 Starters", "🍛 Mains", "🍨 Desserts", "🍷 Drinks"].map(
          (c, i) => (
            <span
              key={i}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${i === 0 ? "bg-amber-500 text-black" : "bg-white/5 text-gray-400 hover:bg-amber-500/10 hover:text-amber-400"}`}
            >
              {c}
            </span>
          ),
        )}
      </div>

      {/* Dishes */}
      <div className="px-5 py-8">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-lg font-bold">Chef&apos;s Table Signatures</h2>
            <p className="text-gray-600 text-xs mt-0.5">
              Curated by Chef Vikram Sharma
            </p>
          </div>
          <span className="text-amber-400 text-xs font-semibold cursor-pointer flex items-center gap-1">
            Full Menu <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dishes.map((d) => (
            <div
              key={d.id}
              className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden group cursor-pointer hover:border-amber-500/20 transition-all"
              onClick={() => openDish(d)}
            >
              <div className="h-36 overflow-hidden relative">
                <img
                  src={d.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={d.name}
                />
                {d.tag && (
                  <span className="absolute top-2.5 left-2.5 bg-amber-500 text-black text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {d.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
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
      <div className="px-5 py-8 bg-white/[0.02]">
        <h2 className="text-lg font-bold mb-4 text-center">The Ambiance</h2>
        <div className="grid grid-cols-4 gap-2 h-36 rounded-xl overflow-hidden">
          {[
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&q=80",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&q=80",
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
      <div className="px-5 py-10 text-center">
        <h3 className="text-xl font-bold mb-2">Join Us for Dinner</h3>
        <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
          Open Tuesday—Sunday, 7 PM — 11:30 PM. Walk-ins welcome, reservations
          recommended.
        </p>
        <div className="flex justify-center gap-5 flex-wrap text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" /> +91 98765 43210
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" /> Bandra West, Mumbai
          </span>
        </div>
      </div>

      <footer className="border-t border-white/5 px-5 py-5 mt-auto flex justify-between items-center text-xs text-gray-600">
        <span>
          <span className="text-amber-400">✦</span> Tambula
        </span>
        <span>© 2025 Tambula Fine Dining LLP</span>
      </footer>
    </div>
  );
};
