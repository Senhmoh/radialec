import localFont from "next/font/local";
import { BsArrowDown } from "react-icons/bs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { GoogleRating } from "@/components/site/GoogleRating";
import { JsonLd } from "@/components/site/JsonLd";
import { absoluteUrl, BUSINESS_ID, faqJsonLd } from "@/lib/seo";
import { fr } from "@/lib/typography";
import { pagePath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { contactActionHref } from "@/app/data/company";
import { getPolicyRows, getTarifGroups } from "@/app/data/tarifs";
import type { TarifsContent } from "@/app/data/tarifs-page";
import { resolveCta } from "./ctaDefaults";
import { PriceMenu } from "./tarifs/PriceMenu";
import { PromoBanner } from "./tarifs/PromoBanner";
import { QuoteProcess } from "./tarifs/QuoteProcess";
import { FinalCtaV2 } from "./v2/chrome";
import { TrustStripV2 } from "./v2/content";
import { finalCtaVisualFor } from "./v2/cta";
import { FaqV2 } from "./v2/FaqV2";
import { backgrounds } from "./v2/tones";
import { ButtonLink, Eyebrow, PhoneButton } from "./v2/ui";

// Page tarifs (/tarifs et /nl/tarieven) : contenu dans app/data/tarifs-page.ts et
// app/data/nl/tarifs-page.ts ; lignes de prix : app/data/tarifs.ts (montants : pricing.ts).

// Chargée uniquement sur cette page : chiffres de la carte des prix.
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function TarifsPage({ content }: { content: TarifsContent }) {
  const locale = getRequestLocale();
  const t = ui(locale);
  const groups = getTarifGroups(locale);
  const cta = resolveCta("installation", { body: content.ctaBody }, locale);
  const visual = finalCtaVisualFor("installation", locale);
  const path = pagePath("tarifs", locale);

  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: content.catalogName,
    url: absoluteUrl(path),
    itemListElement: groups.flatMap((group) =>
      group.lines
        .filter((line) => line.amount !== undefined)
        .map((line) => ({
          "@type": "Offer",
          name: line.label,
          url: absoluteUrl(line.href),
          price: line.amount,
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: line.amount,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: true,
          },
          offeredBy: { "@id": BUSINESS_ID },
          itemOffered: { "@type": "Service", name: line.serviceName, areaServed: content.areaServed },
        }))
    ),
  };

  // Fonds blanc / beige en alternance, dans l'ordre des sections (voir sections/v2/tones.ts).
  const bg = backgrounds();
  const tones = { menu: bg.next(), trust: bg.next(), promo: bg.attach(), process: bg.next(), faq: bg.next() };

  return (
    <div className={geistMono.variable}>
      <JsonLd data={offerCatalog} />
      <JsonLd data={faqJsonLd(content.faqs)} />

      <section className="relative isolate overflow-hidden bg-lavender pb-14 pt-24 sm:pt-28 lg:pb-20 lg:pt-32">
        <div aria-hidden="true" className="v2-glow" />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: t.common.home, href: pagePath("home", locale) },
              { label: content.breadcrumb, href: path },
            ]}
          />
          <div className="mt-8 max-w-3xl lg:mt-10">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="v2-title mt-5 text-[2.1rem] sm:text-[2.7rem] lg:text-[3.4rem]">{fr(content.title)}</h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-night/70 lg:text-lg">{fr(content.intro)}</p>
            <div className="mt-6">
              <GoogleRating />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneButton variant="primary" className="min-h-[56px] px-7 text-base" />
              <ButtonLink href={contactActionHref("devis", undefined, locale)} variant="light" arrow className="min-h-[56px] px-7 text-base">
                {t.requestQuote}
              </ButtonLink>
            </div>
          </div>

          {/* Raccourcis vers chaque métier de la carte, avec le prix d'appel */}
          <nav aria-label={content.shortcutsLabel} className="mt-12">
            <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {groups.map((group) => {
                const fixed = group.lines.flatMap((line) => (line.amount === undefined ? [] : [line.amount]));
                return (
                  <li key={group.id}>
                    <a
                      href={`#tarifs-${group.id}`}
                      className="group flex h-full items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-night/[0.06] transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(11,18,34,0.5)] sm:p-4"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="v2-semi block font-display font-bold leading-tight text-night">{group.shortLabel}</span>
                        <span className="mt-0.5 block text-xs font-semibold text-flame">
                          {fixed.length ? content.from(Math.min(...fixed)) : content.onQuote}
                        </span>
                      </span>
                      <BsArrowDown
                        aria-hidden="true"
                        className="hidden h-4 w-4 flex-shrink-0 text-night/30 transition-all group-hover:translate-y-0.5 group-hover:text-flame sm:block"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      <PriceMenu groups={groups} policies={getPolicyRows(locale)} tone={tones.menu} />
      <TrustStripV2 items={content.engagements} eyebrow={content.engagementsTitle} tone={tones.trust} />
      <PromoBanner tone={tones.promo.tone} attached={tones.promo.attached} />
      <QuoteProcess tone={tones.process} />
      <FaqV2 faqs={content.faqs} title={content.faqTitle} rappelHref={contactActionHref("rappel", undefined, locale)} tone={tones.faq} />

      <FinalCtaV2
        eyebrow={cta.eyebrow}
        title={cta.title}
        body={cta.body}
        image={visual.image}
        imageAlt={visual.alt}
        context="chauffage"
      />
    </div>
  );
}
