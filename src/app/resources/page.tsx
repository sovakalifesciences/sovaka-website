"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Download, 
  ChevronDown, 
  ExternalLink,
  HelpCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Lock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const downloads = [
    { title: "Franchise Brochure", category: "Expansion & Partnerships" },
    { title: "Training Program Brochure", category: "Workforce Development" },
    { title: "Course Information Guide", category: "Syllabus & Admission" },
    { title: "Corporate Profile", category: "Corporate Identity" }
  ];

  const faqs = [
    {
      q: "What is the FOCO franchise model?",
      a: "The FOCO (Franchise Owned Company Operated) model mitigates operational risks. Partners own the physical diagnostic infrastructure, while SOVAKA manages all clinical operations, reporting systems, licensing compliance, and technical staffing centrally.",
      category: "Franchise"
    },
    {
      q: "How does the centralized oral radiology reporting system work?",
      a: "All OPG and CBCT scans captured at franchise locations are routed via secure PACS and DICOM networks to our centralized radiology hub. Registered Maxillofacial Radiologists (OMRs) review and publish structured, audited reports within quick SLAs.",
      category: "Franchise"
    },
    {
      q: "Are training programs provided in regional languages?",
      a: "Yes. Core coursebooks and technical terminology are structured in English, while classroom explanations and practical technician training are conducted in English, Marathi, or Hindi depending on the candidate's preference.",
      category: "Training"
    },
    {
      q: "Is a science background mandatory for the training academy?",
      a: "No. MOTIVATION, operational discipline, and integrity are valued over academic backgrounds. Candidates from Arts, Commerce, Science, and vocational streams are welcome.",
      category: "Training"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-[120px] pb-24 text-[#1A1A1A] dark:text-zinc-200">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Hero Section */}
          <section className="mb-20 lg:mb-28">
            <div className="max-w-[960px]">
              <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-300 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800 px-3 py-1.5 rounded-sm mb-8">
                Ecosystem Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50 mb-8">
                Resources
              </h1>
              <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[760px]">
                Educational content, professional verification, downloads, guides, and support resources from the SOVAKA ecosystem.
              </p>
            </div>
          </section>

          {/* Section 1 & 2: Blog & Certification Registry Grid */}
          <section className="mb-24 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Card 1: Blog Articles */}
              <div className="bg-sand-50/20 dark:bg-zinc-900/10 border border-sand-250 dark:border-zinc-800 p-8 md:p-12 rounded-sm flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666]">
                    Insights & Updates
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                    Blog Articles
                  </h2>
                  <p className="text-sm md:text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                    Educational articles, industry updates, dental imaging insights, workforce development content, franchise knowledge, and AI-driven healthcare perspectives.
                  </p>
                </div>
                <div>
                  <Link 
                    href="/journal/"
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.08em] rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                  >
                    <span>View All Articles</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Certification Registry */}
              <div className="bg-sand-50/20 dark:bg-zinc-900/10 border border-sand-250 dark:border-zinc-800 p-8 md:p-12 rounded-sm flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666]">
                    Verification Gateway
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                    SOVAKA & NIDAAN Certified Professionals Registry
                  </h2>
                  <p className="text-sm md:text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                    Verify credentials of dental technicians and radiology specialists certified through our active clinical environment training programs.
                  </p>
                </div>
                <div>
                  <Link 
                    href="/training-careers/#registry"
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 border border-zinc-200 dark:border-zinc-800 text-[#1A1A1A] dark:text-zinc-100 text-xs font-semibold uppercase tracking-[0.08em] rounded-sm transition-all duration-300 hover:bg-sand-50 dark:hover:bg-zinc-900 hover:scale-[0.98]"
                  >
                    <span>Verify Professionals</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Downloads */}
          <section className="mb-24 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="mb-12">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-3">
                Asset Portal
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Downloads
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloads.map((asset, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-8 rounded-sm space-y-6 flex flex-col justify-between shadow-xs hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      {asset.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                      {asset.title}
                    </h3>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500 bg-sand-50/50 dark:bg-zinc-900/40 px-2.5 py-1 rounded-sm border border-sand-150 dark:border-zinc-800">
                      <Lock className="w-3 h-3" />
                      Coming Soon
                    </span>
                    <div className="w-8 h-8 rounded-full border border-zinc-100 dark:border-zinc-900 flex items-center justify-center text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400 dark:group-hover:text-zinc-600 transition-colors">
                      <Download className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Frequently Asked Questions */}
          <section className="mb-24 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Quick Links Navigation */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-3">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                    Quick Links
                  </h2>
                </div>
                
                <div className="flex flex-col gap-3.5 pt-2">
                  <a 
                    href="#faq-franchise" 
                    className="flex items-center justify-between p-4 bg-sand-50/30 dark:bg-zinc-900/20 border border-sand-150 dark:border-zinc-850 hover:bg-sand-50 hover:border-sand-200 dark:hover:bg-zinc-900 transition-all duration-300 rounded-sm group"
                  >
                    <span className="text-sm font-semibold text-[#1A1A1A] dark:text-zinc-200">Franchise FAQs</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#faq-training" 
                    className="flex items-center justify-between p-4 bg-sand-50/30 dark:bg-zinc-900/20 border border-sand-150 dark:border-zinc-850 hover:bg-sand-50 hover:border-sand-200 dark:hover:bg-zinc-900 transition-all duration-300 rounded-sm group"
                  >
                    <span className="text-sm font-semibold text-[#1A1A1A] dark:text-zinc-200">Training FAQs</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link 
                    href="/contact/" 
                    className="flex items-center justify-between p-4 bg-sand-50/30 dark:bg-zinc-900/20 border border-sand-150 dark:border-zinc-850 hover:bg-sand-50 hover:border-sand-200 dark:hover:bg-zinc-900 transition-all duration-300 rounded-sm group"
                  >
                    <span className="text-sm font-semibold text-[#1A1A1A] dark:text-zinc-200">Contact Support</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Accordion Items */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Franchise Sub-section */}
                <div id="faq-franchise" className="scroll-mt-28 space-y-6">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#666666] border-b border-zinc-150 dark:border-zinc-850 pb-2">
                    Franchise FAQs
                  </h3>
                  <div className="space-y-4">
                    {faqs.filter(f => f.category === "Franchise").map((faq, idx) => {
                      const globalIdx = faqs.indexOf(faq);
                      return (
                        <div key={idx} className="border-b border-zinc-100 dark:border-zinc-900 pb-4">
                          <button
                            className="w-full flex items-center justify-between py-4 text-left font-medium text-[#1A1A1A] dark:text-zinc-50 hover:text-[#4F4F4F] dark:hover:text-zinc-300 transition-colors"
                            onClick={() => setOpenFaq(openFaq === globalIdx ? null : globalIdx)}
                          >
                            <span className="pr-4">{faq.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                                openFaq === globalIdx ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {openFaq === globalIdx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="py-2 text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Training Sub-section */}
                <div id="faq-training" className="scroll-mt-28 space-y-6">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#666666] border-b border-zinc-150 dark:border-zinc-850 pb-2">
                    Training FAQs
                  </h3>
                  <div className="space-y-4">
                    {faqs.filter(f => f.category === "Training").map((faq, idx) => {
                      const globalIdx = faqs.indexOf(faq);
                      return (
                        <div key={idx} className="border-b border-zinc-100 dark:border-zinc-900 pb-4">
                          <button
                            className="w-full flex items-center justify-between py-4 text-left font-medium text-[#1A1A1A] dark:text-zinc-50 hover:text-[#4F4F4F] dark:hover:text-zinc-300 transition-colors"
                            onClick={() => setOpenFaq(openFaq === globalIdx ? null : globalIdx)}
                          >
                            <span className="pr-4">{faq.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                                openFaq === globalIdx ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {openFaq === globalIdx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="py-2 text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* Section 5: Connect With Us */}
          <section className="mb-24 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-3">
                    Stay Updated
                  </span>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                    Connect With Us
                  </h2>
                </div>
                <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-base">
                  Stay connected with the latest updates, educational content, announcements, and opportunities from the SOVAKA dental imaging ecosystem.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/sovaka-lifesciences",
                    desc: "Professional updates",
                    icon: <LinkedinIcon className="w-5 h-5" />
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/sovaka.lifesciences/",
                    desc: "Community logs",
                    icon: <InstagramIcon className="w-5 h-5" />
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/sovaka.lifesciences/",
                    desc: "Ecosystem notes",
                    icon: <FacebookIcon className="w-5 h-5" />
                  }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-sm transition-all duration-300 shadow-xs min-h-[140px] group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-sand-50 dark:bg-zinc-900 border border-sand-100 dark:border-zinc-800 flex items-center justify-center text-[#666666] group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-50 transition-colors">
                      {social.icon}
                    </div>
                    <div className="pt-4">
                      <span className="flex items-center gap-1 text-sm font-semibold text-[#1A1A1A] dark:text-zinc-100">
                        {social.name}
                        <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                      <span className="block text-xs text-zinc-400 mt-0.5">{social.desc}</span>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </section>

          {/* Section 6: Need Assistance? (Contact & Support) */}
          <section className="border-t border-zinc-100 dark:border-zinc-900 pt-16 text-center">
            <div className="max-w-[640px] mx-auto space-y-8">
              <h2 className="text-3xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Need Assistance?
              </h2>
              <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                Our support team is here to assist with curriculum questions, franchise queries, clinical coordination schedules, and technical help.
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-semibold uppercase tracking-[0.08em] text-xs rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
