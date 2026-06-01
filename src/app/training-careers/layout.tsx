import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Radiology Technician Training & Job Opportunities | SOVAKA LifeSciences",
  description: "Apply for dental radiology technician training & job opportunities at SOVAKA LifeSciences. Get hands-on clinical skills at real imaging centers in Pune.",
  alternates: {
    canonical: "https://sovakalifesciences.com/training-careers",
  },
  openGraph: {
    title: "Dental Radiology Technician Training & Job Opportunities | SOVAKA LifeSciences",
    description: "Apply for dental radiology technician training & job opportunities at SOVAKA LifeSciences. Get hands-on clinical skills at real imaging centers in Pune.",
    url: "https://sovakalifesciences.com/training-careers",
    type: "website",
  },
};

export default function TrainingLayout({
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
        "name": "Training & Job Opportunities",
        "item": "https://sovakalifesciences.com/training-careers"
      }
    ]
  };

  const educationalProgramJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": "https://sovakalifesciences.com/training-careers/#program",
    "name": "Dental Radiology Technician Training & Job Opportunities",
    "alternateName": "CBCT & OPG Technician Training",
    "description": "Practical training inside active Nidaan CBCT & OPG Centres with job opportunities for high-performing candidates in dental radiology.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "SOVAKA Lifesciences Training & Job Opportunities Academy",
      "url": "https://sovakalifesciences.com/training-careers",
      "parentOrganization": {
        "@type": "Organization",
        "name": "SOVAKA Lifesciences (OPC) Pvt. Ltd.",
        "url": "https://sovakalifesciences.com"
      }
    },
    "programPrerequisites": [
      {
        "@type": "AlignmentObject",
        "alignmentType": "minimumEducationalLevel",
        "targetName": "12th Grade or higher"
      },
      {
        "@type": "AlignmentObject",
        "alignmentType": "minimumAge",
        "targetName": "18 years"
      }
    ],
    "occupationalCredentialAwarded": "Certificate of CBCT & OPG Operational Proficiency",
    "educationalProgramMode": "Practical, hands-on clinical environment training inside Nidaan diagnostic hubs in Pune",
    "offers": {
      "@type": "Offer",
      "category": "Training & Job Opportunities"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is training provided in regional languages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The coursebook, concept explanations, practical workflows and student guidance are provided in English, Marathi or Hindi depending on the student's preferred language."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duration of the training program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The program spans 1 month, combining theory, equipment safety training and intensive hands-on clinical exposure."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive a certificate upon completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Students who successfully complete the operational assessments and practical audits receive a certification from SOVAKA Lifesciences co-branded with Nidaan."
        }
      },
      {
        "@type": "Question",
        "name": "Is a science background mandatory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Students from Science, Commerce, Arts and other educational backgrounds are welcome to apply."
        }
      },
      {
        "@type": "Question",
        "name": "Where is practical training conducted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Practical training is conducted within active Nidaan CBCT & OPG imaging environments in Pune."
        }
      },
      {
        "@type": "Question",
        "name": "Can students from Arts or Commerce backgrounds apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Applicants from any educational stream may apply provided they meet the minimum eligibility requirements."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalProgramJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
