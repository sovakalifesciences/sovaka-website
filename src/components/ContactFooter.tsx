"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactFooterSection() {
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

  const pathways = [
    {
      num: "01",
      title: "Franchise Partners",
      desc: "For healthcare entrepreneurs, dentists and ecosystem partners interested in participating in professionally managed imaging infrastructure.",
      subtext: "Our team will connect with selected applicants for further discussion.",
      cta: "Schedule Discovery Call",
      link: "https://forms.gle/geqADY2PEuscsvyb9",
    },
    {
      num: "02",
      title: "Training & Job Opportunities",
      desc: "For individuals seeking hands-on exposure and job opportunities in modern dental imaging systems.",
      subtext: "Training conducted inside operational CBCT & OPG imaging environments in Pune.",
      cta: "Explore the Program",
      link: "/training-careers",
    },
    {
      num: "03",
      title: "Strategic & Investor Conversations",
      desc: "For long-term ecosystem partnerships, infrastructure collaboration and strategic discussions.",
      cta: "Connect With Us",
      link: "https://forms.gle/icf1jPDAn3brd1gE6",
    },
    {
      num: "04",
      title: "General Enquiries",
      desc: "For dentists, imaging professionals and ecosystem-related discussions.",
      cta: "Contact SOVAKA Lifesciences",
      link: "/contact",
    },
  ];

  return (
    <section className="relative w-full bg-sand-100 dark:bg-zinc-900/10 border-t border-sand-200 dark:border-zinc-800 pt-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-6">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800/50 px-3 py-1.5 rounded-sm mb-6">
              Participation
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50">
              Become part of the evolving imaging ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-xl text-[#4F4F4F] dark:text-zinc-300 leading-relaxed max-w-[680px]">
              SOVAKA Lifesciences brings together infrastructure, radiology, workforce development and intelligent systems to shape the future of dental imaging.
            </p>
          </div>
        </div>

        {/* Pathways Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-200 dark:bg-zinc-800/60"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pathways.map((path, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 min-h-[380px] flex flex-col justify-between transition-all duration-500 hover:bg-sand-50 dark:hover:bg-zinc-900/30 group"
            >
              <div>
                <span className="block text-sm font-mono text-[#666666] dark:text-zinc-600 mb-8 transition-colors duration-300 group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-100">
                  {path.num}
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50 mb-4">
                  {path.title}
                </h3>
                <p className="text-[#4F4F4F] dark:text-zinc-400 text-base leading-relaxed mb-4">
                  {path.desc}
                </p>
                {path.subtext && (
                  <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 italic leading-relaxed">
                    {path.subtext}
                  </p>
                )}
              </div>

              <Link 
                href={path.link}
                target={path.link.startsWith("http") ? "_blank" : undefined}
                rel={path.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center justify-start gap-2 text-base font-semibold text-[#1A1A1A] dark:text-zinc-50 mt-8 transition-all duration-300 hover:text-[#1A1A1A] dark:hover:text-zinc-200"
              >
                <span>{path.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
