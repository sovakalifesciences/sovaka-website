"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EcosystemSection() {
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

  const metrics = [
    { value: "6", label: "Operational Centres", detail: "Pune region hub" },
    { value: "1,000+", label: "Monthly CBCT Scans", detail: "Plus thousands of 2D X-rays" },
    { value: "8+", label: "Specialist Radiologists", detail: "Centralized OMR workflow" },
    { value: "100%", label: "Cloud PACS Connected", detail: "Structured reporting systems" },
  ];

  const pillars = [
    {
      num: "01",
      title: "Imaging Infrastructure",
      description: "Operational CBCT and OPG centres built on standardized workflows, technology systems and clinical protocols.",
      bullets: ["Pune-based hub network", "Standardized clinic setup", "Consistent diagnostics blueprint"]
    },
    {
      num: "02",
      title: "Integrated Radiology Workflows",
      description: "Centralized reporting, cloud PACS infrastructure, structured reporting and remote radiology operations across the network.",
      bullets: ["Remote diagnostic nodes", "OMR reporting desk support", "Integrated quality control"]
    },
    {
      num: "03",
      title: "Training & Job Opportunities",
      description: "Hands-on training and ecosystem-aligned job opportunities for real dental imaging environments.",
      bullets: ["Job-ready clinical skills", "Structured training workflow", "Ecosystem recruitment pipeline"]
    },
    {
      num: "04",
      title: "AI-Ready Systems",
      description: "Technology-enabled workflows and intelligent imaging systems designed for future-ready dentistry.",
      bullets: ["AI-assisted OPG pipelines", "Cloud-native image distribution", "Structured clinical data capture"]
    },
  ];

  return (
    <section className="relative w-full bg-sand-100 dark:bg-zinc-900/10 border-t border-sand-200 dark:border-zinc-800 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-20">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800/55 px-3 py-1.5 rounded-sm mb-6">
              ECOSYSTEM
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50">
              The SOVAKA Dental Imaging Ecosystem
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-xl md:text-2xl text-[#4F4F4F] dark:text-zinc-300 leading-relaxed max-w-[680px]">
              A connected network of infrastructure, clinical expertise, training systems, AI workflows and operational intelligence designed to modernize dental imaging.
            </p>
          </div>
        </div>

        {/* Live Operational Metrics Hub */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-20 mb-20 border-b border-zinc-200 dark:border-zinc-800"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex flex-col">
              <span className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-[#1A1A1A] dark:text-zinc-200 mt-2">
                {metric.label}
              </span>
              <span className="text-xs text-[#666666] dark:text-zinc-400 mt-0.5">
                {metric.detail}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-200 dark:bg-zinc-800/60"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:bg-sand-50 dark:hover:bg-zinc-900/30 group"
            >
              <div>
                <span className="block text-sm font-mono text-[#666666] dark:text-zinc-500 mb-8 transition-colors duration-300 group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-100">
                  {pillar.num}
                </span>
                
                <h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50 mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-[#4F4F4F] dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Sub-bullets emphasizing operational reality */}
              <ul className="space-y-2 border-t border-sand-100 dark:border-zinc-900 pt-6">
                {pillar.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs text-[#4F4F4F] dark:text-zinc-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-800 dark:bg-zinc-700 dark:group-hover:bg-zinc-100 transition-colors duration-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
