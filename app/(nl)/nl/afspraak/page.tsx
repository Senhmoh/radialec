import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { rendezVousNl } from "@/app/data/nl/rendez-vous";
import { showNl } from "@/app/data/visibility";
import { BookingPage } from "@/app/sections/BookingPage";

// Contenu : app/data/nl/rendez-vous.ts ; gabarit : app/sections/BookingPage.tsx.
export const metadata = pageMetadata({
  title: rendezVousNl.metaTitle,
  description: rendezVousNl.metaDescription,
  path: "/nl/afspraak",
});

export default function Page() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return <BookingPage content={rendezVousNl} />;
}
