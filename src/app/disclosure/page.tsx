"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DisclosurePage() {
  const [activeSection, setActiveSection] = useState("sec-1");

  const sections = [
    { id: "sec-1", label: "01. Development" },
    { id: "sec-2", label: "02. Future Statements" },
    { id: "sec-3", label: "03. Investment" },
    { id: "sec-4", label: "04. Academic Training" },
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
              Disclosure & Disclaimer
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
                <h2 className="text-xl font-medium text-[#1A1A1A]">01. AI & Technology Development Layer</h2>
                <p>
                  Certain technology features, workflow engines, cloud PACS portals, and AI-assisted OPG detection modules described across our platform are currently under active software development or limited clinical trials. These tools are designed to support and assist, rather than replace, certified clinical decisions made by qualified radiologists and registered dental practitioners.
                </p>
              </section>

              <section id="sec-2" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">02. Forward-Looking Statements</h2>
                <p>
                  Statements concerning future centre rollouts, geographical expansions, technology releases, database connections, and operational integration goals represent strategic roadmap predictions and forward-looking assertions. These are subject to regulatory shifts, equipment hardware supply chains, spatial approval constraints, and clinical operations dynamics. Actual outcomes may differ from those projected on this platform.
                </p>
              </section>

              <section id="sec-3" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">03. Franchise & Partnership Disclaimers</h2>
                <p>
                  Financial metrics, capital outlay estimates (e.g. <code>INR 40 Lakhs</code>), and return timeline projections represent analytical averages derived from historical clinic configurations. They do not constitute a guarantee of performance, financial return, or operational outcome. All franchise relations, FOCO operations, and centre deployments are governed strictly by the final terms of the signed franchise agreement with <strong>SOVAKA Lifesciences (OPC) Pvt. Ltd.</strong>
                </p>
              </section>

              <section id="sec-4" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">04. Workforce & Academic Training</h2>
                <p>
                  Workforce training, technician workshops, and academy programs are run in alignment with clinical operations guidelines within physical Pune hub centres. Successful completion of training courses provides certification of operational proficiency but does not promise or guarantee permanent placement or contract deployment within the Nidaan centre ecosystem.
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
