import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xmaxtemizlik.com'),
  title: {
    template: "%s | XMAX Temizlik",
    default: "XMAX Temizlik | Aydın İnşaat Sonrası Temizlik",
  },
  description: "Aydın XMAX Temizlik - İnşaat ve tadilat sonrası profesyonel temizlik hizmetleri. Kaba inşaat temizliği, ince detay temizliği, cam temizliği, zemin bakımı. Efeler, Kuşadası, Söke, Didim, Nazilli bölgelerinde hizmet. %100 müşteri memnuniyeti garantisi.",
  keywords: [
    "aydın temizlik",
    "aydın inşaat temizliği",
    "xmax temizlik",
    "aydın temizlik şirketi",
    "inşaat sonrası temizlik aydın",
    "tadilat temizliği",
    "kaba inşaat temizliği aydın",
    "ince detay temizlik",
    "cam temizliği aydın",
    "zemin bakımı aydın",
    "efeler temizlik",
    "kuşadası temizlik",
    "söke temizlik",
    "didim temizlik",
    "nazilli temizlik",
    "profesyonel temizlik aydın",
    "villa temizlik",
    "daire temizlik"
  ],
  openGraph: {
    title: "XMAX Temizlik | Aydın İnşaat Sonrası Profesyonel Temizlik",
    description: "Aydın'da inşaat ve tadilat sonrası profesyonel temizlik hizmetleri. Kaba temizlik, ince detay, cam temizliği, zemin bakımı. %100 müşteri memnuniyeti garantisi.",
    url: "https://xmaxtemizlik.com",
    siteName: "XMAX Temizlik",
    images: [
      {
        url: "/images/xmax_logo.jpg",
        width: 800,
        height: 600,
        alt: "XMAX Temizlik Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XMAX Temizlik | Aydın Profesyonel Temizlik",
    description: "Aydın'da inşaat ve tadilat sonrası profesyonel temizlik hizmetleri. Kaba temizlik, ince detay, cam temizliği, zemin bakımı.",
    images: ["/images/xmax_logo.jpg"],
  },
  alternates: {
    canonical: "https://xmaxtemizlik.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/pruva_cleaning/icon.jpg' : '/icon.jpg',
    shortcut: process.env.NODE_ENV === 'production' ? '/pruva_cleaning/icon.jpg' : '/icon.jpg',
    apple: process.env.NODE_ENV === 'production' ? '/pruva_cleaning/icon.jpg' : '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "XMAX Temizlik",
    "image": "https://xmaxtemizlik.com/images/xmax_logo.jpg",
    "telephone": "+905343710511",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Girne Mahallesi Efeler Bulvarı 37/F Blok",
      "addressLocality": "Efeler",
      "addressRegion": "Aydın",
      "postalCode": "09000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.8444,
      "longitude": 27.8458
    },
    "url": "https://xmaxtemizlik.com",
    "priceRange": "₺₺",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "8"
    },
    "serviceArea": {
      "@type": "City",
      "name": ["Efeler", "Kuşadası", "Söke", "Didim", "Nazilli", "İncirliova", "Germencik"]
    }
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "İnşaat Sonrası Temizlik",
    "provider": {
      "@type": "LocalBusiness",
      "name": "XMAX Temizlik"
    },
    "areaServed": {
      "@type": "City",
      "name": "Aydın"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Temizlik Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kaba İnşaat Temizliği"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "İnce Detay & Cam Temizliği"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zemin ve Parke Bakımı"
          }
        }
      ]
    }
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="local-business-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="service-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
