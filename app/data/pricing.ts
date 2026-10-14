// Grille tarifaire unique du site (prix TVAC). Toute page qui affiche un prix
// passe par ce fichier : modifier un tarif ici le met à jour partout
// (homepage, pages service, /tarifs, données structurées).
// Libellés néerlandais : priceTextNl (même montant, un seul endroit).

import type { Locale } from "@/lib/i18n/locale";

/** Supplément par unité intérieure pour l'entretien d'une airco (gestionnaire, 08/10/2026). */
export const aircoPerIndoorUnit = 90;

export interface PriceItem {
  label: string;
  /** Montant TVAC en euros. Absent = « Sur devis ». */
  amount?: number;
  /** Ancien prix barré (promo). */
  originalAmount?: number;
  /** Affiche « Dès » devant le montant. */
  from?: boolean;
  note?: string;
  popular?: boolean;
}

export const prices = {
  entretienChaudiereGaz: {
    label: "Entretien chaudière gaz",
    // Repassé à 149 € le 08/10/2026 (fin du prix de lancement à 129 €).
    amount: 149,
    note: "Contrôle complet + attestation",
    popular: true,
  },
  // Dépannage 149 € et heure supplémentaire 60 € TVAC : confirmés par le gestionnaire le 08/10/2026.
  depannage: {
    label: "Dépannage (chaudière, sanitaire, électrique, clim/PAC)",
    amount: 149,
    note: "Déplacement + diagnostic + 1ère heure",
  },
  entretienChaudiereMazout: {
    label: "Entretien chaudière mazout",
    amount: 219,
    note: "Contrôle complet + attestation",
  },
  // Prix confirmés par le gestionnaire le 08/10/2026 (chauffe-eau gaz 129 €, électrique 160 €).
  entretienChauffeEau: {
    label: "Entretien chauffe-eau gaz",
    amount: 129,
  },
  entretienBoilerElectrique: {
    label: "Entretien boiler électrique",
    amount: 160,
  },
  debouchage: {
    label: "Débouchage canalisation / WC / lavabo",
    amount: 200,
    note: "Colonne et égout chiffrés à part",
  },
  ramonage: {
    label: "Ramonage cheminée",
    amount: 149,
    note: "Attestation de ramonage comprise",
  },
  entretienPac: {
    label: "Entretien pompe à chaleur",
    amount: 180,
  },
  // Ajouts du 08/10/2026 (réponses du gestionnaire).
  heureSupplementaire: {
    label: "Heure supplémentaire (dépannage)",
    amount: 60,
  },
  entretienAirco: {
    label: "Entretien climatisation (airco)",
    amount: 240,
    note: `+ ${aircoPerIndoorUnit} € par unité intérieure`,
  },
  detartrage: {
    label: "Détartrage",
    amount: 300,
  },
  miseEnConformite: {
    label: "Mise en conformité électrique",
    amount: 990,
    note: "Repérage, schémas électriques et passage de l'organisme agréé, si aucune modification n'est nécessaire",
  },
  contratEntretien: {
    label: "Contrat d'entretien chaudière (2 ans)",
    amount: 130,
    note: "Particuliers",
  },
} satisfies Record<string, PriceItem>;

export type PriceKey = keyof typeof prices;

// Néerlandais : libellé et note de chaque tarif (le montant reste celui de `prices`).
const priceTextNl: Record<PriceKey, Pick<PriceItem, "label" | "note">> = {
  entretienChaudiereGaz: { label: "Onderhoud gasketel", note: "Volledige controle + attest" },
  depannage: { label: "Depannage (ketel, sanitair, elektriciteit, airco/warmtepomp)", note: "Verplaatsing + diagnose + 1e uur" },
  entretienChaudiereMazout: { label: "Onderhoud stookolieketel", note: "Volledige controle + attest" },
  entretienChauffeEau: { label: "Onderhoud gasboiler" },
  entretienBoilerElectrique: { label: "Onderhoud elektrische boiler" },
  debouchage: { label: "Ontstopping leiding / wc / lavabo", note: "Afvoerkolom en riolering apart geprijsd" },
  ramonage: { label: "Schoorsteenvegen", note: "Veegattest inbegrepen" },
  entretienPac: { label: "Onderhoud warmtepomp" },
  heureSupplementaire: { label: "Extra uur (depannage)" },
  entretienAirco: { label: "Onderhoud airco", note: `+ ${aircoPerIndoorUnit} € per binnenunit` },
  detartrage: { label: "Ontkalking" },
  miseEnConformite: {
    label: "Elektrische installatie in orde brengen",
    note: "Inventaris, elektrische schema's en keuring door een erkend organisme, als er niets aangepast moet worden",
  },
  contratEntretien: { label: "Onderhoudscontract ketel (2 jaar)", note: "Particulieren" },
};

