"use client";
import { FaCheck, FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { company, companyText } from "@/app/data/company";
import type { QuoteRequest } from "@/lib/quote/schema";
import { quoteLabels } from "@/lib/quote/labels";
import { useLocale } from "@/lib/i18n/client";
import { ui } from "@/lib/i18n/ui";
import { Eyebrow, PhoneButton, WhatsAppButton } from "../v2/ui";

interface QuoteSummaryProps {
  quote: QuoteRequest;
  categoryLabel?: string;
  serviceLabel?: string;
  amount?: number;
  photoCount: number;
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3">
      <dt className="text-sm text-night/50">{label}</dt>
      <dd className={cn("min-w-0 truncate text-right text-[15px]", value ? "v2-semi font-display font-bold text-night" : "text-night/25")}>
        {value || "—"}
      </dd>
    </div>
  );
}

/** Récapitulatif vivant de la demande (colonne de gauche, desktop) et aide « panne en cours ». */
export function QuoteSummary({ quote, categoryLabel, serviceLabel, amount, photoCount }: QuoteSummaryProps) {
  const locality = [quote.postalCode, quote.commune].filter(Boolean).join(" ");
  const locale = useLocale();
  const t = ui(locale);
  const s = t.quote.summary;
  const labels = quoteLabels(locale);

  return (
    <div className="space-y-4">
      <div className="rounded-[28px] bg-white/75 p-6 ring-1 ring-night/[0.06] xl:p-7">
        <Eyebrow>{s.title}</Eyebrow>
        <dl className="mt-4 divide-y divide-night/[0.07]">
          <Row label={s.domain} value={categoryLabel} />
          <Row label={s.service} value={serviceLabel} />
          <Row label={s.type} value={quote.requestType ? labels.requestTypes[quote.requestType] : undefined} />
          <Row label={s.timing} value={quote.timing ? labels.timings[quote.timing] : undefined} />
          <Row label={s.property} value={quote.property ? labels.properties[quote.property] : undefined} />
          <Row label={s.locality} value={locality} />
          <Row label={s.photos} value={photoCount ? String(photoCount) : undefined} />
        </dl>

        {amount !== undefined && (
          <div className="mt-4 flex items-baseline justify-between gap-4 rounded-2xl bg-lavender px-4 py-3.5">
            <span className="text-sm font-medium text-night/70">{s.price}</span>
            <span className="v2-semi font-display text-2xl font-bold tabular-nums text-night">
              {amount}€ <span className="text-xs font-medium text-night/55">{t.pricing.vat}</span>
            </span>
          </div>
        )}

        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-night/[0.07] pt-5 text-sm text-night/75">
          {s.points.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <FaCheck className="h-3 w-3 flex-shrink-0 text-flame" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-night p-6 text-white xl:p-7">
        <span aria-hidden="true" className="v2-energy absolute inset-x-0 top-0 h-[3px]" />
        <p className="v2-semi font-display text-lg font-bold">{t.quote.breakdownTitle}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/65">{t.quote.breakdownSummary(companyText(locale).promises.availability)}</p>
        <PhoneButton variant="primary" className="mt-5 min-h-[52px] w-full text-base" />
        <WhatsAppButton variant="outlineLight" className="mt-2.5 min-h-[48px] w-full text-sm">
          {t.quote.whatsappPhoto}
        </WhatsAppButton>
        <a
          href={company.google.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 text-sm text-white/65 hover:text-white"
        >
          <span className="flex text-bolt" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className="h-3 w-3" />
            ))}
          </span>
          {t.googleRating(company.google.rating)}
        </a>
      </div>
    </div>
  );
}
