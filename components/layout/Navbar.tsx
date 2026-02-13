"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button, cn } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY < 100;
      setIsAtTop(atTop);

      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 100) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Navbar - Static, Instant Appearance */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 py-6 border-b border-transparent bg-transparent transition-none",
          isAtTop
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="px-6 w-full">
          <NavContent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isFloating={false}
          />
        </div>
      </div>

      {/* Floating Navbar - Animated Entry/Exit */}
      <AnimatePresence>
        {!isAtTop && isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-2xl py-3 border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50"
          >
            <div className="px-6">
              <NavContent
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isFloating={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={cn(
              "fixed z-40 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden w-[95%] max-w-5xl left-1/2 -translate-x-1/2 p-6 md:hidden",
              isAtTop ? "top-24" : "bottom-24",
            )}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-[#6BC323] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Get Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavContent({
  isOpen,
  setIsOpen,
  isFloating,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isFloating: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between h-16">
      <Link href="/" className="flex items-center gap-2 group">
        <div
          className={cn(
            "relative transition-transform duration-500 group-hover:scale-105",
            isFloating
              ? "h-16 w-32 md:w-36 lg:w-40"
              : "h-16 w-40 md:w-48 lg:w-56",
          )}
        >
          <Image
            src="/logo.png"
            alt="Kevnit Digital Solutions"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>

      <div className="flex-1" />

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#6BC323] relative group",
              pathname === link.href ? "text-[#6BC323]" : "text-white/80",
            )}
          >
            {link.name}
            <span
              className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6BC323] transition-all duration-300 group-hover:w-full",
                pathname === link.href ? "w-full" : "",
              )}
            />
          </Link>
        ))}
        <Link href="/contact">
          <Button
            size="sm"
            variant="primary"
            className="px-6 h-10 shadow-[0_0_20px_rgba(107,195,35,0.2)]"
          >
            Get Quote
          </Button>
        </Link>
      </nav>

      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
}
