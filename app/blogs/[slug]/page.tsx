import { Navbar } from "@/components/layout/Navbar";
import { blogPosts } from "../blogData";
import { notFound } from "next/navigation";
import { BlogContent } from "./BlogContent";

// Next.js 15 params type
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="bg-[#050505] selection:bg-[#6BC323] selection:text-black min-h-screen">
      <Navbar />
      <BlogContent post={post} relatedPosts={relatedPosts} />
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
