"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Cloud,
  BarChart3,
  Share2,
  Workflow,
  Target,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const companies = [
  { name: "AWS", icon: Cloud, color: "text-[#FF9900]" },
  { name: "HubSpot", icon: Share2, color: "text-[#FF7A59]" },
  { name: "n8n", icon: Workflow, color: "text-[#FF6E6E]" },
  { name: "Google Ads", icon: Target, color: "text-[#4285F4]" },
  { name: "Meta Ads", icon: Facebook, color: "text-[#0668E1]" },
  { name: "Google Analytics", icon: BarChart3, color: "text-[#E37400]" },
];

export function Footer() {
  return (
    <footer className="relative md:fixed bottom-0 left-0 w-full z-0 bg-[#050505] border-t border-white/10 pt-6 pb-8 md:h-[400px] flex flex-col justify-end">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative h-16 w-52 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Kevnit Digital Solutions"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kevnit Digital Solutions is a premium digital agency transforming
              businesses with cutting-edge technology and innovative marketing
              strategies.
            </p>
            <div className="flex gap-4">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/kevnit-information-technology-company?originalSubdomain=in",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/kevnitdigitalsolutions/?hl=en",
                },
                { Icon: Twitter, href: "https://x.com/kevnitdigital" },
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/KevnitDigitalSolutions/",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#6BC323] hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "App Development",
                "E-Commerce",
                "Digital Marketing",
                "SEO Optimization",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#6BC323] text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Use", href: "/terms-of-use" },
                { name: "Data Policy", href: "/data-protection-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#6BC323] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#6BC323] shrink-0 mt-0.5" />
                <span>
                  <a
                    href="https://www.google.com/maps/dir//Kevnit,+F1,+Talankis.+929+4th+A+Cross,+9th+Main+Hongasandra+GB+Palya+Rd,+Vijaya+Bank+Layout,+Bengaluru,+Karnataka+560076/@12.8892884,77.6192442,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae6adbdd5576ad:0xd306a7108fdbde84!2m2!1d77.6092019!2d12.8911666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6BC323] transition-colors"
                  >
                    Kevnit, F1, Talankis. 929 4th A Cross, 9th Main Hongasandra
                    GB Palya Rd, Vijaya Bank Layout, Bengaluru, Karnataka 560076
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#6BC323] shrink-0" />
                <span>+91 80471 06668</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#6BC323] shrink-0" />
                <span>info@kevnit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kevnit Digital Solutions. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-500">
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/data-protection-policy"
              className="hover:text-white transition-colors"
            >
              Data Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
