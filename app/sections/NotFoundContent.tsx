import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { categoryLabel, localeCategoryOrder } from "@/app/data/categories";
import { contactActionHref } from "@/app/data/company";
import { findServiceByRef, serviceHref, type ServiceRef } from "@/app/data/services";
import type { Locale } from "@/lib/i18n/locale";
import { categoryPath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { ButtonLink, Eyebrow, PhoneButton } from "@/app/sections/v2/ui";

const copy: Record<Locale, { eyebrow: string; title: string; text: string; boiler: string; links: Record<string, string> }> = {
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page a pris la fuite.",
    text: "Le lien est peut-être ancien ou mal saisi. Pas d'inquiétude : votre technicien, lui, est toujours joignable.",
    boiler: "Votre chaudière",
    links: {
      "chauffage/depannage-chaudiere": "Dépannage chaudière",
      "chauffage/entretien-chaudiere": "Entretien chaudière",
      "chauffage/remplacement-chaudiere": "Remplacement chaudière",
    },
  },
  nl: {
    eyebrow: "Fout 404",
    title: "Deze pagina is weggelekt.",
    text: "De link is misschien oud of verkeerd getypt. Geen zorgen: uw technicus is wel nog altijd bereikbaar.",
    boiler: "Uw ketel",
    links: {
      "chauffage/depannage-chaudiere": "Depannage ketel",
      "chauffage/entretien-chaudiere": "Ketelonderhoud",
      "chauffage/remplacement-chaudiere": "Ketel vervangen",
    },
  },
};

/** Contenu de la page 404, dans la langue de la page (404 française, néerlandaise et globale). */
export function NotFoundContent() {
  const locale = getRequestLocale();
  const t = ui(locale);
  const c = copy[locale];
  const boiler = Object.entries(c.links).flatMap(([ref, label]) => {
    const service = findServiceByRef(ref as ServiceRef, locale);
    return service ? [{ label, href: serviceHref(service) }] : [];
  });

  return (
    <section className="relative isolate overflow-hidden bg-lavender pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <div aria-hidden="true" className="v2-glow" />
      <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="v2-title mt-5 text-[2.4rem] sm:text-[3rem] lg:text-[4rem]">{c.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-night/70">{c.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton variant="primary" className="min-h-[56px] px-7 text-base" />
            <ButtonLink href={contactActionHref("devis", undefined, locale)} variant="light" arrow className="min-h-[56px] px-7 text-base">
              {t.requestQuote}
            </ButtonLink>
          </div>
        </div>
        <div className="space-y-8">
          {boiler.length > 0 && (
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-night/55">{c.boiler}</p>
              <ul className="mt-3 divide-y divide-night/10 border-y border-night/10">
                {boiler.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group flex items-center justify-between py-3.5 font-semibold text-night hover:text-flame">
                      {link.label}
                      <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="flex flex-wrap gap-2">
            {localeCategoryOrder(locale).map((category) => (
              <li key={category}>
                <Link href={categoryPath(category, locale)} className="chip">
                  {categoryLabel(category, locale)}
                  <BsArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
