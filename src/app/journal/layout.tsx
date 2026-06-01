import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Ecosystem Journal | SOVAKA Lifesciences",
  description: "Read operational, clinical, and technological updates from the SOVAKA Lifesciences dental imaging infrastructure network.",
  alternates: {
    canonical: "https://sovakalifesciences.com/journal",
  },
  openGraph: {
    title: "Insights & Ecosystem Journal | SOVAKA Lifesciences",
    description: "Read operational, clinical, and technological updates from the SOVAKA Lifesciences dental imaging infrastructure network.",
    url: "https://sovakalifesciences.com/journal",
    type: "website",
  },
};

export default function JournalLayout({
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
        "name": "Journal",
        "item": "https://sovakalifesciences.com/journal"
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
