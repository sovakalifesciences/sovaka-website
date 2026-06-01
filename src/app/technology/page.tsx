"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, Layers, Workflow, ShieldCheck, ChevronDown, CheckSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is AI-enabled dental imaging?",
      a: "AI-enabled dental imaging refers to the integration of machine learning algorithms (like convolutional neural networks) with 2D panoramic (OPG) and 3D Cone Beam Computed Tomography (CBCT) datasets. These systems automate anatomical segmentation, nerve tracing, bone density profiling, and potential pathology flagging to assist specialists in diagnostic accuracy.",
    },
    {
      q: "How can AI support radiology workflows?",
      a: "Rather than replacing radiologists, AI assists workflows by pre-sorting diagnostic priority, automating tedious tracing tasks (such as mapping the inferior alveolar nerve canal), performing volumetric segmentations, and auditing DICOM data parameters, reducing turnaround time for teleradiology queues.",
    },
    {
      q: "What is intelligent imaging infrastructure?",
      a: "Intelligent imaging infrastructure refers to the connected digital layer—including automated DICOM routers, cloud-enabled PACS (Picture Archiving and Communication Systems), remote specialist routing queues, and AI assistants—that unites physical imaging machines with clinical diagnostics.",
    },
    {
      q: "Why are connected imaging systems important?",
      a: "Connected imaging systems eliminate diagnostic silos. By routing raw scans from physical locations to a central, secure database, clinics secure instant access to specialized Maxillofacial Radiologists (OMRs) and automated clinical audits, ensuring consistent patient outcomes.",
    },
    {
      q: "How is dental imaging evolving?",
      a: "Dental imaging is transitioning from isolated local hardware solutions to connected cloud networks. The future of dental diagnostics relies on structural workflow orchestration, remote expert oversight, and real-time AI diagnostic assistance.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-[120px] pb-24 text-[#1A1A1A] dark:text-zinc-200">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Hero Section */}
          <section className="mb-16 lg:mb-20">
            <div className="max-w-[960px]">
              <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-300 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800 px-3 py-1.5 rounded-sm mb-8">
                Ecosystem Technology
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50 mb-8">
                Building the intelligent infrastructure layer for the future of dental imaging.
              </h1>
              <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[760px] mb-8">
                SOVAKA Lifesciences is developing connected imaging systems, intelligent radiology workflows, and AI-enabled infrastructure designed to support the future ecosystem of technology-enabled dentistry.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a 
                  href="https://forms.gle/icf1jPDAn3brd1gE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Explore The Ecosystem Vision</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="https://forms.gle/icf1jPDAn3brd1gE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm transition-all duration-300 hover:bg-sand-50 dark:hover:bg-zinc-900 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Connect With SOVAKA</span>
                </a>
              </div>
            </div>
          </section>

          {/* Why Imaging Infrastructure is Evolving */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Evolution</span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Addressing the fragmentation of dental diagnostics.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-[#4F4F4F] dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                <p>
                  As digital dental scanning technologies progress, imaging complexity continues to mount. Standalone clinics often operate in diagnostic silos, where CBCT volumetric datasets and panoramic scans are stored locally on isolated desktop systems, disconnected from centralized specialist networks.
                </p>
                <p>
                  This fragmentation leads to operational scaling challenges, delayed diagnostic reporting, and lack of quality consistency. The integration of connected cloud databases, remote OMR reporting workflows, and machine learning pipelines is no longer a futuristic option, but a baseline requirement for clinical workflow standardization.
                </p>
                <p>
                  SOVAKA is building this unified layer, linking physical machines to cloud PACS networks, structured specialist queues, and AI-enabled diagnostics.
                </p>
              </div>
            </div>
          </section>

          {/* The Intelligent Ecosystem Vision */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="mb-16">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">AI Framework</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Connected workflow layers.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Connected Imaging Networks",
                  desc: "Securing real-time routing of DICOM/PACS files from regional scanning clinics directly to secure centralized database arrays.",
                },
                {
                  title: "Workflow Orchestration Engines",
                  desc: "Intelligent case allocation matching scan profiles (e.g. implant surveys, airway analysis) with specialized radiologist (OMR) expertise.",
                },
                {
                  title: "AI-Augmented Assistance",
                  desc: "Deploying machine learning models to pre-trace mandibular nerves, highlight airway boundaries, and segment density zones.",
                },
                {
                  title: "Centralized Diagnostics",
                  desc: "Standardizing diagnostics through remote reporting desks with audited SLAs to support regional healthcare operators.",
                },
                {
                  title: "Quality Control Audits",
                  desc: "Routine algorithmic verification of image resolution, scan settings, and report consistency to preserve accuracy.",
                },
                {
                  title: "Scalable Coordination",
                  desc: "Creating unified communication interfaces connecting clinicians, OMRs, technicians, and ecosystem partners.",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-medium text-[#1A1A1A] dark:text-zinc-50 flex gap-2">
                    <span className="font-mono text-[#666666]">{index + 1}.</span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Operational Foundation */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16 bg-sand-50 dark:bg-zinc-900/10 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#4F4F4F]">
                  Real Operations
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Grounded in physical infrastructure.
                </h2>
                <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                  Unlike tech startups operating purely on software speculation, SOVAKA's technology layer is backed by decades of clinical diagnostics experience. Supported by the <strong>40+ year Nidaan legacy</strong> (established in 1985 in Pune), our AI models and cloud routing systems are trained, audited, and optimized inside active multi-centre diagnostic operations.
                </p>
              </div>
              <div className="lg:col-span-5 space-y-4">
                {[
                  "Real-world clinical workflows and diagnostic data",
                  "Direct OMR specialist validation feedback loops",
                  "Active multi-centre PACS routing deployments",
                  "Clinically proven SLA schedules and operations protocols",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#1A1A1A] dark:text-zinc-200 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#4F4F4F] dark:text-zinc-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI + Human Collaboration */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Collaboration</span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Augmenting diagnostics, preserving trust.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-[#4F4F4F] dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                <p>
                  We believe that the future of oral radiology lies in AI-assisted workflows, not fully automated replacements. Machine learning models are highly effective at pre-screening, highlighting structural areas of concern, and executing automated tracing tasks.
                </p>
                <p>
                  However, the final diagnostic determination, clinical validation, and reporting oversight must remain under the direction of certified Oral and Maxillofacial Radiologists (OMRs). This human-in-the-loop validation maintains clinical trust and ensures compliance with institutional healthcare standards.
                </p>
              </div>
            </div>
          </section>

          {/* Future of Dentistry */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="max-w-[800px] space-y-6">
              <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#4F4F4F]">
                Ecosystem Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-[1.2]">
                The future of technology-enabled dentistry.
              </h2>
              <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                Tomorrow's dental practices will rely on interconnected diagnostics. From immediate OPG scans during check-ups to comprehensive 3D CBCT imaging for surgical mapping, diagnostic workflows will become increasingly centralized. SOVAKA is building the software interfaces and data-routing infrastructure that make this future possible.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="max-w-[800px] mx-auto">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-12 text-center">
                Technology & Workflow FAQs
              </span>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-zinc-100 dark:border-zinc-900 pb-4">
                    <button
                      className="w-full flex items-center justify-between py-4 text-left font-medium text-[#1A1A1A] dark:text-zinc-50 hover:text-[#4F4F4F] dark:hover:text-zinc-300 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === index && (
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
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="border-t border-zinc-100 dark:border-zinc-900 pt-16 text-center">
            <div className="max-w-[640px] mx-auto space-y-8">
              <h2 className="text-3xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Connect with the technology ecosystem.
              </h2>
              <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                Connect with our technical coordination office to learn about API integrations, remote OMR diagnostic routing, or PACS database setup.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://forms.gle/icf1jPDAn3brd1gE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Connect With The Ecosystem</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm transition-all duration-300 hover:bg-sand-50 dark:hover:bg-zinc-900 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Stay Informed</span>
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
