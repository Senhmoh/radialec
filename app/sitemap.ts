import type { MetadataRoute } from "next";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { localeCategoryOrder } from "./data/categories";
import { guideHref, guides } from "./data/guides";
import { localeServices, serviceHref } from "./data/services";
import { showNl } from "./data/visibility";
import { hasPage, categoryPath, pagePath, type PageKey } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/locale";

type Entry = MetadataRoute.Sitemap[number];

// Pages fixes : priorité et fréquence (identiques dans chaque langue).
const pages: { key: PageKey; priority: number; changeFrequency: Entry["changeFrequency"] }[] = [
  { key: "devis", priority: 0.8, changeFrequency: "monthly" },
  { key: "rendezVous", priority: 0.7, changeFrequency: "monthly" },
  { key: "tarifs", priority: 0.8, changeFrequency: "monthly" },
  { key: "contact", priority: 0.7, changeFrequency: "yearly" },
  { key: "aPropos", priority: 0.5, changeFrequency: "yearly" },
  { key: "mentionsLegales", priority: 0.2, changeFrequency: "yearly" },
  { key: "confidentialite", priority: 0.2, changeFrequency: "yearly" },
  { key: "cookies", priority: 0.2, changeFrequency: "yearly" },
];

function localeEntries(locale: Locale, lastModified: Date): Entry[] {
  return [
    { url: absoluteUrl(pagePath("home", locale)), lastModified, changeFrequency: "monthly", priority: 1 },
    ...localeCategoryOrder(locale).map((category) => ({
      url: absoluteUrl(categoryPath(category, locale)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...localeServices(locale).map((service) => ({
      url: absoluteUrl(serviceHref(service)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Guides : en français seulement pour l'instant.
    ...(locale === "fr"
      ? guides.map((guide) => ({
          url: absoluteUrl(guideHref(guide)),
          lastModified: new Date(guide.updated),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }))
      : []),
    ...pages
      .filter((page) => hasPage(page.key, locale))
      .map((page) => ({ url: absoluteUrl(pagePath(page.key, locale)), lastModified, changeFrequency: page.changeFrequency, priority: page.priority })),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Néerlandais : seulement une fois en ligne (app/data/visibility.ts).
  const entries = [...localeEntries("fr", lastModified), ...(showNl ? localeEntries("nl", lastModified) : [])].map((entry) => {
    // Pages traduites : chaque URL déclare ses équivalents (hreflang du plan du site).
    const languages = languageAlternates(new URL(entry.url).pathname || "/");
    return languages
      ? { ...entry, alternates: { languages: Object.fromEntries(Object.entries(languages).map(([lang, path]) => [lang, absoluteUrl(path)])) } }
      : entry;
  });
  // Une URL ne doit apparaître qu'une fois (ex. /professionnels : catégorie et fiche fusionnées).
  const seen = new Set<string>();
  return entries.filter((entry) => !seen.has(entry.url) && Boolean(seen.add(entry.url)));
}