/**
 * Conditions tarifaires affichées sous la carte de /tarifs (réponses du
 * gestionnaire, 08/10/2026). Une valeur null n'est pas affichée du tout.
 * Aucun pourcentage de TVA n'est publié (choix du propriétaire) : les prix sont TVAC.
 */
export const pricingPolicy = {
  /** Tarif au-delà de la 1ère heure de dépannage. Ex. « 65€ TVAC / heure entamée » */
  extraHour: `${prices.heureSupplementaire.amount} € TVAC de l'heure` as string | null,
  /** Suppléments (gestionnaire, 08/10/2026), un par ligne sur /tarifs. */
  weekendSurcharge: "+20 €" as string | null,
  holidaySurcharge: "+50 €" as string | null,
  /** Urgence = intervention dans les 2 heures. */
  urgentSurcharge: "+50 €" as string | null,
  /** Déplacement pour un entretien ou une installation. Ex. « Inclus dans toute la zone » */
  travel: "Compris jusqu'à 50 km, supplément au-delà" as string | null,
  /** Taux de TVA : jamais publié (choix du propriétaire, 08/10/2026). Laisser null. */
  vatRate: null as string | null,
  /** Moyens de paiement acceptés. Ex. « Bancontact, Payconiq, virement » */
  payment: "Espèces ou application bancaire (Wero, Payconiq)" as string | null,
  /** Validité de l'offre entretien gaz (prix et ancien prix : entretienChaudiereGaz). Ex. « Jusqu'au 31/12/2026 » */
  promoValidity: null as string | null,
};

/**
 * Offre imprimée sur le flyer (page /offre, QR radialec.be/f) : entretien de
 * chaudière gaz à prix réduit, pour une durée limitée. Décidée le 15/10/2026
 * (5 000 flyers) : 129 € jusqu'au 31 décembre 2026 inclus. Le reste du site
 * garde le prix normal (`prices.entretienChaudiereGaz`).
 * - Jamais de prix barré ni de « au lieu de » : le prix normal est remonté à
 *   149 € le 08/10/2026, une annonce de réduction devrait se référer au prix le
 *   plus bas des 30 derniers jours (129 €).
 * - Après la date de fin, /offre repasse seule au prix normal (page régénérée
 *   toutes les heures) et les demandes portent la mention « offre terminée ».
 * - Le flyer et la page doivent annoncer le même prix et la même date.
 */
export const flyerOffer = {
  amount: 129 as number | null,
  /** Dernier jour de l'offre (heure de Bruxelles), AAAA-MM-JJ. */
  until: "2026-12-31" as string | null,
};

export interface FlyerOfferState {
  /** Offre en cours (prix d'offre fixé et date non dépassée). */
  active: boolean;
  /** Prix à annoncer aujourd'hui : prix d'offre, ou prix normal une fois l'offre terminée. */
  amount: number;
  /** « 31 décembre 2026 ». */
  untilLabel?: string;
}

/** État de l'offre flyer à une date donnée (jour de Bruxelles). */
export function flyerOfferState(now: Date = new Date()): FlyerOfferState {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Brussels" }).format(now);
  const active = flyerOffer.amount !== null && (!flyerOffer.until || today <= flyerOffer.until);
  const untilLabel = flyerOffer.until
    ? new Intl.DateTimeFormat("fr-BE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
        new Date(`${flyerOffer.until}T12:00:00Z`)
      )
    : undefined;
  return { active, amount: active ? flyerOffer.amount! : prices.entretienChaudiereGaz.amount, untilLabel };
}

/** Prix de l'offre flyer (nom de la campagne des QR : entretien-129). */
export function flyerOfferAmount(): number {
  return flyerOffer.amount ?? prices.entretienChaudiereGaz.amount;
}

/** Référence à un tarif de la grille, avec libellé/note surchargeables pour le contexte d'une page. */
export interface PriceRef {
  key?: PriceKey;
  label?: string;
  note?: string;
  popular?: boolean;
}

export function resolvePrice(ref: PriceRef, locale: Locale = "fr"): PriceItem {
  const base: PriceItem = ref.key ? (locale === "nl" ? { ...prices[ref.key], ...priceTextNl[ref.key] } : prices[ref.key]) : { label: "" };
  return {
    ...base,
    label: ref.label ?? base.label,
    note: ref.note ?? base.note,
    popular: ref.popular ?? base.popular,
  };
}

export function formatAmount(item: PriceItem, locale: Locale = "fr"): string {
  return item.amount === undefined ? (locale === "nl" ? "Op offerte" : "Sur devis") : `${item.amount}€`;
}
