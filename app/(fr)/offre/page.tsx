import type { Metadata } from "next";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { pageMetadata } from "@/lib/seo";
import { company, onlineBooking } from "@/app/data/company";
import { offreContent } from "@/app/data/offre";
import { flyerOfferState } from "@/app/data/pricing";
import { FlyerCodeHint, OfferForm } from "@/app/sections/offre/OfferForm";
import { ProofV2 } from "@/app/sections/v2/blocks";
import { FinalCtaV2 } from "@/app/sections/v2/chrome";
import { ChecklistV2, FeaturesV2 } from "@/app/sections/v2/content";
import { finalCtaVisual } from "@/app/sections/v2/cta";
import { FaqV2 } from "@/app/sections/v2/FaqV2";
import { backgrounds } from "@/app/sections/v2/tones";
import { Eyebrow, PhoneButton, WhatsAppButton } from "@/app/sections/v2/ui";

// Page d'arrivée du flyer (QR radialec.be/f → /offre avec les tags UTM, voir
// app/data/short-links.ts). Contenu : app/data/offre.ts ; prix et date de fin :
// flyerOffer (app/data/pricing.ts). Régénérée toutes les heures : à la date de
// fin, la page repasse seule au prix normal. Non indexée : elle ne sert qu'aux
// lecteurs du flyer, la page de référence reste /chauffage/entretien-chaudiere.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const content = offreContent(flyerOfferState());
  return pageMetadata({ title: content.metaTitle, description: content.metaDescription, path: "/offre", noindex: true });
}

const context = "chauffage/entretien-chaudiere";
const topic = "Offre flyer entretien de chaudière";

export default function OffrePage() {
  const offer = flyerOfferState();
  const c = offreContent(offer);
  const visual = finalCtaVisual.entretien;
  // Agenda en ligne seulement s'il existe un type de rendez-vous au prix de l'offre.
  const booking = offer.active && onlineBooking.flyerEvent ? `/rendez-vous?service=${encodeURIComponent(context)}&offre=flyer` : undefined;
  // Fonds blanc / beige en alternance après le haut de page lavande (voir sections/v2/tones.ts).
  const bg = backgrounds();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-lavender pb-16 pt-24 sm:pt-28 lg:pb-24 lg:pt-32">
        <div aria-hidden="true" className="v2-glow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-water/25 blur-[120px]" />
        <div className="container grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="lg:pt-4">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="v2-title mt-5 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem]">{c.title}</h1>

            {/* Le prix, en grand : c'est lui qui a fait scanner le flyer. */}
            <div className="mt-6 flex items-end gap-3 sm:mt-8">
              <p className="v2-wide font-display text-[6rem] font-extrabold leading-[0.82] tracking-[-0.05em] text-night sm:text-[7.5rem] lg:text-[8.5rem]">
                {offer.amount}
                <span className="ml-[0.06em] text-flame">€</span>
              </p>
              <p className="pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-night/55 sm:pb-3">TVAC</p>
            </div>
            <span aria-hidden="true" className="v2-energy mt-6 block h-[3px] w-24 rounded-full" />
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-night/70">{c.priceNote}</p>

            <dl className="mt-7 grid max-w-xl grid-cols-3 gap-4 border-t border-night/10 pt-6">
              {c.facts.map((fact) => (
                <div key={fact.stat}>
                  <dt className="v2-semi font-display text-[15px] font-bold leading-tight text-night sm:text-base">{fact.stat}</dt>
                  <dd className="mt-1 text-[13px] leading-snug text-night/60 sm:text-sm">{fact.label}</dd>
                </div>
              ))}
            </dl>

            {/* Le téléphone reste l'action n°1, le formulaire est juste à côté (dessous sur mobile). */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneButton variant="primary" className="min-h-[56px] px-7 text-base" />
              <WhatsAppButton topic={topic} variant="light" className="min-h-[56px] px-6 text-base">
                Écrire sur WhatsApp
              </WhatsAppButton>
            </div>
            {offer.active && <FlyerCodeHint amount={offer.amount} />}
            <p className="mt-3 text-sm text-night/60">{c.mazout}</p>
            {booking && (
              <Link href={booking} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-night underline-offset-4 hover:underline">
                Ou choisissez votre créneau en ligne
                <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            )}
            <a
              href={company.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-fit items-center gap-2 text-sm text-night/70 hover:text-night"
            >
              <span className="flex text-bolt drop-shadow-[0_1px_0_rgba(11,18,34,0.25)]" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-night">{company.google.rating}/5</strong> sur Google · plus de {company.google.reviewsFloor} avis
              </span>
            </a>
          </div>

          <div
            id="reserver"
            className="scroll-mt-28 rounded-[32px] bg-white p-6 shadow-[0_40px_80px_-48px_rgba(11,18,34,0.5)] ring-1 ring-night/[0.06] sm:p-8 lg:p-10"
          >
            <OfferForm amount={offer.amount} active={offer.active} untilLabel={offer.untilLabel} />
          </div>
        </div>
      </section>

      <FeaturesV2 eyebrow={c.steps.eyebrow} title={c.steps.title} items={c.steps.items} tone={bg.next()} />
      <ChecklistV2 {...c.included} tone={bg.next()} />
      <ProofV2 tone={bg.next()} context={{ intent: "entretien", category: "chauffage" }} />
      <FaqV2 faqs={c.faqs} title="Vos questions sur l'offre" rappelHref="#reserver" topic={topic} tone={bg.next()} />
      <FinalCtaV2
        eyebrow={c.cta.eyebrow}
        title={c.cta.title}
        highlight={c.cta.highlight}
        body={c.cta.body}
        image={visual.image}
        imageAlt={visual.alt}
        secondaryAction={{ href: "#reserver", label: c.cta.action }}
        context={context}
        topic={topic}
      />
    </>
  );
}
