import { Navbar } from "@/components/layout/Navbar";
import { HeroCanvas } from "@/components/home/HeroCanvas";
import { Trust } from "@/components/home/Trust";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { UIMockupParallax } from "@/components/home/UIMockupParallax";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { Accreditations } from "@/components/home/Accreditations";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#00E676] selection:text-black">
      <Navbar />
      <HeroCanvas />
      <Trust />
      <ServicesPreview />
      <UIMockupParallax />
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
