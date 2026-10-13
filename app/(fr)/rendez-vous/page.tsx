import { pageMetadata } from "@/lib/seo";
import { rendezVous } from "@/app/data/rendez-vous";
import { BookingPage } from "@/app/sections/BookingPage";

// Contenu : app/data/rendez-vous.ts ; gabarit partagé avec /nl/afspraak : app/sections/BookingPage.tsx.
export const metadata = pageMetadata({
  title: rendezVous.metaTitle,
  description: rendezVous.metaDescription,
  path: "/rendez-vous",
});

export default function RendezVousPage() {
  return <BookingPage content={rendezVous} />;
}
