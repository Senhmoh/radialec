import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { homeNl } from "@/app/data/nl/home";
import { showNl } from "@/app/data/visibility";
import { HomePage } from "@/app/sections/HomePage";

// Accueil néerlandais. Contenu : app/data/nl/home.ts ; gabarit : app/sections/HomePage.tsx.
export const metadata = pageMetadata({
  title: homeNl.metaTitle,
  description: homeNl.metaDescription,
  path: "/nl",
  absoluteTitle: true,
});

export default function HomeNl() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return <HomePage content={homeNl} />;
}
