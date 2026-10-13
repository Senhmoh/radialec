// E-mails de confirmation envoyés au CLIENT après une demande de devis ou de
// rappel : référence, prochaines étapes (rappel sous 2 h), ligne d'urgence
// 24h/24 avec le numéro, récapitulatif. Serveur uniquement.
// HTML compatible clients mail (tables, styles en ligne, aucun dégradé CSS) + version texte.
// Dans la langue de la page d'où vient la demande (français ou néerlandais).

import { company, companyText } from "@/app/data/company";
import type { Locale } from "@/lib/i18n/locale";
import { pagePath } from "@/lib/i18n/routes";
import { label, type QuoteEmailInput } from "./email";
import type { CallbackRequest } from "./callback";
import { quoteLabels } from "./labels";
import { callbackWhen, emergencyLine, quoteNextSteps } from "./messages";

/** Textes fixes du gabarit de confirmation. */
const frame = {
  fr: {
    next: "La suite",
    request: "Votre demande",
    reference: "Référence",
    urgentTitle: "Une urgence\u00a0?",
    urgentText: (emergency: string) => `N'attendez pas notre rappel\u00a0: appelez-nous ${emergency}.`,
    yourMessage: "Votre message",
    question: "Une question, ou une erreur dans votre demande\u00a0? Répondez simplement à cet e-mail.",
    why: "Vous recevez cet e-mail parce que vous avez fait une demande sur notre site.",
    privacy: "Confidentialité",
  },
  nl: {
    next: "Hoe het verder gaat",
    request: "Uw aanvraag",
    reference: "Referentie",
    urgentTitle: "Een noodgeval?",
    urgentText: (emergency: string) => `Wacht niet tot we u terugbellen: bel ons ${emergency}.`,
    yourMessage: "Uw bericht",
    question: "Een vraag, of een fout in uw aanvraag? Beantwoord gewoon deze e-mail.",
    why: "U ontvangt deze e-mail omdat u een aanvraag deed op onze site.",
    privacy: "Privacy",
  },
};

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const firstName = (name: string) => name.trim().split(/\s+/)[0];

// Couleurs de la marque (app/globals.css, tailwind.config.ts).
const night = "#0B1222";
const muted = "#5b6273";
const lavender = "#EAEEFE";
const chalk = "#F6F3EE";
const flame = "#E52619";
const energy = ["#e52619", "#ed7020", "#ffd505", "#38b7e8", "#3468af"];

interface CustomerEmail {
  locale: Locale;
  /** Aperçu affiché par la messagerie après l'objet. */
  preheader: string;
  kicker: string;
  title: string;
  intro: string;
  steps: { title: string; text: string }[];
  recap: [string, string][];
  messageTitle?: string;
  message?: string;
  reference: string;
}

