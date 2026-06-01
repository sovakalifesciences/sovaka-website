import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional & Corporate Disclosure | SOVAKA Lifesciences",
  description: "Official professional and corporate disclosure document for SOVAKA Lifesciences (OPC) Pvt. Ltd., Pune, Maharashtra.",
  alternates: {
    canonical: "https://sovakalifesciences.com/disclosure",
  },
};

export default function DisclosureLayout({
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
        "name": "Disclosure",
        "item": "https://sovakalifesciences.com/disclosure"
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
