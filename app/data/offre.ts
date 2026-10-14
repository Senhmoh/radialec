import { company } from "./company";
import { flyerOffer, flyerOfferAmount, prices } from "./pricing";
import type { Fact, ImageSpec } from "./services/types";

// Page d'arrivée du flyer (/offre, QR radialec.be/f) : l'offre entretien et rien
// d'autre (brief : prompts/refonte/09-qr-code.md). Hors menus, hors plan du site,
// non indexée. Faits repris de la page entretien validée (Q31) ; prix : pricing.ts.

const amount = flyerOfferAmount();

export const offre = {
  metaTitle: "Offre entretien de chaudière gaz à Bruxelles",
  metaDescription: `Entretien de chaudière gaz à ${amount}€ TVAC à Bruxelles : technicien agréé, attestation le jour même. Appelez-nous ou réservez en ligne.`,
  hero: {
    eyebrow: "Offre flyer · Entretien de chaudière",
    title: `Entretien de votre chaudière gaz : ${amount}€ TVAC`,
    intro: `Un technicien agréé nettoie votre chaudière, contrôle les sécurités, analyse la combustion et vous envoie l'attestation en PDF le jour même. Comptez environ une heure. Chaudière au mazout ? L'entretien est à ${prices.entretienChaudiereMazout.amount}€ TVAC.`,
  },
  /** « Offre valable jusqu'au … » : seulement pour un prix d'offre daté (pricing.ts, flyerOffer). */
  validity: flyerOffer.amount !== null && flyerOffer.validUntil ? `Offre valable jusqu'au ${flyerOffer.validUntil}.` : undefined,
  facts: [
    { icon: "euro", stat: `${amount}€ TVAC`, label: "Entretien chaudière gaz" },
    { icon: "clock", stat: "~1 heure", label: "Intervention moyenne" },
    { icon: "clipboard", stat: "Attestation immédiate", label: "Remise le jour même" },
    { icon: "shield", stat: "Technicien agréé", label: "Contrôle sécurité inclus" },
  ] satisfies Fact[],
  // Mot pour mot la liste validée de la page entretien (gestionnaire, 08/10/2026, Q31).
  included: {
    title: "Ce qui est compris",
    items: [
      "Nettoyage de la chambre de combustion",
      "**Chaudière gaz** : nettoyage des composants électriques et électroniques, contrôle de l'absence de fuite, contrôle du vase d'expansion, analyse de combustion",
      "**Chaudière mazout** : contrôle et nettoyage du moteur, contrôle de la pompe, réglage du gicleur, contrôle et nettoyage du filtre",
      "Contrôle de l'évacuation des gaz brûlés et des fumées",
      "Attestation de conformité envoyée en PDF",
    ],
    note: "En Région bruxelloise, l'entretien est obligatoire tous les deux ans pour une chaudière au gaz, chaque année pour une chaudière au mazout.",
    image: { asset: "P07", alt: "Analyseur de combustion branché sur une chaudière pendant l'entretien" } satisfies ImageSpec,
  },
  cta: {
    body: `Choisissez un créneau en ligne ou appelez-nous, ${company.promises.availability} de 10h à 21h. Le technicien fait l'entretien complet et vous remet l'attestation le jour même.`,
  },
};
