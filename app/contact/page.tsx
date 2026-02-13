"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "927ec7aa-3d76-4be7-9c80-c639b6b40e36");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data);

      if (data.success || response.ok) {
        setShowSuccess(true);
        e.currentTarget.reset();
      } else {
        alert(
          data.message ||
            "Submission failed. Please try again or email us directly.",
        );
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#6BC323] selection:text-black">
      <Navbar />
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6BC323]/5 blur-[150px] pointer-events-none rounded-full" />

        <Container className="relative z-10">
          {/* Header */}
          <AnimatedWrapper className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with us today.
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedWrapper animation="slide-in-left">
              <div className="bg-[#111] p-10 rounded-3xl border border-white/5 h-full">
                <h2 className="text-3xl font-bold mb-8 text-white">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-[#6BC323]/10 flex items-center justify-center text-[#6BC323] shrink-0 group-hover:bg-[#6BC323] group-hover:text-black transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        yash50sinha@gmail.com
                      </p>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        support@kevnit.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-[#6BC323]/10 flex items-center justify-center text-[#6BC323] shrink-0 group-hover:bg-[#6BC323] group-hover:text-black transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        +91 98765 43210
                      </p>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        +91 12345 67890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-[#6BC323]/10 flex items-center justify-center text-[#6BC323] shrink-0 group-hover:bg-[#6BC323] group-hover:text-black transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        Kevnit, F1, Talankis. 929 4th A Cross, 9th Main
                        Hongasandra GB Palya Rd, Vijaya Bank Layout, Bengaluru,
                        Karnataka 560076
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <a
                  href="https://www.google.com/maps/dir//Kevnit,+F1,+Talankis.+929+4th+A+Cross,+9th+Main+Hongasandra+GB+Palya+Rd,+Vijaya+Bank+Layout,+Bengaluru,+Karnataka+560076/@12.8892884,77.6192442,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae6adbdd5576ad:0xd306a7108fdbde84!2m2!1d77.6092019!2d12.8911666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 w-full h-64 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group block"
                >
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kevnit,+F1,+Talankis.+929+4th+A+Cross,+9th+Main+Hongasandra+GB+Palya+Rd,+Vijaya+Bank+Layout,+Bengaluru,+Karnataka+560076&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "invert(90%) hue-rotate(180deg)",
                      pointerEvents: "none",
                    }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
                  ></iframe>
                </a>
              </div>
            </AnimatedWrapper>

            {/* Form */}
            <AnimatedWrapper animation="slide-in-right" delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="bg-[#111] p-10 rounded-3xl border border-white/5 space-y-6 shadow-2xl shadow-black/50 relative overflow-hidden"
              >
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 z-20 bg-[#111] flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#6BC323]/20 flex items-center justify-center text-[#6BC323] mb-6">
                      <Send size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for your enquiry. We'll get back to you at
                      yash50sinha@gmail.com shortly.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-8 border-[#6BC323]/30 text-[#6BC323] hover:bg-[#6BC323]/10"
                      onClick={() => setShowSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}

                <h2 className="text-3xl font-bold mb-2 text-white">
                  Send a Message
                </h2>
                <p className="text-gray-400 mb-6">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#6BC323] focus:ring-1 focus:ring-[#6BC323] outline-none transition-all focus:bg-white/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#6BC323] focus:ring-1 focus:ring-[#6BC323] outline-none transition-all focus:bg-white/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#6BC323] focus:ring-1 focus:ring-[#6BC323] outline-none transition-all focus:bg-white/5"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Service Interested In
                  </label>
                  <CustomSelect
                    options={[
                      "Website Development",
                      "App Development",
                      "SEO Optimization",
                      "Digital Marketing",
                      "Social Media Management",
                      "Other",
                    ]}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6BC323] focus:ring-1 focus:ring-[#6BC323] outline-none transition-all resize-none focus:bg-white/5"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg mt-4 h-14 bg-[#6BC323] text-black hover:bg-[#58a51c] hover:shadow-[0_0_20px_rgba(107,195,35,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </AnimatedWrapper>
          </div>
        </Container>
      </div>
    </main>
  );
}

function CustomSelect({ options }: { options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all focus-within:border-[#6BC323]"
      >
        <span>{selected}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500"
        >
          <Send size={16} className="rotate-90" />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={
          isOpen
            ? { opacity: 1, y: 5, pointerEvents: "auto" }
            : { opacity: 0, y: -10, pointerEvents: "none" }
        }
        className="absolute z-50 w-full bg-[#111] border border-white/10 rounded-xl mt-1 overflow-hidden shadow-2xl"
      >
        {options.map((option) => (
          <div
            key={option}
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
            className={`px-4 py-3 cursor-pointer transition-colors hover:bg-[#6BC323]/20 hover:text-white ${
              selected === option
                ? "bg-[#6BC323]/10 text-[#6BC323]"
                : "text-gray-400"
            }`}
          >
            {option}
          </div>
        ))}
      </motion.div>

      {/* Hidden input for form submission */}
      <input type="hidden" name="service" value={selected} />
    </div>
  );
}
