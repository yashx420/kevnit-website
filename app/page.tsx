import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { Accreditations } from "@/components/home/Accreditations";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#00E676] selection:text-black">
      <Navbar />
      <Hero />
      <Trust />
      <ServicesPreview />
      <WhyChoose />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <Accreditations />
      <CTA />
    </main>
  );
}
