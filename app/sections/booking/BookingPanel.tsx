"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Icon } from "@/components/site/Icon";
import { PhoneLink } from "@/components/site/Actions";
import { fr } from "@/lib/typography";
import type { BookingEvent } from "@/app/data/company";
import { useLocale } from "@/lib/i18n/client";
import { ui } from "@/lib/i18n/ui";
import { CallbackForm } from "../CallbackForm";

function BookerLoading() {
  const t = ui(useLocale()).booking;
  return (
    <div className="flex h-[560px] items-center justify-center rounded-2xl bg-lavender/40 text-sm font-medium text-ink/50">
      {t.loading}
    </div>
  );
}

// Le script Cal.com n'est chargé que si l'agenda s'affiche.
const CalBooker = dynamic(() => import("./CalBooker").then((m) => m.CalBooker), {
  ssr: false,
  loading: BookerLoading,
});

type Mode =
  | { kind: "pending" }
  | { kind: "booking"; event: BookingEvent }
  /** `unavailable` : la prestation d'origine n'a pas de réservation en ligne. */
  | { kind: "callback"; reason: "unavailable" | "chosen" };

interface BookingPanelProps {
  events: BookingEvent[];
  defaultEvent: string;
  brandColor: string;
  /** Libellés des pages d'origine possibles (« categorie/slug » ou « categorie »). */
  labels: Record<string, string>;
  /** Agenda réservé à l'offre flyer (?offre=flyer, depuis /offre). */
  flyerEvent?: BookingEvent | null;
}

/**
 * Cœur de /rendez-vous. La page d'origine (`?service=`) choisit l'agenda
 * Cal.com correspondant ; sans agenda pour cette prestation, le visiteur est
 * invité à se faire rappeler pour fixer le créneau (jamais un agenda d'une
 * autre prestation).
 */
export function BookingPanel({ events, defaultEvent, brandColor, labels, flyerEvent }: BookingPanelProps) {
  const [context, setContext] = useState<string>();
  const [mode, setMode] = useState<Mode>({ kind: "pending" });
  const panel = useRef<HTMLDivElement>(null);
  const switched = useRef(false);
  const fallbackEvent = events.find((e) => e.calLink === defaultEvent);
  const locale = useLocale();
  const t = ui(locale);
  const b = t.booking;
  // Libellé affiché dans la langue de la page (le libellé français reste celui des statistiques).
  const eventLabel = (event: BookingEvent) => (locale === "nl" ? event.labelNl : event.label);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const origin = params.get("service") ?? undefined;
    // Offre flyer : son propre agenda (prix de l'offre), jamais l'agenda au prix normal.
    const flyer = params.get("offre") === "flyer" ? flyerEvent ?? undefined : undefined;
    const event = flyer ?? (origin ? events.find((e) => e.services.includes(origin)) : events.find((e) => e.calLink === defaultEvent));
    setContext(origin);
    setMode(event ? { kind: "booking", event } : { kind: "callback", reason: "unavailable" });
  }, [events, defaultEvent, flyerEvent]);

  // Après un changement de mode demandé par le visiteur, ramener le haut du
  // nouveau contenu à l'écran (l'agenda est bien plus haut que le formulaire).
  useEffect(() => {
    if (!switched.current) return;
    switched.current = false;
    panel.current?.scrollIntoView({ block: "start" });
  }, [mode]);

  const switchTo = (next: Mode) => {
    switched.current = true;
    setMode(next);
  };

  if (mode.kind === "pending") {
    return (
      <div className="rounded-[2rem] bg-white p-4 shadow-soft ring-1 ring-ink/5 sm:p-6">
        <BookerLoading />
      </div>
    );
  }

  if (mode.kind === "booking") {
    return (
      <div ref={panel} className="scroll-mt-28 space-y-4">
        <div className="rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-ink/5 sm:p-6">
          <div className="flex items-center gap-4 px-2 pb-4 pt-2 sm:px-2">
            <span className="bg-flame inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-white">
              <Icon name="calendarCheck" className="h-5 w-5" />
            </span>
            <div>
              <p className="eyebrow">{b.online}</p>
              <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">{eventLabel(mode.event)}</h2>
            </div>
          </div>
          <div className="min-h-[560px]">
            <CalBooker calLink={mode.event.calLink} label={mode.event.label} brandColor={brandColor} />
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] bg-white/70 p-6 ring-1 ring-ink/5 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-xl text-ink/80">
            <strong className="text-ink">{b.otherTitle}</strong> {b.otherText}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => switchTo({ kind: "callback", reason: "chosen" })}
              className="btn btn-secondary btn-sm"
            >
              {t.common.callback}
            </button>
            <PhoneLink variant="dark" className="btn-sm" />
          </div>
        </div>
      </div>
    );
  }

  const origin = mode.reason === "unavailable" && context ? labels[context] : undefined;

  return (
    <div ref={panel} className="mx-auto max-w-3xl scroll-mt-28">
      <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-8 md:p-10">
        <p className="eyebrow">{b.callbackEyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tighter text-ink md:text-3xl">
          {fr(origin ? b.callbackTitleFor(origin) : b.callbackTitle)}
        </h2>
        <p className="mt-3 leading-relaxed text-ink/75">{fr(origin ? b.callbackTextUnavailable : b.callbackText)}</p>
        <div className="mt-8">
          <CallbackForm context={context} purpose="rendez-vous" />
        </div>
      </div>

      {fallbackEvent && (
        <p className="mt-6 text-center text-sm text-ink/70">
          {eventLabel(fallbackEvent)}
          {locale === "fr" ? "\u00a0?" : "?"}{" "}
          <button
            type="button"
            onClick={() => switchTo({ kind: "booking", event: fallbackEvent })}
            className="group inline-flex items-center gap-1.5 font-bold text-navy underline-offset-4 hover:underline"
          >
            {b.bookDirectly}
            <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </p>
      )}
    </div>
  );
}
