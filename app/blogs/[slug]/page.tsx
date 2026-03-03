"use client";

import { use } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { blogPosts } from "../blogData";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Tag,
} from "lucide-react";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Parse content into sections
  const contentSections = post.content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p
        key={i}
        className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
      >
        {block}
      </p>
    );
  });

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />

      {/* Hero Cover */}
      <section className="relative pt-24 h-[60vh] md:h-[80vh] flex items-end overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 to-transparent" />

        <Container className="relative z-10 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#6BC323] transition-colors mb-6 mr-6 text-sm"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-[#6BC323]/20 text-[#6BC323] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#6BC323]/20">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <User size={14} className="text-[#6BC323]" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-[#6BC323]" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-[#6BC323]" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="prose-custom"
            >
              {contentSections}
            </motion.article>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mt-16 pt-8 border-t border-white/10"
            >
              <Tag size={16} className="text-gray-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs border border-white/10 hover:border-[#6BC323]/30 hover:text-[#6BC323] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
              More <span className="text-[#6BC323]">Articles</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/blogs/${related.slug}`} className="block group">
                    <article className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#6BC323]/30 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={related.coverImage}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#6BC323]/20 text-[#6BC323] text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-[#6BC323]/20">
                          {related.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6BC323] transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[#6BC323] text-sm font-medium mt-4">
                          Read More
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
