import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOVAKA LifeSciences | Building the Future of Dental Imaging",
  description: "Learn about SOVAKA LifeSciences. We are building the future infrastructure, centralized oral radiology workflows, and workforce pipelines for modern dentistry.",
  alternates: {
    canonical: "https://sovakalifesciences.com/about",
  },
  openGraph: {
    title: "About SOVAKA LifeSciences | Building the Future of Dental Imaging",
    description: "Learn about SOVAKA LifeSciences. We are building the future infrastructure, centralized oral radiology workflows, and workforce pipelines for modern dentistry.",
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
