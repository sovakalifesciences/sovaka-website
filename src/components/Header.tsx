"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Infrastructure", href: "/#infrastructure" },
    { label: "Franchise", href: "/franchise" },
    { label: "Training & Job Opportunities", href: "/training-careers" },
    { label: "AI Ecosystem", href: "/technology" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact", isCTA: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 py-5 shadow-sm"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-4 xl:px-8 2xl:px-12 flex items-center justify-between">
          
          {/* Logo Area (Left Zone) */}
          <div className="flex justify-start w-[170px] xl:w-[180px] 2xl:w-[190px] shrink-0">
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="SOVAKA Lifesciences" 
                className="h-8 xl:h-[34px] 2xl:h-9 w-auto object-contain dark:invert" 
              />
            </Link>
          </div>

          {/* Navigation Area (Center Zone) */}
          <div className="hidden lg:flex justify-center items-center flex-grow px-4 xl:px-6">
            <nav className="flex items-center lg:gap-3 xl:gap-[18px] 2xl:gap-8">
              {navItems.filter(item => !item.isCTA).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="relative text-[11px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold uppercase tracking-[0.08em] text-[#4F4F4F] hover:text-[#1A1A1A] dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300 whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1.5px] after:bg-current after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Button Area (Right Zone - balances the Left Logo Area to ensure perfect centering) */}
          <div className="hidden lg:flex justify-end items-center w-[170px] xl:w-[180px] 2xl:w-[190px] shrink-0">
            {navItems.filter(item => item.isCTA).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="px-4 py-1.5 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] text-[11px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold uppercase tracking-[0.08em] rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#1A1A1A] dark:text-zinc-100 hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] h-[100dvh] bg-white dark:bg-zinc-950 border-l border-zinc-100 dark:border-zinc-900 z-50 shadow-2xl p-8 flex flex-col lg:hidden"
            >
              {/* Header inside Panel */}
              <div className="flex items-center justify-between mb-8 shrink-0">
                <img 
                  src="/logo.png" 
                  alt="SOVAKA Lifesciences" 
                  className="h-7 w-auto object-contain dark:invert" 
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#1A1A1A] dark:text-zinc-100 hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Semantic Navigation Menu */}
              <nav className="flex flex-col flex-grow min-h-0 justify-between">
                {/* Scrollable Navigation Area */}
                <div className="flex-grow overflow-y-auto py-2 pr-1 min-h-0">
                  <div className="flex flex-col gap-6">
                    {navItems.filter(item => !item.isCTA).map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1A1A1A] dark:text-zinc-200 hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300 py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA (Fixed at bottom) */}
                {navItems.filter(item => item.isCTA).map((item, idx) => (
                  <div key={idx} className="pt-6 border-t border-zinc-100 dark:border-zinc-900 shrink-0 mt-8">
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.08em] rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] text-center"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
