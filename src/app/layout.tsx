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
    default: "SOVAKA Lifesciences | Connected Dental Imaging Ecosystem",
    template: "%s | SOVAKA Lifesciences",
  },
  description: "SOVAKA Lifesciences (OPC) Pvt. Ltd. unifies dental imaging infrastructure, centralized teleradiology OMR reporting workflows, technician training pipelines, and future-ready AI software.",
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
    canonical: "./",
  },
  openGraph: {
    title: "SOVAKA Lifesciences | Connected Dental Imaging Ecosystem",
    description: "Discover a connected ecosystem unifying Nidaan CBCT centres, specialist OMR workflows, and technology-enabled diagnostic operations.",
    url: "https://sovakalifesciences.com",
    siteName: "SOVAKA Lifesciences",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SOVAKA Lifesciences Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOVAKA Lifesciences | Connected Dental Imaging Ecosystem",
    description: "Discover a connected ecosystem unifying Nidaan CBCT centres, specialist OMR workflows, and technology-enabled diagnostic operations.",
    images: ["/logo.png"],
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
