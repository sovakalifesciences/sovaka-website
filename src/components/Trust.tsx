"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustSection() {
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
      title: "Four Decades of Legacy",
      description: "Built on over 40 years of continuous experience in dental imaging and radiology operations since 1985.",
    },
    {
      num: "02",
      title: "Operationally Mature Infrastructure",
      description: "Standardized workflows, centralized radiology systems and multi-centre operational experience designed for scalable growth.",
    },
    {
      num: "03",
      title: "Radiology Expertise",
      description: "Experienced Oral & Maxillofacial Radiologists supported by structured reporting systems and technology-enabled workflows.",
    },
    {
      num: "04",
      title: "Future-Focused Ecosystem Vision",
      description: "An evolving ecosystem designed around intelligent infrastructure, scalable operations and future-ready dental imaging systems.",
    },
  ];

  const signals = [
    { label: "Operational Centres", val: "6 hubs" },
    { label: "Monthly CBCT Scans", val: "~1,000" },
    { label: "Diagnostic Radiologists", val: "8 specialists" },
    { label: "Reporting Workflow", val: "Centralized" },
    { label: "OPG Operations", val: "AI-assisted" },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-zinc-900 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-20">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800/50 px-3 py-1.5 rounded-sm mb-6">
              Credibility & Trust
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50">
              Built on experience. Designed for the future.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[680px]">
              SOVAKA Lifesciences' ecosystem is built on decades of radiology experience, operational maturity and a long-term vision for connected dental imaging infrastructure.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:bg-sand-50 dark:hover:bg-zinc-900/20 group"
            >
              <div>
                <span className="block text-sm font-mono text-[#666666] dark:text-zinc-600 mb-8 transition-colors duration-300 group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-100">
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

        {/* Legacy & Academic Subsection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-zinc-200 dark:border-zinc-800 pt-20 mb-24">
          
          {/* Subsection: Leadership & Expertise */}
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-6">
              Leadership & Expertise
            </span>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-[#1A1A1A] dark:text-zinc-50 max-w-[480px] leading-tight">
                Clinical leadership rooted in academic authority and diagnostic depth.
              </h3>
              <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[500px]">
                Led by established IRIA faculty and oral radiology pioneers, our leadership team authored the definitive <span className="text-[#1A1A1A] dark:text-zinc-50 font-medium">Dental Radiology</span> chapter in the <span className="text-[#1A1A1A] dark:text-zinc-50 font-medium">IRIA Comprehensive Textbook of Clinical Radiology</span> (Elsevier). 
              </p>
              <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[500px]">
                This legacy of academic and diagnostic expertise directly informs our multi-centre operational protocols, ensuring rigorous quality controls, standardized workflows, and trusted reporting systems across the entire SOVAKA Lifesciences imaging ecosystem.
              </p>
            </div>
          </div>

          {/* Subsection: Ecosystem Signals (Understated list instead of flashy counters) */}
          <div className="lg:col-span-3 border-l border-zinc-200 dark:border-zinc-800 lg:pl-8">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-6">
              Ecosystem Signals
            </span>
            <ul className="space-y-4">
              {signals.map((sig, index) => (
                <li key={index} className="flex flex-col border-b border-zinc-100 dark:border-zinc-900 pb-2">
                  <span className="text-xs text-[#666666] dark:text-zinc-500 uppercase tracking-wider">{sig.label}</span>
                  <span className="text-base font-semibold text-[#1A1A1A] dark:text-zinc-200 mt-0.5">{sig.val}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsection: Looking Ahead */}
          <div className="lg:col-span-3 border-l border-zinc-200 dark:border-zinc-800 lg:pl-8">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-6">
              Looking Ahead
            </span>
            <ul className="space-y-3">
              {[
                "Ecosystem expansion",
                "Connected imaging infrastructure",
                "Future-ready systems",
                "Scalable radiology operations",
                "Long-term infrastructure vision"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-base font-medium text-[#4F4F4F] dark:text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Subdued CTA Block */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16 flex flex-col sm:flex-row gap-6 justify-start">
          <a 
            href="/about" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
          >
            <span>About SOVAKA Lifesciences</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a 
            href="/journal" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm border border-zinc-300 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-500 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <span>View Insights</span>
          </a>
        </div>

      </div>
    </section>
  );
}
