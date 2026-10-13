import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { devisNl } from "@/app/data/nl/devis";
import { showNl } from "@/app/data/visibility";
import { QuotePage } from "@/app/sections/QuotePage";

// Contenu : app/data/nl/devis.ts ; gabarit : app/sections/QuotePage.tsx.
export const metadata = pageMetadata({
  title: devisNl.metaTitle,
  description: devisNl.metaDescription,
  path: "/nl/offerte",
});

export default function Page() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return <QuotePage content={devisNl} />;
}
