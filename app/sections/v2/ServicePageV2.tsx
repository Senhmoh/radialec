import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { categoryLabel } from "@/app/data/categories";
import { contactActionHref } from "@/app/data/company";
import { serviceHref, type Block, type Service } from "@/app/data/services";
import { resolveCta } from "../ctaDefaults";
import { BrandsV2, CallBandV2, CalloutV2, HighlightV2, ProofV2, RelatedV2, ZonesV2 } from "./blocks";
import { FinalCtaV2 } from "./chrome";
import { AlertV2, ChecklistV2, FeaturesV2, OptionsV2, PricingV2 } from "./content";
import { finalCtaVisualFor } from "./cta";
import { categoryPath as categoryHref, pagePath } from "@/lib/i18n/routes";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { FaqV2 } from "./FaqV2";
import { ServiceHeroV2 } from "./ServiceHeroV2";
import { DraftBanner } from "./DraftBanner";
import { StepsV2 } from "./StepsV2";
import { backgrounds } from "./tones";
import { ButtonLink, PhoneButton, type Surface } from "./ui";

/** Garantit la présence du bandeau d'appel : inséré après le 2e bloc s'il n'est pas placé explicitement. */
function withCallBand(blocks: Block[]): Block[] {
  if (blocks.some((block) => block.type === "callBand")) return blocks;
  const position = Math.min(2, blocks.length);
  return [...blocks.slice(0, position), { type: "callBand" }, ...blocks.slice(position)];
}

/**
 * Gabarit « fiche service » (toutes les pages /<categorie>/<slug>, et
 * /professionnels). L'en-tête, le footer et la barre mobile viennent du layout.
 * Ordre : hero (+ chiffres clés, devis express) → blocs (bandeau d'appel après
 * le 2e) → preuve → FAQ → zone → services liés → CTA final. Fonds : blanc /
 * beige en alternance dans cet ordre (v2/tones.ts).
 */
export function ServicePageV2({ service, surface = "lavender" }: { service: Service; surface?: Surface }) {
  const locale = getRequestLocale();
  const t = ui(locale);
  const path = serviceHref(service);
  const context = `${service.category}/${service.slug}`;
  const cta = resolveCta(service.intent, service.cta, locale);
  const visual = finalCtaVisualFor(service.intent, locale);
  const primaryAction = service.intent === "entretien" ? "rendezVous" : "devis";
  // Page fusionnée avec sa catégorie (Professionnels) : pas de niveau intermédiaire.
  const categoryPath = categoryHref(service.category, locale);
  const breadcrumbs = [
    { label: t.common.home, href: pagePath("home", locale) },
    ...(path === categoryPath ? [] : [{ label: categoryLabel(service.category, locale), href: categoryPath }]),
    { label: service.name, href: path },
  ];

  // Appelé dans l'ordre d'affichage : chaque section prend le fond suivant de l'alternance.
  const bg = backgrounds();

  const renderBlock = (block: Block, index: number) => {
    const key = `${block.type}-${index}`;
    switch (block.type) {
      case "steps":
        return (
          <StepsV2
            key={key}
            tone={bg.next()}
            eyebrow={block.eyebrow}
            title={block.title}
            intro={block.intro}
            steps={block.steps}
            cta={
              // Dépannage : on finit sur l'appel, pas sur un devis (prompts/refonte/06).
              service.intent === "urgence" ? (
                <PhoneButton variant="primary" />
              ) : (
                <ButtonLink href={contactActionHref(primaryAction, context, locale)} variant="dark" arrow>
                  {primaryAction === "devis" ? t.requestQuote : t.common.bookAppointment}
                </ButtonLink>
              )
            }
          />
        );
      case "features":
        return <FeaturesV2 key={key} {...block} tone={bg.next()} />;
      case "checklist":
        return <ChecklistV2 key={key} {...block} tone={bg.next()} />;
      case "options":
        return <OptionsV2 key={key} {...block} tone={bg.next()} />;
      case "pricing":
        return <PricingV2 key={key} {...block} context={context} intent={service.intent} tone={bg.next()} />;
      case "alert": {
        const { tone, attached } = bg.attach();
        return <AlertV2 key={key} {...block} bg={tone} attached={attached} />;
      }
      case "brands":
        return <BrandsV2 key={key} title={block.title} intro={block.intro} tone={bg.next()} />;
      case "callout":
        return <CalloutV2 key={key} title={block.title} paragraphs={block.paragraphs} verdicts={block.verdicts} tone={bg.next()} />;
      case "highlight":
        bg.lavender();
        return <HighlightV2 key={key} {...block} surface={surface} />;
      case "callBand": {
        const { tone, attached } = bg.attach();
        return (
          <CallBandV2
            key={key}
            context={context}
            topic={service.name}
            surface={surface}
            intent={service.intent}
            title={block.title}
            text={block.text}
            tone={tone}
            attached={attached}
          />
        );
      }
    }
  };

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.metaDescription, path, price: service.price })} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      {service.draft && <DraftBanner />}

      <ServiceHeroV2
        breadcrumbs={breadcrumbs}
        eyebrow={service.hero.eyebrow}
        title={service.pageTitle}
        intro={service.hero.intro}
        image={service.hero.image}
        facts={service.facts}
        context={context}
        intent={service.intent}
        topic={service.name}
        quickStart={service.category === "chauffage" && service.intent === "installation"}
        surface={surface}
      />

      {withCallBand(service.blocks).map(renderBlock)}

      <ProofV2 tone={bg.next()} context={{ intent: service.intent, category: service.category }} />
      <FaqV2
        faqs={service.faqs}
        title={service.faqTitle ?? t.common.faqTitle}
        rappelHref={contactActionHref("rappel", context, locale)}
        topic={service.name}
        tone={bg.next()}
      />
      <ZonesV2 intro={service.zonesIntro} tone={bg.next()} />
      <RelatedV2
        refs={service.related}
        eyebrow={service.category === "chauffage" ? t.related.aroundBoiler : undefined}
        tone={bg.next()}
      />
      <FinalCtaV2
        eyebrow={cta.eyebrow}
        title={cta.title}
        highlight={cta.highlight}
        body={cta.body}
        image={visual.image}
        imageAlt={visual.alt}
        secondary={visual.secondary}
        context={context}
        topic={service.name}
      />
    </>
  );
}
