import { company } from "./company";
import { prices, pricingPolicy, type FlyerOfferState } from "./pricing";
import type { FaqItem, Feature, ImageSpec } from "./services/types";

// Page d'arrivée du flyer (/offre, QR radialec.be/f) : l'offre entretien et rien
// d'autre (brief : prompts/refonte/09-qr-code.md). Hors menus, hors plan du site,
// non indexée. Faits repris de la page entretien validée (Q31) ; prix et date :
// flyerOffer dans pricing.ts (le texte suit l'état de l'offre, en cours ou terminée).

/** « Espèces ou application bancaire (Wero, Payconiq) » → « espèces ou … » (noms de marque intacts). */
const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);
const payment = lowerFirst(pricingPolicy.payment ?? "");

export function offreContent(offer: FlyerOfferState) {
  const price = `${offer.amount}€`;
  const until = offer.untilLabel;
  return {
    metaTitle: offer.active ? `Entretien de chaudière gaz à ${price} : offre flyer` : "Entretien de chaudière gaz à Bruxelles",
    metaDescription: `Entretien de chaudière gaz à ${price} TVAC à Bruxelles${offer.active && until ? ` jusqu'au ${until}` : ""} : technicien agréé, attestation le jour même. Laissez votre numéro, on vous rappelle.`,
    eyebrow: offer.active ? `Offre flyer · jusqu'au ${until}` : `Offre flyer terminée${until ? ` le ${until}` : ""}`,
    title: "Entretien de votre chaudière gaz",
    priceNote: offer.active
      ? "Déplacement compris. Nettoyage, contrôle des sécurités, analyse de combustion et attestation."
      : `L'offre du flyer s'est terminée${until ? ` le ${until}` : ""} : voici notre prix habituel, déplacement compris.`,
    // Faits courts sous le prix (page entretien validée, pricing.ts).
    facts: [
      { stat: "~1 heure", label: "d'intervention" },
      { stat: "Attestation", label: "en PDF le jour même" },
      { stat: "Technicien agréé", label: "Bruxelles et environs" },
    ],
    mazout: `Chaudière au mazout ? L'entretien est à ${prices.entretienChaudiereMazout.amount}€ TVAC.`,
    steps: {
      eyebrow: "Comment ça se passe",
      title: "Trois étapes, rien à payer d'avance",
      items: [
        {
          icon: "phone",
          title: "Vous laissez votre numéro",
          text: "Deux champs, trente secondes. Ou appelez-nous directement.",
        },
        {
          icon: "calendarCheck",
          title: `On vous rappelle ${company.promises.callback ?? "rapidement"}`,
          text: "Pour fixer le jour et l'heure qui vous arrangent.",
        },
        {
          icon: "tools",
          title: "Le technicien fait l'entretien",
          text: `Environ une heure. L'attestation vous est envoyée en PDF le jour même. Paiement sur place : ${payment}.`,
        },
      ] satisfies Feature[],
    },
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
    faqs: [
      {
        id: 1,
        question: `Que comprend l'entretien à ${price} ?`,
        answer:
          "Le nettoyage de la chaudière, le contrôle de l'absence de fuite et du vase d'expansion, l'analyse de combustion, le contrôle de l'évacuation des fumées et l'attestation de conformité, envoyée en PDF le jour même. Comptez environ une heure.",
      },
      {
        id: 2,
        question: "Ma chaudière est au mazout : l'offre s'applique ?",
        answer: `L'offre concerne l'entretien des chaudières au gaz. Pour une chaudière au mazout, l'entretien est à ${prices.entretienChaudiereMazout.amount}€ TVAC, attestation comprise.`,
      },
      {
        id: 3,
        question: "Dois-je payer quelque chose maintenant ?",
        answer: `Non. Vous laissez votre numéro, on vous rappelle pour fixer le jour, et vous payez sur place : ${payment}.`,
      },
      {
        id: 4,
        question: "L'entretien de ma chaudière est-il vraiment obligatoire ?",
        answer:
          "Oui. En Région bruxelloise, l'entretien périodique de votre chaudière est une obligation légale : tous les deux ans pour le gaz, chaque année pour le mazout. Il doit être réalisé par un technicien agréé qui vous remet une attestation officielle.",
      },
    ] satisfies FaqItem[],
    cta: {
      eyebrow: offer.active ? `Offre flyer · jusqu'au ${until}` : "Entretien de chaudière",
      title: offer.active ? `Votre entretien à ${price}, jusqu'au ${until}.` : "Votre entretien est (bientôt) dû ? Prenons rendez-vous.",
      highlight: offer.active ? price : "(bientôt)",
      body: `Laissez votre numéro ou appelez-nous : on décroche ${company.promises.availability}, de 10h à 21h. Le technicien fait l'entretien et vous envoie l'attestation le jour même.`,
      action: offer.active ? `Je réserve à ${price}` : "Je réserve mon entretien",
    },
  };
}
