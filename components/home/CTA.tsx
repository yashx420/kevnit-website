import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#00E676] to-[#00C853] text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Container className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 max-w-4xl mx-auto leading-tight">
          Ready to Scale Your Business to New Heights?
        </h2>
        <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-2xl mx-auto font-medium">
          Let’s build something amazing together. Get a free consultation and proposal today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-black/80 border-none min-w-[200px] h-14 text-lg shadow-xl">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/10 min-w-[200px] h-14 text-lg">
              Explore Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
