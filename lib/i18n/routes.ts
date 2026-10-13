import type { ServiceCategory } from "@/app/data/services/types";
import { defaultLocale, type Locale } from "./locale";

// Adresses des pages fixes et des pages métier dans chaque langue. Les pages
// service néerlandaises portent leur adresse dans leur `path` (app/data/nl/).

export type PageKey =
  | "home"
  | "contact"
  | "devis"
  | "rendezVous"
  | "tarifs"
  | "aPropos"
  | "professionnels"
  | "confidentialite"
  | "cookies"
  | "mentionsLegales";

export const pagePaths: Record<PageKey, Record<Locale, string>> = {
  home: { fr: "/", nl: "/nl" },
  contact: { fr: "/contact", nl: "/nl/contact" },
  devis: { fr: "/devis", nl: "/nl/offerte" },
  rendezVous: { fr: "/rendez-vous", nl: "/nl/afspraak" },
  tarifs: { fr: "/tarifs", nl: "/nl/tarieven" },
  aPropos: { fr: "/a-propos", nl: "/nl/over-ons" },
  professionnels: { fr: "/professionnels", nl: "/nl/syndici" },
  confidentialite: { fr: "/confidentialite", nl: "/nl/privacy" },
  cookies: { fr: "/cookies", nl: "/nl/cookies" },
  mentionsLegales: { fr: "/mentions-legales", nl: "/nl/wettelijke-vermeldingen" },
};

export const categoryPaths: Record<ServiceCategory, Record<Locale, string>> = {
  chauffage: { fr: "/chauffage", nl: "/nl/verwarming" },
  electricite: { fr: "/electricite", nl: "/nl/elektriciteit" },
  plomberie: { fr: "/plomberie", nl: "/nl/sanitair" },
  climatisation: { fr: "/climatisation", nl: "/nl/airco" },
  professionnels: { fr: "/professionnels", nl: "/nl/syndici" },
};

/**
 * Pages fixes qui existent dans chaque langue (la version néerlandaise se
 * traduit par étapes) : seules celles-ci apparaissent dans les menus, le pied
 * de page, le sélecteur de langue et les hreflang.
 */
export const translatedPages: Record<Locale, PageKey[]> = {
  fr: Object.keys(pagePaths) as PageKey[],
  nl: ["home", "contact", "devis", "rendezVous", "confidentialite", "cookies", "mentionsLegales"],
};

export function hasPage(key: PageKey, locale: Locale): boolean {
  return translatedPages[locale].includes(key);
}

export function pagePath(key: PageKey, locale: Locale = defaultLocale): string {
  return pagePaths[key][locale];
}

export function categoryPath(category: ServiceCategory, locale: Locale = defaultLocale): string {
  return categoryPaths[category][locale];
}

/** Ancre du formulaire « Être rappelé » sur la page contact. */
export const callbackAnchor: Record<Locale, string> = { fr: "formulaire-rappel", nl: "terugbelformulier" };

export function localeOfPath(pathname: string): Locale {
  return pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "fr";
}
