"use client";

import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JournalPage() {
  const articles = [
    {
      date: "May 2026",
      readTime: "7 min read",
      category: "Infrastructure Strategy",
      title: "The Future of Intelligent Dental Imaging Infrastructure in India",
      description: "Exploring the shift from isolated diagnostic clinics to connected imaging networks, AI-assisted PACS systems, and centralized radiology infrastructure.",
      slug: "future-of-intelligent-dental-imaging-infrastructure-india"
    },
    {
      date: "May 2026",
      readTime: "6 min read",
      category: "Training & Careers",
      title: "Addressing the Workforce Gap in CBCT & OPG Imaging",
      description: "How active clinical environment training and standardized operational SOPs are building the next generation of specialized dental imaging technologists.",
      slug: "addressing-the-workforce-gap-in-cbct-opg-imaging"
    },
    {
      date: "April 2026",
      readTime: "5 min read",
      category: "Operational Workflows",
      title: "Why Centralized Oral Radiology Workflows Matter",
      description: "Analyzing the impact of standardized teleradiology routing, OMR reporting validation, and strict SLAs on modern dental diagnostics.",
      slug: "why-centralized-oral-radiology-workflows-matter"
    },
    {
      date: "April 2026",
      readTime: "8 min read",
      category: "Ecosystem Expansion",
      title: "The Operational Challenges of Scaling Dental Imaging Centres",
      description: "A strategic overview of capital allocations, regulatory compliance, quality control, and the FOCO franchise model in dental radiology.",
      slug: "operational-challenges-scaling-dental-imaging-centres"
    },
    {
      date: "March 2026",
      readTime: "6 min read",
      category: "Ecosystem Technology",
      title: "How AI Will Transform Dental Imaging Workflows",
      description: "Positioning artificial intelligence as a workflow augmentation and orchestration tool rather than an autonomous replacement in oral teleradiology.",
      slug: "how-ai-will-transform-dental-imaging-workflows"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-[120px] pb-24 text-[#1A1A1A] dark:text-zinc-200">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Header Section */}
          <section className="mb-20 lg:mb-28">
            <div className="max-w-[960px]">
              <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-300 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800 px-3 py-1.5 rounded-sm mb-8">
                Ecosystem Journal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50 mb-8">
                Insights & perspectives.
              </h1>
              <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[760px]">
                Analysis, technical documentation, and corporate roadmap updates from the SOVAKA Lifesciences dental imaging infrastructure network.
              </p>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="mb-32 border-t border-zinc-100 dark:border-zinc-900 pt-20">
            <div className="space-y-16">
              {articles.map((article, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-zinc-100 dark:border-zinc-900 pb-16">
                  
                  {/* Left Column: Metadata */}
                  <div className="lg:col-span-3 space-y-3">
                    <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#666666]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-[#666666] font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:col-span-9 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 hover:text-[#4F4F4F] dark:hover:text-zinc-300 transition-colors">
                      <a href={`/insights/${article.slug}`}>{article.title}</a>
                    </h2>
                    <p className="text-sm md:text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[720px]">
                      {article.description}
                    </p>
                    <div className="pt-2">
                      <a 
                        href={`/insights/${article.slug}`} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] dark:text-zinc-100 hover:text-[#4F4F4F] dark:hover:text-[#666666] transition-colors group"
                      >
                        <span>Access Document</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* Subdued Newsletter CTA */}
          <section className="border-t border-zinc-100 dark:border-zinc-900 pt-20 text-center">
            <div className="max-w-[600px] mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Subscribe to our roadmap updates.
              </h2>
              <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                Stay updated on teleradiology expansions, technician batch graduations, and AI features inside our connected radiology network.
              </p>
              <div className="pt-4">
                <a 
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                >
                  <span>Connect With Our Team</span>
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
