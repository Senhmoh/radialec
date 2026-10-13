import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { getService, getServiceByPath, getServicesByCategory, serviceHref, type ServiceCategory } from "../data/services";
import { showNl } from "../data/visibility";
import type { Locale } from "@/lib/i18n/locale";
import { categoryPath } from "@/lib/i18n/routes";
import { setRequestLocale } from "@/lib/i18n/server";
import { ServicePageV2 } from "./v2/ServicePageV2";

/**
 * Exports de route pour app/<categorie>/[slug]/page.tsx — évite de dupliquer
 * generateStaticParams / generateMetadata / page dans chaque catégorie.
 * Le gabarit est app/sections/v2/ServicePageV2.tsx.
 */
export function serviceRoute(category: ServiceCategory) {
  return {
    generateStaticParams() {
      // Les services servis à une autre URL (ex. /professionnels) n'ont pas de page /categorie/slug.
      return getServicesByCategory(category)
        .filter((service) => !service.path)
        .map((service) => ({ slug: service.slug }));
    },

    async generateMetadata({
      params,
    }: {
      params: Promise<{ slug: string }>;
    }): Promise<Metadata> {
      const { slug } = await params;
      const service = getService(category, slug);
      if (!service) return {};
      return pageMetadata({
        title: service.metaTitle,
        description: service.metaDescription,
        path: serviceHref(service),
        noindex: service.draft,
      });
    },

    async Page({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params;
      const service = getService(category, slug);
      if (!service || service.path) notFound();
      return <ServicePageV2 service={service} />;
    },
  };
}

/**
 * Même chose pour une langue autre que le français : le segment [slug] est la
 * fin de l'adresse néerlandaise de la page (`path` : /nl/verwarming/ketelonderhoud).
 * Rien n'est généré tant que le néerlandais n'est pas visible (showNl).
 */
export function localizedServiceRoute(category: ServiceCategory, locale: Exclude<Locale, "fr">) {
  const base = categoryPath(category, locale);
  const find = (slug: string) => (showNl ? getServiceByPath(`${base}/${slug}`, locale) : undefined);
  return {
    generateStaticParams() {
      return getServicesByCategory(category, locale)
        .filter((service) => service.path?.startsWith(`${base}/`))
        .map((service) => ({ slug: service.path!.slice(base.length + 1) }));
    },

    async generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
      const { slug } = await params;
      const service = find(slug);
      if (!service) return {};
      return pageMetadata({
        title: service.metaTitle,
        description: service.metaDescription,
        path: serviceHref(service),
        noindex: service.draft,
      });
    },

    async Page({ params }: { params: Promise<{ slug: string }> }) {
      setRequestLocale(locale);
      const { slug } = await params;
      const service = find(slug);
      if (!service) notFound();
      return <ServicePageV2 service={service} />;
    },
  };
}
