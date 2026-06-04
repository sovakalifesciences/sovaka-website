"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Award, Cpu, FileText } from "lucide-react";

export default function InfrastructureSection() {
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
      title: "Multi-Centre Imaging Operations",
      description: "Standardized CBCT and OPG workflows designed for consistency, scalability and operational discipline across centres.",
    },
    {
      num: "02",
      title: "Centralized Radiology Infrastructure",
      description: "Qualified Oral & Maxillofacial Radiologists supported by cloud-enabled reporting systems, structured workflows and remote operations.",
    },
    {
      num: "03",
      title: "Structured Clinical Reporting",
      description: "Standardized reporting systems designed to improve consistency, communication and clinical reliability for dentists.",
    },
    {
      num: "04",
      title: "Technology-Enabled Workflows",
      description: "Integrated workflow systems, cloud PACS infrastructure and AI-assisted imaging support for modern dental radiology operations.",
    },
  ];

  const trustSignals = [
    {
      icon: Clock,
      label: "12–24 Hour Turnaround",
      detail: "Reliable reporting timelines depending on FOV and indication.",
    },
    {
      icon: Users,
      label: "Direct Radiologist Access",
      detail: "Direct lines of communication open for all referring dentists.",
    },
    {
      icon: Award,
      label: "OMR-Only Reporting Team",
      detail: "All scans reported strictly by qualified Oral & Maxillofacial Radiologists.",
    },
    {
      icon: Cpu,
      label: "AI-Assisted OPG Systems",
      detail: "Intelligent workflow assist for enhanced diagnostic accuracy.",
    },
    {
      icon: FileText,
      label: "Standardized Report Workflows",
      detail: "Consistently structured diagnostic reports for clinical confidence.",
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-zinc-900 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-20">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800/50 px-3 py-1.5 rounded-sm mb-6">
              INFRASTRUCTURE
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50">
              Connected Clinical Infrastructure
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[680px]">
              Built upon Nidaan's operational network, cloud reporting systems, radiology expertise and scalable imaging workflows.
            </p>
            
            <a
              href="https://www.nidaandental.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 mt-12 hover:opacity-85 transition-opacity duration-300 group"
            >
              <img
                src="/nidaan-logo.webp"
                alt="Nidaan CBCT & OPG Centre"
                className="h-9 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                width={200}
                height={50}
              />
              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#666666] dark:text-zinc-500 font-semibold leading-none">
                  Built upon the Nidaan Network
                </span>
                <span className="text-xs font-semibold text-[#1A1A1A] dark:text-zinc-400 mt-1.5 flex items-center gap-1 leading-none">
                  40+ Years of Dental Imaging Experience
                  <span className="text-[9px] text-[#666666] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Pillars Grid - Asymmetrical Editorial Grid */}
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

        {/* Operational Trust Signals Subsection */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-20">
          <div className="mb-12">
            <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-3">
              Operational Trust Signals
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
              Clinical standards at scale
            </h3>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trustSignals.map((signal, idx) => {
              const IconComponent = signal.icon;
              return (
                <motion.div key={idx} variants={fadeUpVariant} className="flex flex-col items-start group">
                  <div className="w-10 h-10 rounded-sm bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center border border-zinc-100 dark:border-zinc-800 mb-4 transition-colors duration-300 group-hover:bg-sand-100 group-hover:border-sand-200 dark:group-hover:bg-zinc-800 dark:group-hover:border-zinc-700">
                    <IconComponent className="w-5 h-5 text-[#666666] dark:text-zinc-500 transition-colors duration-300 group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-100" />
                  </div>
                  <h4 className="text-base font-medium text-[#1A1A1A] dark:text-zinc-50 mb-2">
                    {signal.label}
                  </h4>
                  <p className="text-xs text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                    {signal.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
