import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sovakalifesciences.com"),
  title: {
    default: "SOVAKA LifeSciences | Dental Imaging Infrastructure, Training & AI Ecosystem",
    template: "%s | SOVAKA LifeSciences",
  },
  description: "SOVAKA LifeSciences unifies dental imaging infrastructure, teleradiology workflows, technician training, and AI software to modernize oral radiology.",
  keywords: [
    "CBCT & OPG Franchise",
    "Dental Imaging Franchise",
    "Dental Radiology Technician Training",
    "CBCT & OPG Technician Course",
    "AI Dental Imaging Ecosystem",
    "Oral Radiology Workflow Systems",
    "Intelligent Dental Imaging Infrastructure",
    "Nidaan Dental Pune",
  ],
  alternates: {
    canonical: "https://sovakalifesciences.com",
  },
  openGraph: {
    title: "SOVAKA LifeSciences | Dental Imaging Infrastructure, Training & AI Ecosystem",
    description: "SOVAKA LifeSciences unifies dental imaging infrastructure, teleradiology workflows, technician training, and AI software to modernize oral radiology.",
    url: "https://sovakalifesciences.com",
    siteName: "SOVAKA LifeSciences",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sovaka-og-image.png",
        width: 1200,
        height: 630,
        alt: "SOVAKA LifeSciences - Dental Imaging Infrastructure, Training & AI Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOVAKA LifeSciences | Dental Imaging Infrastructure, Training & AI Ecosystem",
    description: "SOVAKA LifeSciences unifies dental imaging infrastructure, teleradiology workflows, technician training, and AI software to modernize oral radiology.",
    images: ["/sovaka-og-image.png"],
  },
  verification: {
    google: "U_CAg3i5ls0FVxJ15JH-G9THC_Y1idHnC2V-mn_Uwu8",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sovakalifesciences.com/#organization",
  "name": "SOVAKA Lifesciences (OPC) Pvt. Ltd.",
  "alternateName": ["SOVAKA Lifesciences", "SOVAKA"],
  "url": "https://sovakalifesciences.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://sovakalifesciences.com/logo.webp",
    "caption": "SOVAKA Lifesciences Logo"
  },
  "description": "Parent dental ecosystem company building intelligent dental imaging infrastructure, centralized oral radiology workflows, workforce development, and AI-enabled dentistry systems.",
  "foundingDate": "1985",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Maharashtra"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 93076 68998",
    "contactType": "customer service",
    "email": "sovakalifesciences@gmail.com",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/sovaka-lifesciences",
    "https://www.instagram.com/sovakalifesciences",
    "https://www.facebook.com/profile.php?id=61591194501718",
    "https://www.nidaandental.com"
  ],
  "knowsAbout": [
    "CBCT & OPG Franchise",
    "Dental Radiology Technician Training",
    "AI Dental Imaging Ecosystem",
    "Oral Radiology Workflow Systems",
    "Intelligent Dental Imaging Infrastructure"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sovakalifesciences.com/#website",
  "url": "https://sovakalifesciences.com",
  "name": "SOVAKA Lifesciences",
  "description": "Connected Dental Imaging Ecosystem",
  "publisher": {
    "@id": "https://sovakalifesciences.com/#organization"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 1. GTM Script
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W52S7MQG');

              // 2. UTM Parameter Capture & Persistence
              (function() {
                var utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
                var urlParams = new URLSearchParams(window.location.search);
                utmParams.forEach(function(param) {
                  var val = urlParams.get(param);
                  if (val) {
                    sessionStorage.setItem(param, val);
                  }
                });
              })();

              // 3. Meta Pixel Bootstrap
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              var pixelId = '968593457102948'; 
              fbq('init', pixelId);
              fbq('track', 'PageView');

              // 4. Meta CAPI Helper & Deduplication
              function generateEventId(prefix) {
                return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
              }

              function sendMetaCAPI(eventName, eventId, extraUserData, customData) {
                var fbp = document.cookie.split('; ').find(function(row) { return row.indexOf('_fbp=') === 0; });
                fbp = fbp ? fbp.split('=')[1] : '';
                var fbc = document.cookie.split('; ').find(function(row) { return row.indexOf('_fbc=') === 0; });
                fbc = fbc ? fbc.split('=')[1] : '';
                
                var utmParams = {};
                ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function(param) {
                  var val = sessionStorage.getItem(param);
                  if (val) utmParams[param] = val;
                });

                var payload = {
                  event_name: eventName,
                  event_time: Math.floor(Date.now() / 1000),
                  event_id: eventId,
                  event_source_url: window.location.href,
                  user_data: {
                    fbp: fbp,
                    fbc: fbc
                  },
                  custom_data: {}
                };

                if (extraUserData) {
                  for (var k in extraUserData) {
                    if (extraUserData.hasOwnProperty(k)) {
                      payload.user_data[k] = extraUserData[k];
                    }
                  }
                }

                for (var u in utmParams) {
                  payload.custom_data[u] = utmParams[u];
                }
                if (customData) {
                  for (var c in customData) {
                    if (customData.hasOwnProperty(c)) {
                      payload.custom_data[c] = customData[c];
                    }
                  }
                }

                fetch('/api/capi.php', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload)
                }).catch(function(err) {
                  console.error('CAPI Dispatch Failed:', err);
                });
              }

              // 5. Global Click Interceptor
              document.addEventListener('click', function(e) {
                var anchor = e.target.closest('a');
                if (!anchor) return;
                var href = anchor.getAttribute('href');
                if (!href) return;
                window.dataLayer = window.dataLayer || [];
                
                var eventId = '';
                
                if (href.indexOf('forms.gle/geqADY2PEuscsvyb9') > -1) {
                  eventId = generateEventId('franchise');
                  window.dataLayer.push({
                    event: 'franchise_form_submission',
                    formType: 'franchise',
                    method: 'outbound_click',
                    eventId: eventId
                  });
                  fbq('track', 'Lead', { content_name: 'Franchise Enquiry', eventID: eventId });
                  sendMetaCAPI('Lead', eventId, {}, { content_name: 'Franchise Enquiry' });
                } else if (href.indexOf('forms.gle/vGUGby9hmxY3wDTW8') > -1) {
                  eventId = generateEventId('technician');
                  window.dataLayer.push({
                    event: 'technician_form_submission',
                    formType: 'technician',
                    method: 'outbound_click',
                    eventId: eventId
                  });
                  fbq('track', 'Lead', { content_name: 'Technician Enquiry', eventID: eventId });
                  sendMetaCAPI('Lead', eventId, {}, { content_name: 'Technician Enquiry' });
                } else if (href.indexOf('forms.gle/icf1jPDAn3brd1gE6') > -1) {
                  eventId = generateEventId('investor');
                  window.dataLayer.push({
                    event: 'investor_form_submission',
                    formType: 'investor',
                    method: 'outbound_click',
                    eventId: eventId
                  });
                  fbq('track', 'Lead', { content_name: 'Investor Enquiry', eventID: eventId });
                  sendMetaCAPI('Lead', eventId, {}, { content_name: 'Investor Enquiry' });
                } else if (href.indexOf('mailto:') === 0) {
                  var email = href.replace('mailto:', '');
                  eventId = generateEventId('email');
                  window.dataLayer.push({
                    event: 'email_click',
                    email: email,
                    method: 'mailto_click',
                    eventId: eventId
                  });
                  fbq('track', 'Contact', { content_name: 'Email Click', eventID: eventId });
                  sendMetaCAPI('Contact', eventId, { email: email }, { content_name: 'Email Click' });
                } else if (href.indexOf('tel:') === 0) {
                  var phone = href.replace('tel:', '');
                  eventId = generateEventId('phone');
                  window.dataLayer.push({
                    event: 'phone_click',
                    phone: phone,
                    method: 'tel_click',
                    eventId: eventId
                  });
                  fbq('track', 'Contact', { content_name: 'Phone Click', eventID: eventId });
                  sendMetaCAPI('Contact', eventId, { phone: phone }, { content_name: 'Phone Click' });
                } else if (href.indexOf('linkedin.com/in/dr-akshay-shah-cbct') > -1) {
                  window.dataLayer.push({
                    event: 'social_click',
                    platform: 'linkedin',
                    destination: 'https://www.linkedin.com/in/dr-akshay-shah-cbct/'
                  });
                } else if (href.indexOf('instagram.com/sovaka.lifesciences') > -1) {
                  window.dataLayer.push({
                    event: 'social_click',
                    platform: 'instagram',
                    destination: 'https://www.instagram.com/sovaka.lifesciences/'
                  });
                } else if (href.indexOf('http') === 0 && href.indexOf('sovakalifesciences.com') === -1 && href.indexOf('localhost') === -1) {
                  window.dataLayer.push({
                    event: 'outbound_link_click',
                    destination: href,
                    method: 'outbound_click'
                  });
                }

                // Append persistent UTM parameters to outbound Google Forms links
                if (href.indexOf('forms.gle/') > -1 || href.indexOf('google.com/forms/') > -1) {
                  var utmQuery = [];
                  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function(param) {
                    var val = sessionStorage.getItem(param);
                    if (val) utmQuery.push(param + '=' + encodeURIComponent(val));
                  });
                  if (utmQuery.length > 0) {
                    var newHref = href + (href.indexOf('?') > -1 ? '&' : '?') + utmQuery.join('&');
                    anchor.setAttribute('href', newHref);
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W52S7MQG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
