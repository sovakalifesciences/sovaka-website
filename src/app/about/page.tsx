"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Award, Calendar, Layers, ShieldCheck, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
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
      icon: <Layers className="w-5 h-5 text-[#1A1A1A] dark:text-zinc-200" />,
      title: "Nidaan CBCT & OPG Franchise Ecosystem",
      desc: "Operating on a highly controlled FOCO (Franchise Owned Company Operated) model. We deliver standardized physical radiology infrastructure, workflow maturity, and centralized OMR remote reporting systems.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#1A1A1A] dark:text-zinc-200" />,
      title: "Workforce Development Academy",
      desc: "Our Pune operations hub bridges the talent gap by offering dental professionals and imaging technicians hands-on clinical training and exposure to advanced diagnostics.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#1A1A1A] dark:text-zinc-200" />,
      title: "AI Dental Imaging Systems",
      desc: "Building future-ready interfaces and AI-augmented software workflows. We integrate dental imaging diagnostics directly with cloud-enabled PACS and DICOM routers.",
    },
  ];

  const timelineEvents = [
    {
      year: "1985",
      title: "Establishment of Nidaan Diagnostic Centre",
      desc: "Established the original diagnostic centre in Pune, laying the foundation for what would become one of the region's most recognized dental imaging institutions and creating a clinical legacy spanning four decades.",
    },
    {
      year: "2000",
      title: "Introduction of Panoramic Dental Imaging",
      desc: "Introduced conventional panoramic dental radiography, expanding dedicated imaging capabilities for dental practitioners and supporting the growing need for specialized dental diagnostics.",
    },
    {
      year: "2006",
      title: "Digital Imaging Infrastructure Expansion",
      desc: "Implemented CR systems and digital OPG technologies, accelerating workflow efficiency and establishing a foundation for modern digital imaging operations.",
    },
    {
      year: "2009",
      title: "India's First Standalone Dental Diagnostic Centre",
      desc: "Established India's first standalone dental diagnostic centre dedicated exclusively to extraoral dental radiography, creating a focused imaging environment for advanced dental diagnostics.",
    },
    {
      year: "2010–2025",
      title: "Expansion Across Pune",
      desc: "Expanded from a single-centre operation into a multi-centre imaging network serving dental practitioners across Pune through standardized workflows, centralized expertise and distributed diagnostic infrastructure.",
    },
    {
      year: "2018",
      title: "3D Surgical Guide Planning & Manufacturing",
      desc: "Introduced digital planning and manufacturing of patient-specific surgical guides for dental implant procedures, integrating advanced imaging with treatment planning workflows.",
    },
    {
      year: "2024",
      title: "Formation of SOVAKA Lifesciences",
      desc: "Established SOVAKA Lifesciences as the parent ecosystem company to support workforce development, franchise infrastructure, technology systems and future healthcare innovation initiatives.",
    },
    {
      year: "2025",
      title: "Franchise Network & AI Ecosystem Development",
      desc: "Officially launched the Nidaan franchise model while initiating development of AI-enabled software platforms designed to support imaging workflows, reporting systems and future dental infrastructure integration.",
    },
    {
      year: "2026 & Beyond",
      title: "National Dental Imaging Infrastructure Platform",
      desc: "Expanding beyond Maharashtra to build a connected dental imaging ecosystem through centralized radiology, workforce development, franchise infrastructure and intelligent technology systems across India.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-[120px] pb-24 text-[#1A1A1A] dark:text-zinc-200">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* About Hero Section */}
          <section className="mb-16 lg:mb-20">
            <div className="max-w-[960px]">
              <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-300 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800 px-3 py-1.5 rounded-sm mb-8">
                Corporate Identity
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50 mb-8">
                Building the future ecosystem of intelligent dental imaging.
              </h1>
              <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[760px]">
                SOVAKA Lifesciences is a parent dental ecosystem company focused on CBCT & OPG infrastructure, oral radiology workflows, workforce development, and AI-enabled dentistry systems.
              </p>
            </div>
          </section>

          {/* The Ecosystem Pillars */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Ecosystem</span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  A multi-layered infrastructure model.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pillars.map((pillar, index) => (
                    <div key={index} className="space-y-4">
                      <div className="w-10 h-10 rounded-sm bg-sand-50 dark:bg-zinc-900 border border-sand-100 dark:border-zinc-800 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <h3 className="text-lg font-medium text-[#1A1A1A] dark:text-zinc-50">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Operational Foundation */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16 bg-sand-50 dark:bg-zinc-900/10 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#4F4F4F]">
                  Operational Foundation
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Real-world credibility, clinical heritage.
                </h2>
                <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                  Unlike platforms built purely on software speculation, SOVAKA Lifesciences is anchored in the <strong>40+ year Nidaan legacy</strong> established in Pune in 1985. Our operations encompass physical diagnostic imaging centres, centralized teleradiology remote reporting workflows, experienced Oral and Maxillofacial Radiologists (OMRs), and structured, audited reporting protocols.
                </p>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-6">
                {[
                  { value: "1985", label: "Legacy Foundation" },
                  { value: "40+ Years", label: "Radiology Experience" },
                  { value: "Pune, IN", label: "Operations Hub" },
                  { value: "AI-Ready", label: "Centralized Workflows" },
                ].map((stat, index) => (
                  <div key={index} className="border-l border-zinc-200 dark:border-zinc-800 pl-6 py-2">
                    <span className="block text-3xl font-semibold text-[#1A1A1A] dark:text-zinc-50 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-xs uppercase tracking-wider text-[#666666] mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership & Expertise */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Side: Eyebrow + Section Title + Subtitle */}
              <div className="lg:col-span-4 space-y-4">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666]">
                  Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Dr. Akshay Shah
                </h2>
                <p className="text-xs font-semibold text-[#666666] dark:text-zinc-400 uppercase tracking-widest leading-relaxed">
                  Operational Radiology Leadership & Ecosystem Vision
                </p>
              </div>

              {/* Right Side: Body Content & Future Portrait Placement */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                <div className="md:col-span-7 space-y-6 text-[#4F4F4F] dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                  <p>
                    Leading the clinical framework and strategic technological direction of SOVAKA Lifesciences, Dr. Akshay Shah brings over four decades of institutional radiology legacy and multi-centre operational experience within advanced dental imaging ecosystems.
                  </p>
                  <p>
                    An active faculty member of the Indian Radiological & Imaging Association (IRIA), speaker at national and international radiology conferences, and contributor to the Dental Radiology chapter in the IRIA Comprehensive Textbook of Clinical Radiology published by Elsevier, Dr. Shah combines academic depth with real-world operational leadership across CBCT infrastructure, reporting workflows and imaging systems integration.
                  </p>
                  <p>
                    His work focuses on translating complex AI-assisted technologies and modern radiology infrastructure into safe, scalable and clinically responsible diagnostic ecosystems — integrating operational discipline, centralized workflows and medical-grade oversight across evolving dental imaging environments.
                  </p>
                </div>

                {/* Portrait image container */}
                <div className="md:col-span-5 space-y-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-50 dark:bg-zinc-900/30 border border-sand-200/50 dark:border-zinc-800/50 rounded-sm">
                    {/* Architectural framing overlay line */}
                    <div className="absolute inset-0 border border-dashed border-[#1A1A1A]/5 dark:border-white/5 m-3 rounded-sm pointer-events-none z-10" />
                    
                    <img 
                      src="/akshay-shah.jpg" 
                      alt="Dr. Akshay Shah"
                      className="w-full h-full object-cover object-center grayscale contrast-[1.01] brightness-[0.98]"
                    />
                  </div>
                  
                  {/* Subtle credit or caption below the portrait */}
                  <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-[#666666] dark:text-zinc-500 font-mono">
                    <span>Clinical Director</span>
                    <span>SOVAKA Lifesciences</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="max-w-[800px] space-y-6">
              <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#4F4F4F]">
                Future Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-[1.2]">
                The future of dentistry is connected, intelligent, and highly standardized.
              </h2>
              <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                We believe that the next decade of diagnostic dental imaging will not be defined by isolated software tools, but by fully connected imaging networks. By pairing physical site footprints in Maharashtra with remote OMR specialist networks and AI-assisted cloud diagnostics, we are building the resilient diagnostic infrastructure that future dental ecosystems demand.
              </p>
            </div>
          </section>

          {/* Ecosystem Timeline */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-12">Ecosystem Evolution</span>
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 pl-8 space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Point */}
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 dark:bg-zinc-50 border-4 border-white dark:border-[#0a0a0a]" />
                  
                  <div>
                    <span className="inline-block font-mono text-sm font-semibold text-[#1A1A1A] dark:text-zinc-100 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800 px-2.5 py-0.5 rounded-sm mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-medium text-[#1A1A1A] dark:text-zinc-50 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 max-w-[640px] leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="border-t border-zinc-100 dark:border-zinc-900 pt-16 text-center">
            <div className="max-w-[600px] mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Interested in strategic alignment?
              </h2>
              <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                Connect with our coordination coordinators to discuss location planning, academy courses, or software workflow integrations.
              </p>
              <div className="pt-4">
                <a 
                  href="https://forms.gle/icf1jPDAn3brd1gE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                >
                  <span>Explore Partnership Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
