import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import {
  Check,
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  Share2,
  Megaphone,
  PenTool,
  Layout,
  Server,
  Monitor,
} from "lucide-react";
import Link from "next/link";

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
  },
  {
    title: "Web Application Development",
    icon: Monitor,
    description:
      "Scalable and secure web apps built with modern frameworks like Next.js.",
    deliverables: [
      "Custom Functionality",
      "Database Integration",
      "API Development",
      "User Authentication",
    ],
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
  },
  {
    title: "E-Commerce Development",
    icon: ShoppingCart,
    description:
      "Robust online stores designed to maximize conversions and sales.",
    deliverables: [
      "Shopify / WooCommerce",
      "Payment Gateway Setup",
      "Inventory Management",
      "Secure Checkout",
    ],
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
  },
  {
    title: "Branding & Graphic Design",
    icon: PenTool,
    description:
      "Create a cohesive brand identity that resonates with your customers.",
    deliverables: [
      "Logo Design",
      "Brand Guidelines",
      "Marketing Collateral",
      "UI/UX Design",
    ],
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
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#6BC323] selection:text-black">
      <Navbar />
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6BC323]/5 blur-[120px] pointer-events-none" />

        <Container>
          <AnimatedWrapper className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 relative z-10">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC323] to-[#58a51c]">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto relative z-10">
              Comprehensive digital solutions tailored to your business goals.
              We combine creativity with technology to deliver results.
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service, index) => (
              <AnimatedWrapper
                key={index}
                animation="fade-up"
                delay={index * 0.1}
              >
                <div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#6BC323]/30 transition-all duration-300 group h-full flex flex-col hover:-translate-y-2">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6BC323]/20 transition-colors">
                    <service.icon className="text-[#6BC323] w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#6BC323] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-[#6BC323]" /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full hover:bg-[#6BC323] hover:text-black hover:border-[#6BC323]"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Pricing Note */}
          <AnimatedWrapper
            delay={0.4}
            className="mt-20 text-center bg-gradient-to-br from-[#111] to-black p-12 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Transparent Pricing
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Every project is unique. We provide custom quotes based on your
                specific requirements and goals, ensuring you only pay for what
                you need.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#6BC323] text-black hover:bg-[#58a51c] shadow-lg shadow-[#6BC323]/20"
                >
                  Get a Custom Quote
                </Button>
              </Link>
            </div>
          </AnimatedWrapper>
        </Container>
      </div>
    </main>
  );
}
