import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { offreContentNl } from "@/app/data/nl/offre";
import { flyerOfferState } from "@/app/data/pricing";
import { OfferPage } from "@/app/sections/OfferPage";

// Flyeraanbod in het Nederlands (QR radialec.be/fn → /nl/aanbod, voir
// app/data/short-links.ts). En ligne même si le reste du site néerlandais est
// masqué (nlLiveSegments, app/data/visibility.ts) : pas de test showNl ici.
// Régénérée toutes les heures (fin de l'offre automatique), non indexée.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const content = offreContentNl(flyerOfferState(new Date(), "nl"));
  return pageMetadata({ title: content.metaTitle, description: content.metaDescription, path: content.path, noindex: true });
}

export default function AanbodPage() {
  setRequestLocale("nl");
  const offer = flyerOfferState(new Date(), "nl");
  return <OfferPage offer={offer} content={offreContentNl(offer)} />;
}
