"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("sec-1");

  const sections = [
    { id: "sec-1", label: "01. Acceptance" },
    { id: "sec-2", label: "02. No Medical Advice" },
    { id: "sec-3", label: "03. Property Rights" },
    { id: "sec-4", label: "04. Limitations" },
    { id: "sec-5", label: "05. Disclaimers" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[120px] pb-16">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Header */}
          <div className="mb-16 border-b border-zinc-100 pb-12">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] bg-sand-100 border border-sand-200 px-3 py-1.5 rounded-sm mb-6">
              Legal Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A]">
              Terms of Service
            </h1>
            <p className="text-sm text-[#666666] mt-4">
              Last Updated: May 27, 2026 | SOVAKA Lifesciences (OPC) Pvt. Ltd.
            </p>
          </div>

          {/* Document Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Outline navigation (Left) */}
            <div className="hidden lg:block lg:col-span-3 sticky top-[120px] space-y-4">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-2">Contents</span>
              <div className="space-y-4">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => handleScrollTo(e, sec.id)}
                    className={`block text-xs uppercase tracking-wider font-semibold border-l-2 pl-4 transition-all duration-300 ${
                      activeSection === sec.id
                        ? "border-zinc-900 text-[#1A1A1A] font-semibold"
                        : "border-transparent text-[#666666] hover:text-[#4F4F4F] hover:border-zinc-200"
                    }`}
                  >
                    {sec.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Document Body (Right) */}
            <div className="lg:col-span-9 max-w-[720px] space-y-16 text-[#4F4F4F] text-sm md:text-base leading-relaxed">
              <section id="sec-1" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">01. Acceptance of Terms</h2>
                <p>
                  By accessing and utilizing the web platform of <strong>SOVAKA Lifesciences (OPC) Pvt. Ltd.</strong> (sovakalifesciences.com), you acknowledge, accept, and agree to remain bound by the following terms, clinical operation disclaimers, and regulatory disclosures. If you do not agree to these terms, please discontinue access.
                </p>
              </section>

              <section id="sec-2" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">02. No Medical or Clinical Advice</h2>
                <p>
                  The content, diagrams, architectural descriptions, and technical specifications hosted on this website are for informational and ecosystem-positioning purposes only. They do not constitute formal medical diagnoses, radiological determinations, clinical advice, or healthcare referrals. Clinical radiology operations inside physical Nidaan centres are run strictly by registered, independent medical and dental practitioners.
                </p>
              </section>

              <section id="sec-3" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">03. Intellectual Property Rights</h2>
                <p>
                  All materials, codebase assets, wireframe designs, isometric models, and branding elements (including the SOVAKA Lifesciences logo mark) are the exclusive property of <strong>SOVAKA Lifesciences (OPC) Pvt. Ltd.</strong> reproduction, mirroring, or layout extraction without formal corporate authorization is prohibited.
                </p>
              </section>

              <section id="sec-4" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">04. Platform Usage & Limitations</h2>
                <p>
                  Users agree to utilize this platform solely for legitimate partner discovery, academic application, or strategic collaboration purposes. Any attempt to compromise server infrastructure, intercept App Script gateways, or harvest contact indices is strictly prohibited.
                </p>
              </section>

              <section id="sec-5" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">05. Franchise & Training Disclaimers</h2>
                <p>
                  Submissions to the franchise or training & careers desk do not guarantee approval, enrollment, or operational partnership. All final contracts, investment layouts, and deployment details are governed by separate, legally binding agreements executed directly with <strong>SOVAKA Lifesciences (OPC) Pvt. Ltd.</strong>
                </p>
              </section>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
