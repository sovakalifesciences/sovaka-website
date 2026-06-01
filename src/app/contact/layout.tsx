import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SOVAKA LifeSciences",
  description: "Get in touch with SOVAKA LifeSciences. Contact our team for general inquiries, dental imaging franchise details, radiology training, and support.",
  alternates: {
    canonical: "https://sovakalifesciences.com/contact",
  },
  openGraph: {
    title: "Contact SOVAKA LifeSciences",
    description: "Get in touch with SOVAKA LifeSciences. Contact our team for general inquiries, dental imaging franchise details, radiology training, and support.",
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
