"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle,
  Shield,
  Truck,
  Gift,
  Minus,
  Plus,
  Share2,
} from "lucide-react";

const allProducts = [
  {
    id: 0,
    name: "Crimson Banarasi Silk Saree",
    price: "₹5,499",
    old: "₹9,999",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    badge: "45% off",
    cat: "Sarees",
    rating: "4.8",
    reviews: 312,
    desc: "Handwoven in Varanasi with pure silk and real zari work. Intricate floral motifs and a rich pallu — perfect for weddings and festive occasions.",
    sizes: ["Free Size"],
    colors: ["Crimson", "Royal Blue", "Emerald"],
  },
  {
    id: 1,
    name: "Anarkali Chanderi Kurta Set",
    price: "₹3,299",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    badge: "New",
    cat: "Kurtas",
    rating: "4.6",
    reviews: 87,
    desc: "Breezy Chanderi cotton anarkali with block-print motifs and mirror work. Comes with matching palazzo pants and handloom dupatta.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Powder Blue", "Dusty Rose", "Ivory"],
  },
  {
    id: 2,
    name: "Royal Lehenga Choli Set",
    price: "₹14,999",
    old: "₹24,999",
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80",
    badge: "Bestseller",
    cat: "Lehengas",
    rating: "4.9",
    reviews: 456,
    desc: "Bridal lehenga in raw silk with hand-embroidered sequin and resham work. 4-meter flare, corset blouse, and matching net dupatta.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Navy", "Blush Pink"],
  },
  {
    id: 3,
    name: "Polki Kundan Jewellery Set",
    price: "₹2,499",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    cat: "Jewellery",
    rating: "4.7",
    reviews: 203,
    desc: "Statement Kundan necklace with polki stones, meenakari work, and matching jhumka earrings. Handcrafted by artisans from Jaipur.",
    sizes: ["One Size"],
    colors: ["Gold", "Rose Gold"],
  },
  {
    id: 4,
    name: "Ikat Print Palazzo Set",
    price: "₹1,899",
    old: "₹3,499",
    img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80",
    badge: "46% off",
    cat: "Kurtas",
    rating: "4.5",
    reviews: 156,
    desc: "Contemporary ikat-printed co-ord set in breathable cotton. Straight-cut kurta with side slits and matching wide-leg palazzos.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Teal", "Mustard", "Indigo"],
  },
  {
    id: 5,
    name: "Phulkari Embroidered Dupatta",
    price: "₹1,199",
    img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80",
    cat: "Accessories",
    rating: "4.8",
    reviews: 89,
    desc: "Authentic Phulkari dupatta from Punjab. Each piece takes 2-3 weeks to hand-embroider. Vibrant threadwork on georgette base.",
    sizes: ["Free Size"],
    colors: ["Multi", "Red-Gold", "Blue-Green"],
  },
  {
    id: 6,
    name: "Zardozi Silk Potli Bag",
    price: "₹899",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
    badge: "New",
    cat: "Accessories",
    rating: "4.4",
    reviews: 64,
    desc: "Handcrafted silk potli bag with zardozi embroidery and tassel detail. Spacious enough for phone, cards, and essentials.",
    sizes: ["One Size"],
    colors: ["Gold", "Black", "Maroon"],
  },
  {
    id: 7,
    name: "Embroidered Kolhapuri Juttis",
    price: "₹1,499",
    old: "₹2,499",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
    badge: "40% off",
    cat: "Footwear",
    rating: "4.6",
    reviews: 178,
    desc: "Genuine leather juttis with hand-embroidered floral motifs. Cushioned insole for all-day comfort. Made in Kolhapur.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Tan", "Red", "Black"],
  },
];

