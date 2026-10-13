import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { company } from "@/app/data/company";
import { SiteShell } from "@/app/sections/v2/SiteShell";

// Mise en page racine du site en français (adresses à la racine : /, /chauffage…).
export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Chauffagiste, électricien et plombier à Bruxelles | Radialec",
    template: "%s | Radialec",
  },
  description: company.description,
  applicationName: company.name,
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: company.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#EAEEFE",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
