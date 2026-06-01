import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBCT & OPG Franchise | SOVAKA Lifesciences",
  description: "Establish a standardized CBCT & OPG dental diagnostic imaging centre. Secure complete FOCO operational architecture, teleradiology PACS setups, and technician staffing.",
  alternates: {
    canonical: "https://sovakalifesciences.com/franchise",
  },
  openGraph: {
    title: "CBCT & OPG Franchise | SOVAKA Lifesciences",
    description: "Scale intelligent dental imaging infrastructure under our Franchise Owned Company Operated model. Backed by the 40+ year Nidaan legacy.",
    url: "https://sovakalifesciences.com/franchise",
    type: "website",
  },
};

export default function FranchiseLayout({
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
        "name": "CBCT & OPG Franchise",
        "item": "https://sovakalifesciences.com/franchise"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the SOVAKA CBCT & OPG franchise model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SOVAKA operates on a FOCO (Franchise Owned Company Operated) model. Partners invest in the dental imaging infrastructure, while SOVAKA manages daily clinical operations, regulatory shielding audits, licensing compliance, technician routing, and centralized teleradiology remote reporting."
        }
      },
      {
        "@type": "Question",
        "name": "Where is SOVAKA expanding dental radiology franchises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SOVAKA is actively scaling its digital dental imaging centers across Maharashtra, utilizing our primary operational and training base located in Pune."
        }
      },
      {
        "@type": "Question",
        "name": "Does the franchise include qualified technicians and radiologists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every franchise centre is staffed by certified technicians trained at the SOVAKA Workforce Development Academy, and connected to our centralized pool of experienced Oral and Maxillofacial Radiologists (OMRs)."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