function render(email: CustomerEmail): { html: string; text: string } {
  const logo = `${company.siteUrl}/email/radialec-logo.png`;
  const tel = company.phone.href;
  const f = frame[email.locale];
  const plain = (value: string) => value.replace(/\u00a0/g, " ");

  const text = [
    email.title,
    "",
    email.intro,
    "",
    f.next.toUpperCase(),
    ...email.steps.map((step, i) => `${i + 1}. ${step.title}. ${step.text}`),
    "",
    emergencyLine(email.locale),
    "",
    f.request.toUpperCase(),
    ...email.recap.map(([k, v]) => `${k}${email.locale === "fr" ? " :" : ":"} ${v}`),
    ...(email.message ? ["", `${email.messageTitle}${email.locale === "fr" ? " :" : ":"}`, email.message] : []),
    "",
    plain(f.question),
    "",
    `${company.name} · ${company.siteUrl.replace(/^https?:\/\/(www\.)?/, "")} · ${company.phone.display}`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="${email.locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${escape(email.title)}</title></head>
<body style="margin:0;padding:0;background:${chalk};font-family:Arial,Helvetica,sans-serif;color:${night};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escape(email.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${chalk};padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;">
        <tr><td style="padding:24px 32px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;"><img src="${logo}" width="33" height="37" alt="" style="display:block;border:0;"></td>
            <td style="vertical-align:middle;padding-left:10px;font-size:22px;font-weight:800;letter-spacing:-0.5px;color:${night};">Radialec</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:22px 32px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0"><tr>${energy
              .map((c) => `<td width="7" height="3" style="width:7px;height:3px;background:${c};font-size:0;line-height:0;"></td>`)
              .join("")}</tr></table></td>
            <td style="vertical-align:middle;padding-left:10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:${muted};">${escape(email.kicker)}</td>
          </tr></table>
          <h1 style="margin:14px 0 0;font-size:26px;line-height:1.2;font-weight:800;letter-spacing:-0.5px;color:${night};">${escape(email.title)}</h1>
          <p style="margin:12px 0 0;font-size:16px;line-height:1.6;color:${muted};">${escape(email.intro)}</p>
          <p style="margin:16px 0 0;"><span style="display:inline-block;background:${chalk};border-radius:10px;padding:8px 14px;font-size:12px;color:${muted};">${f.reference}&nbsp;&nbsp;<strong style="font-size:15px;letter-spacing:1px;color:${night};">${escape(email.reference)}</strong></span></p>
        </td></tr>

        <tr><td style="padding:28px 32px 0;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:${muted};">${escape(f.next)}</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${email.steps
            .map(
              (step, i) => `
            <tr><td style="padding:12px 0;border-top:2px solid #eceef3;">
              <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                <td style="vertical-align:top;width:34px;font-size:13px;font-weight:800;color:#ED7020;">${String(i + 1).padStart(2, "0")}</td>
                <td style="vertical-align:top;">
                  <p style="margin:0;font-size:16px;font-weight:700;line-height:1.4;color:${night};">${escape(step.title)}</p>
                  <p style="margin:4px 0 0;font-size:14px;line-height:1.5;color:${muted};">${escape(step.text)}</p>
                </td>
              </tr></table>
            </td></tr>`
            )
            .join("")}
          </table>
        </td></tr>

        <tr><td style="padding:20px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${lavender};border-radius:16px;">
            <tr><td style="padding:20px 22px;">
              <p style="margin:0;font-size:17px;font-weight:800;color:${night};">${escape(f.urgentTitle)}</p>
              <p style="margin:6px 0 0;font-size:14px;line-height:1.5;color:${muted};">${escape(f.urgentText(companyText(email.locale).promises.emergency))}</p>
              <p style="margin:14px 0 0;"><a href="${tel}" style="display:inline-block;background:${flame};color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:13px 22px;border-radius:12px;">&#9742;&nbsp; ${escape(company.phone.display)}</a></p>
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:28px 32px 0;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:${muted};">${escape(f.request)}</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${email.recap
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:9px 14px 9px 0;border-top:1px solid #eceef3;font-size:13px;color:${muted};vertical-align:top;width:38%;">${escape(k)}</td>
              <td style="padding:9px 0;border-top:1px solid #eceef3;font-size:14px;font-weight:600;color:${night};vertical-align:top;">${escape(v)}</td>
            </tr>`
            )
            .join("")}
          </table>${
            email.message
              ? `
          <p style="margin:18px 0 6px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;color:${muted};">${escape(email.messageTitle ?? f.yourMessage)}</p>
          <div style="background:${chalk};border-radius:12px;padding:14px 16px;font-size:14px;line-height:1.6;color:${night};white-space:pre-wrap;">${escape(email.message)}</div>`
              : ""
          }
        </td></tr>

        <tr><td style="padding:24px 32px 30px;">
          <p style="margin:0;font-size:14px;line-height:1.6;color:${muted};">${escape(f.question)}</p>
        </td></tr>
      </table>
      <p style="margin:18px 0 0;font-size:12px;line-height:1.6;color:#8a8f9c;text-align:center;">
        ${escape(company.name)} · <a href="${company.siteUrl}" style="color:#8a8f9c;">${escape(company.siteUrl.replace(/^https?:\/\/(www\.)?/, ""))}</a> · ${escape(company.phone.display)}<br>
        ${escape(f.why)} <a href="${company.siteUrl}${pagePath("confidentialite", email.locale)}" style="color:#8a8f9c;">${escape(f.privacy)}</a>
      </p>
    </td></tr>
  </table>
</body></html>`;

  return { html, text };
}

