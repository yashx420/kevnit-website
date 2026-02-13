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
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold text-white hover:text-[#6BC323] transition-colors tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="px-8 py-6 text-lg rounded-full">
                    Start a Project
                  </Button>
                </Link>
              </motion.div>
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
            "relative transition-all duration-500",
            isFloating
              ? "h-16 w-32 md:w-36 lg:w-40 opacity-100 scale-100"
              : "h-16 w-32 md:w-36 lg:w-40 opacity-100 scale-100 hidden md:block",
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
        className="md:hidden text-white p-2 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
