// « Être rappelé » : schéma et validation partagés entre le formulaire
// (client) et /api/rappel (serveur). Aucune dépendance serveur.

import type { Locale } from "@/lib/i18n/locale";
import { isValidEmail, isValidPhone, LIMITS, validationMessages } from "./schema";

export const callbackTopics = {
  chauffage: "Chauffage",
  electricite: "Électricité",
  plomberie: "Plomberie",
  climatisation: "Clim & PAC",
  autre: "Autre",
} as const;

export const callbackTimes = {
  asap: "Dès que possible",
  matin: "Le matin",
  "apres-midi": "L'après-midi",
  soir: "En soirée",
} as const;

const has = (map: object, key: string) => Object.prototype.hasOwnProperty.call(map, key);

export type CallbackTopic = keyof typeof callbackTopics;
export type CallbackTime = keyof typeof callbackTimes;

export interface CallbackRequest {
  name: string;
  phone: string;
  /** Facultatif : pour recevoir la confirmation par e-mail. */
  email: string;
  time: CallbackTime;
  topic: CallbackTopic | "";
  /** Facultatif : la question ou le besoin, en quelques mots. */
  message: string;
  /** Page d'origine (« categorie/slug » ou « categorie »), renseignée automatiquement. */
  service: string;
  /** « rendez-vous » : demande envoyée depuis /rendez-vous (créneau à fixer par téléphone). */
  purpose: "" | "rendez-vous";
}

export const emptyCallback: CallbackRequest = {
  name: "",
  phone: "",
  email: "",
  time: "asap",
  topic: "",
  message: "",
  service: "",
  purpose: "",
};

export type CallbackField = keyof CallbackRequest;
export type CallbackErrors = Partial<Record<CallbackField, string>>;

/** Sujet déduit de la page d'origine (« chauffage/entretien-chaudiere » → chauffage). */
export function topicFromContext(context: string | null | undefined): CallbackTopic | "" {
  const category = context?.split("/")[0];
  return category && has(callbackTopics, category) ? (category as CallbackTopic) : "";
}

export function validateCallback(data: CallbackRequest, locale: Locale = "fr"): CallbackErrors {
  const errors: CallbackErrors = {};
  const m = validationMessages[locale];
  if (data.name.trim().length < 2 || data.name.length > LIMITS.name) errors.name = m.name;
  if (!isValidPhone(data.phone)) errors.phone = m.phone;
  if (data.email && (data.email.length > 120 || !isValidEmail(data.email))) errors.email = m.email;
  if (!has(callbackTimes, data.time)) errors.time = m.time;
  if (data.topic && !has(callbackTopics, data.topic)) errors.topic = m.topic;
  if (data.purpose && data.purpose !== "rendez-vous") errors.purpose = m.purpose;
  if (data.message.length > LIMITS.description) errors.message = m.tooLong(LIMITS.description);
  return errors;
}
