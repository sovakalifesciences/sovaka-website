import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOVAKA Lifesciences | Parent Dental Imaging Ecosystem",
  description: "SOVAKA Lifesciences is a parent dental diagnostics company building intelligent imaging infrastructure, centralized OMR reporting workflows, and AI-enabled software.",
  alternates: {
    canonical: "https://sovakalifesciences.com/about",
  },
  openGraph: {
    title: "About SOVAKA Lifesciences | Parent Dental Imaging Ecosystem",
    description: "Discover our multi-layered infrastructure model, clinical heritage, and strategic vision for technology-enabled dentistry.",
    url: "https://sovakalifesciences.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sovakalifesciences.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://sovakalifesciences.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
