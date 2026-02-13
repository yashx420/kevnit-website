"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { motion } from "framer-motion";

const policySections = [
  {
    id: "intro",
    title: "1 Introduction",
    content:
      "This Privacy and Data Protection Policy (“Policy”) specifies the Privacy Principles followed by Kevnit Digital Solutions Private Limited and its employees with regards to the collection, use, transfer, storage and destruction of personal information/personally identifiable information.",
  },
  {
    id: "purpose",
    title: "2 Purpose",
    content:
      "This Policy aims to facilitate “Privacy-by-Design” principles in implementation of systems and processes by Kevnit.",
  },
  {
    id: "scope",
    title: "3 Scope",
    content:
      "This policy document applies to Kevnit’s a) Information, b) Information Systems, c) Employees and d) Third-Party Staff.",
  },
  {
    id: "fair-processing",
    title: "4.1 Fair and Lawful Processing",
    points: [
      "Notice: Provide timely and appropriate notice to Data Subjects about data processing practices.",
      "Choice: Not provide personal information to third parties without giving Data Subjects an opportunity to choose.",
      "Consent: Process personal information only with an individual’s consent.",
    ],
  },
  {
    id: "limitations",
    title: "4.2 Limitations on Collection",
    points: [
      "Collect personal information only for specific and legitimate business purposes.",
      "Data Minimization: Limit processing to what is necessary.",
      "Onward Transfer: Provide adequate protection when transferring data to third parties or other countries.",
    ],
  },
  {
    id: "management",
    title: "4.3 Management of Information",
    points: [
      "Accuracy/Integrity: Ensure personal information is accurate and reliable for its intended use.",
      "Access: Give Data Subjects reasonable access to correct or delete information.",
      "Security: Proportional measures to protect data from loss, misuse, and unauthorized access.",
      "Retention: Keep identification no longer than necessary.",
    ],
  },
];

export default function DataProtectionPolicy() {
  return (
    <main className="relative z-50 min-h-screen bg-black text-white selection:bg-[#6BC323] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6BC323]/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedWrapper className="text-center mb-24">
            <span className="text-[#6BC323] font-mono text-sm tracking-widest uppercase mb-4 block">
              DPA Compliance
            </span>
            <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic leading-[1.1]">
              Data <br className="md:hidden" />
              <span className="text-white not-italic">Protection</span>
            </h1>
            <div className="w-24 h-1 bg-[#6BC323] mx-auto rounded-full mb-8" />
          </AnimatedWrapper>

          <div className="max-w-4xl mx-auto space-y-12">
            {policySections.map((section, index) => (
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
    </main>
  );
}