const quoteCopy = {
  fr: {
    recap: {
      service: "Prestation",
      category: "Domaine",
      price: "Prix affiché sur le site",
      type: "Nature",
      timing: "Délai souhaité",
      property: "Type de bien",
      address: "Adresse",
      phone: "Téléphone",
      email: "E-mail",
      contact: "Être contacté",
      photos: "Photos jointes",
      none: "Aucune",
    },
    kicker: "Demande de devis reçue",
    title: (name: string) => `Merci ${name}, votre demande est bien arrivée.`,
    intro: (service: string) =>
      `Nous avons bien reçu votre demande de devis pour : ${service}. Voici la suite, et le récapitulatif de ce que vous nous avez envoyé.`,
    messageTitle: "Votre description",
    subject: (reference: string) => `Votre demande de devis Radialec · ${reference}`,
  },
  nl: {
    recap: {
      service: "Dienst",
      category: "Domein",
      price: "Prijs op de site",
      type: "Soort aanvraag",
      timing: "Gewenste termijn",
      property: "Type pand",
      address: "Adres",
      phone: "Telefoon",
      email: "E-mail",
      contact: "Contact via",
      photos: "Foto's bijgevoegd",
      none: "Geen",
    },
    kicker: "Offerteaanvraag ontvangen",
    title: (name: string) => `Bedankt ${name}, uw aanvraag is goed aangekomen.`,
    intro: (service: string) =>
      `We hebben uw offerteaanvraag voor ${service} goed ontvangen. Hieronder leest u hoe het verder gaat, met een overzicht van wat u ons stuurde.`,
    messageTitle: "Uw beschrijving",
    subject: (reference: string) => `Uw offerteaanvraag bij Radialec · ${reference}`,
  },
};

/** Confirmation d'une demande de devis, avec le récapitulatif complet. */
export function buildQuoteConfirmation(input: QuoteEmailInput) {
  const { quote, locale } = input;
  const c = quoteCopy[locale];
  const l = quoteLabels(locale);
  const slot = quote.callbackSlot === "indifferent" ? "" : `, ${label(l.callbackSlots, quote.callbackSlot).toLowerCase()}`;
  const recap: [string, string][] = [
    [c.recap.service, input.customerLabels.service],
    [c.recap.category, input.customerLabels.category],
    ...(input.displayedPrice ? ([[c.recap.price, input.displayedPrice]] as [string, string][]) : []),
    [c.recap.type, label(l.requestTypes, quote.requestType)],
    [c.recap.timing, label(l.timings, quote.timing)],
    [c.recap.property, label(l.properties, quote.property)],
    [c.recap.address, [quote.address, `${quote.postalCode} ${quote.commune}`].filter(Boolean).join(", ")],
    [c.recap.phone, quote.phone],
    [c.recap.email, quote.email],
    [c.recap.contact, `${label(l.contactPreferences, quote.contactPreference)}${slot}`],
    [c.recap.photos, input.photoCount ? String(input.photoCount) : c.recap.none],
  ];
  const steps = quoteNextSteps(quote, locale);
  const { html, text } = render({
    locale,
    preheader: `${steps[0].title}. ${emergencyLine(locale)}`,
    kicker: c.kicker,
    title: c.title(firstName(quote.name)),
    intro: c.intro(input.customerLabels.service),
    steps,
    recap,
    messageTitle: c.messageTitle,
    message: quote.description,
    reference: input.reference,
  });
  return { subject: c.subject(input.reference), html, text };
}

