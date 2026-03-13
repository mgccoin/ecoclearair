import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecoclearair1.com"),
  title: {
    default:
      "Eco Clear Air | Air Duct Cleaning, Chimney Sweep & Dryer Vent Services in Boston",
    template: "%s | Eco Clear Air",
  },
  description:
    "Professional air duct cleaning, dryer vent services, and chimney sweep & repair in Greater Boston, South Shore, MetroWest, and New England. Call (888) 274-1204 for a free estimate.",
  keywords: [
    "air duct cleaning Boston",
    "chimney sweep Boston",
    "dryer vent cleaning Boston",
    "HVAC cleaning Massachusetts",
    "chimney repair Boston",
    "air quality services Boston",
    "duct cleaning near me",
    "chimney cleaning near me",
  ],
  authors: [{ name: "Eco Clear Air" }],
  creator: "Eco Clear Air",
  publisher: "Eco Clear Air",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecoclearair1.com",
    siteName: "Eco Clear Air",
    title:
      "Eco Clear Air | Air Duct Cleaning, Chimney Sweep & Dryer Vent Services in Boston",
    description:
      "Professional air duct cleaning, dryer vent services, and chimney sweep & repair in Greater Boston and New England. Call (888) 274-1204.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eco Clear Air - Professional Air Duct & Chimney Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Clear Air | Air Duct Cleaning & Chimney Services in Boston",
    description:
      "Professional air duct cleaning, dryer vent services, and chimney sweep & repair in Greater Boston. Call (888) 274-1204.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ecoclearair1.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ecoclearair1.com",
  name: "Eco Clear Air",
  description:
    "Professional air duct cleaning, dryer vent services, and chimney sweep & repair in Greater Boston, South Shore, MetroWest, and New England.",
  url: "https://ecoclearair1.com",
  telephone: "+1-888-274-1204",
  email: "info@ecoclearair1.com",
  image: "https://ecoclearair1.com/og-image.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Guest St",
    addressLocality: "Brighton",
    addressRegion: "MA",
    postalCode: "02135",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3535,
    longitude: -71.1418,
  },
  areaServed: [
    {
      "@type": "State",
      name: "Massachusetts",
    },
    {
      "@type": "State",
      name: "Rhode Island",
    },
    {
      "@type": "State",
      name: "New Hampshire",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Air Quality & Chimney Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Duct Cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dryer Vent Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chimney Sweep & Repair",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
