import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import chaudiereAccueil from "@/assets/refonte/chaudiere-accueil.png";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { fr } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { categoryPath, pagePath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { hasCategory } from "@/app/data/categories";
import { contactActionHref } from "@/app/data/company";
import type { HomeContent } from "@/app/data/home";
import { existingServices, findServiceByRef, serviceHref, type ServiceRef } from "@/app/data/services";
import { resolveCta } from "./ctaDefaults";
import { ProofV2, ZonesV2 } from "./v2/blocks";
import { FinalCtaV2 } from "./v2/chrome";
import { PricingV2, ServiceGridV2 } from "./v2/content";
import { finalCtaVisualFor } from "./v2/cta";
import { FaqV2 } from "./v2/FaqV2";
import { MediaSlot } from "./v2/media";
import { ServiceHeroV2 } from "./v2/ServiceHeroV2";
import { backgrounds, cardBg, toneBg } from "./v2/tones";
import { SectionTitle } from "./v2/ui";

// Priorité commerciale (Q13) : dépannage, entretien, remplacement.
const boilerServices: ServiceRef[] = ["chauffage/depannage-chaudiere", "chauffage/entretien-chaudiere", "chauffage/remplacement-chaudiere"];

/**
 * Page d'accueil (/ et /nl) : contenu dans app/data/home.ts et app/data/nl/home.ts.
 * En néerlandais, les métiers et pages pas encore traduits sont omis.
 */
export function HomePage({ content }: { content: HomeContent }) {
  const locale = getRequestLocale();
  const t = ui(locale);
  const home = pagePath("home", locale);
  const urgence = resolveCta("urgence", { body: content.cta.body }, locale);
  const visual = finalCtaVisualFor("urgence", locale);
  const trades = content.trades.items
    .filter((trade) => hasCategory(trade.category, locale))
    .map((trade) => ({
      ...trade,
      href: categoryPath(trade.category, locale),
      links: trade.links.flatMap((link) => {
        const service = findServiceByRef(link.ref, locale);
        return service ? [{ label: link.label, href: serviceHref(service) }] : [];
      }),
    }));
  const shortcuts = content.hero.shortcuts.flatMap((shortcut) => {
    if (shortcut.ref === "metiers") return [{ label: shortcut.label, href: home === "/" ? "/#metiers" : `${home}#metiers` }];
    const service = findServiceByRef(shortcut.ref, locale);
    return service ? [{ label: shortcut.label, href: serviceHref(service) }] : [];
  });
  // Fonds blanc / beige en alternance, dans l'ordre des sections (voir sections/v2/tones.ts).
  const bg = backgrounds();
  const tones = { boilers: bg.next(), trades: bg.next(), pricing: bg.next(), proof: bg.next(), zones: bg.next(), faq: bg.next() };

  return (
    <>
      <JsonLd data={faqJsonLd(content.faqs)} />

      <ServiceHeroV2
        breadcrumbs={[{ label: t.common.home, href: home }]}
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        panel={
          // Chaudière détourée (ombre douce comprise) : le cœur de métier, sans cadre photo.
          <div className="relative mx-auto aspect-[743/900] w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]">
            <Image
              src={chaudiereAccueil}
              alt={content.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 320px"
              className="object-contain"
            />
          </div>
        }
        facts={content.trust}
        context="chauffage"
        intent="installation"
        shortcuts={{ label: content.hero.shortcutsLabel, links: shortcuts }}
      />

      <ServiceGridV2
        eyebrow={content.boilers.eyebrow}
        title={content.boilers.title}
        featured={existingServices(boilerServices, locale)}
        services={[]}
        tone={tones.boilers}
      />

      <section id="metiers" className={cn("scroll-mt-24 py-16 lg:py-28", toneBg[tones.trades])} aria-labelledby="metiers-titre">
        <div className="container">
          <SectionTitle id="metiers-titre" eyebrow={content.trades.eyebrow} title={content.trades.title} intro={content.trades.intro} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {trades.map((trade) => (
              <li key={trade.href} className={cn("flex flex-col overflow-hidden rounded-[28px] ring-1 ring-night/[0.06]", cardBg[tones.trades])}>
                <MediaSlot image={trade.image} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw" className="aspect-[4/3]" compact />
                <div className="flex flex-1 flex-col p-6">
                  <Link href={trade.href} className="group">
                    <h3 className="v2-semi font-display text-xl font-bold leading-snug text-night group-hover:text-flame">{fr(trade.title)}</h3>
                  </Link>
                  <ul className="mt-4 divide-y divide-night/[0.07] border-t border-night/[0.07]">
                    {trade.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="group flex items-center justify-between gap-3 py-3 text-[15px] text-night/80 hover:text-night">
                          {link.label}
                          <BsArrowRight className="h-4 w-4 flex-shrink-0 text-night/30 transition-all group-hover:translate-x-0.5 group-hover:text-flame" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={trade.href} className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-flame hover:underline">
                    {content.trades.allServices}
                    <BsArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PricingV2 title={content.pricing.title} intro={content.pricing.intro} items={content.pricing.items} tone={tones.pricing} />
      <ProofV2 tone={tones.proof} />
      <ZonesV2 tone={tones.zones} />
      <FaqV2
        id="faqs"
        faqs={content.faqs}
        title={content.faqTitle}
        rappelHref={contactActionHref("rappel", undefined, locale)}
        tone={tones.faq}
      />
      <FinalCtaV2
        eyebrow={urgence.eyebrow}
        title={urgence.title}
        highlight={urgence.highlight}
        body={urgence.body}
        image={visual.image}
        imageAlt={visual.alt}
        // Page générale : le devis reste la 2e action (WhatsApp en lien sous les boutons).
        secondary="devis"
        context="chauffage"
      />
    </>
  );
}
