import { categoryLabel, getCategory, hasCategory, localeCategoryOrder } from "./categories";
import { guideHref, guides } from "./guides";
import { existingServices, findServiceByRef, localeServices, serviceHref, services, type ServiceCategory } from "./services";
import type { ServiceIntent } from "./services/types";
import { showNl } from "./visibility";
import { categoryPath, hasPage, pagePath, pagePaths, type PageKey } from "@/lib/i18n/routes";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locale";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  category: ServiceCategory;
  label: string;
  href: string;
  items: NavItem[];
}

/**
 * Arborescence de navigation dérivée des données (catégories + services).
 * Calculée côté serveur puis passée en props au Header (client) : seul ce
 * petit objet part dans le bundle navigateur, pas le contenu des pages.
 * En néerlandais : les métiers et pages déjà traduits seulement.
 */
export function getNavGroups(locale: Locale = defaultLocale): NavGroup[] {
  return localeCategoryOrder(locale).map((category) => ({
    category,
    label: categoryLabel(category, locale),
    href: categoryPath(category, locale),
    items: existingServices(getCategory(category, locale).services, locale).map((service) => ({
      label: service.title,
      href: serviceHref(service),
    })),
  }));
}

export interface PageAction {
  intent: ServiceIntent;
  /** Sujet du message WhatsApp pré-rempli. */
  label: string;
  /** Page d'origine transmise au devis / rendez-vous (identifiant français : « chauffage/entretien-chaudiere »). */
  context: string;
  /** 2e bouton propre à la page (ex. le formulaire de l'offre flyer), à la place de devis / rendez-vous. */
  cta?: { label: string; href: string };
}

/**
 * Intention et nom de chaque page service / catégorie, par chemin : la barre
 * d'actions mobile (client) adapte sa 2e action (devis, rendez-vous, WhatsApp)
 * sans embarquer le contenu des pages dans le navigateur.
 */
export function getPageActions(locale: Locale = defaultLocale): Record<string, PageAction> {
  const actions: Record<string, PageAction> = {};
  for (const category of localeCategoryOrder(locale)) {
    const content = getCategory(category, locale);
    actions[categoryPath(category, locale)] = { intent: content.hero.intent, label: content.label, context: category };
  }
  for (const service of localeServices(locale)) {
    actions[serviceHref(service)] = { intent: service.intent, label: service.name, context: `${service.category}/${service.slug}` };
  }
  if (locale === "nl") {
    // Flyeraanbod (/nl/aanbod) : le 2e bouton mène au formulaire de l'offre.
    actions["/nl/aanbod"] = {
      intent: "entretien",
      label: "Flyeraanbod ketelonderhoud",
      context: "chauffage/entretien-chaudiere",
      cta: { label: "Ik reserveer", href: "#reserveren" },
    };
  }
  if (locale === "fr") {
    // Pages d'arrivée des QR imprimés (app/data/short-links.ts), hors menus.
    // Offre flyer : le 2e bouton mène au formulaire de l'offre, pas à l'agenda au prix normal.
    actions["/offre"] = {
      intent: "entretien",
      label: "Offre flyer entretien de chaudière",
      context: "chauffage/entretien-chaudiere",
      cta: { label: "Je réserve", href: "#reserver" },
    };
    actions["/ma-chaudiere"] = { intent: "urgence", label: "Ma chaudière (autocollant)", context: "chauffage/depannage-chaudiere" };
    for (const guide of guides) {
      const href = guideHref(guide);
      actions[href] = { intent: guide.intent, label: guide.topic, context: href.replace(/^\//, "") };
    }
  }
  return actions;
}

/**
 * Correspondance des adresses entre les langues ({ "/chauffage": { fr, nl } }),
 * pour le sélecteur de langue (en-tête) et les hreflang : uniquement les pages
 * qui existent dans les deux langues. Vide tant que le néerlandais n'est pas en ligne.
 */
export type Alternates = Record<string, Partial<Record<Locale, string>>>;

export function getAlternates(): Alternates {
  if (!showNl) return {};
  const pairs: Partial<Record<Locale, string>>[] = [];
  for (const key of Object.keys(pagePaths) as PageKey[]) {
    if (locales.every((locale) => hasPage(key, locale))) pairs.push({ fr: pagePath(key, "fr"), nl: pagePath(key, "nl") });
  }
  for (const category of localeCategoryOrder("fr")) {
    if (hasCategory(category, "nl")) pairs.push({ fr: categoryPath(category, "fr"), nl: categoryPath(category, "nl") });
  }
  for (const service of services) {
    const nl = findServiceByRef(`${service.category}/${service.slug}`, "nl");
    if (nl) pairs.push({ fr: serviceHref(service), nl: serviceHref(nl) });
  }
  // Offre flyer : même page dans les deux langues (QR /f et /fn).
  pairs.push({ fr: "/offre", nl: "/nl/aanbod" });
  const map: Alternates = {};
  for (const pair of pairs) {
    for (const locale of locales) {
      const path = pair[locale];
      if (path) map[path] = pair;
    }
  }
  return map;
}

/** Adresses de la même page dans chaque langue (métadonnées hreflang), ou undefined. */
export function alternatesOf(path: string): Partial<Record<Locale, string>> | undefined {
  return getAlternates()[path];
}
