"use client";

import React, { useState, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const context = searchParams.get("context");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    const endpoint = formId 
      ? `https://formspree.io/f/${formId}` 
      : "https://formspree.io/sovakalifesciences@gmail.com";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (typeof window !== "undefined") {
          const dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer = dataLayer;
          dataLayer.push({
            event: "contact_form_submission",
            formType: context || "general"
          });
        }
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  let title = "General Enquiry Gateway";
  let placeholder = "Please specify the nature of your interest (clinical operations, franchise partnership, software workflows, etc.)";

  if (context === "discovery") {
    title = "Franchise Partnership & Discovery Call";
    placeholder = "Please share details regarding your preferred location in Maharashtra, existing clinical practice/spatial coordinates, and timeline expectations for setting up a CBCT/OPG franchise.";
  } else if (context === "strategic") {
    title = "Strategic & Investor Collaboration Gateway";
    placeholder = "Please outline your areas of interest (infrastructure investments, regional radiology networks, teleradiology systems, teleradiology cloud routing, etc.) and strategic background.";
  }

  return (
    <div className="bg-sand-50 dark:bg-zinc-900/40 border border-sand-100/60 dark:border-zinc-800/60 p-8 md:p-12 rounded-sm relative">
      <h2 className="text-2xl font-medium tracking-tight text-[#1A1A1A] dark:text-zinc-50 mb-8">
        {title}
      </h2>

      {submitted ? (
        <div className="py-12 text-left">
          <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 px-3 py-1.5 rounded-sm mb-4">
            Inquiry Received
          </span>
          <h3 className="text-xl font-medium text-[#1A1A1A] dark:text-zinc-50 mb-2">Thank you.</h3>
          <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[400px]">
            Your inquiry has been received and our team will contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#4F4F4F] dark:text-zinc-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              disabled={submitting}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Dr. Aryan Sharma"
              className="w-full bg-white dark:bg-zinc-950 border border-sand-200 dark:border-zinc-800/85 focus:border-zinc-950 dark:focus:border-zinc-50 rounded-sm px-4 py-3 text-sm text-[#1A1A1A] dark:text-zinc-50 placeholder-zinc-400 focus:outline-none transition-all duration-300 disabled:opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#4F4F4F] dark:text-zinc-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                disabled={submitting}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. aryan@hospital.com"
                className="w-full bg-white dark:bg-zinc-950 border border-sand-200 dark:border-zinc-800/85 focus:border-zinc-950 dark:focus:border-zinc-50 rounded-sm px-4 py-3 text-sm text-[#1A1A1A] dark:text-zinc-50 placeholder-zinc-400 focus:outline-none transition-all duration-300 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#4F4F4F] dark:text-zinc-400 mb-2">
                Phone Number <span className="text-[10px] text-zinc-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                disabled={submitting}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-white dark:bg-zinc-950 border border-sand-200 dark:border-zinc-800/85 focus:border-zinc-950 dark:focus:border-zinc-50 rounded-sm px-4 py-3 text-sm text-[#1A1A1A] dark:text-zinc-50 placeholder-zinc-400 focus:outline-none transition-all duration-300 disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#4F4F4F] dark:text-zinc-400 mb-2">
              Inquiry Details
            </label>
            <textarea
              id="message"
              required
              disabled={submitting}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={placeholder}
              className="w-full bg-white dark:bg-zinc-950 border border-sand-200 dark:border-zinc-800/85 focus:border-zinc-950 dark:focus:border-zinc-50 rounded-sm px-4 py-3 text-sm text-[#1A1A1A] dark:text-zinc-50 placeholder-zinc-400 focus:outline-none transition-all duration-300 resize-none font-sans disabled:opacity-50"
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm overflow-hidden transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{submitting ? "Submitting..." : "Submit Inquiry"}</span>
            {!submitting && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-[120px] pb-16">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Page Header */}
          <div className="mb-16 lg:mb-24">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-200 bg-sand-100 dark:bg-zinc-900 border border-sand-200 dark:border-zinc-800/50 px-3 py-1.5 rounded-sm mb-6">
              Contact Gateway
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50 max-w-[800px]">
              Direct operations & partnership gateways.
            </h1>
            <p className="text-lg text-[#4F4F4F] dark:text-zinc-400 mt-6 max-w-[600px] leading-relaxed">
              Connect directly with our operational desks, franchise development coordinators, or academic support teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-xs font-semibold text-[#666666] dark:text-zinc-500 uppercase tracking-widest mb-6">
                  Ecosystem Head Office
                </h2>
                <div className="space-y-6 text-[#4F4F4F] dark:text-zinc-400">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-sand-50 dark:bg-zinc-900 border border-sand-100 dark:border-zinc-800 flex items-center justify-center text-[#666666] shrink-0">
                      <Mail className="w-5 h-5 text-[#4F4F4F] dark:text-zinc-400" />
                    </div>
                    <div>
                      <span className="block text-[13px] uppercase tracking-wider text-[#666666] dark:text-zinc-500 mb-1">Email Enquiries</span>
                      <a href="mailto:sovakalifesciences@gmail.com" className="text-base text-[#1A1A1A] dark:text-zinc-100 font-medium hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300">
                        sovakalifesciences@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-sand-50 dark:bg-zinc-900 border border-sand-100 dark:border-zinc-800 flex items-center justify-center text-[#666666] shrink-0">
                      <Phone className="w-5 h-5 text-[#4F4F4F] dark:text-zinc-400" />
                    </div>
                    <div>
                      <span className="block text-[13px] uppercase tracking-wider text-[#666666] dark:text-zinc-500 mb-1">Operational Desk</span>
                      <div className="flex flex-col gap-1 text-base text-[#1A1A1A] dark:text-zinc-100 font-medium">
                        <a href="tel:+919307668998" className="hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300">+91 93076 68998</a>
                        <a href="tel:+919823099115" className="hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300">+91 98230 99115</a>
                        <a href="tel:+919823005337" className="hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-300">+91 98230 05337</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-sand-50 dark:bg-zinc-900 border border-sand-100 dark:border-zinc-800 flex items-center justify-center text-[#666666] shrink-0">
                      <MapPin className="w-5 h-5 text-[#4F4F4F] dark:text-zinc-400" />
                    </div>
                    <div>
                      <span className="block text-[13px] uppercase tracking-wider text-[#666666] dark:text-zinc-500 mb-1">Operations Hub</span>
                      <span className="text-base text-[#1A1A1A] dark:text-zinc-100 font-medium leading-relaxed">
                        Pune, Maharashtra, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-900 pt-8">
                <span className="block text-xs font-semibold text-[#666666] dark:text-zinc-500 uppercase tracking-widest mb-4">
                  Response Window
                </span>
                <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[320px]">
                  Operational queries and partner discovery submissions are reviewed within 24–48 business hours by our coordination team.
                </p>
              </div>
            </div>

            {/* Right Side: Suspended Premium Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="bg-sand-50 dark:bg-zinc-900/40 border border-sand-100/60 dark:border-zinc-800/60 p-8 md:p-12 rounded-sm relative animate-pulse h-[400px]">
                  <div className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-8" />
                  <div className="space-y-6">
                    <div className="h-10 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
                    <div className="h-10 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
                    <div className="h-32 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
                  </div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
