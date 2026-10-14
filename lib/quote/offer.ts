// Demandes venues du flyer (QR radialec.be/f, page /offre) : repérées pour que
// le technicien voie tout de suite le prix à appliquer et la zone du flyer.
// - Formulaire de /offre : champs `offre=flyer` et `code` (code zone).
// - Toute autre demande pendant une visite arrivée par le flyer : tags UTM
//   (utm_source=flyer, utm_content=code zone).
// Serveur et client (aucune dépendance serveur).

import { flyerOfferState, prices } from "@/app/data/pricing";
import type { QuoteAttribution } from "./schema";

export interface FlyerLead {
  /** Code zone imprimé sur le flyer (WO1, KR1…), s'il est connu. */
  code?: string;
  /** « FLYER WO1 » : en tête de l'objet, de l'e-mail interne et de l'alerte Telegram. */
  label: string;
  /** Prix à appliquer, pour l'équipe (français). */
  detail: string;
  /** Ligne du récapitulatif envoyé au client, tant que l'offre court. */
  customer?: string;
}

/** Code zone : lettres, chiffres, tiret (comme les liens courts /f/<zone>). */
export function cleanZoneCode(value: unknown): string | undefined {
  return typeof value === "string" && /^[A-Za-z0-9-]{1,12}$/.test(value) ? value.toUpperCase() : undefined;
}

export function flyerLead(
  input: { offre?: unknown; code?: unknown; attribution: QuoteAttribution },
  now: Date = new Date()
): FlyerLead | undefined {
  if (input.offre !== "flyer" && input.attribution.utm_source !== "flyer") return undefined;
  const code = cleanZoneCode(input.code) ?? cleanZoneCode(input.attribution.utm_content);
  const offer = flyerOfferState(now);
  const until = offer.untilLabel ? ` jusqu'au ${offer.untilLabel}` : "";
  return {
    code,
    label: `FLYER${code ? ` ${code}` : ""}`,
    detail: offer.active
      ? `Offre flyer : entretien chaudière gaz à ${offer.amount} € TVAC${until}`
      : `Offre flyer terminée${offer.untilLabel ? ` (${offer.untilLabel})` : ""} : prix normal, entretien gaz ${prices.entretienChaudiereGaz.amount} € TVAC`,
    customer: offer.active ? `Entretien de chaudière gaz à ${offer.amount}€ TVAC (offre flyer${until})` : undefined,
  };
}
