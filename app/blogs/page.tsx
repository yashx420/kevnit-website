"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, categories } from "./blogData";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

/* ─── Flip Card ────────────────────────────────────────────── */
function FlipCard({
  post,
  className = "",
  imgClass = "h-[55%]",
  titleClass = "text-lg md:text-xl",
}: {
  post: (typeof blogPosts)[0];
  className?: string;
  imgClass?: string;
  titleClass?: string;
}) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={`block group h-full ${className}`}
    >
      <div className="relative w-full h-full [perspective:2000px] overflow-visible">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* ── FRONT ── */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c]">
            <div className={`relative ${imgClass} overflow-hidden`}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#6BC323]/20 text-[#6BC323] text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border border-[#6BC323]/20">
                {post.category}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h2
                className={`${titleClass} font-bold text-white tracking-tight leading-tight line-clamp-2 mb-2`}
              >
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-gray-600 text-[11px]">
                <span className="flex items-center gap-1">
                  <Calendar size={10} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-[#6BC323]/30 bg-[#0c0c0c]">
            <div className="h-full flex flex-col p-6 md:p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6BC323] via-[#6BC323]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[2px] h-1/2 bg-gradient-to-t from-[#6BC323]/30 to-transparent" />

              <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#6BC323]/15 text-[#6BC323] text-[10px] font-bold uppercase tracking-widest mb-4 border border-[#6BC323]/20">
                {post.category}
              </span>

              <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-[8]">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 my-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <span className="text-[11px] text-gray-600">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5 text-[#6BC323] text-sm font-semibold">
                  Read
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6BC323]/5 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#6BC323] text-sm uppercase tracking-[0.3em] mb-4 font-medium"
              >
                Insights & Updates
              </motion.p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC323] to-emerald-400">
                  Blog
                </span>
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-md md:text-right"
            >
              Expert perspectives on digital strategy, technology, and growth.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#6BC323] text-black shadow-[0_0_20px_rgba(107,195,35,0.3)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Mosaic Grid */}
      <section className="pb-20 md:pb-32">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Render all posts in a repeatable mosaic pattern */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, i) => {
                  // Every 5 posts, create a different layout feel
                  const isWide = i % 5 === 0 || i % 5 === 1; // First two in every 5 are slightly different if needed
                  // But for simplicity and clean grid, let's just use equal cards for the loop
                  // and maybe just highlight the very first one
                  return (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                      className={`h-[380px] md:h-[420px] lg:h-[480px] ${
                        i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                      }`}
                    >
                      <FlipCard
                        post={post}
                        imgClass={i === 0 ? "h-[65%]" : "h-[55%]"}
                        titleClass={
                          i === 0 ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                        }
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Single filtered result fallback */}
              {filteredPosts.length === 1 && (
                <div className="max-w-2xl mx-auto h-[450px]">
                  <FlipCard
                    post={filteredPosts[0]}
                    imgClass="h-[60%]"
                    titleClass="text-xl md:text-2xl"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">
                No posts found in this category.
              </p>
            </motion.div>
          )}
        </Container>
      </section>
    </main>
  );
}