const callbackCopy = {
  fr: {
    reason: "Motif",
    reasonAppointment: "Fixer un rendez-vous",
    reasonCallback: "Être rappelé",
    phone: "Téléphone",
    moment: "Moment",
    topic: "Sujet",
    origin: "Depuis la page",
    step: (when: string) => `Nous vous rappelons ${when}`,
    at: (step: string, phone: string) => `${step}, au ${phone}.`,
    kickerAppointment: "Rendez-vous à fixer",
    kickerCallback: "Demande de rappel reçue",
    title: (name: string) => `Merci ${name}, c'est noté.`,
    callTitle: "Un technicien vous appelle",
    callAppointment: "Vous fixez ensemble le créneau de votre rendez-vous.",
    callCallback: "Il répond à votre question ou organise l'intervention avec vous.",
    freeTitle: "Sans engagement",
    freeText: "Vous décidez de la suite après l'appel.",
    messageTitle: "Votre message",
    subject: (appointment: boolean, reference: string) =>
      `Votre demande ${appointment ? "de rendez-vous" : "de rappel"} Radialec · ${reference}`,
  },
  nl: {
    reason: "Reden",
    reasonAppointment: "Een afspraak maken",
    reasonCallback: "Teruggebeld worden",
    phone: "Telefoon",
    moment: "Moment",
    topic: "Onderwerp",
    origin: "Vanaf de pagina",
    step: (when: string) => `We bellen u terug ${when}`,
    at: (step: string, phone: string) => `${step}, op ${phone}.`,
    kickerAppointment: "Afspraak vast te leggen",
    kickerCallback: "Terugbelverzoek ontvangen",
    title: (name: string) => `Bedankt ${name}, het is genoteerd.`,
    callTitle: "Een technicus belt u",
    callAppointment: "Samen legt u het moment van uw afspraak vast.",
    callCallback: "Hij beantwoordt uw vraag of plant de interventie met u.",
    freeTitle: "Vrijblijvend",
    freeText: "Na het gesprek beslist u hoe het verder gaat.",
    messageTitle: "Uw bericht",
    subject: (appointment: boolean, reference: string) =>
      `Uw ${appointment ? "afspraakaanvraag" : "terugbelverzoek"} bij Radialec · ${reference}`,
  },
};

/** Confirmation d'une demande de rappel (ou de rendez-vous à fixer par téléphone). */
export function buildCallbackConfirmation(input: {
  callback: CallbackRequest;
  reference: string;
  /** Sujet et page d'origine, dans la langue du client. */
  topic?: string;
  origin?: string;
  locale: Locale;
}) {
  const { callback, locale } = input;
  const c = callbackCopy[locale];
  const rendezVous = callback.purpose === "rendez-vous";
  const when = callbackWhen(callback, locale);
  const recap: [string, string][] = [
    [c.reason, rendezVous ? c.reasonAppointment : c.reasonCallback],
    [c.phone, callback.phone],
    [c.moment, quoteLabels(locale).callbackTimes[callback.time]],
    ...(input.topic ? ([[c.topic, input.topic]] as [string, string][]) : []),
    ...(input.origin ? ([[c.origin, input.origin]] as [string, string][]) : []),
  ];
  const step = c.step(when);
  const { html, text } = render({
    locale,
    preheader: `${step}. ${emergencyLine(locale)}`,
    kicker: rendezVous ? c.kickerAppointment : c.kickerCallback,
    title: c.title(firstName(callback.name)),
    intro: c.at(step, callback.phone),
    steps: [
      { title: c.callTitle, text: rendezVous ? c.callAppointment : c.callCallback },
      { title: c.freeTitle, text: c.freeText },
    ],
    recap,
    messageTitle: c.messageTitle,
    message: callback.message,
    reference: input.reference,
  });
  return { subject: c.subject(rendezVous, input.reference), html, text };
}
