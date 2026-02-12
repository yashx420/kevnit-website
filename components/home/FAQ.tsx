"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while more complex e-commerce or custom web applications can take 4-8 weeks or more."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages to ensure your website remains secure, up-to-date, and optimized. We believe in building long-term partnerships with our clients."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is project-based and depends on your specific requirements. We offer competitive rates and will provide a detailed quote after our initial consultation."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely! We specialize in SEO, Google Ads, and social media marketing to help you drive traffic and generate leads. Our websites are built with SEO best practices in mind."
  },
  {
    question: "Do you build mobile apps?",
    answer: "Yes, we develop native iOS and Android apps, as well as cross-platform solutions using technologies like Flutter and React Native."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <Container className="max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all duration-300 hover:border-[#00E676]/30">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className={`text-[#00E676] transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}>
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
