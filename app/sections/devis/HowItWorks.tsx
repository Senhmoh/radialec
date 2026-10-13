import { Reveal } from "@/components/site/Motion";
import { fr } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { toneBg, type Tone } from "../v2/tones";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { SectionTitle } from "../v2/ui";

/** « Comment se passe votre devis ? » : 4 étapes numérotées, même gabarit que les listes du site. */
export function HowItWorks({ tone = "white" }: { tone?: Tone }) {
  const how = ui(getRequestLocale()).quote.how;
  const steps = how.steps;
  return (
    <section className={cn("py-16 lg:py-28", toneBg[tone])} aria-labelledby="deroule-devis">
      <div className="container">
        <SectionTitle
          id="deroule-devis"
          eyebrow={how.eyebrow}
          title={how.title}
          intro={how.intro}
        />
        <ol className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.08} className="h-full border-t-2 border-night/10 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="v2-wide font-display text-sm font-bold text-ember">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-night/45">{step.tag}</span>
                </div>
                <h3 className="v2-semi mt-3 font-display text-xl font-bold leading-snug text-night">{fr(step.title)}</h3>
                <p className="mt-2 leading-relaxed text-night/70">{fr(step.text)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
