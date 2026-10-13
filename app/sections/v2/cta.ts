import type { StaticImageData } from "next/image";
import technicienBrasCroises from "@/assets/technicien_debout_souriant_bras_croises_coupés_aux_cuisses.png";
import technicienHanches from "@/assets/technicien_debout_souriant_bras_croisés_coupé_aux_hanches.png";
import technicienCourant from "@/assets/technicien_courant_avec_boite_outils_en_main_écriture-sur-image-technicien-agree-et-intervention-en-24-heures-avec-fleches-sortantes_fr.png";
// Même visuel, annotations en néerlandais (« erkende technicus », « interventie binnen 24 uur »).
import technicienCourantNl from "@/assets/technicien_courant_avec_boite_outils_en_main_écriture-sur-image-technicien-agree-et-intervention-en-24-heures-avec-fleches-sortantes_nl.png";
import type { ServiceIntent } from "@/app/data/services/types";
import { getRequestLocale } from "@/lib/i18n/server";
import type { Locale } from "@/lib/i18n/locale";

// Visuel et 2e action du CTA final selon l'intention de la page. Le fond est
// lavande partout (2026-10-05). Urgence : WhatsApp (photo de la panne) plutôt
// qu'un devis (prompts/refonte/06).
export type FinalCtaSecondary = "devis" | "rendezVous" | "whatsapp";

type Visual = { image: StaticImageData; alt: string; secondary: FinalCtaSecondary };

const visuals: Record<Locale, Record<ServiceIntent, Visual>> = {
  fr: {
    installation: { image: technicienBrasCroises, alt: "Technicien Radialec, bras croisés", secondary: "devis" },
    entretien: { image: technicienHanches, alt: "Technicien Radialec souriant", secondary: "rendezVous" },
    urgence: { image: technicienCourant, alt: "Technicien Radialec en route avec sa caisse à outils", secondary: "whatsapp" },
  },
  nl: {
    installation: { image: technicienBrasCroises, alt: "Technicus van Radialec met gekruiste armen", secondary: "devis" },
    entretien: { image: technicienHanches, alt: "Glimlachende technicus van Radialec", secondary: "rendezVous" },
    urgence: { image: technicienCourantNl, alt: "Technicus van Radialec onderweg met zijn gereedschapskist", secondary: "whatsapp" },
  },
};

/** Visuel du CTA final dans la langue de la page (l'image d'urgence porte du texte). */
export function finalCtaVisualFor(intent: ServiceIntent, locale: Locale = getRequestLocale()): Visual {
  return visuals[locale][intent];
}

/** Français (pages qui n'existent qu'en français). */
export const finalCtaVisual = visuals.fr;
