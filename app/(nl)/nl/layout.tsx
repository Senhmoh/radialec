import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { company } from "@/app/data/company";
import { setRequestLocale } from "@/lib/i18n/server";
import { SiteShell } from "@/app/sections/v2/SiteShell";

// Mise en page racine du site en néerlandais (adresses sous /nl). Chaque page
// néerlandaise appelle aussi setRequestLocale("nl") : la page peut être rendue
// avant la mise en page.
export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Chauffagist, elektricien en loodgieter in Brussel | Radialec",
    template: "%s | Radialec",
  },
  applicationName: company.name,
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: company.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#EAEEFE",
};

export default function NlRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  setRequestLocale("nl");
  return <SiteShell locale="nl">{children}</SiteShell>;
}
