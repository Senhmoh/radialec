import { fr } from "@/lib/typography";
import { contactActionHref } from "../../data/company";
import { cn } from "@/lib/utils";
import { toneBg, type Tone } from "../v2/tones";
import { ButtonLink, PhoneButton, SectionTitle } from "../v2/ui";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";

const stepsNl = [
  {
    title: "U beschrijft ons het project",
    description:
      "Telefonisch of via onze offerteaanvraag: type installatie, woning, beperkingen. Indien nodig komen we ter plaatse kijken.",
  },
  {
    title: "Gedetailleerde offerte binnen 24 uur",
    description: "Een duidelijk en gedetailleerd document (materiaal, werkuren, btw) zodat u precies weet wat u betaalt.",
  },
  {
    title: "U beslist, zonder druk",
    description:
      "De offerte is gratis en vrijblijvend. Past ze u, dan plannen we de interventie; zo niet, dan bent u ons niets verschuldigd.",
  },
];

const steps = [
  {
    title: "Vous nous décrivez le projet",
    description:
      "Par téléphone ou via notre demande de devis : type d'installation, logement, contraintes. Si besoin, nous passons voir sur place.",
  },
  {
    title: "Devis détaillé sous 24h",
    description:
      "Un document clair et détaillé — matériel, main-d'œuvre, TVA — pour savoir exactement ce que vous payez.",
  },
  {
    title: "Vous décidez, sans pression",
    description:
      "Le devis est gratuit et sans engagement. S'il vous convient, nous planifions l'intervention ; sinon, vous ne nous devez rien.",
  },
];

/** Pour tout ce qui est « sur devis » : comment le prix est établi. */
export function QuoteProcess({ tone = "white" }: { tone?: Tone }) {
  const locale = getRequestLocale();
  const nl = locale === "nl";
  const items = nl ? stepsNl : steps;
  return (
    <section className={cn("py-16 lg:py-28", toneBg[tone])} aria-labelledby="sur-devis">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionTitle
            id="sur-devis"
            eyebrow={nl ? "Installatie & renovatie" : "Installation & rénovation"}
            title={nl ? "Op offerte, maar nooit op goed geluk" : "Sur devis, mais jamais au hasard"}
            intro={
              nl
                ? "Een ketel, een laadpaal of een zekeringkast kun je niet prijzen zonder uw woning te kennen. In plaats van een misleidende lokprijs krijgt u van ons een precieze offerte, en die is gratis."
                : "Une chaudière, une borne ou un tableau électrique ne se chiffrent pas sans connaître votre logement. Plutôt qu'un prix d'appel trompeur, nous vous remettons un devis précis — et gratuit."
            }
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton variant="primary" />
            <ButtonLink href={contactActionHref("devis", undefined, locale)} variant="dark" arrow>
              {ui(locale).requestQuote}
            </ButtonLink>
          </div>
        </div>
        <ol className="space-y-0">
          {items.map((step, index) => (
            <li key={step.title} className="flex gap-5 border-t border-night/10 py-7">
              <span className="v2-wide w-10 flex-shrink-0 font-display text-sm font-bold text-flame">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="v2-semi font-display text-xl font-bold text-night">{fr(step.title)}</h3>
                <p className="mt-2 leading-relaxed text-night/70">{fr(step.description)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
