"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  // Motion configurations for "Calm Intelligence"
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth deceleration
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x: x * 12, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleScrollToEcosystem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("ecosystem-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[95vh] flex items-center bg-[#F1EDE2] dark:bg-[#0E121D] bg-[radial-gradient(circle_at_75%_35%,_rgba(255,255,255,0.7)_0%,_rgba(241,237,226,0)_60%)] dark:bg-[radial-gradient(circle_at_75%_35%,_rgba(30,41,59,0.45)_0%,_rgba(14,18,29,0)_60%)] overflow-hidden pt-32 lg:pt-40 pb-24 lg:pb-32 transition-colors duration-300">
      
      {/* Premium Depth System: Faint architectural contour rings */}
      <div 
        className="absolute inset-0 w-full h-full opacity-50 dark:opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute right-[-10%] top-[-5%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full border border-zinc-300/20 dark:border-zinc-700/10" />
        <div className="absolute right-[2%] top-[5%] w-[60vw] h-[60vw] max-w-[650px] max-h-[650px] rounded-full border border-zinc-300/30 dark:border-zinc-700/15" />
        <div className="absolute right-[12%] top-[15%] w-[42vw] h-[42vw] max-w-[450px] max-h-[450px] rounded-full border border-zinc-300/40 dark:border-zinc-700/20" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center items-start">
          
          {/* Left Column: Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Overline */}
            <motion.div variants={fadeUpVariant} className="mb-4">
              <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-300 bg-[#E5E0D2] dark:bg-zinc-900/60 border border-zinc-300/40 dark:border-zinc-800/40 px-3 py-1.5 rounded-sm">
                Dental Imaging Ecosystem
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] text-[#1A1A1A] dark:text-zinc-50 mb-6"
            >
              Building the future ecosystem of dental imaging.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeUpVariant}
              className="text-lg md:text-xl lg:text-2xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed mb-6 max-w-[600px]"
            >
              Connected imaging infrastructure, integrated radiology workflows and intelligent systems for technology-enabled dentistry.
            </motion.p>

            {/* Proof Line */}
            <motion.div 
              variants={fadeUpVariant}
              className="pl-4 border-l-2 border-zinc-300 dark:border-zinc-800 mb-8 max-w-[500px]"
            >
              <p className="text-sm md:text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                Built on 40+ years of Nidaan radiology experience and a growing network of CBCT & OPG centres.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <a 
                href="#ecosystem-details"
                onClick={handleScrollToEcosystem}
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 xl:px-8 xl:py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm overflow-hidden transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 whitespace-nowrap"
                aria-label="Explore the Ecosystem"
              >
                <span>Explore the Ecosystem</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a 
                href="/SOVAKA_Lifesciences_Brochure.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 xl:px-8 xl:py-4 bg-transparent text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm border border-zinc-300 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-500 dark:hover:border-zinc-600 hover:bg-zinc-50/20 dark:hover:bg-zinc-900/40 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 whitespace-nowrap"
                aria-label="Download Company Brochure"
              >
                <Download className="w-4 h-4 text-[#666666] dark:text-zinc-400 transition-colors duration-300 group-hover:text-[#1A1A1A] dark:group-hover:text-white" />
                <span>Download Company Brochure</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Premium Hero Ecosystem Image */}
          <motion.div 
            className="lg:col-span-6 w-full flex justify-center lg:justify-end relative mt-6 lg:mt-0 lg:-mr-16 xl:-mr-24 2xl:-mr-32 cursor-default select-none z-10"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full max-w-[580px] sm:max-w-[680px] md:max-w-[780px] lg:max-w-none aspect-[1024/652] flex items-center justify-center">
              
              {/* Premium Depth System: Ambient Breathing Illumination Glow */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.35, 0.55, 0.35]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(216,207,192,0.45)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(30,41,59,0.3)_0%,_transparent_70%)] blur-3xl pointer-events-none"
              />

              {/* Soft ambient shadow below the floating graphic */}
              <div 
                className="absolute bottom-[5%] left-[10%] right-[10%] h-[30px] rounded-full bg-zinc-950/5 dark:bg-black/25 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Parallax + Floating Wrapper */}
              <motion.div
                className="w-full h-full"
                animate={{
                  x: mousePos.x,
                  y: mousePos.y
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 26,
                  mass: 0.5
                }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{
                    y: [-4, 4, -4]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Completely borderless and background-blended image wrapper */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="/hero-ecosystem.jpg"
                      alt="SOVAKA Dental Imaging Ecosystem"
                      className="w-full h-full object-contain select-none pointer-events-none rounded-none dark:invert dark:opacity-90 transition-all duration-300"
                      width={1024}
                      height={652}
                      loading="eager"
                    />
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
