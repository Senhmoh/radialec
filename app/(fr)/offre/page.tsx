import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { offreContent } from "@/app/data/offre";
import { flyerOfferState } from "@/app/data/pricing";
import { OfferPage } from "@/app/sections/OfferPage";

// Page d'arrivée du flyer (QR radialec.be/f → /offre avec les tags UTM, voir
// app/data/short-links.ts). Gabarit partagé avec /nl/aanbod : app/sections/OfferPage.tsx.
// Régénérée toutes les heures : à la date de fin, la page repasse seule au prix
// normal. Non indexée : elle ne sert qu'aux lecteurs du flyer, la page de
// référence reste /chauffage/entretien-chaudiere.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const content = offreContent(flyerOfferState());
  return pageMetadata({ title: content.metaTitle, description: content.metaDescription, path: content.path, noindex: true });
}

export default function OffrePage() {
  const offer = flyerOfferState();
  return <OfferPage offer={offer} content={offreContent(offer)} />;
}
