import "./globals.css";
import { Fraunces, Outfit } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { business, siteUrl } from "@/lib/data";

const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif" });
const sans = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Texas Landscape Services | Pilot Point",
    template: "%s · Texas Landscape Services",
  },
  description:
    "Commercial grounds management and estate landscaping from Pilot Point. Serving Frisco, Plano, McKinney, Denton, Prosper, Little Elm, and Celina.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Texas Landscape Services",
    description: "Commercial grounds and private estate care from the Pilot Point yard.",
    url: siteUrl,
    images: [{ url: "/media/commercial-turf.jpg", width: 1500, height: 1263, alt: "A wide mowed lawn in front of a retail center with a brick monument sign." }],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LandscapeService"],
  name: business.name,
  description: business.tagline,
  url: siteUrl,
  image: `${siteUrl}/media/lawn-sweep.jpg`,
  telephone: "+1-469-455-9733",
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postal,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.lat,
    longitude: business.lon,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: business.cities.map((name) => ({ "@type": "City", name })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="pb-14 md:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
