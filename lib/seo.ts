import type { Metadata } from "next";
import { company, companyText } from "@/app/data/company";
import { alternatesOf } from "@/app/data/navigation";
import { defaultLocale, htmlLang, ogLocale, type Locale } from "@/lib/i18n/locale";
import { localeOfPath } from "@/lib/i18n/routes";
import { zonesIntervention } from "@/app/data/zones-intervention";
import { resolvePrice, type PriceRef } from "@/app/data/pricing";
import type { FaqItem } from "@/app/data/services/types";
import { toPlainText } from "@/components/site/RichText";

export const BUSINESS_ID = `${company.siteUrl}/#entreprise`;

export function absoluteUrl(path: string): string {
  return `${company.siteUrl}${path === "/" ? "" : path}`;
}

/**
 * hreflang de la page : ses adresses dans chaque langue, quand elle existe dans
 * les deux (x-default = français). Rien tant que le néerlandais n'est pas en ligne.
 */
export function languageAlternates(path: string): Record<string, string> | undefined {
  const paths = alternatesOf(path);
  if (!paths?.fr || !paths.nl) return undefined;
  return { [htmlLang.fr]: paths.fr, [htmlLang.nl]: paths.nl, "x-default": paths.fr };
}

/** Métadonnées d'une page : titre (suffixé « | Radialec » par le layout), description, canonical, hreflang, Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  /** Titre complet sans suffixe automatique (homepage). */
  absoluteTitle?: boolean;
  /** Brouillon affiché en aperçu : jamais indexé. */
  noindex?: boolean;
}): Metadata {
  // La langue se lit dans l'adresse (/nl/… = néerlandais).
  const locale = localeOfPath(path);
  const languages = languageAlternates(path);
  return {
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path, ...(languages && { languages }) },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${company.name}`,
      description,
      url: path,
      siteName: company.name,
      locale: ogLocale[locale],
      type: "website",
      // Image par défaut du site (app/opengraph-image.tsx). Les segments qui ont
      // leur propre opengraph-image (catégories, fiches service) la remplacent.
      images: [
        {
          url: locale === "nl" ? "/nl/opengraph-image" : "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${company.name} — ${companyText(locale).tagline}`,
        },
      ],
    },
  };
}

export interface Crumb {
  label: string;
  href: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: toPlainText(faq.answer) },
    })),
  };
}

const areaServed = zonesIntervention.flatMap((zone) =>
  zone.communes.map((name) => ({ "@type": "City", name }))
);

export function serviceJsonLd({
  name,
  description,
  path,
  price,
}: {
  name: string;
  description: string;
  path: string;
  price?: PriceRef;
}) {
  const resolved = price ? resolvePrice(price) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": BUSINESS_ID },
    areaServed,
    ...(resolved?.amount !== undefined && {
      offers: {
        "@type": "Offer",
        price: resolved.amount,
        priceCurrency: "EUR",
        description: resolved.note ?? resolved.label,
      },
    }),
  };
}

export function localBusinessJsonLd(logoUrl: string, locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "Electrician", "Plumber"],
    "@id": BUSINESS_ID,
    name: company.name,
    description: companyText(locale).description,
    url: company.siteUrl,
    logo: logoUrl,
    image: logoUrl,
    telephone: company.phone.e164,
    email: company.email,
    // Entreprise qui se déplace chez ses clients : commune du siège sans la rue,
    // pour ne pas présenter le siège comme un lieu d'accueil (Q20).
    address: company.address
      ? {
          "@type": "PostalAddress",
          postalCode: company.address.postalCode,
          addressLocality: company.address.city,
          addressCountry: "BE",
        }
      : { "@type": "PostalAddress", addressLocality: "Bruxelles", addressCountry: "BE" },
    areaServed,
    // Appels pris tous les jours de 10h à 21h (Q20).
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: `${String(company.hours.opens).padStart(2, "0")}:00`,
      closes: `${String(company.hours.closes).padStart(2, "0")}:00`,
    },
    knowsAbout:
      locale === "nl"
        ? ["Verwarming", "Verwarmingsketel", "Warmtepomp", "Elektriciteit", "Sanitair", "Airco"]
        : ["Chauffage", "Chaudière", "Pompe à chaleur", "Électricité", "Plomberie", "Climatisation"],
  };
}
