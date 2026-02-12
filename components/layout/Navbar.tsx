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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Top position check (larger buffer for smoother handoff)
      setIsAtTop(currentScrollY < 100);

      // Visibility check (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out",
        isAtTop 
          ? "top-0 w-full rounded-none py-6 border-b border-white/5 bg-transparent" 
          : "bottom-8 w-[95%] max-w-5xl rounded-2xl py-3 border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]",
        !isVisible && !isAtTop ? "translate-y-32 opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <div className={cn(
        "px-6 transition-all duration-300",
        isAtTop ? "" : ""
      )}>
        <div className="flex items-center justify-between h-16">
          {!isAtTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-16 w-56 md:h-20 md:w-64 transition-transform duration-500 group-hover:scale-105">
                  <Image 
                    src="/logo.png" 
                    alt="Kevnit Digital Solutions" 
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </motion.div>
          )}

          {/* Spacer if logo is hidden to keep nav on the right */}
          {isAtTop && <div className="flex-1" />}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === link.href ? "text-primary" : "text-white/80"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === link.href ? "w-full" : ""
                )} />
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" variant="primary" className="px-6 h-10 shadow-[0_0_20px_rgba(0,230,118,0.2)]">Get Quote</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={cn(
              "md:hidden bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden absolute w-full left-0 p-6",
              isAtTop ? "top-full mt-4" : "bottom-full mb-4"
            )}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-white/80"
                  )}
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
    </header>
  );
}
