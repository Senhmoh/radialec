// Textes communs à l'écran de confirmation (client) et à l'e-mail de
// confirmation envoyé au client (serveur) : un seul endroit pour les promesses
// de rappel, dans chaque langue. Aucune dépendance serveur.

import { company, companyText } from "@/app/data/company";
import type { Locale } from "@/lib/i18n/locale";
import type { CallbackRequest } from "./callback";
import type { QuoteRequest } from "./schema";

const copy = {
  fr: {
    soon: "rapidement",
    slots: { matin: "le matin", "apres-midi": "l'après-midi", soir: "en soirée" } as Record<string, string>,
    byEmail: (promise: string) => `Nous vous répondons par e-mail ${promise}`,
    slotCall: (slot: string) => `Nous vous rappelons ${slot}, comme vous l'avez demandé`,
    call: (promise: string) => `Nous vous rappelons ${promise}`,
    asked: (slot: string) => `${slot}, comme vous l'avez demandé`,
    steps: [
      "Un technicien relit votre demande et vous contacte pour préciser ce qui doit l'être.",
      "Visite technique si nécessaire",
      "Pour certains projets, un passage sur place permet de chiffrer au plus juste.",
      "Un devis détaillé et sans engagement : vous décidez ensuite, sans pression.",
    ],
    emergency: (emergency: string, phone: string) => `Une urgence ? Appelez-nous ${emergency} au ${phone}.`,
  },
  nl: {
    soon: "snel",
    slots: { matin: "'s voormiddags", "apres-midi": "'s namiddags", soir: "'s avonds" } as Record<string, string>,
    byEmail: (promise: string) => `We antwoorden u per e-mail ${promise}`,
    slotCall: (slot: string) => `We bellen u ${slot} terug, zoals gevraagd`,
    call: (promise: string) => `We bellen u terug ${promise}`,
    asked: (slot: string) => `${slot}, zoals gevraagd`,
    steps: [
      "Een technicus leest uw aanvraag en neemt contact met u op om de details te bespreken.",
      "Plaatsbezoek indien nodig",
      "Voor sommige projecten komen we eerst ter plaatse kijken, zo klopt de prijs.",
      "Een gedetailleerde, vrijblijvende offerte: daarna beslist u, zonder druk.",
    ],
    emergency: (emergency: string, phone: string) => `Een noodgeval? Bel ons ${emergency} op ${phone}.`,
  },
} satisfies Record<Locale, unknown>;

const callbackPromise = (locale: Locale) => companyText(locale).promises.callback ?? copy[locale].soon;

/** « Nous vous rappelons sous 2 h, entre 10h et 21h » ou le créneau choisi par le client. */
export function quoteContactPromise(
  quote: Pick<QuoteRequest, "contactPreference" | "callbackSlot">,
  locale: Locale = "fr"
): string {
  const c = copy[locale];
  if (quote.contactPreference === "email") return c.byEmail(callbackPromise(locale));
  const slot = c.slots[quote.callbackSlot];
  return slot ? c.slotCall(slot) : c.call(callbackPromise(locale));
}

/** Les trois étapes après une demande de devis. */
export function quoteNextSteps(quote: Pick<QuoteRequest, "contactPreference" | "callbackSlot">, locale: Locale = "fr") {
  const [first, visitTitle, visitText, quoteText] = copy[locale].steps;
  return [
    { title: quoteContactPromise(quote, locale), text: first },
    { title: visitTitle, text: visitText },
    { title: companyText(locale).promises.quote, text: quoteText },
  ];
}

/** « sous 2 h, entre 10h et 21h » si le client veut être rappelé dès que possible, sinon le créneau choisi. */
export function callbackWhen(callback: Pick<CallbackRequest, "time">, locale: Locale = "fr"): string {
  const slot = copy[locale].slots[callback.time];
  return slot ? copy[locale].asked(slot) : callbackPromise(locale);
}

/** Ligne d'urgence des confirmations : « Une urgence ? Appelez-nous 24h/24 au … ». */
export function emergencyLine(locale: Locale = "fr"): string {
  return copy[locale].emergency(companyText(locale).promises.emergency, company.phone.display);
}
