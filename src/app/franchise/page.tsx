"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FranchisePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-[120px] pb-24 text-[#1A1A1A] dark:text-zinc-200">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Hero Section */}
          <section className="mb-16 lg:mb-20">
            <div className="max-w-[960px]">
              {/* Nidaan Logo & Legacy Block */}
              <div className="mb-10 space-y-4">
                <div className="bg-transparent dark:bg-white dark:px-6 dark:py-4 dark:rounded-sm dark:border dark:border-zinc-200 inline-flex items-center justify-start w-fit">
                  <img 
                    src="/nidaan-logo.png" 
                    alt="Nidaan CBCT & OPG Centre" 
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                {/* Legacy Statement */}
                <p className="text-xs md:text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                  Established 1985 • 40+ Years of Dental Imaging Leadership
                </p>
              </div>

              {/* Ecosystem Badge */}
              <div className="mb-8">
                <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-300 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800 px-3 py-1.5 rounded-sm">
                  Ecosystem Infrastructure
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50 mb-8">
                Franchise a Proven Dental Imaging Brand.
              </h1>

              {/* Supporting Description */}
              <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[760px] mb-8">
                Built upon more than 40 years of radiology leadership, six operational centres, centralized oral radiology expertise and technology-enabled workflows, Nidaan CBCT & OPG Centre is now expanding through a professionally managed FOCO franchise model. Supported by SOVAKA Lifesciences as the enabling ecosystem company, this model offers a premier <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Diagnostic Franchise India</strong> opportunity.
              </p>

              <div>
                <a 
                  href="https://forms.gle/geqADY2PEuscsvyb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                >
                  <span>Schedule Ecosystem Discussion</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>

          {/* Why Dentists Trust Nidaan */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Trust & Legacy</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                    Why Dentists Trust Nidaan
                  </h2>
                </div>
                <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                  With a proven operational history and a clinical reputation established over four decades, Nidaan is already trusted by dentists and specialists. As a premier <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Imaging Network</strong>, Nidaan offers a structured <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Radiology Franchise</strong> that guarantees diagnostic accuracy and centralized teleradiology support.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "40+ Years of Clinical Legacy",
                    desc: "One of Pune's most established names in dental imaging, built upon four decades of clinical service, diagnostic expertise and long-term professional relationships."
                  },
                  {
                    title: "Centralized Oral Radiology Expertise",
                    desc: "Structured reporting workflows supported by experienced Oral & Maxillofacial Radiologists, ensuring consistency, quality control and rapid clinical support."
                  },
                  {
                    title: "Proven Multi-Centre Operations",
                    desc: "A functioning six-centre imaging network operating through standardized workflows, centralized systems and operational discipline developed over decades."
                  },
                  {
                    title: "Technology-Enabled Infrastructure",
                    desc: "Cloud-connected systems, digital workflows, centralized reporting platforms and future AI-enabled tools designed to improve operational efficiency and scalability."
                  },
                  {
                    title: "Built for Dentists",
                    desc: "Designed around the clinical, diagnostic and workflow requirements of modern dental practices, specialists and referral networks."
                  }
                ].map((pillar, index) => (
                  <div key={index} className={index === 4 ? "md:col-span-2 space-y-2 border-t border-zinc-100 dark:border-zinc-900/50 pt-6" : "space-y-2"}>
                    <h3 className="text-md font-medium text-[#1A1A1A] dark:text-zinc-50 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Opportunity Section */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Market Demand</span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  The demand for operational standardization.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-[#4F4F4F] dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                <p>
                  As advanced dentistry scales, the integration of Cone Beam Computed Tomography (<strong className="font-semibold text-zinc-900 dark:text-zinc-100">CBCT Franchise</strong>) and Panoramic Radiography (<strong className="font-semibold text-zinc-900 dark:text-zinc-100">OPG Franchise</strong>) has transitioned from an elective clinic capability to a critical clinical prerequisite. Dentists increasingly require precise 3D bone mapping, implant guide planning, and endodontic visual verification.
                </p>
                <p>
                  However, setting up and maintaining high-end dental imaging infrastructure remains operationally complex. Single practitioners face challenges including high capital expenditures, complex licensing, radiology technician staffing, equipment audits, and the scarcity of dedicated Maxillofacial Radiologists (OMRs) to execute immediate, structured diagnostic reporting.
                </p>
                <p>
                  SOVAKA resolves this friction. By introducing a centralized, technology-enabled dental diagnostic ecosystem, we bridge the gap between capital investments and clinical workflow maturity.
                </p>
              </div>
            </div>
          </section>

          {/* Professionally Managed FOCO Model */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Business Model</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                    Professionally Managed FOCO Model
                  </h2>
                </div>
                <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                  Our <strong className="font-semibold text-zinc-900 dark:text-zinc-100">CBCT Franchise</strong> and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">OPG Franchise</strong> model removes operational complexity for partners. Franchise partners participate in healthcare infrastructure ownership, focusing on facility upkeep and local presence, while all clinical reporting, teleradiology workflows, and systems are managed centrally by the SOVAKA ecosystem.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Column: Responsibilities */}
                <div className="bg-sand-50/50 dark:bg-zinc-900/20 border border-sand-100/50 dark:border-zinc-800/50 p-8 rounded-sm space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-zinc-350 border-b border-zinc-150 dark:border-zinc-800 pb-3">
                      Franchise Partner Responsibilities
                    </h3>
                    <ul className="space-y-3 text-sm text-[#4F4F4F] dark:text-zinc-400">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Infrastructure investment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Local facility management</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Basic centre upkeep</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Local administrative coordination</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[10px] italic text-[#666666] border-t border-zinc-200 dark:border-zinc-800 pt-3 mt-4 leading-relaxed">
                    * Partners are not expected to manage clinical reporting, radiology workflows, workforce training or technology infrastructure.
                  </p>
                </div>

                {/* Right Column: SOVAKA support */}
                <div className="bg-sand-50/50 dark:bg-zinc-900/20 border border-sand-100/50 dark:border-zinc-800/50 p-8 rounded-sm space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-zinc-350 border-b border-zinc-150 dark:border-zinc-800 pb-3">
                      Managed Centrally by SOVAKA
                    </h3>
                    <ul className="space-y-3 text-sm text-[#4F4F4F] dark:text-zinc-400">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Oral & Maxillofacial Radiology workflows</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Reporting systems</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Workforce development</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Operational protocols</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Technology infrastructure</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Quality control</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Brand systems</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50 shrink-0" />
                        <span>Future AI integration</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Connected Infrastructure Layers */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="mb-16">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Architecture</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Connected infrastructure layers.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Standardized Centre Operations",
                  desc: "Site layouts, shielding certifications, radiation safety protocols, and AERB license coordinates managed under strict corporate compliance guidelines.",
                },
                {
                  title: "Centralized Reporting Workflows",
                  desc: "Direct integration with our remote OMR reporting desk, delivering structured clinical reports with rapid turnaround times.",
                },
                {
                  title: "Technician Sourcing & Training",
                  desc: "Standardized staffing support utilizing certified technicians trained directly inside our Pune educational facility.",
                },
                {
                  title: "Audits & Quality Assurance",
                  desc: "Routine calibration checks, radiation dosimetry monitoring, and structured diagnostic reporting audits to preserve medical-grade accuracy.",
                },
                {
                  title: "AI-Augmented Workflows",
                  desc: "Integrated DICOM routers and PACS modules configured with AI-assisted anatomical segmentations to assist specialist diagnostics.",
                },
                {
                  title: "Enterprise Software Systems",
                  desc: "Low-friction billing, lead routing, and clinical documentation portals designed specifically for CBCT and OPG operations.",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-medium text-[#1A1A1A] dark:text-zinc-50">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Operational Differentiators */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16 bg-sand-50 dark:bg-zinc-900/10 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#4F4F4F]">
                  Legacy & Credibility
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Anchored by 40+ years of operational radiology.
                </h2>
                <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                  We do not operate on raw software predictions. The SOVAKA franchise ecosystem is backed by the clinical heritage of Nidaan, established in 1985 in Pune. Our networks are supported by physical, multi-centre diagnostic centers, highly structured reporting systems, active IRIA academic presence, and real-world imaging data logs.
                </p>
              </div>
              <div className="lg:col-span-5 space-y-4">
                {[
                  "Established Pune operational base since 1985",
                  "FOCO model mitigating local clinical operational risk",
                  "Centralized OMR pool providing structured clinical diagnostic support",
                  "Active AI integrations scaling report throughput",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#1A1A1A] dark:text-zinc-200 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#4F4F4F] dark:text-zinc-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who This Franchise Is Designed For */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Partnership</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                    Who This Franchise Is Designed For
                  </h2>
                </div>
                <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                  Our <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Diagnostic Centre Franchise</strong> is tailored for diverse partners. We seek long-term partners who appreciate healthcare infrastructure, operational excellence, and professionally managed growth models. Franchise alignment is based on collaboration and shared vision rather than specific professional backgrounds, as all radiology workflows, technology platforms, and clinical systems are managed centrally by the SOVAKA ecosystem. Prior healthcare experience or operational expertise is welcome but not mandatory.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Dentists & Radiologists",
                    desc: "Clinicians seeking to participate in professionally managed dental imaging infrastructure supported by centralized radiology, reporting and operational systems.",
                  },
                  {
                    title: "Healthcare Entrepreneurs",
                    desc: "Individuals and organizations interested in developing healthcare assets through structured infrastructure partnerships and long-term ecosystem participation.",
                  },
                  {
                    title: "Healthcare & Diagnostic Operators",
                    desc: "Existing healthcare businesses, diagnostic centres and clinical networks seeking to expand imaging capabilities through centralized operational support.",
                  },
                  {
                    title: "Strategic Investors",
                    desc: "Investors seeking participation in scalable healthcare infrastructure supported by standardized workflows, technology systems and centralized clinical oversight.",
                  },
                  {
                    title: "Family Offices & Business Owners",
                    desc: "Professionals, business owners and family offices interested in healthcare infrastructure investments without requiring day-to-day involvement in clinical operations.",
                  },
                ].map((partner, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-md font-medium text-[#1A1A1A] dark:text-zinc-50 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />
                      {partner.title}
                    </h3>
                    <p className="text-xs text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Existing Operational Footprint */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16 bg-sand-50/30 dark:bg-zinc-900/10 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#4F4F4F]">
                  Social Proof & Scale
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Existing Operational Footprint
                </h2>
                <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm">
                  Our franchise system is not built on theoretical models or software startup projections. It is backed by an established, functioning operational platform across Maharashtra.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { value: "40+ Years", label: "Clinical Legacy" },
                  { value: "6 Centres", label: "Operational Centres" },
                  { value: "Centralized", label: "Radiology Network" },
                  { value: "Cloud-Connected", label: "Technology-Enabled Infrastructure" },
                  { value: "Structured", label: "Workforce Development Ecosystem" },
                  { value: "Future-Ready", label: "AI Ecosystem Development" },
                ].map((stat, index) => (
                  <div key={index} className="border-l border-zinc-200 dark:border-zinc-800 pl-4 py-2">
                    <span className="block text-xl md:text-2xl font-semibold text-[#1A1A1A] dark:text-zinc-50 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] uppercase tracking-wider text-[#666666] dark:text-zinc-500 mt-1 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Investment Philosophy & Regional Focus */}
          <section className="mb-20 border-t border-zinc-100 dark:border-zinc-900 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#4F4F4F]">
                  Regional Focus
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Targeted expansion across Maharashtra and India.
                </h2>
                <div className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base space-y-4">
                  <p>
                    Using our Pune operational base as a centralized diagnostic hub, SOVAKA is selectively establishing franchise sites across Maharashtra while building the foundations for a broader national imaging network.
                  </p>
                  <p>
                    The current focus on Maharashtra enables rapid operational support, workforce development, reporting integration and ecosystem coordination. As the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Imaging Infrastructure</strong> platform matures, the model is designed for scalable expansion across additional regions of India, establishing a unified <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Imaging Franchise</strong> and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">CBCT Franchise</strong> footprint.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#4F4F4F]">
                  Investment Philosophy
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  Long-term infrastructure valuation.
                </h2>
                <div className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-sm md:text-base space-y-4">
                  <p>
                    We explicitly reject aggressive sales-funnel hype, unverified ROI claims and rapid expansion cycles. We view our <strong className="font-semibold text-zinc-900 dark:text-zinc-100">CBCT Centre Franchise</strong> locations as fundamental healthcare infrastructure assets supported by standardized workflows, centralized clinical oversight and long-term operational discipline.
                  </p>
                  <p>
                    Partnerships are built around transparent capital allocation, realistic ramp-up expectations and structured operational integration rather than speculative growth assumptions.
                  </p>
                  <p>
                    While this may not represent the highest-return investment category, it is designed to be among the lowest-risk infrastructure models within healthcare services. Dental imaging benefits from recurring clinical demand, stable operational requirements and participation in one of India&apos;s fastest-growing healthcare sectors.
                  </p>
                  <p>
                    Our objective is sustainable long-term value creation through operational consistency, healthcare relevance and disciplined ecosystem expansion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="border-t border-zinc-100 dark:border-zinc-900 pt-16 text-center">
            <div className="max-w-[640px] mx-auto space-y-8">
              <h2 className="text-3xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50">
                Connect with the franchise ecosystem.
              </h2>
              <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                Connect directly with our franchise coordination team to evaluate spatial layouts, regional site density, and this unique <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Dental Imaging Business Opportunity</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://forms.gle/geqADY2PEuscsvyb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Connect with the Ecosystem</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="https://forms.gle/geqADY2PEuscsvyb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm transition-all duration-300 hover:bg-sand-50 dark:hover:bg-zinc-900 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Download Franchise Overview</span>
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
