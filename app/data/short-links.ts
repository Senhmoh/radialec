// Liens courts des supports imprimés (QR codes) : radialec.be/f, /s, /c.
// Chaque QR pointe vers une de ces adresses courtes, jamais vers un lien long :
// la destination et les tags se changent ici, sans réimprimer. Redirections
// temporaires (307) dans next.config.ts, servies par le site lui-même (pas de
// service de QR dynamique payant qui couperait les liens en fin d'abonnement).
// Brief : prompts/refonte/09-qr-code.md.
//
// Tags UTM (lus par GA4 et joints aux demandes de devis / rappel par
// AttributionCapture) : source = le support, medium = imprime, campaign = l'offre
// ou le support, content = code zone du flyer (/f/WO1 → WO1).
//
// Ce fichier est aussi lu par next.config.ts : imports relatifs uniquement.

import { flyerOfferAmount } from "./pricing";

export interface ShortLink {
  /** Adresse courte imprimée (dans le QR). */
  path: string;
  /** Page d'arrivée. */
  destination: string;
  source: string;
  medium: string;
  campaign: string;
  /** Accepte un code zone après l'adresse (/f/WO1), envoyé en utm_content. */
  zone?: boolean;
}

export const shortLinks: ShortLink[] = [
  // Flyer : lecteur froid, il doit retrouver l'offre qui l'a fait scanner.
  // La campagne porte le prix affiché (entretien-149, entretien-129…).
  { path: "/f", destination: "/offre", source: "flyer", medium: "imprime", campaign: `entretien-${flyerOfferAmount()}`, zone: true },
  // Autocollant sur la chaudière : client qui a un souci ou veut reprogrammer, il veut appeler.
  { path: "/s", destination: "/ma-chaudiere", source: "autocollant", medium: "imprime", campaign: "autocollant-chaudiere" },
  // Carte de visite : remise après un échange, public qui veut voir services et tarifs.
  { path: "/c", destination: "/", source: "carte", medium: "imprime", campaign: "carte-visite" },
];

/** Code zone accepté après /f/ : lettres, chiffres, tiret (WO1, KR1, UCC-2…). */
const ZONE = "[A-Za-z0-9-]{1,12}";

function tagged(link: ShortLink, content?: string): string {
  const params = new URLSearchParams({ utm_source: link.source, utm_medium: link.medium, utm_campaign: link.campaign });
  // Paramètre de redirection Next (:zone) : ajouté tel quel, sans encodage.
  return `${link.destination}?${params.toString()}${content ? `&utm_content=${content}` : ""}`;
}

/** Redirections pour next.config.ts (temporaires : la destination peut changer). */
export function shortLinkRedirects() {
  return shortLinks.flatMap((link) => [
    { source: link.path, destination: tagged(link), permanent: false },
    ...(link.zone ? [{ source: `${link.path}/:zone(${ZONE})`, destination: tagged(link, ":zone"), permanent: false }] : []),
  ]);
}
