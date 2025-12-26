import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pruva Temizlik",
    default: "Pruva Temizlik | Aydın İnşaat Sonrası Temizlik",
  },
  description: "Aydın Pruva Temizlik, inşaat ve tadilat sonrası detaylı temizlikte profesyonel çözüm ortağınız. 1+1'den villaya kadar tüm mekanlar için %100 müşteri memnuniyeti.",
  keywords: ["aydın temizlik", "aydın inşaat temizliği", "pruva temizlik", "aydın temizlik şirketi", "inşaat sonrası temizlik aydın", "tadilat temizliği"],
  openGraph: {
    title: "Pruva Temizlik | Aydın İnşaat Sonrası Temizlik",
    description: "İnşaat tozuna son! Profesyonel ekip ve ekipmanlarla evinizi pırıl pırıl teslim alıyoruz.",
    url: "https://pruvatemizlik.com", // Placeholder URL
    siteName: "Pruva Temizlik",
    images: [
      {
        url: "/images/pruva-logo.jpg",
        width: 800,
        height: 600,
        alt: "Pruva Temizlik Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruva Temizlik | Aydın Profesyonel Temizlik",
    description: "Aydın'da inşaat sonrası temizliğin güvenilir adresi.",
    images: ["/images/pruva-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pruva Temizlik",
    "image": "https://pruvatemizlik.com/images/pruva-logo.jpg",
    "telephone": "+905555555555",
    "email": "info@pruvatemizlik.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Efeler Mahallesi, Adnan Menderes Bulvarı No: 123",
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
    "url": "https://pruvatemizlik.com",
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
    }
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
