import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconKey } from "@/components/site/Icon";
import { MissingInfo } from "@/components/site/MissingInfo";
import { Stars } from "@/components/site/GoogleRating";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company, companyText } from "../data/company";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { cn } from "@/lib/utils";
import { cardBg, toneBg, type Tone } from "./v2/tones";
import { PhoneButton, WhatsAppButton } from "./v2/ui";

function Row({ icon, label, children, tone }: { icon: IconKey; label: string; children: ReactNode; tone: Tone }) {
  return (
    <li className="flex gap-4 border-b border-ink/10 py-5 last:border-0">
      <span className={cn("inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl text-night", cardBg[tone])}>
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-ink/50">{label}</p>
        <div className="mt-1 text-ink">{children}</div>
      </div>
    </li>
  );
}

/**
 * Coordonnées (source : app/data/company.ts). Pas d'adresse ni de carte : le
 * siège social n'accueille pas le public (Q20) ; il figure dans le pied de page
 * et les mentions légales.
 */
export function ContactDetails({ tone = "white" }: { tone?: Tone }) {
  const { email, google } = company;
  const locale = getRequestLocale();
  const t = ui(locale);
  const d = t.contact.details;
  const copy = companyText(locale);
  const hours = copy.hours;

  return (
    <section className={cn("py-16 lg:py-24", toneBg[tone])} aria-labelledby="coordonnees">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              id="coordonnees"
              title={d.title}
              intro={d.intro}
              align="left"
              size="md"
            />
          </div>
          <div>
            <ul className="lg:-mt-5">
              <Row tone={tone} icon="phone" label={d.phone}>
                <PhoneButton variant="primary" className="mt-1 min-h-[48px] px-5 text-base" />
                <p className="mt-2 text-sm text-night/60">
                  {copy.promises.availability} · {copy.promises.intervention.toLowerCase()}
                </p>
              </Row>
              <Row tone={tone} icon="whatsapp" label={d.whatsapp}>
                <WhatsAppButton kind="link" className="text-navy">
                  {company.phone.display}
                </WhatsAppButton>
                <p className="mt-1 text-sm text-night/60">
                  {d.whatsappText(copy.whatsappHours)}
                </p>
              </Row>
              <Row tone={tone} icon="envelope" label={d.email}>
                <a href={`mailto:${email}`} className="font-semibold text-navy underline-offset-4 hover:underline">
                  {email}
                </a>
              </Row>
              <Row tone={tone} icon="clock" label={d.hours}>
                <p className="font-semibold">{d.available(hours.summary)}</p>
                {hours.detail ? (
                  <p className="text-sm text-ink/70">
                    {hours.detail} · {d.emergencies(copy.promises.emergency)}
                  </p>
                ) : (
                  <div className="mt-1">
                    <MissingInfo>À fournir : horaires détaillés (ex. lun–ven 7h30–19h, week-end sur urgence)</MissingInfo>
                  </div>
                )}
              </Row>
              <Row tone={tone} icon="home" label={d.zone}>
                {d.zoneText}{" "}
                <Link href="#zones" className="font-semibold text-navy underline underline-offset-2 hover:text-flame">
                  {d.zoneLink}
                </Link>
              </Row>
              <Row tone={tone} icon="award" label={d.reviews}>
                <a href={google.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                  <Stars />
                  <span className="font-semibold group-hover:underline">
                    {t.googleRating(google.rating)}
                  </span>
                </a>
                <p className="mt-1 text-sm text-night/60">
                  {d.alreadyClient}{" "}
                  <a href="/avis" target="_blank" rel="noopener" className="font-semibold text-navy underline-offset-4 hover:underline">
                    {d.leaveReview}
                  </a>
                </p>
              </Row>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
