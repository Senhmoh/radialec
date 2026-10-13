import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
// Copie nettoyée (ombre noire semi-transparente retirée) de technicien_noir_debout_souriant_doigt_sur_tablette_coupe_aux_cuisses.png.
import technicienTablette from "@/assets/refonte/technicien-tablette-detoure.png";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Motion";
import { RichText } from "@/components/site/RichText";
import { cn } from "@/lib/utils";
import { fr } from "@/lib/typography";
import { boilerBrands, certifications } from "@/app/data/brands";
import { categoryLabel } from "@/app/data/categories";
import { company, companyText, contactActionHref } from "@/app/data/company";
import { pickReviews, reviewDate, type ReviewContext } from "@/app/data/reviews";
import { existingServices, findServiceByRef, serviceHref, type ServiceIntent, type ServiceRef, type Verdict } from "@/app/data/services";
import { localeZones } from "@/app/data/zones-intervention";
import { intlLocale } from "@/lib/i18n/locale";
import { getRequestLocale } from "@/lib/i18n/server";
import { ui } from "@/lib/i18n/ui";
import { cardBg, toneBg, type Tone } from "./tones";
import { ButtonLink, Eyebrow, PhoneButton, SectionTitle, WhatsAppButton, type Surface } from "./ui";

/* ------------------------------------------------------------------ */
/* Marques                                                             */
/* ------------------------------------------------------------------ */

