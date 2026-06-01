"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("sec-1");

  const sections = [
    { id: "sec-1", label: "01. Overview" },
    { id: "sec-2", label: "02. Data Collection" },
    { id: "sec-3", label: "03. Google Forms" },
    { id: "sec-4", label: "04. Third Parties" },
    { id: "sec-5", label: "05. User Rights" },
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
              Privacy Policy
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
                <h2 className="text-xl font-medium text-[#1A1A1A]">01. Overview</h2>
                <p>
                  This Privacy Policy defines the protocols and operational standards observed by <strong>SOVAKA Lifesciences (OPC) Pvt. Ltd.</strong> regarding the collection, storage, use, and security of user information gathered via our ecosystem platform (sovakalifesciences.com) and associated diagnostic workflow tools.
                </p>
              </section>

              <section id="sec-2" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">02. Information We Collect</h2>
                <p>
                  We collect information necessary to facilitate operational inquiry desks, franchise discovery pipelines, and training registration. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Information:</strong> Full name, age, current profession, educational background.</li>
                  <li><strong>Contact Details:</strong> Email addresses, telephone numbers, and location details (city/state).</li>
                  <li><strong>Communication History:</strong> Operational messages, preferred discussion slots, and form submission details.</li>
                </ul>
              </section>

              <section id="sec-3" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">03. Google Forms & Apps Script Automation</h2>
                <p>
                  Our inquiry workflows utilize the Google Forms API and Google Sheets database storage for secure, low-friction lead capture. Information processed through these forms is handled in compliance with Google Workspace security guidelines. Standard automation routines (via Apps Script) are utilized strictly for internal operations routing and email response notifications. We do not engage in automated tracking or sales profile compilation.
                </p>
              </section>

              <section id="sec-4" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">04. Analytics & Cookie Usage</h2>
                <p>
                  We utilize minimal, non-invasive cookies and analytics systems to analyze website performance, ensure responsive interface scaling, and optimize load speeds. No personal data is captured by our analytics engines without explicit interaction.
                </p>
              </section>

              <section id="sec-5" className="space-y-4 scroll-mt-32">
                <h2 className="text-xl font-medium text-[#1A1A1A]">05. User Rights & Data Protection</h2>
                <p>
                  You retain the right to query, modify, or request the deletion of your personal records from our database environments. If you wish to revoke communication consent or delete submitted operational records, connect with our administration desk directly at: 
                  <a href="mailto:sovakalifesciences@gmail.com" className="text-[#1A1A1A] font-medium underline ml-1 hover:text-teal-800 transition-colors duration-300">
                    sovakalifesciences@gmail.com
                  </a>.
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
