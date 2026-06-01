import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sovakalifesciences.com"),
  title: {
    default: "SOVAKA LifeSciences | Dental Imaging Infrastructure, Training & AI Ecosystem",
    template: "%s | SOVAKA LifeSciences",
  },
  description: "SOVAKA LifeSciences unifies dental imaging infrastructure, teleradiology workflows, technician training, and AI software to modernize oral radiology.",
  keywords: [
    "CBCT & OPG Franchise",
    "Dental Imaging Franchise",
    "Dental Radiology Technician Training",
    "CBCT & OPG Technician Course",
    "AI Dental Imaging Ecosystem",
    "Oral Radiology Workflow Systems",
    "Intelligent Dental Imaging Infrastructure",
    "Nidaan Dental Pune",
  ],
  alternates: {
    canonical: "https://sovakalifesciences.com",
  },
  openGraph: {
    title: "SOVAKA LifeSciences | Dental Imaging Infrastructure, Training & AI Ecosystem",
    description: "SOVAKA LifeSciences unifies dental imaging infrastructure, teleradiology workflows, technician training, and AI software to modernize oral radiology.",
    url: "https://sovakalifesciences.com",
    siteName: "SOVAKA LifeSciences",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sovaka-og-image.png",
        width: 1200,
        height: 630,
        alt: "SOVAKA LifeSciences - Dental Imaging Infrastructure, Training & AI Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOVAKA LifeSciences | Dental Imaging Infrastructure, Training & AI Ecosystem",
    description: "SOVAKA LifeSciences unifies dental imaging infrastructure, teleradiology workflows, technician training, and AI software to modernize oral radiology.",
    images: ["/sovaka-og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sovakalifesciences.com/#organization",
  "name": "SOVAKA Lifesciences (OPC) Pvt. Ltd.",
  "alternateName": ["SOVAKA Lifesciences", "SOVAKA"],
  "url": "https://sovakalifesciences.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://sovakalifesciences.com/logo.png",
    "caption": "SOVAKA Lifesciences Logo"
  },
  "description": "Parent dental ecosystem company building intelligent dental imaging infrastructure, centralized oral radiology workflows, workforce development, and AI-enabled dentistry systems.",
  "foundingDate": "1985",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Maharashtra"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 93076 68998",
    "contactType": "customer service",
    "email": "sovakalifesciences@gmail.com",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/sovaka-lifesciences",
    "https://www.instagram.com/sovakalifesciences",
    "https://www.nidaandental.com"
  ],
  "knowsAbout": [
    "CBCT & OPG Franchise",
    "Dental Radiology Technician Training",
    "AI Dental Imaging Ecosystem",
    "Oral Radiology Workflow Systems",
    "Intelligent Dental Imaging Infrastructure"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sovakalifesciences.com/#website",
  "url": "https://sovakalifesciences.com",
  "name": "SOVAKA Lifesciences",
  "description": "Connected Dental Imaging Ecosystem",
  "publisher": {
    "@id": "https://sovakalifesciences.com/#organization"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
