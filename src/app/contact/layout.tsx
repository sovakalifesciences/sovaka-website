import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SOVAKA Lifesciences | Partnerships & Operations Gateway",
  description: "Connect with our operational hubs, franchise coordination coordinators, or academic support teams in Pune, Maharashtra.",
  alternates: {
    canonical: "https://sovakalifesciences.com/contact",
  },
  openGraph: {
    title: "Contact SOVAKA Lifesciences | Partnerships & Operations Gateway",
    description: "Get in touch with the SOVAKA Lifesciences parent dental imaging ecosystem office.",
    url: "https://sovakalifesciences.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
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
        "name": "Contact",
        "item": "https://sovakalifesciences.com/contact"
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
