import { FaStar } from "react-icons/fa";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { fr } from "@/lib/typography";
import { callbackAnchor, pagePath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { getCategory, localeCategoryOrder } from "@/app/data/categories";
import { company, companyText } from "@/app/data/company";
import type { QuoteContent } from "@/app/data/devis";
import { resolvePrice } from "@/app/data/pricing";
import { reviewDate, shortReview } from "@/app/data/reviews";
import { findServiceByRef } from "@/app/data/services";
import { localeZones } from "@/app/data/zones-intervention";
import { HowItWorks } from "./devis/HowItWorks";
import { QuoteForm, type ServiceOption } from "./devis/QuoteForm";
import { ProofV2, RelatedV2, ZonesV2 } from "./v2/blocks";
import { FaqV2 } from "./v2/FaqV2";
import { backgrounds } from "./v2/tones";
import { Eyebrow } from "./v2/ui";

/**
 * Page devis (/devis et /nl/offerte) : contenu dans app/data/devis.ts et
 * app/data/nl/devis.ts ; formulaire client app/sections/devis/QuoteForm.tsx.
 */
export function QuotePage({ content }: { content: QuoteContent }) {
  const locale = getRequestLocale();
  const t = ui(locale);
  const promises = companyText(locale).promises;
  // Prestations proposées pour chaque domaine : celles du hub correspondant
  // (inclut les renvois croisés, ex. la PAC dans « Clim & PAC »). En néerlandais :
  // les pages déjà traduites (les autres domaines proposent « Iets anders »).
  const serviceOptions: ServiceOption[] = localeCategoryOrder(locale).flatMap((category) =>
    getCategory(category, locale).services.flatMap((ref) => {
      const service = findServiceByRef(ref, locale);
      if (!service) return [];
      return [
        {
          ref,
          category,
          label: service.title,
          amount: service.price ? resolvePrice(service.price, locale).amount : undefined,
          intent: service.intent,
        },
      ];
    })
  );
  const communes = localeZones(locale).flatMap((zone) => zone.communes);
  const review = shortReview();
  // Fonds blanc / beige en alternance, dans l'ordre des sections (voir sections/v2/tones.ts).
  const bg = backgrounds();
  const tones = { how: bg.next(), related: bg.next(), proof: bg.next(), faq: bg.next(), zones: bg.next() };

  return (
    <>
      <JsonLd data={faqJsonLd(content.faqs)} />

      {/* overflow-clip (et non hidden) : le défilement vers le formulaire ne doit jamais décaler la section. */}
      <section className="relative isolate overflow-clip bg-lavender pb-16 pt-24 sm:pt-28 md:pb-24 lg:pt-32">
        <div aria-hidden="true" className="v2-glow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-water/20 blur-[120px]" />
        <div className="container">
          <QuoteForm
            intro={
              <div>
                <Breadcrumbs
                  items={[
                    { label: t.common.home, href: pagePath("home", locale) },
                    { label: content.breadcrumb, href: pagePath("devis", locale) },
                  ]}
                />
                <div className="mt-8 lg:mt-10">
                  <Eyebrow>{content.eyebrow}</Eyebrow>
                  <h1 className="v2-title mt-5 text-[2.1rem] sm:text-[2.7rem] lg:text-[2.7rem] xl:text-[3.1rem]">{fr(content.title)}</h1>
                  <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-night/70 lg:text-lg">{fr(content.intro)}</p>
                  <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-night/70">
                    <li className="flex items-center gap-2">
                      <span className="flex text-bolt" aria-hidden="true">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar key={i} className="h-3.5 w-3.5" />
                        ))}
                      </span>
                      <strong className="font-semibold text-night">{company.google.rating}/5</strong> {t.hero.onGoogle}
                    </li>
                    <li>{promises.clients}</li>
                    <li>{promises.warranty}</li>
                  </ul>
                  {/* Desktop : un avis court au moment où l'on hésite à envoyer (mobile : la section avis plus bas). */}
                  <figure className="mt-8 hidden max-w-md border-l-2 border-night/15 pl-5 lg:block">
                    <blockquote lang="fr" className="text-[15px] leading-relaxed text-night/75">
                      « {fr(review.text)} »
                    </blockquote>
                    <figcaption className="mt-2 text-xs text-night/50">
                      <span className="font-semibold text-night">{review.author}</span> · {content.reviewSource},{" "}
                      {reviewDate(review.date, t.months)}
                    </figcaption>
                  </figure>
                </div>
              </div>
            }
            categories={content.categories}
            services={serviceOptions}
            communes={communes}
          />
        </div>
      </section>

      <HowItWorks tone={tones.how} />
      <RelatedV2 title={content.related.title} intro={content.related.intro} refs={content.related.refs} tone={tones.related} />
      {/* Avis de dépannage : l'avis court du haut de page n'y est pas répété. */}
      <ProofV2 tone={tones.proof} context={{ intent: "urgence" }} />
      <FaqV2
        faqs={content.faqs}
        title={content.faqTitle}
        rappelHref={`${pagePath("contact", locale)}#${callbackAnchor[locale]}`}
        tone={tones.faq}
      />
      <ZonesV2 tone={tones.zones} />
    </>
  );
}
