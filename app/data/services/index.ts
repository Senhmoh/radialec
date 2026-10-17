import { chauffageServices } from "./chauffage";
import { electriciteServices } from "./electricite";
import { plomberieServices } from "./plomberie";
import { climatisationServices } from "./climatisation";
import { professionnelsServices } from "./professionnels";
import { chauffageServicesNl } from "../nl/services/chauffage";
import { plomberieServicesNl } from "../nl/services/plomberie";
import { climatisationServicesNl } from "../nl/services/climatisation";
import { electriciteServicesNl } from "../nl/services/electricite";
import { professionnelsServicesNl } from "../nl/services/professionnels";
import { isVisible, showNl } from "../visibility";
import { defaultLocale, type Locale } from "@/lib/i18n/locale";
import type { Service, ServiceCategory, ServiceRef } from "./types";

export * from "./types";

// Toutes les pages service du site. Une entrée = une URL /<category>/<slug>,
// générée statiquement par app/<category>/[slug]/page.tsx. Pour ajouter un
// service : ajouter un objet dans le fichier de sa catégorie — la page, le
// menu, le footer et le sitemap suivent automatiquement. Les brouillons
// (draft: true) n'existent pas en production (app/data/visibility.ts).
export const services: Service[] = [
  ...chauffageServices,
  ...electriciteServices,
  ...plomberieServices,
  ...climatisationServices,
  ...professionnelsServices,
].filter(isVisible);

// Pages service néerlandaises (app/data/nl/services/) : mêmes `category` et
// `slug` que la page française correspondante (ce sont ses identifiants : liens
// entre pages, contexte des formulaires), adresse néerlandaise dans `path`.
// Une page pas encore traduite n'existe tout simplement pas en néerlandais.
const servicesNl: Service[] = showNl ? [
      ...chauffageServicesNl,
      ...electriciteServicesNl,
      ...plomberieServicesNl,
      ...climatisationServicesNl,
      ...professionnelsServicesNl,
    ].filter(isVisible) : [];

export function localeServices(locale: Locale = defaultLocale): Service[] {
  return locale === "nl" ? servicesNl : services;
}

export function getServicesByCategory(category: ServiceCategory, locale: Locale = defaultLocale): Service[] {
  return localeServices(locale).filter((s) => s.category === category);
}

export function getService(category: ServiceCategory, slug: string, locale: Locale = defaultLocale): Service | undefined {
  return localeServices(locale).find((s) => s.category === category && s.slug === slug);
}

export function findServiceByRef(ref: ServiceRef, locale: Locale = defaultLocale): Service | undefined {
  const [category, slug] = ref.split("/") as [ServiceCategory, string];
  return getService(category, slug, locale);
}

/** Lien vers une page qui doit exister (erreur au build sinon). */
export function getServiceByRef(ref: ServiceRef, locale: Locale = defaultLocale): Service {
  const service = findServiceByRef(ref, locale);
  if (!service) throw new Error(`Service introuvable (${locale}) : ${ref}`);
  return service;
}

/** Pages liées : en néerlandais, celles qui ne sont pas encore traduites sont omises. */
export function existingServices(refs: ServiceRef[], locale: Locale = defaultLocale): Service[] {
  return locale === "fr"
    ? refs.map((ref) => getServiceByRef(ref))
    : refs.map((ref) => findServiceByRef(ref, locale)).filter((service): service is Service => Boolean(service));
}

/** Page néerlandaise par son adresse (/nl/verwarming/ketelonderhoud). */
export function getServiceByPath(path: string, locale: Locale): Service | undefined {
  return localeServices(locale).find((s) => s.path === path);
}

export function serviceHref(service: Pick<Service, "category" | "slug" | "path">): string {
  return service.path ?? `/${service.category}/${service.slug}`;
}