export const FashionMockup = () => {
  const [page, setPage] = useState<"home" | "product">("home");
  const [selectedProduct, setSelectedProduct] = useState(allProducts[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top of mockup when navigating pages
  useEffect(() => {
    if (containerRef.current) {
      const scrollParent =
        containerRef.current.closest("[data-lenis-prevent]") ||
        containerRef.current.closest(".overflow-y-auto");
      if (scrollParent) scrollParent.scrollTop = 0;
    }
  }, [page, selectedProduct]);

  const openProduct = (p: (typeof allProducts)[0]) => {
    setSelectedProduct(p);
    setSelectedSize(p.sizes[0]);
    setSelectedColor(0);
    setQty(1);
    setPage("product");
  };

  const Nav = () => (
    <>
      <div className="bg-gradient-to-r from-rose-700 via-pink-600 to-amber-600 text-white text-center text-xs py-2 font-medium tracking-wide">
        ✨ FESTIVE SALE — Flat 40% Off + Extra 10% Prepaid | Code:{" "}
        <span className="font-black bg-white/20 px-1.5 py-0.5 rounded">
          UTSAV40
        </span>
      </div>
      <nav className="flex items-center justify-between px-5 py-3 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage("home")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-rose-600 to-amber-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
            आ
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">
            Aavriti
          </span>
        </div>
        <div className="hidden md:flex gap-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {["New In", "Sarees", "Lehengas", "Kurtas", "Jewellery", "Sale"].map(
            (t, i) => (
              <span
                key={i}
                className={`cursor-pointer hover:text-rose-500 ${t === "Sale" ? "text-rose-500" : ""}`}
                onClick={() => setPage("home")}
              >
                {t}
              </span>
            ),
          )}
        </div>
        <div className="flex gap-4 items-center">
          <Search className="w-5 h-5 cursor-pointer text-gray-500 hover:text-rose-500" />
          <Heart className="w-5 h-5 cursor-pointer text-gray-500 hover:text-rose-500" />
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-rose-500" />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              4
            </span>
          </div>
        </div>
      </nav>
    </>
  );

  // ========== PRODUCT PAGE ==========
  if (page === "product") {
    const similar = allProducts
      .filter((p) => p.id !== selectedProduct.id)
      .slice(0, 4);
    return (
      <div
        ref={containerRef}
        className="w-full bg-white text-gray-900 font-sans min-h-[900px] flex flex-col"
      >
        <Nav />
        <div className="px-5 py-3 flex items-center gap-2 text-xs text-gray-400 bg-gray-50 border-b border-gray-100">
          <span
            className="cursor-pointer hover:text-rose-500"
            onClick={() => setPage("home")}
          >
            Home
          </span>
          <ChevronRight className="w-3 h-3" />
          <span
            className="cursor-pointer hover:text-rose-500"
            onClick={() => setPage("home")}
          >
            {selectedProduct.cat}
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 font-medium truncate">
            {selectedProduct.name}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-gray-50 p-5">
            <button
              onClick={() => setPage("home")}
              className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={selectedProduct.img}
                className="w-full h-full object-cover"
                alt={selectedProduct.name}
              />
            </div>
            {selectedProduct.badge && (
              <span
                className={`absolute top-8 right-8 px-3 py-1.5 rounded-full text-xs font-bold ${selectedProduct.badge.includes("off") ? "bg-red-500 text-white" : selectedProduct.badge === "New" ? "bg-black text-white" : "bg-amber-400 text-black"}`}
              >
                {selectedProduct.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="px-6 py-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2.5 py-1 rounded">
                {selectedProduct.cat}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-semibold">{selectedProduct.rating}</span>
                <span>({selectedProduct.reviews})</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-black">
                {selectedProduct.price}
              </span>
              {selectedProduct.old && (
                <span className="text-gray-400 text-base line-through">
                  {selectedProduct.old}
                </span>
              )}
              {selectedProduct.badge?.includes("off") && (
                <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded">
                  {selectedProduct.badge}
                </span>
              )}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {selectedProduct.desc}
            </p>

            {/* Colour */}
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Colour — {selectedProduct.colors[selectedColor]}
              </p>
              <div className="flex gap-2">
                {selectedProduct.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${i === selectedColor ? "border-rose-500 bg-rose-50 text-rose-600" : "border-gray-200 text-gray-500"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Size
              </p>
              <div className="flex gap-2 flex-wrap">
                {selectedProduct.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[40px] h-10 rounded-lg text-xs font-bold border flex items-center justify-center px-3 ${s === selectedSize ? "border-rose-500 bg-rose-500 text-white" : "border-gray-200 text-gray-600"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Qty
              </p>
              <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-bold text-sm border-x border-gray-200">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 mb-5">
              <button className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-rose-500/20">
                Add to Bag — {selectedProduct.price}
              </button>
              <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center hover:border-rose-500">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center hover:border-rose-500">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="flex gap-5 text-xs text-gray-400 uppercase tracking-wider font-semibold border-t border-gray-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4" /> Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" /> COD Available
              </span>
              <span className="flex items-center gap-1.5">
                <Gift className="w-4 h-4" /> 15-Day Returns
              </span>
            </div>
          </div>
        </div>

        {/* Similar */}
        <div className="px-5 py-8 bg-gray-50 border-t border-gray-100">
          <h3 className="text-base font-bold mb-4">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similar.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => openProduct(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-xl mb-2">
                  <img
                    src={item.img}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    alt={item.name}
                  />
                </div>
                <h4 className="font-semibold text-xs truncate">{item.name}</h4>
                <span className="font-bold text-sm">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <footer className="bg-gray-900 text-white px-5 py-5 text-xs flex justify-between items-center mt-auto">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-rose-500 to-amber-500 rounded" />
            <span className="font-black text-sm">Aavriti</span>
          </div>
          <span className="text-gray-500">
            © 2025 Aavriti Fashions Pvt. Ltd.
          </span>
        </footer>
      </div>
    );
  }

  // ========== HOME PAGE ==========
  return (
    <div
      ref={containerRef}
      className="w-full bg-[#faf8f5] text-gray-900 font-sans min-h-[900px] flex flex-col"
    >
      <Nav />
      {/* Hero */}
      <div className="relative h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-700 to-amber-700" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 max-w-lg">
          <span className="text-amber-300 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            ✨ Navratri Collection &apos;25
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-[1.1] mb-3">
            Grace Meets Grandeur.
          </h1>
          <p className="text-white/70 text-sm mb-6 max-w-sm leading-relaxed">
            400+ handcrafted ethnic pieces from India&apos;s finest artisans.
            Banarasi sarees, designer lehengas & everyday kurtas starting ₹899.
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-bold text-sm shadow-lg">
              Shop Festive Edit
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold text-sm">
              New Arrivals
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 py-5 bg-white border-b border-gray-100">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {[
            "🪔 Festive",
            "👗 Sarees",
            "💃 Lehengas",
            "👔 Kurtas",
            "💎 Jewellery",
            "👜 Bags",
            "👠 Footwear",
          ].map((c, i) => (
            <span
              key={i}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${i === 0 ? "bg-rose-500 text-white shadow-md shadow-rose-500/20" : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-rose-500"}`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-5 py-8">
        <div className="flex justify-between items-end mb-5">
          <div>
            <h2 className="text-lg font-bold">Curated For You</h2>
            <p className="text-gray-400 text-xs mt-1">
              Handpicked by our stylists
            </p>
          </div>
          <span className="text-xs font-bold text-rose-500 cursor-pointer flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allProducts.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => openProduct(item)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-xl mb-2">
                <img
                  src={item.img}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  alt={item.name}
                />
                {item.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-bold ${item.badge.includes("off") ? "bg-red-500 text-white" : item.badge === "New" ? "bg-black text-white" : "bg-amber-400 text-black"}`}
                  >
                    {item.badge}
                  </span>
                )}
                <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-rose-500 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 py-2 text-center text-xs font-bold uppercase tracking-wider">
                  View Product →
                </div>
              </div>
              <h3 className="font-semibold text-sm truncate">{item.name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-bold text-sm">{item.price}</span>
                {item.old && (
                  <span className="text-gray-400 text-xs line-through">
                    {item.old}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs text-gray-500">
                  {item.rating} ({item.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className="grid grid-cols-4 gap-3 px-5 py-5 bg-white border-t border-gray-100">
        {[
          {
            icon: <Truck className="w-5 h-5" />,
            l: "Free Shipping",
            s: "Orders ₹599+",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            l: "COD Available",
            s: "Pay on delivery",
          },
          {
            icon: <Gift className="w-5 h-5" />,
            l: "Easy Returns",
            s: "15-day window",
          },
          {
            icon: <CheckCircle className="w-5 h-5" />,
            l: "Authentic",
            s: "100% handcrafted",
          },
        ].map((t, i) => (
          <div key={i} className="text-center">
            <div className="text-rose-500 flex justify-center mb-1">
              {t.icon}
            </div>
            <div className="text-xs font-bold text-gray-700">{t.l}</div>
            <div className="text-[11px] text-gray-400">{t.s}</div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mx-5 my-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6 text-center border border-rose-100/50">
        <h3 className="text-base font-bold mb-1">
          Get ₹500 Off Your First Order
        </h3>
        <p className="text-gray-400 text-xs mb-4">
          Join 2L+ women who shop ethnic with Aavriti.
        </p>
        <div className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-sm outline-none focus:border-rose-400"
          />
          <button className="bg-rose-500 text-white px-5 py-2.5 rounded-full font-bold text-sm">
            Join
          </button>
        </div>
      </div>

      <footer className="bg-gray-900 text-white px-5 py-6 mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-gradient-to-br from-rose-500 to-amber-500 rounded" />
              <span className="font-black text-sm">Aavriti</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Celebrating India&apos;s textile heritage since 2019.
            </p>
          </div>
          {[
            ["Shop", "Sarees", "Lehengas", "Kurtas", "Sale"],
            ["Help", "Track Order", "Returns", "Size Guide"],
            ["Connect", "Instagram", "WhatsApp", "Pinterest"],
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-2 text-white/80">{col[0]}</h4>
              {col.slice(1).map((l, j) => (
                <p
                  key={j}
                  className="text-gray-500 py-0.5 cursor-pointer hover:text-white"
                >
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};
