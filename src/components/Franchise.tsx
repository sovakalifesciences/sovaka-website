"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function FranchiseSection() {
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
      title: "Operational Infrastructure",
      description: "SOVAKA Lifesciences manages workflows, staffing, systems, reporting and operational standardization across the ecosystem.",
    },
    {
      num: "02",
      title: "Centralized Radiology Ecosystem",
      description: "Qualified Oral & Maxillofacial Radiologists, structured workflows and centralized reporting systems integrated across centres.",
    },
    {
      num: "03",
      title: "Technology & Workflow Systems",
      description: "Cloud-enabled software infrastructure, AI-assisted workflows and self-reliant operational systems designed for scalable growth.",
    },
    {
      num: "04",
      title: "Ecosystem Growth Model",
      description: "A professionally managed imaging platform allowing partners to participate in a trusted and operationally mature healthcare ecosystem.",
    },
  ];

  const targetProfiles = [
    "Dentists & Radiologists",
    "Healthcare & Diagnostic Operators",
    "Family Offices & Business Owners",
    "Healthcare Entrepreneurs",
    "Strategic Investors",
  ];

  return (
    <section className="relative w-full bg-sand-100 dark:bg-zinc-900/10 border-t border-sand-200 dark:border-zinc-800 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-20">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800/50 px-3 py-1.5 rounded-sm mb-6">
              Franchise
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50">
              Join a professionally managed imaging ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-xl text-[#4F4F4F] dark:text-zinc-300 leading-relaxed max-w-[680px]">
              Nidaan CBCT & OPG Centres operate on a FOCO model built around centralized radiology, standardized operations and technology-enabled imaging infrastructure.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-200 dark:bg-zinc-800/60 mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:bg-sand-50 dark:hover:bg-zinc-900/30 group"
            >
              <div>
                <span className="block text-sm font-mono text-[#666666] dark:text-zinc-500 mb-8 transition-colors duration-300 group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-100">
                  {pillar.num}
                </span>
                
                <h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50 mb-4">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-[#4F4F4F] dark:text-zinc-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Asymmetrical Split for Target Audience & Investment details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-zinc-200 dark:border-zinc-800 pt-20 mb-24">
          {/* Subsection: Who This Ecosystem Is Built For */}
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-6">
              Who This Ecosystem Is Built For
            </span>
            <ul className="space-y-4">
              {targetProfiles.map((profile, index) => (
                <li key={index} className="flex items-center gap-3 text-lg font-medium text-[#1A1A1A] dark:text-zinc-100 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-zinc-200" />
                  {profile}
                </li>
              ))}
            </ul>
          </div>

          {/* Subsection: Investment & Discovery */}
          <div className="lg:col-span-6 border-l border-zinc-200 dark:border-zinc-800 lg:pl-16">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-6">
              Investment & Discovery
            </span>
            <div className="space-y-6">
              <div>
                <span className="text-xs text-[#666666] dark:text-zinc-400 block uppercase tracking-wider mb-1">Approximate Capital Outlay</span>
                <span className="text-3xl font-semibold text-[#1A1A1A] dark:text-zinc-50">INR 40 Lakhs</span>
              </div>
              <div>
                <span className="text-xs text-[#666666] dark:text-zinc-400 block uppercase tracking-wider mb-1">Target Capital Return Window</span>
                <span className="text-3xl font-semibold text-[#1A1A1A] dark:text-zinc-50">~3.5 Years</span>
              </div>
              <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[480px] pt-4">
                Rather than standard franchising pathways, we look for partners who appreciate clinical accuracy, long-term brand trust, and operational integrity. Let&apos;s start with a low-pressure discovery call to review spatial and geographical opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Subdued CTA Block */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a 
            href="/franchise" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
          >
            <span>Explore The Franchise Ecosystem</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a 
            href="https://forms.gle/geqADY2PEuscsvyb9" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm border border-zinc-300 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-500 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <span>Schedule Discovery Call</span>
          </a>
        </div>

      </div>
    </section>
  );
}
