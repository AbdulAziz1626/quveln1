import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — AI Receptionist for Service Businesses | Never Miss a Customer`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Quvel is an AI receptionist that answers every call, books appointments, and qualifies leads 24/7 — so service businesses like auto repair shops, electricians, HVAC, and plumbers never lose another customer to a missed call.",
  keywords: [
    "AI receptionist",
    "AI phone answering",
    "AI receptionist for small business",
    "virtual receptionist",
    "missed call solution",
    "appointment booking AI",
    "service business phone answering",
    "auto repair receptionist",
    "HVAC receptionist",
    "plumbing receptionist",
    "electrician receptionist",
    "dental receptionist",
    "roofing receptionist",
    "24/7 phone answering",
    "never miss a call",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — AI Receptionist for Service Businesses`,
    description:
      "Quvel answers every call, books appointments, and qualifies leads 24/7. Built for auto repair, HVAC, plumbing, electrical, and more.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Quvel — AI Receptionist for Service Businesses",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — AI Receptionist for Service Businesses`,
    description:
      "Never miss another customer call. Quvel answers, books appointments, and qualifies leads 24/7.",
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "theme-color": "#2563EB",
    "msapplication-TileColor": "#2563EB",
  },
};

/* ── JSON-LD structured data ────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quvel",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  email: siteConfig.contactEmail,
  telephone: siteConfig.liveAiTel,
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Quvel",
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { "@type": "Organization", name: "Quvel" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Quvel",
  description:
    "AI receptionist service that answers calls, books appointments, and qualifies leads 24/7 for service businesses.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  email: siteConfig.contactEmail,
  telephone: siteConfig.liveAiTel,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Quvel AI Receptionist",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  url: siteConfig.url,
  offers: {
    "@type": "Offer",
    category: "AI Receptionist",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
