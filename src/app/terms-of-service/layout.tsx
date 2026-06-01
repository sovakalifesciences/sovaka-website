import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SOVAKA Lifesciences",
  description: "Official terms of service governing the use of SOVAKA Lifesciences platforms, portals, and diagnostic coordination dashboards.",
  alternates: {
    canonical: "https://sovakalifesciences.com/terms-of-service",
  },
};

export default function TermsLayout({
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
        "name": "Terms of Service",
        "item": "https://sovakalifesciences.com/terms-of-service"
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
