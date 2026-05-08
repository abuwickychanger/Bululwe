import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bululwe Mixed Secondary School",
    template: "%s | Bululwe Mixed Secondary School",
  },
  description:
    "Official website of Bululwe Mixed Secondary School, a top performing school in Butere, Kakamega County, Kenya. Day and boarding secondary school offering CBC and 8-4-4 curriculum.",
  keywords: [
    "Best County School in Kakamega",
    "Top performing schools in Butere",
    "Bululwe Secondary School admissions",
    "Bululwe Mixed Secondary School",
    "Schools in Kakamega County",
    "Day and boarding school in Butere",
    "Central Marama secondary school",
    "KCSE top schools Kakamega",
  ],
  authors: [{ name: "Bululwe Mixed Secondary School" }],
  icons: {
    icon: "/crest.png",
    apple: "/crest.png",
  },
  openGraph: {
    title: "Bululwe Mixed Secondary School",
    description:
      "Official website of Bululwe Mixed Secondary School, a top performing school in Butere, Kakamega County, Kenya.",
    siteName: "Bululwe Mixed Secondary School",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bululwe Mixed Secondary School",
    description:
      "Official website of Bululwe Mixed Secondary School, Central Marama, Butere, Kakamega County, Kenya.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Bululwe Mixed Secondary School",
  url: "https://bululwegateway.vercel.app",
  description:
    "A top performing day and boarding secondary school in Central Marama, Butere, Kakamega County, Kenya.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Central Marama",
    addressLocality: "Butere",
    addressRegion: "Kakamega County",
    addressCountry: "KE",
  },
  telephone: "+254-XXX-XXXXXX",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: "5",
    ratingCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium focus:outline-2 focus:outline-offset-2 focus:outline-ring"
        >
          Skip to content
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
