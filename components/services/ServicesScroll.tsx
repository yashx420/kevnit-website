"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import {
  Globe,
  Monitor,
  Smartphone,
  ShoppingCart,
  Search,
  Share2,
  Megaphone,
  PenTool,
  Server,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Custom, high-performance websites that leave a lasting impression.",
    deliverables: [
      "Responsive Design",
      "Fast Loading Speed",
      "SEO Friendly Structure",
      "CMS Integration",
    ],
    color: "#6BC323",
  },
  {
    title: "Web App Development",
    icon: Monitor,
    description: "Scalable and secure web apps built with modern frameworks.",
    deliverables: [
      "Custom Functionality",
      "Database Integration",
      "API Development",
      "User Authentication",
    ],
    color: "#3B82F6",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps for iOS and Android.",
    deliverables: [
      "iOS & Android",
      "React Native / Flutter",
      "App Store Submission",
      "Ongoing Support",
    ],
    color: "#8B5CF6",
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    description:
      "Robust online stores designed to maximize conversions and sales.",
    deliverables: [
      "Shopify / WooCommerce",
      "Payment Gateway Setup",
      "Inventory Management",
      "Secure Checkout",
    ],
    color: "#F59E0B",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description:
      "Improve your search rankings and drive organic traffic to your site.",
    deliverables: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Monthly Reporting",
    ],
    color: "#10B981",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    description:
      "Engage your audience and build brand loyalty across all platforms.",
    deliverables: [
      "Content Strategy",
      "Community Management",
      "Paid Campaigns",
      "Analytics & Insights",
    ],
    color: "#EC4899",
  },
  {
    title: "Paid Advertising",
    icon: Megaphone,
    description:
      "Targeted PPC campaigns on Google and Meta to generate instant leads.",
    deliverables: [
      "Google Ads",
      "Facebook/Instagram Ads",
      "A/B Testing",
      "ROI Tracking",
    ],
    color: "#EF4444",
  },
  {
    title: "Branding & Design",
    icon: PenTool,
    description:
      "Create a cohesive brand identity that resonates with your customers.",
    deliverables: [
      "Logo Design",
      "Brand Guidelines",
      "Marketing Collateral",
      "UI/UX Design",
    ],
    color: "#6366F1",
  },
  {
    title: "Website Maintenance",
    icon: Server,
    description: "Keep your website secure, detailed, and running smoothly.",
    deliverables: [
      "Security Updates",
      "Daily Backups",
      "Performance Monitoring",
      "Content Updates",
    ],
    color: "#14B8A6",
  },
];

export function ServicesScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-12 md:px-24 items-center"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[85vw] md:w-[500px] shrink-0 h-[60vh] md:h-[70vh]"
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
