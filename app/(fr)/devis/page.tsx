import { pageMetadata } from "@/lib/seo";
import { devis } from "@/app/data/devis";
import { QuotePage } from "@/app/sections/QuotePage";

// Contenu : app/data/devis.ts ; gabarit partagé avec /nl/offerte : app/sections/QuotePage.tsx.
export const metadata = pageMetadata({
  title: devis.metaTitle,
  description: devis.metaDescription,
  path: "/devis",
});

export default function DevisPage() {
  return <QuotePage content={devis} />;
}
