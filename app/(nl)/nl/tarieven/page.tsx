import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { tarifsNl } from "@/app/data/nl/tarifs-page";
import { showNl } from "@/app/data/visibility";
import { TarifsPage } from "@/app/sections/TarifsPage";

// Contenu : app/data/nl/tarifs-page.ts ; gabarit : app/sections/TarifsPage.tsx.
export const metadata = pageMetadata({
  title: tarifsNl.metaTitle,
  description: tarifsNl.metaDescription,
  path: "/nl/tarieven",
});

export default function Page() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return <TarifsPage content={tarifsNl} />;
}