export function BrandsV2({ title, intro, tone = "white" }: { title: string; intro?: string; tone?: Tone }) {
  const locale = getRequestLocale();
  const t = ui(locale).brands;
  // Lien vers l'entretien de chaudière, dans la langue de la page (s'il existe).
  const maintenance = findServiceByRef("chauffage/entretien-chaudiere", locale);
  return (
    <section className={cn("py-20 lg:py-28", toneBg[tone])} aria-labelledby="marques-titre">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <SectionTitle id="marques-titre" eyebrow={t.eyebrow} title={title} intro={intro} />
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-night/[0.07] ring-1 ring-night/[0.07] sm:grid-cols-4">
            {boilerBrands.map((brand) => (
              <li key={brand.alt} className="group flex h-24 items-center justify-center bg-white px-5 lg:h-28">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  sizes="160px"
                  className="max-h-9 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
            {maintenance && (
              <li className="bg-night">
                <Link
                  href={serviceHref(maintenance)}
                  className="group flex h-24 items-center justify-center gap-2 px-5 text-center text-sm font-semibold text-white lg:h-28"
                >
                  {t.maintenanceLink}
                  <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Encadré comparatif (gaz / mazout / PAC)                             */
/* ------------------------------------------------------------------ */

// Verdicts typographiques : barre de couleur du logo + statut en grand, sans pictogramme.
const verdictTone: Record<Verdict["tone"], { bar: string; status: string }> = {
  flame: { bar: "bg-flame", status: "text-flame" },
  water: { bar: "bg-water", status: "text-water" },
  off: { bar: "bg-night/15", status: "text-night/35" },
};

export function CalloutV2({
  title,
  paragraphs,
  verdicts,
  tone = "white",
}: {
  title: string;
  paragraphs: string[];
  verdicts?: Verdict[];
  tone?: Tone;
}) {
  return (
    <section className={cn("py-20 lg:py-28", toneBg[tone])} aria-labelledby="choix-titre">
      <div className={cn("container grid gap-12 lg:gap-20", verdicts?.length ? "lg:grid-cols-[1.05fr_0.95fr]" : "")}>
        <div className={verdicts?.length ? undefined : "max-w-3xl"}>
          <SectionTitle id="choix-titre" eyebrow={ui(getRequestLocale()).callout.eyebrow} title={title} />
          <div className="mt-8 space-y-4 border-l-2 border-night/10 pl-6 text-[17px] leading-relaxed text-night/75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} linkClassName="font-semibold text-water underline underline-offset-4 hover:text-night" />
              </p>
            ))}
          </div>
        </div>

        {verdicts && verdicts.length > 0 && (
          <ul className="divide-y divide-night/10 self-center border-y border-night/10">
            {verdicts.map((verdict) => {
              const tone = verdictTone[verdict.tone];
              const off = verdict.tone === "off";
              return (
                <li key={verdict.label} className="relative flex items-center justify-between gap-6 py-6 pl-6">
                  <span aria-hidden="true" className={cn("absolute bottom-6 left-0 top-6 w-1 rounded-full", tone.bar)} />
                  <div>
                    <p className={cn("v2-semi font-display text-lg font-bold text-night", off && "text-night/45 line-through decoration-2")}>
                      {verdict.label}
                    </p>
                    <p className="mt-1 text-sm text-night/60">{fr(verdict.note)}</p>
                  </div>
                  <p className={cn("v2-wide flex-shrink-0 text-right font-display text-xl font-extrabold tracking-tight lg:text-2xl", tone.status)}>
                    {fr(verdict.status)}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Chiffres mis en avant (garantie)                                    */
/* ------------------------------------------------------------------ */

export function HighlightV2({
  eyebrow,
  title,
  figures,
  paragraphs,
  note,
  surface = "lavender",
}: {
  eyebrow?: string;
  title: string;
  figures: { value: string; label: string }[];
  paragraphs: string[];
  note?: string;
  surface?: Surface;
}) {
  const light = surface === "lavender";
  return (
    <section
      className={cn("relative isolate overflow-hidden py-20 lg:py-28", light ? "bg-lavender text-night" : "bg-night text-white")}
      aria-labelledby="garantie-titre"
    >
      <div aria-hidden="true" className="v2-glow" />
      <div className="container">
        {eyebrow && <Eyebrow tone={light ? "dark" : "light"}>{eyebrow}</Eyebrow>}
        <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-8 lg:gap-x-12">
          {figures.map((figure, index) => (
            <div key={figure.label} className="flex items-start gap-8 lg:gap-12">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className={cn("v2-wide pt-2 font-display text-5xl font-light leading-none lg:text-7xl", light ? "text-night/25" : "text-white/25")}
                >
                  +
                </span>
              )}
              <div>
                <p className="v2-wide font-display text-[4.2rem] font-extrabold leading-[0.9] tracking-[-0.04em] sm:text-[5rem] lg:text-[6.5rem]">
                  {figure.value}
                </p>
                <p className={cn("mt-4 text-sm", light ? "text-night/60" : "text-white/60")}>{figure.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={cn("mt-14 grid gap-8 border-t pt-10 lg:grid-cols-2 lg:gap-20", light ? "border-night/10" : "border-white/10")}>
          <h2 id="garantie-titre" className={cn("v2-title text-[2rem] lg:text-[2.4rem]", light ? "text-night" : "text-white")}>
            {fr(title)}
          </h2>
          <div className={cn("space-y-4 text-[17px] leading-relaxed", light ? "text-night/75" : "text-white/75")}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} strongClassName={cn("font-semibold", light ? "text-night" : "text-white")} />
              </p>
            ))}
            {/* Condition de la garantie : lisible et juste sous la promesse, jamais en petites lignes (Q38). */}
            {note && (
              <p className={cn("border-l-2 border-flame pl-4 text-base", light ? "text-night/80" : "text-white/80")}>{fr(note)}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bandeau d'appel (milieu de page)                                    */
/* ------------------------------------------------------------------ */

// Textes par défaut du bandeau d'appel, par intention (repris de l'ancien CallBand,
// lib/i18n/ui.ts). Les pages chauffage gardent la version « chaudière » de la page pilote.
function callBandCopy(key: ServiceIntent | "chaudiere"): { eyebrow: string; title: string; text: string } {
  const locale = getRequestLocale();
  const copy = ui(locale).callBand.copy;
  const { availability, emergency } = companyText(locale).promises;
  switch (key) {
    case "chaudiere":
      return { ...copy.chaudiere, text: copy.chaudiere.text(availability) };
    case "urgence":
      return { eyebrow: copy.urgence.eyebrow(emergency), title: copy.urgence.title(emergency), text: copy.urgence.text };
    default:
      return copy[key];
  }
}

export function CallBandV2({
  context,
  copyKey,
  topic,
  surface = "lavender",
  intent = "installation",
  title,
  text,
  tone = "white",
  attached,
}: {
  /** Page d'origine transmise au rappel / rendez-vous (absente sur /contact). */
  context?: string;
  /** Texte à utiliser (défaut : « chaudière » sur les pages chauffage, sinon celui de l'intention). */
  copyKey?: ServiceIntent | "chaudiere";
  /** Sujet du message WhatsApp pré-rempli. */
  topic?: string;
  surface?: Surface;
  intent?: ServiceIntent;
  /** Surcharges venant des données (bloc `callBand`). */
  title?: string;
  text?: string;
  /** Fond de la section prolongée (le bandeau n'a pas de fond propre, voir tones.ts). */
  tone?: Tone;
  /** Prolonge la section précédente : pas de marge haute. */
  attached?: boolean;
}) {
  const light = surface === "lavender";
  const locale = getRequestLocale();
  const t = ui(locale);
  // Pages chauffage : texte « chaudière », sauf en dépannage (texte d'urgence, on décroche 24h/24).
  const copy = callBandCopy(copyKey ?? (intent !== "urgence" && context?.startsWith("chauffage") ? "chaudiere" : intent));
  // Entretien : le rendez-vous reste la 2e action, WhatsApp passe en lien. Ailleurs :
  // WhatsApp (photo de la panne ou du projet), le rappel en repli (prompts/refonte/06).
  const entretien = intent === "entretien";
  const linkClass = cn("font-semibold underline underline-offset-4 hover:no-underline", light ? "text-night" : "text-white");
  return (
    // Pas de fond propre : la section reprend celui de la section qu'elle prolonge, seule la carte lavande se voit.
    <section className={cn(toneBg[tone], attached ? "pb-16 lg:pb-28" : "py-16 lg:py-24")} aria-label={t.callBand.ariaLabel}>
      <div className="container">
        <Reveal>
          <div
            className={cn(
              "relative isolate overflow-hidden rounded-[32px] px-6 pt-10 sm:px-10 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-10 lg:px-14 lg:pt-0",
              light ? "bg-lavender text-night" : "bg-night text-white"
            )}
          >
            <div aria-hidden="true" className="v2-glow" />
            <div className="lg:py-14">
              <Eyebrow tone={light ? "dark" : "light"}>{copy.eyebrow}</Eyebrow>
              <h2 className={cn("v2-title mt-5 text-[1.9rem] lg:text-[2.6rem]", light ? "text-night" : "text-white")}>{fr(title ?? copy.title)}</h2>
              <p className={cn("mt-4 max-w-xl", light ? "text-night/70" : "text-white/70")}>{fr(text ?? copy.text)}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PhoneButton variant="primary" className="min-h-[56px] px-7 text-base" />
                {entretien ? (
                  <ButtonLink href={contactActionHref("rendezVous", context, locale)} variant="light" className="min-h-[56px]">
                    {t.common.bookAppointment}
                  </ButtonLink>
                ) : (
                  <WhatsAppButton topic={topic} variant="light" className="min-h-[56px]">
                    {t.whatsapp.write}
                  </WhatsAppButton>
                )}
              </div>
              <p className={cn("mt-5 text-sm font-medium", light ? "text-night/70" : "text-white/70")}>
                {entretien ? t.callBand.beforeBooking : t.callBand.preferCall}
                {entretien && (
                  <>
                    <WhatsAppButton topic={topic} kind="link" className={linkClass}>
                      WhatsApp
                    </WhatsAppButton>
                    {" · "}
                  </>
                )}
                <Link href={contactActionHref("rappel", context, locale)} className={linkClass}>
                  {t.common.callback}
                </Link>
              </p>
            </div>
            <div className="relative mx-auto mt-10 h-[280px] w-[240px] sm:h-[340px] sm:w-[290px] lg:mt-0 lg:h-[400px] lg:w-full">
              <Image
                src={technicienTablette}
                alt={t.callBand.technicianAlt}
                fill
                sizes="(min-width: 1024px) 340px, 290px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Preuve : avis Google + agréments                                    */
/* ------------------------------------------------------------------ */

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex text-bolt drop-shadow-[0_1px_0_rgba(11,18,34,0.25)]", className)} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className="h-full w-auto" />
      ))}
    </span>
  );
}

/**
 * « Ils nous font confiance » : la note Google, trois avis réels choisis pour la
 * page (même prestation, puis même métier, puis les plus récents : `pickReviews`),
 * puis les agréments en ligne compacte. Mobile : les avis défilent à l'horizontale
 * pour ne pas allonger la page (prompts/refonte/06).
 */
export function ProofV2({
  tone = "white",
  context,
  footnote,
}: {
  tone?: Tone;
  /** Prestation de la page : choisit les avis les plus parlants. */
  context?: ReviewContext;
  /** Note sous la section (ex. info à fournir). */
  footnote?: React.ReactNode;
}) {
  const { rating, reviewsFloor, url } = company.google;
  const picked = pickReviews(context);
  const locale = getRequestLocale();
  const t = ui(locale);
  return (
    <section className={cn("py-20 lg:py-28", toneBg[tone])} aria-labelledby="confiance-titre">
      <div className="container">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow>{t.proof.eyebrow}</Eyebrow>
            <h2 id="confiance-titre" className="v2-title mt-5 text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem]">
              {fr(t.proof.title)}
            </h2>
            {/* Avis affichés mot pour mot, dans leur langue d'origine (jamais traduits ni réécrits). */}
            {t.proof.originalLanguage && <p className="mt-3 text-sm text-night/55">{t.proof.originalLanguage}</p>}
          </div>
          <div className="mt-8 flex items-center gap-5 lg:mt-0">
            <p className="v2-wide font-display text-[4rem] font-extrabold leading-none tracking-[-0.04em] text-night lg:text-[5rem]">
              {rating.toLocaleString(intlLocale[locale], { minimumFractionDigits: 1 })}
            </p>
            <div>
              <Stars className="h-5" />
              <p className="mt-1.5 text-sm font-semibold text-night">{t.proof.reviewsFloor(reviewsFloor)}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-night/70 underline decoration-night/20 underline-offset-4 transition-colors hover:text-night hover:decoration-flame"
              >
                {t.proof.readAll}
                <BsArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <ul
          className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0 lg:mt-14 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          aria-label={t.proof.listLabel}
        >
          {picked.map((review) => (
            <li
              key={review.author}
              className={cn("flex w-[85%] flex-shrink-0 snap-start flex-col rounded-[28px] p-7 sm:w-[62%] lg:w-auto lg:p-8", cardBg[tone])}
            >
              <Stars className="h-4" />
              <blockquote lang="fr" className="mb-6 mt-5 text-[16px] leading-relaxed text-night/80 lg:text-[17px]">« {fr(review.text)} »</blockquote>
              <p className="mt-auto border-t border-night/10 pt-5">
                <span className="v2-semi block font-display font-bold text-night">{review.author}</span>
                <span className="mt-0.5 block text-xs text-night/50">{t.proof.source(reviewDate(review.date, t.months))}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 border-t border-night/10 pt-10 lg:mt-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <p className="v2-semi font-display text-xl font-bold text-night">{t.proof.certTitle}</p>
            <ul className="mt-4 flex flex-col gap-x-8 gap-y-2.5 text-night/75 sm:flex-row sm:flex-wrap">
              {/* Repris du texte validé de la page (intro, CTA). */}
              {t.proof.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FaCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-flame" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid grid-cols-3 gap-3 lg:w-[420px]">
            {certifications.map((logo) => (
              <li key={logo.alt} className={cn("flex h-20 items-center justify-center rounded-2xl p-4", cardBg[tone])}>
                <Image src={logo.src} alt={(locale === "nl" && logo.altNl) || logo.alt} sizes="140px" className="max-h-full w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {footnote && <div className="container mt-12">{footnote}</div>}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Zone d'intervention                                                 */
/* ------------------------------------------------------------------ */

export function ZonesV2({ intro, tone = "white" }: { intro?: string; tone?: Tone }) {
  const locale = getRequestLocale();
  const t = ui(locale).zones;
  return (
    <section className={cn("scroll-mt-24 py-20 lg:py-28", toneBg[tone])} aria-labelledby="zones-titre" id="zones">
      <div className="container">
        <SectionTitle
          id="zones-titre"
          eyebrow={t.eyebrow}
          title={t.title}
          intro={intro ?? t.intro}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {localeZones(locale).map((zone) => (
            <div key={zone.region}>
              <h3 className="v2-semi font-display text-base font-bold text-night">{zone.region}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {zone.communes.map((commune) => (
                  <li key={commune} className={cn("rounded-full px-3.5 py-1.5 text-sm text-night/75 ring-1 ring-night/[0.06]", cardBg[tone])}>
                    {commune}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services liés (maillage interne)                                    */
/* ------------------------------------------------------------------ */

export function RelatedV2({
  refs,
  eyebrow,
  title,
  intro,
  tone = "white",
}: {
  refs: ServiceRef[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: Tone;
}) {
  const locale = getRequestLocale();
  const t = ui(locale);
  // En néerlandais, les pages pas encore traduites sont omises.
  const related = existingServices(refs, locale);
  if (related.length === 0) return null;
  return (
    <section className={cn("py-20 lg:py-28", toneBg[tone])} aria-labelledby="lies-titre">
      <div className="container">
        <SectionTitle id="lies-titre" eyebrow={eyebrow ?? t.related.eyebrow} title={title ?? t.related.title} intro={intro} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((service) => (
            <li key={serviceHref(service)}>
              <Link
                href={serviceHref(service)}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:bg-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water-light",
                  cardBg[tone]
                )}
              >
                <span className="v2-energy absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl text-night transition-colors group-hover:bg-white/10 group-hover:text-white", toneBg[tone])}>
                  <Icon name={service.icon} className="h-4 w-4" />
                </span>
                <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-night/45 group-hover:text-white/50">
                  {categoryLabel(service.category, locale)}
                </span>
                <span className="v2-semi mt-1.5 font-display text-lg font-bold leading-snug text-night group-hover:text-white">
                  {service.name}
                </span>
                <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-night/65 group-hover:text-white/65">{service.summary}</span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-night group-hover:text-white">
                  {t.common.discover}
                  <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
