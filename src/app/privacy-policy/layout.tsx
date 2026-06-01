import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SOVAKA Lifesciences",
  description: "Official privacy policy statement explaining how SOVAKA Lifesciences manages user and diagnostic patient metadata.",
  alternates: {
    canonical: "https://sovakalifesciences.com/privacy-policy",
  },
};

export default function PrivacyLayout({
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
        "name": "Privacy Policy",
        "item": "https://sovakalifesciences.com/privacy-policy"
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
