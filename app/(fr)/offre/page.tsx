import { pageMetadata } from "@/lib/seo";
import { offre } from "@/app/data/offre";
import { resolveCta } from "@/app/sections/ctaDefaults";
import { ProofV2 } from "@/app/sections/v2/blocks";
import { FinalCtaV2 } from "@/app/sections/v2/chrome";
import { ChecklistV2 } from "@/app/sections/v2/content";
import { finalCtaVisual } from "@/app/sections/v2/cta";
import { ReachPanel } from "@/app/sections/v2/ReachPanel";
import { ServiceHeroV2 } from "@/app/sections/v2/ServiceHeroV2";
import { backgrounds } from "@/app/sections/v2/tones";

// Page d'arrivée du flyer (QR radialec.be/f → /offre avec les tags UTM, voir
// app/data/short-links.ts). Contenu : app/data/offre.ts. Non indexée : elle ne
// sert qu'aux lecteurs du flyer, la page de référence reste /chauffage/entretien-chaudiere.
export const metadata = pageMetadata({
  title: offre.metaTitle,
  description: offre.metaDescription,
  path: "/offre",
  noindex: true,
});

const context = "chauffage/entretien-chaudiere";

export default function OffrePage() {
  const cta = resolveCta("entretien", offre.cta);
  const visual = finalCtaVisual.entretien;
  // Fonds blanc / beige en alternance après le haut de page lavande (voir sections/v2/tones.ts).
  const bg = backgrounds();

  return (
    <>
      <ServiceHeroV2
        breadcrumbs={[]}
        eyebrow={offre.hero.eyebrow}
        title={offre.hero.title}
        intro={offre.validity ? `${offre.hero.intro} ${offre.validity}` : offre.hero.intro}
        // Formulaire court : prénom + téléphone, rappel sous 2 h.
        panel={<ReachPanel context={context} label="Offre entretien" location="offre_flyer" />}
        facts={offre.facts}
        context={context}
        intent="entretien"
        topic="Offre entretien de chaudière (flyer)"
      />
      <ChecklistV2 {...offre.included} tone={bg.next()} />
      <ProofV2 tone={bg.next()} context={{ intent: "entretien", category: "chauffage" }} />
      <FinalCtaV2
        eyebrow={cta.eyebrow}
        title={cta.title}
        highlight={cta.highlight}
        body={cta.body}
        image={visual.image}
        imageAlt={visual.alt}
        secondary={visual.secondary}
        context={context}
        topic="Offre entretien de chaudière (flyer)"
      />
    </>
  );
}
