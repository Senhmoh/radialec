// Langues du site. Le français reste à la racine (/…), le néerlandais vit sous /nl/….
export const locales = ["fr", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const htmlLang: Record<Locale, string> = { fr: "fr-BE", nl: "nl-BE" };
export const ogLocale: Record<Locale, string> = { fr: "fr_BE", nl: "nl_BE" };
/** Nom de la langue dans sa propre langue (sélecteur). */
export const localeName: Record<Locale, string> = { fr: "Français", nl: "Nederlands" };

/** Formate un nombre / une date à la belge, selon la langue. */
export const intlLocale: Record<Locale, string> = { fr: "fr-BE", nl: "nl-BE" };

/** Langue envoyée par un formulaire (champ « locale ») : français si absente ou inconnue. */
export function parseLocale(value: unknown): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}
