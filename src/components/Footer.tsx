"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
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

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
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

export default function Footer() {
  return (
    <div className="w-full bg-[#FCFAF6] dark:bg-[#0a0a0a] border-t border-sand-200 dark:border-zinc-800 pt-20 pb-16">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Vision Statement */}
        <div className="pb-16 mb-16">
          <div className="max-w-[800px] border-l-2 border-zinc-900 dark:border-zinc-100 pl-8 lg:pl-12">
            <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#666666] dark:text-zinc-400 mb-6">
              Vision Statement
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-[32px] font-medium tracking-[-0.02em] text-[#1A1A1A] dark:text-zinc-50 leading-[1.35]">
              “To create the connected ecosystem powering the future of dental imaging, intelligent radiology workflows and technology-enabled dentistry.”
            </h3>
          </div>
        </div>

        {/* Footer Area */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand block */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <img 
                  src="/logo.webp" 
                  alt="SOVAKA Lifesciences" 
                  className="h-8 w-auto object-contain mb-4 filter dark:invert" 
                  width={1024}
                  height={196}
                />
                <p className="text-[15px] text-[#666666] dark:text-zinc-400 max-w-[320px] leading-relaxed">
                  SOVAKA Lifesciences is building the future infrastructure, talent pipelines, and intelligent interfaces of dental radiology.
                </p>
              </div>
              <p className="text-[15px] text-[#666666] dark:text-zinc-400 mt-8 lg:mt-0">
                &copy; {new Date().getFullYear()} SOVAKA Lifesciences (OPC) Pvt. Ltd. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h5 className="text-xs font-semibold text-[#1A1A1A] dark:text-zinc-100 uppercase tracking-wider mb-6">Ecosystem</h5>
              <ul className="space-y-3 text-[17px] font-medium text-[#4F4F4F] dark:text-zinc-300">
                <li>
                  <a 
                    href="https://www.nidaandental.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    Nidaan CBCT & OPG Centre <span className="text-[10px] text-[#666666]">↗</span>
                  </a>
                </li>
                <li>
                  <Link href="/training-careers" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">
                    Training & Job Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">
                    Intelligent Workflows
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">
                    AI Ecosystem
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-4">
              <h5 className="text-xs font-semibold text-[#1A1A1A] dark:text-zinc-100 uppercase tracking-wider mb-6">Contact</h5>
              <ul className="space-y-3 text-[17px] font-medium text-[#4F4F4F] dark:text-zinc-300">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#666666] dark:text-zinc-500" />
                  <a href="mailto:sovakalifesciences@gmail.com" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">sovakalifesciences@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#666666] dark:text-zinc-500 mt-0.5" />
                  <div className="flex flex-col gap-1 text-[17px] font-medium text-[#4F4F4F] dark:text-zinc-300">
                    <a href="tel:+919307668998" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">+91 93076 68998</a>
                    <a href="tel:+919823099115" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">+91 98230 99115</a>
                    <a href="tel:+919823005337" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">+91 98230 05337</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#666666] dark:text-zinc-500 mt-0.5" />
                  <span className="leading-relaxed">Pune, Maharashtra, India</span>
                </li>
              </ul>
              
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/dr-akshay-shah-cbct/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#666666] hover:text-[#1A1A1A] dark:hover:text-zinc-100 hover:bg-sand-100 hover:border-sand-200 transition-all duration-300" 
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[26px] h-[26px]" />
                  </a>
                  <a 
                    href="https://www.instagram.com/sovaka.lifesciences/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#666666] hover:text-[#1A1A1A] dark:hover:text-zinc-100 hover:bg-sand-100 hover:border-sand-200 transition-all duration-300" 
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-[26px] h-[26px]" />
                  </a>
                </div>
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mt-2">
                  <span className="block text-xs font-semibold text-[#666666] dark:text-zinc-500 uppercase tracking-wider mb-2">Connected Infrastructure</span>
                  <a 
                    href="https://www.nidaandental.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs text-[#4F4F4F] dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300 font-medium"
                  >
                    Nidaan CBCT & OPG Centre <span className="text-[10px] text-[#666666]">↗</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Legal / Bottom Links */}
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-6 text-xs text-[#666666] dark:text-zinc-400">
              <Link href="/privacy-policy" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">Terms of Service</Link>
              <Link href="/disclosure" className="hover:text-[#1A1A1A] dark:hover:text-zinc-100 transition-colors duration-300">Disclosure</Link>
            </div>
            <p className="text-xs text-[#666666] dark:text-zinc-500">
              Clinical operations run by registered medical practitioners.
            </p>
          </div>

        </footer>

      </div>
    </div>
  );
}
