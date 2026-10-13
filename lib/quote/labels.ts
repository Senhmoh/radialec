import type { Locale } from "@/lib/i18n/locale";
import { callbackSlots, contactPreferences, currentHeating, properties, requestTypes, timings } from "./schema";
import { callbackTimes, callbackTopics } from "./callback";

// Libellés des choix des formulaires (devis, rappel) dans chaque langue. Les
// valeurs envoyées restent les clés françaises (gaz, matin…) : l'e-mail interne
// et Telegram les affichent en français, quelle que soit la langue du client.

type Labels<T> = { [K in keyof T]: string };

export interface QuoteLabels {
  requestTypes: Labels<typeof requestTypes>;
  timings: Labels<typeof timings>;
  properties: Labels<typeof properties>;
  contactPreferences: Labels<typeof contactPreferences>;
  callbackSlots: Labels<typeof callbackSlots>;
  currentHeating: Labels<typeof currentHeating>;
  callbackTopics: Labels<typeof callbackTopics>;
  callbackTimes: Labels<typeof callbackTimes>;
}

const labels: Record<Locale, QuoteLabels> = {
  fr: { requestTypes, timings, properties, contactPreferences, callbackSlots, currentHeating, callbackTopics, callbackTimes },
  nl: {
    requestTypes: {
      installation: "Installatie / vervanging",
      entretien: "Onderhoud",
      reparation: "Herstelling / panne",
      autre: "Iets anders / weet ik niet",
    },
    timings: {
      asap: "Zo snel mogelijk",
      month: "Binnen de maand",
      quarter: "Binnen 3 maanden",
      info: "Ik wil me informeren",
    },
    properties: {
      maison: "Huis",
      appartement: "Appartement",
      professionnel: "Handelszaak / kantoor",
      copropriete: "Mede-eigendom (gemeenschappelijke delen)",
    },
    contactPreferences: {
      telephone: "Telefonisch",
      email: "Per e-mail",
    },
    callbackSlots: {
      matin: "Voormiddag",
      "apres-midi": "Namiddag",
      soir: "'s Avonds",
      indifferent: "Maakt niet uit",
    },
    currentHeating: {
      gaz: "Gas",
      mazout: "Stookolie",
      electrique: "Elektrisch",
      inconnu: "Weet ik niet",
    },
    callbackTopics: {
      chauffage: "Verwarming",
      electricite: "Elektriciteit",
      plomberie: "Sanitair",
      climatisation: "Airco & warmtepomp",
      autre: "Iets anders",
    },
    callbackTimes: {
      asap: "Zo snel mogelijk",
      matin: "'s Voormiddags",
      "apres-midi": "'s Namiddags",
      soir: "'s Avonds",
    },
  },
};

export function quoteLabels(locale: Locale): QuoteLabels {
  return labels[locale];
}
