"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { motion } from "framer-motion";

const termsSections = [
  {
    id: "intro",
    title: "Terms and Conditions",
    content:
      "Access and use of www.kevnitdigital.com (hereinafter referred to as the “Site”) are subject to the terms and conditions you find here (“Terms”) and the Privacy Policy referred to herein. By accessing or using this Site, you (”You” or “Your”) agree, without any reservations, to abide by these Terms and agree to be bound legally by the Terms including any modifications made from time to time. IF YOU DISAGREE WITH THESE TERMS, PLEASE DO NOT USE THE SITE OR SERVICES.",
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    points: [
      "www.kevnitdigital.com and its contents are the property of Mr.Noel and are protected, without limitation, pursuant to Indian and foreign copyright and trademark laws.",
      "You must use the Site for lawful purposes only. You must not transmit through the Site any content or do any activity that is unlawful, abusive, defamatory, fraudulent or induces or encourages any criminal activity.",
      "You must not engage in any unsolicited or unauthorized advertising, promotional materials or any chain mail, junk mail, or any form of solicitation.",
      "You must not and must not cause anyone to interfere with or disrupt the Site or damage, disable, or impair Our servers or networks connected to Site.",
      "You must not infringe intellectual property rights of others or impersonate any person business or entity.",
    ],
  },
  {
    id: "digitized-works",
    title: "Digitized Works",
    content:
      "All literary works on the Site (each “Digitized Work”) are the exclusive property of www.kevnitdigital.com or its licensors. The download of, and access to any Digitized Work is intended only for registered users' personal and non-commercial use. Any other use is strictly prohibited.",
  },
  {
    id: "third-party",
    title: "Third Party Sites",
    content:
      "We may provide links to websites of third parties in the Site, which are neither part of nor controlled by www.kevnitdigital.com. Use of such links is at Your own risk. We will not be responsible for any loss or damage resulting from Your use of such third party web sites.",
  },
  {
    id: "purchasing",
    title: "Purchasing & Payment",
    items: [
      {
        subtitle: "Order Process",
        text: "A binding contract is formed only once You have placed an order and we have received the payment through the designated payment gateway. Digitized Works are for personal use only and not for resale.",
      },
      {
        subtitle: "Payment Modes",
        text: "We accept Credit Cards (Visa, MasterCard, Amex), Debit Cards, Payment Wallets, and Net Banking. All payments are secured by SSL.",
      },
      {
        subtitle: "Cancellations",
        text: "Once payment is successfully received, no cancellation and refund in respect of the same shall be permitted.",
      },
    ],
  },
  {
    id: "liability",
    title: "Disclaimer & Liability",
    content:
      "The Site and Digitized Works are provided on an “AS IS” basis. We provide no warranties of any kind.",
    points: [
      "TO THE EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR LOSSES.",
      "Our cumulative liability shall not exceed the total amount paid by you for the specific Digitized Work giving rise to the claim.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content:
      "These Terms shall be subject to the jurisdiction of the courts in Bangalore, India and shall be governed by the laws of India.",
  },
];

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#6BC323] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6BC323]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedWrapper className="text-center mb-24">
            <span className="text-[#6BC323] font-mono text-sm tracking-widest uppercase mb-4 block">
              Legal Agreement
            </span>
            <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
              Terms of <br className="md:hidden" />
              <span className="text-white not-italic">Use</span>
            </h1>
            <div className="w-24 h-1 bg-[#6BC323] mx-auto rounded-full mb-8" />
          </AnimatedWrapper>

          <div className="max-w-4xl mx-auto space-y-12">
            {termsSections.map((section, index) => (
              <AnimatedWrapper key={section.id} delay={index * 0.1}>
                <div className="bg-[#111]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#6BC323]/20 transition-all duration-500">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white transition-colors">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="text-gray-400 leading-relaxed text-lg mb-6">
                      {section.content}
                    </p>
                  )}

                  {section.items && (
                    <div className="space-y-8">
                      {section.items.map((item, i) => (
                        <div key={i} className="space-y-3">
                          <h3 className="text-white font-bold text-xl italic">
                            {item.subtitle}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.points && (
                    <ul className="space-y-4">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6BC323] mt-2.5 shrink-0" />
                          <p className="text-gray-400 leading-relaxed">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
