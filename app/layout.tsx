import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AGENCY_NAME, SITE_URL } from "@/lib/constants";
import { agency } from "@/lib/data/agency";
import { PageLoader } from "@/components/providers/PageLoader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${AGENCY_NAME} | Exklusive Immobilien in München`,
  description:
    "Weiß & Partner Immobilien — exklusive Wohn- und Anlageimmobilien in München und ganz Deutschland. Persönliche Beratung auf höchstem Niveau. Portfolio-Projekt.",
  keywords: [
    "Immobilienmakler München",
    "Luxusimmobilien",
    "Immobilien verkaufen",
    "Premium Immobilien",
  ],
  authors: [{ name: AGENCY_NAME }],
  openGraph: {
    title: `${AGENCY_NAME} | Exklusive Immobilien`,
    description: agency.subline,
    locale: "de_DE",
    type: "website",
    siteName: AGENCY_NAME,
  },
  // Portfolio demo of a fictional agency — keep it out of search results.
  robots: {
    index: false,
    follow: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: AGENCY_NAME,
  description:
    "Exklusive Immobilienberatung in München. Portfolio-Projekt — keine echte Agentur.",
  url: SITE_URL,
  telephone: agency.contact.phone,
  email: agency.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: agency.contact.address,
    addressLocality: "München",
    postalCode: "80539",
    addressCountry: "DE",
  },
  areaServed: ["München", "Berlin", "Hamburg", "Frankfurt"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
