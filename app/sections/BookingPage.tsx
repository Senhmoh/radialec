import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { GoogleRating } from "@/components/site/GoogleRating";
import { Icon } from "@/components/site/Icon";
import { fr } from "@/lib/typography";
import { pagePath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { categoryLabel, localeCategoryOrder } from "@/app/data/categories";
import { companyText, onlineBooking } from "@/app/data/company";
import type { BookingContent } from "@/app/data/rendez-vous";
import { localeServices } from "@/app/data/services";
import { BookingPanel } from "./booking/BookingPanel";
import { ProofV2, ZonesV2 } from "./v2/blocks";
import { backgrounds } from "./v2/tones";
import { Eyebrow } from "./v2/ui";

/** Page rendez-vous (/rendez-vous et /nl/afspraak) : contenu dans app/data/rendez-vous.ts et app/data/nl/rendez-vous.ts. */
export function BookingPage({ content }: { content: BookingContent }) {
  const locale = getRequestLocale();
  const t = ui(locale);
  // Libellés des pages d'où peut partir un « Prendre rendez-vous » (?service=), dans la langue de la page.
  const originLabels: Record<string, string> = Object.fromEntries([
    ...localeServices(locale).map((s) => [`${s.category}/${s.slug}`, s.name]),
    ...localeCategoryOrder(locale).map((c) => [c, categoryLabel(c, locale)]),
  ]);
  const bg = backgrounds();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-lavender pb-16 pt-24 sm:pt-28 md:pb-24 lg:pt-32">
        <div aria-hidden="true" className="v2-glow" />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: t.common.home, href: pagePath("home", locale) },
              { label: content.breadcrumb, href: pagePath("rendezVous", locale) },
            ]}
          />

          <div className="mb-10 mt-8 max-w-3xl md:mb-12 md:mt-10">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="v2-title mt-5 text-[2.1rem] sm:text-[2.7rem] lg:text-[3.4rem]">{fr(content.title)}</h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-night/70 lg:text-lg">{fr(content.intro)}</p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-ink">
              <li>
                <GoogleRating />
              </li>
              <li className="flex items-center gap-2">
                <Icon name="users" className="h-4 w-4 text-navy" />
                {companyText(locale).promises.clients}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="map" className="h-4 w-4 text-navy" />
                <a href="#zones" className="underline-offset-4 hover:underline">
                  {content.checkCommune}
                </a>
              </li>
            </ul>
          </div>

          <BookingPanel
            events={onlineBooking.events}
            defaultEvent={onlineBooking.defaultEvent}
            brandColor={onlineBooking.brandColor}
            labels={originLabels}
          />
        </div>
      </section>

      <ProofV2 tone={bg.next()} context={{ intent: "entretien" }} />
      <ZonesV2 tone={bg.next()} />
    </>
  );
}
