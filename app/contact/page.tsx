"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#00E676] selection:text-black">
      <Navbar />
      <div className="pt-32 pb-20 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E676]/5 blur-[150px] pointer-events-none rounded-full" />

         <Container className="relative z-10">
           {/* Header */}
           <AnimatedWrapper className="text-center mb-16">
             <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Let's Talk</h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Ready to start your next project? Get in touch with us today.
             </p>
           </AnimatedWrapper>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Contact Info */}
             <AnimatedWrapper animation="slide-in-left">
               <div className="bg-[#111] p-10 rounded-3xl border border-white/5 h-full">
                 <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4 group">
                     <div className="w-14 h-14 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] shrink-0 group-hover:bg-[#00E676] group-hover:text-black transition-all duration-300">
                       <Mail size={24} />
                     </div>
                     <div>
                       <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                       <p className="text-gray-400 group-hover:text-white transition-colors">info@kevnit.com</p>
                       <p className="text-gray-400 group-hover:text-white transition-colors">support@kevnit.com</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4 group">
                     <div className="w-14 h-14 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] shrink-0 group-hover:bg-[#00E676] group-hover:text-black transition-all duration-300">
                       <Phone size={24} />
                     </div>
                     <div>
                       <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                       <p className="text-gray-400 group-hover:text-white transition-colors">+91 98765 43210</p>
                       <p className="text-gray-400 group-hover:text-white transition-colors">+91 12345 67890</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4 group">
                     <div className="w-14 h-14 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] shrink-0 group-hover:bg-[#00E676] group-hover:text-black transition-all duration-300">
                       <MapPin size={24} />
                     </div>
                     <div>
                       <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                       <p className="text-gray-400 group-hover:text-white transition-colors">123 Tech Park, Innovation Street,<br />Digital City, India</p>
                     </div>
                   </div>
                 </div>

                 {/* Map Placeholder */}
                 <div className="mt-12 w-full h-64 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                   <p className="text-gray-500 font-medium z-10 group-hover:text-[#00E676] transition-colors">Google Map Integration</p>
                 </div>
               </div>
             </AnimatedWrapper>

             {/* Form */}
             <AnimatedWrapper animation="slide-in-right" delay={0.2}>
               <form onSubmit={handleSubmit} className="bg-[#111] p-10 rounded-3xl border border-white/5 space-y-6 shadow-2xl shadow-black/50">
                 <h2 className="text-3xl font-bold mb-2 text-white">Send a Message</h2>
                 <p className="text-gray-400 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-300">Name</label>
                     <input type="text" required className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] outline-none transition-all focus:bg-white/5" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-300">Email</label>
                     <input type="email" required className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] outline-none transition-all focus:bg-white/5" placeholder="john@example.com" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Phone</label>
                   <input type="tel" className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] outline-none transition-all focus:bg-white/5" placeholder="+1 (555) 000-0000" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Service Interested In</label>
                   <div className="relative">
                    <select className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] outline-none transition-all appearance-none cursor-pointer focus:bg-white/5">
                        <option className="bg-[#111]">Website Development</option>
                        <option className="bg-[#111]">App Development</option>
                        <option className="bg-[#111]">SEO Optimization</option>
                        <option className="bg-[#111]">Digital Marketing</option>
                        <option className="bg-[#111]">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        ▼
                    </div>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Message</label>
                   <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] outline-none transition-all resize-none focus:bg-white/5" placeholder="Tell us about your project..." />
                 </div>

                 <Button type="submit" size="lg" className="w-full text-lg mt-4 h-14 bg-[#00E676] text-black hover:bg-[#00C853] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all duration-300">
                   Send Message <Send className="ml-2 w-5 h-5" />
                 </Button>
               </form>
             </AnimatedWrapper>
           </div>
         </Container>
      </div>
    </main>
  );
}
