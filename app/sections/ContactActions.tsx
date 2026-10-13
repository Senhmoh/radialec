import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";
import type { IconKey } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Motion";
import { contactActionHref, contactActionLabel, contactActions, type ContactActionKey } from "../data/company";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { cardBg, toneBg, type Tone } from "./v2/tones";

interface ActionCard {
  key: ContactActionKey;
  icon: IconKey;
  button: string;
}

// Textes des cartes : lib/i18n/ui.ts (contact.cards).
const cards: ActionCard[] = [
  { key: "devis", icon: "clipboard", button: "btn btn-dark" },
  { key: "rendezVous", icon: "calendarCheck", button: "btn btn-secondary" },
  { key: "rappel", icon: "phone", button: "btn btn-secondary" },
];

/**
 * Les trois actions de la page contact. Si `contactActions[key].href` est
 * vide, le bouton est rendu inerte : il n'envoie nulle part. Renseigner le
 * lien dans app/data/company.ts suffit à l'activer.
 */
export function ContactActions({ tone = "white" }: { tone?: Tone }) {
  const locale = getRequestLocale();
  const t = ui(locale).contact;
  return (
    <section className={cn("py-14 lg:py-20", toneBg[tone])} aria-label={t.actionsLabel}>
      <div className="container">
        <ul className="grid gap-4 lg:grid-cols-3">
          {cards.map((card, index) => {
            const action = { ...contactActions[card.key], href: contactActionHref(card.key, undefined, locale), label: contactActionLabel(card.key, locale) };
            const copy = t.cards[card.key];
            return (
              <li key={card.key} id={action.anchor} className="scroll-mt-28">
                <Reveal delay={index * 0.08} className="h-full">
                  <div className={cn("relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 md:p-8", cardBg[tone])}>
                    {index === 0 && <span aria-hidden="true" className="v2-energy absolute inset-x-0 top-0 h-[3px]" />}
                    <span className="v2-wide font-display text-sm font-bold text-flame">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="v2-semi mt-3 font-display text-2xl font-bold text-night">{copy.title}</h2>
                    <p className="mt-3 leading-relaxed text-night/70">{copy.text}</p>
                    <ul className="mt-5 space-y-2">
                      {copy.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-night/80">
                          <FaCheck className="mt-1 h-3 w-3 flex-shrink-0 text-flame" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      {action.href?.startsWith("/") ? (
                        <Link href={action.href} className={cn(card.button, "w-full")}>
                          {action.label}
                        </Link>
                      ) : action.href ? (
                        <a
                          href={action.href}
                          target={/^https?:\/\//.test(action.href) ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={cn(card.button, "w-full")}
                        >
                          {action.label}
                        </a>
                      ) : (
                        // Volontairement inerte pour l'instant : aucun envoi, aucune navigation.
                        <button type="button" data-action={card.key} className={cn(card.button, "w-full")}>
                          {action.label}
                        </button>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
