"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TechAISection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const pillars = [
    {
      num: "01",
      title: "Connected Imaging Ecosystems",
      description: "Integrated infrastructure designed to connect imaging centres, workflows and clinical operations across the ecosystem.",
    },
    {
      num: "02",
      title: "Workflow Intelligence",
      description: "Technology-enabled systems built to improve operational efficiency, reporting coordination and radiology workflows.",
    },
    {
      num: "03",
      title: "Radiology Augmentation",
      description: "Future-focused intelligent systems designed to support scalable radiology operations and structured imaging workflows.",
    },
    {
      num: "04",
      title: "Infrastructure Intelligence",
      description: "A centralized ecosystem vision where operational systems, imaging infrastructure and clinical workflows become increasingly connected and intelligent.",
    },
  ];

  return (
    <section className="relative w-full bg-zinc-950 text-zinc-100 py-20 lg:py-28 overflow-hidden">
      {/* Subtle ambient tech light glows */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sand-900/10 rounded-full blur-[120px] mix-blend-screen opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-800/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-20">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-sand-100 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-sm mb-6">
              AI Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-white">
              Intelligence for the future of dental imaging.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-xl text-zinc-400 leading-relaxed max-w-[680px]">
              SOVAKA Lifesciences is developing intelligent infrastructure designed to support connected imaging workflows, radiology operations and future-ready dental ecosystems.
            </p>
          </div>
        </div>

        {/* Pillars Grid - Dark Cinematic Mode */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-zinc-900 p-8 md:p-12 min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:bg-zinc-900/50 group border border-zinc-800/20"
            >
              <div>
                <span className="block text-sm font-mono text-zinc-500 mb-8 transition-colors duration-300 group-hover:text-sand-100">
                  {pillar.num}
                </span>
                
                <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Split for Real Infrastructure & Future Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-zinc-800 pt-20 mb-24">
          
          {/* Subsection: Built on Real Operational Infrastructure */}
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-zinc-500 mb-6">
              Built on Real Operational Infrastructure
            </span>
            <div className="space-y-4 text-zinc-400">
              <p className="text-base leading-relaxed max-w-[480px]">
                This ecosystem is built on a concrete, functioning framework of multi-centre operations, centralized remote reporting desks, and cloud-enabled workflows. Our radiology infrastructure currently utilizes AI-assisted imaging systems to support active clinical operations.
              </p>
            </div>
          </div>

          {/* Subsection: Future Vision */}
          <div className="lg:col-span-6 border-l border-zinc-800 lg:pl-16">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-zinc-500 mb-6">
              Future Vision
            </span>
            <ul className="space-y-3">
              {[
                "Connected dental imaging ecosystem",
                "Intelligent operational infrastructure",
                "Technology-enabled clinical workflows",
                "Scalable radiology systems",
                "Future-ready dentistry"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-base font-medium text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sand-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subdued CTA Block */}
        <div className="border-t border-zinc-800 pt-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h4 className="text-lg font-medium text-white mb-1">For intelligent workflows and connected dental networks.</h4>
            <p className="text-sm text-zinc-500">Discover how SOVAKA builds the technology systems of tomorrow.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/technology" 
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium rounded-sm transition-all duration-300 hover:bg-zinc-200 hover:scale-[0.98]"
            >
              <span>Explore The AI Ecosystem</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
