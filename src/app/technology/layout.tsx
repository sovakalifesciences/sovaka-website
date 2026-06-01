import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ecosystem for Dental Imaging & Radiology | SOVAKA LifeSciences",
  description: "Explore the SOVAKA LifeSciences AI Ecosystem. We develop intelligent software interfaces and centralized cloud workflows to modernize dental radiology diagnostics.",
  alternates: {
    canonical: "https://sovakalifesciences.com/technology",
  },
  openGraph: {
    title: "AI Ecosystem for Dental Imaging & Radiology | SOVAKA LifeSciences",
    description: "Explore the SOVAKA LifeSciences AI Ecosystem. We develop intelligent software interfaces and centralized cloud workflows to modernize dental radiology diagnostics.",
    url: "https://sovakalifesciences.com/technology",
    type: "website",
  },
};

export default function TechnologyLayout({
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
        "name": "Technology Systems",
        "item": "https://sovakalifesciences.com/technology"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-enabled dental imaging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-enabled dental imaging refers to the integration of machine learning algorithms (like convolutional neural networks) with 2D panoramic (OPG) and 3D Cone Beam Computed Tomography (CBCT) datasets. These systems automate anatomical segmentation, nerve tracing, bone density profiling, and potential pathology flagging to assist specialists in diagnostic accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI support radiology workflows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rather than replacing radiologists, AI assists workflows by pre-sorting diagnostic priority, automating tedious tracing tasks (such as mapping the inferior alveolar nerve canal), performing volumetric segmentations, and auditing DICOM data parameters, reducing turnaround time for teleradiology queues."
        }
      },
      {
        "@type": "Question",
        "name": "What is intelligent imaging infrastructure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intelligent imaging infrastructure refers to the connected digital layer—including automated DICOM routers, cloud-enabled PACS (Picture Archiving and Communication Systems), remote specialist routing queues, and AI assistants—that unites physical imaging machines with clinical diagnostics."
        }
      },
      {
        "@type": "Question",
        "name": "Why are connected imaging systems important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Connected imaging systems eliminate diagnostic silos. By routing raw scans from physical locations to a central, secure database, clinics secure instant access to specialized Maxillofacial Radiologists (OMRs) and automated clinical audits, ensuring consistent patient outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "How is dental imaging evolving?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dental imaging is transitioning from isolated local hardware solutions to connected cloud networks. The future of dental diagnostics relies on structural workflow orchestration, remote expert oversight, and real-time AI diagnostic assistance."
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
