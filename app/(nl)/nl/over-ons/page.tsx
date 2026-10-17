import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { cn } from "@/lib/utils";
import { company, companyCopy } from "@/app/data/company";
import type { Fact } from "@/app/data/services/types";
import { showNl } from "@/app/data/visibility";
import { PageHeader } from "@/app/sections/PageHeader";
import { ProofV2, ZonesV2 } from "@/app/sections/v2/blocks";
import { FinalCtaV2 } from "@/app/sections/v2/chrome";
import { TrustStripV2 } from "@/app/sections/v2/content";
import { finalCtaVisualFor } from "@/app/sections/v2/cta";
import { backgrounds, toneBg } from "@/app/sections/v2/tones";
import { PhoneButton, SectionTitle } from "@/app/sections/v2/ui";

// Traduction de app/(fr)/a-propos/page.tsx : seulement des faits vérifiés (BCE)
// et des promesses validées (companyCopy.nl). Pas de taille d'équipe.
const promises = companyCopy.nl.promises;

export const metadata = pageMetadata({
  title: "Over Radialec, chauffagist in Brussel",
  description: `Radialec: verwarming, elektriciteit, sanitair en airco in Brussel en omgeving. ${promises.availability}, ${promises.intervention.toLowerCase()}, ${promises.warranty.toLowerCase()}.`,
  path: "/nl/over-ons",
});

const engagements: Fact[] = [
  { icon: "clock", stat: `Bereikbaar ${promises.availability}`, label: `En ${promises.emergency} voor dringende gevallen` },
  { icon: "stopwatch", stat: promises.intervention, label: "In Brussel en de rand" },
  { icon: "clipboard", stat: promises.quote, label: "Gratis en vrijblijvend" },
  { icon: "shield", stat: promises.warranty, label: "Op onze onderdelen en interventies" },
];

export default function OverOnsPage() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  const visual = finalCtaVisualFor("installation", "nl");
  // Afwisselend wit en beige, in de volgorde van de secties (sections/v2/tones.ts).
  const bg = backgrounds();
  const tones = { story: bg.next(), trust: bg.next(), proof: bg.next(), zones: bg.next() };
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/nl" },
          { label: "Over ons", href: "/nl/over-ons" },
        ]}
        eyebrow="Over ons · Brussel en omgeving"
        title="Radialec, uw technicus in Brussel"
        intro={`Verwarming, elektriciteit, sanitair en airco, in Brussel en omgeving. We zijn ${promises.availability} bereikbaar, en ${promises.emergency} voor dringende gevallen.`}
      >
        <div className="mt-8">
          <PhoneButton variant="primary" className="min-h-[56px] px-7 text-base" />
        </div>
      </PageHeader>

      <section className={cn("py-16 lg:py-24", toneBg[tones.story])} aria-labelledby="verhaal-titel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <SectionTitle id="verhaal-titel" eyebrow="Wie we zijn" title="Eén nummer voor het hele huis" />
          <p className="text-[17px] leading-relaxed text-night/75">
            {`${company.name} is de handelsnaam van ${company.legal.companyName ?? "onze vennootschap"}, opgericht in 2024. Een ketel die uitvalt, een stopcontact dat warm wordt, een lek onder de gootsteen: u belt hetzelfde nummer, en dezelfde ploeg volgt het op van uw eerste telefoontje tot het einde van de interventie.`}
          </p>
        </div>
      </section>

      <TrustStripV2 items={engagements} eyebrow="Wat we beloven" tone={tones.trust} />
      <ProofV2 tone={tones.proof} />
      <ZonesV2 tone={tones.zones} />
      <FinalCtaV2
        eyebrow="Laten we over uw project praten"
        title="Een installatieproject? De offerte is gratis."
        highlight="gratis"
        image={visual.image}
        imageAlt={visual.alt}
      />
    </>
  );
}
