import { JsonLd } from "@/components/site/JsonLd";
import { SectionHeading } from "@/components/site/SectionHeading";
import { faqJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { callbackAnchor, pagePath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { companyText } from "@/app/data/company";
import type { ContactContent } from "@/app/data/contact";
import { CallbackForm } from "./CallbackForm";
import { ContactActions } from "./ContactActions";
import { ContactDetails } from "./ContactDetails";
import { PageHeader } from "./PageHeader";
import { CallBandV2, ZonesV2 } from "./v2/blocks";
import { FaqV2 } from "./v2/FaqV2";
import { backgrounds, toneBg } from "./v2/tones";
import { PhoneButton, WhatsAppButton } from "./v2/ui";

/** Page contact (/contact et /nl/contact) : contenu dans app/data/contact.ts et app/data/nl/contact.ts. */
export function ContactPage({ content }: { content: ContactContent }) {
  const locale = getRequestLocale();
  const t = ui(locale);
  const promises = companyText(locale).promises;
  const path = pagePath("contact", locale);
  const anchor = callbackAnchor[locale];
  // Fonds blanc / beige en alternance, dans l'ordre des sections (voir sections/v2/tones.ts).
  const bg = backgrounds();
  const tones = { actions: bg.next(), rappel: bg.next(), band: bg.attach(), details: bg.next(), zones: bg.next(), faq: bg.next() };

  return (
    <>
      <JsonLd data={faqJsonLd(content.faqs)} />
      <PageHeader
        breadcrumbs={[
          { label: t.common.home, href: pagePath("home", locale) },
          { label: t.header.contact, href: path },
        ]}
        eyebrow={content.header.eyebrow}
        title={content.header.title}
        intro={content.header.intro}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PhoneButton variant="primary" className="min-h-[60px] px-8 text-lg" />
          <WhatsAppButton variant="light" className="min-h-[60px] px-7 text-base">
            {t.whatsapp.write}
          </WhatsAppButton>
          <p className="text-sm text-night/60">
            {promises.availability} · {promises.intervention.toLowerCase()}
          </p>
        </div>
      </PageHeader>
      <ContactActions tone={tones.actions} />

      <section id={anchor} className={cn("scroll-mt-24 py-16 lg:py-24", toneBg[tones.rappel])} aria-labelledby="rappel-titre">
        <div className="container grid items-start gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="rappel-titre"
              eyebrow={content.callback.eyebrow}
              title={content.callback.title}
              intro={content.callback.intro}
              align="left"
              size="md"
            />
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-night/70">
              {content.callback.emergency}
              <PhoneButton variant="primary" className="min-h-[44px] px-4 text-sm" />
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-6 ring-1 ring-night/[0.06] sm:p-8">
            <CallbackForm />
          </div>
        </div>
      </section>
      <CallBandV2
        intent="urgence"
        title={content.band.title}
        text={content.band.text}
        tone={tones.band.tone}
        attached={tones.band.attached}
      />
      <ContactDetails tone={tones.details} />
      <ZonesV2 tone={tones.zones} />
      <FaqV2 faqs={content.faqs} title={content.faqTitle} rappelHref={`${path}#${anchor}`} tone={tones.faq} />
    </>
  );
}
