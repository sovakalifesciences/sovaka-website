import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    "url": "https://sovakalifesciences.com/logo.webp",
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W52S7MQG');

              document.addEventListener('click', function(e) {
                var anchor = e.target.closest('a');
                if (!anchor) return;
                var href = anchor.getAttribute('href');
                if (!href) return;
                window.dataLayer = window.dataLayer || [];
                
                if (href.indexOf('forms.gle/geqADY2PEuscsvyb9') > -1) {
                  window.dataLayer.push({
                    event: 'franchise_form_submission',
                    formType: 'franchise',
                    method: 'outbound_click'
                  });
                } else if (href.indexOf('forms.gle/vGUGby9hmxY3wDTW8') > -1) {
                  window.dataLayer.push({
                    event: 'technician_form_submission',
                    formType: 'technician',
                    method: 'outbound_click'
                  });
                } else if (href.indexOf('forms.gle/icf1jPDAn3brd1gE6') > -1) {
                  window.dataLayer.push({
                    event: 'investor_form_submission',
                    formType: 'investor',
                    method: 'outbound_click'
                  });
                } else if (href.indexOf('mailto:') === 0) {
                  window.dataLayer.push({
                    event: 'email_click',
                    email: href.replace('mailto:', ''),
                    method: 'mailto_click'
                  });
                } else if (href.indexOf('tel:') === 0) {
                  window.dataLayer.push({
                    event: 'phone_click',
                    phone: href.replace('tel:', ''),
                    method: 'tel_click'
                  });
                } else if (href.indexOf('http') === 0 && href.indexOf('sovakalifesciences.com') === -1 && href.indexOf('localhost') === -1) {
                  window.dataLayer.push({
                    event: 'outbound_link_click',
                    destination: href,
                    method: 'outbound_click'
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W52S7MQG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
