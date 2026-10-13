"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { company } from "@/app/data/company";
import { emptyCallback, topicFromContext, validateCallback, type CallbackErrors, type CallbackRequest } from "@/lib/quote/callback";
import { useAttribution } from "@/components/site/useAttribution";
import { trackLead } from "@/lib/tracking";
import { btn, PhoneButton } from "./ui";

/**
 * Heure de Bruxelles (0-23), quel que soit le fuseau du visiteur. Lue dans les
 * « parts » du format : en fr-BE l'heure s'écrit « 16 h », que Number() ne lit pas.
 */
function brusselsHour(): number {
  const parts = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hourCycle: "h23", timeZone: "Europe/Brussels" }).formatToParts(new Date());
  return Number(parts.find((part) => part.type === "hour")?.value);
}

type Moment = "open" | "closed";

/**
 * Colonne de droite du haut des pages métier (remplace « Votre besoin ? »,
 * redondant avec la grille des services juste en dessous) :
 * - un statut honnête, calculé sur l'heure de Bruxelles : en journée « on
 *   décroche », la nuit « pour une urgence, on décroche quand même » ;
 * - un rappel express (prénom + téléphone) envoyé par /api/rappel (e-mail +
 *   Telegram), avec la page d'origine ;
 * - la note Google.
 * Le bouton d'appel du haut de page reste l'action n° 1.
 */
export function ReachPanel({ context, label }: { context: string; label: string }) {
  // Avant le montage : texte neutre (même rendu serveur / client), puis l'heure réelle.
  const [moment, setMoment] = useState<Moment | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<CallbackErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const attribution = useAttribution();
  const { opens, closes } = company.hours;

  useEffect(() => {
    startedAt.current = Date.now();
    const update = () => {
      const h = brusselsHour();
      // Heure illisible (navigateur exotique) : on garde le texte neutre plutôt qu'un statut faux.
      if (!Number.isInteger(h)) return;
      setHour(h);
      setMoment(h >= opens && h < closes ? "open" : "closed");
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, [opens, closes]);

  // Promesse de rappel validée (« sous 2 h, entre 10h et 21h ») ; la nuit, « dès 10h ».
  const callbackPromise = moment === "closed" ? `dès ${opens}h` : (company.promises.callback ?? "rapidement");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const callback: CallbackRequest = {
      ...emptyCallback,
      name: name.trim(),
      phone: phone.trim(),
      topic: topicFromContext(context),
      service: context,
    };
    const found = validateCallback(callback);
    if (found.name || found.phone) {
      setErrors({ name: found.name, phone: found.phone });
      return;
    }
    setErrors({});
    setStatus("sending");
    const body = new FormData();
    (Object.keys(callback) as (keyof CallbackRequest)[]).forEach((key) => body.append(key, callback[key]));
    body.append("startedAt", String(startedAt.current));
    body.append("website", honeypot.current?.value ?? "");
    body.append("attribution", JSON.stringify(attribution.current));
    try {
      const response = await fetch("/api/rappel", { method: "POST", body });
      const data = (await response.json()) as { ok: boolean; reference?: string; errors?: CallbackErrors };
      if (response.ok && data.ok) {
        setStatus("success");
        trackLead(
          "rappel",
          { topic: callback.topic || "autre", callback_time: "asap", form_location: "haut_page_metier" },
          { reference: data.reference, phone: callback.phone }
        );
        return;
      }
      if (data.errors?.name || data.errors?.phone) {
        setErrors({ name: data.errors.name, phone: data.errors.phone });
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const firstName = name.trim().split(/\s+/)[0];

  return (
    <div
      data-clarity-mask="true"
      className="rounded-[28px] bg-white p-6 text-night shadow-[0_24px_60px_-32px_rgba(11,18,34,0.4)] ring-1 ring-night/[0.06] sm:p-8"
    >
      {/* Statut */}
      <p className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-night/55">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-60 motion-safe:animate-ping",
              moment === "closed" ? "bg-ember" : "bg-emerald-500"
            )}
          />
          <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", moment === "closed" ? "bg-ember" : "bg-emerald-500")} />
        </span>
        {moment === "closed" ? "Hors horaires" : moment === "open" ? "Joignable maintenant" : `Joignable ${company.promises.availability}`}
      </p>
      <p className="v2-semi mt-3 font-display text-[1.35rem] font-bold leading-snug sm:text-[1.5rem]">
        {moment === null
          ? `On décroche ${company.promises.availability}, de ${opens}h à ${closes}h, et ${company.promises.emergency} pour les urgences.`
          : moment === "open"
            ? `Il est ${hour}h : appelez, on décroche.`
            : `Il est ${hour}h : pour une urgence, on décroche quand même.`}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-night/65">
        {moment === "closed"
          ? `Pas une urgence ? Laissez votre numéro, on vous rappelle dès ${opens}h.`
          : moment === "open"
            ? `Un technicien vous répond de ${opens}h à ${closes}h, et ${company.promises.emergency} pour les urgences.`
            : "Un technicien passe sous 24h, à Bruxelles et alentour."}
      </p>

      {/* Rappel express */}
      <div className="mt-6 border-t border-night/[0.08] pt-6">
        {status === "success" ? (
          <div role="status" aria-live="polite">
            <p className="v2-semi font-display text-lg font-bold">C&apos;est noté{firstName ? `, ${firstName}` : ""} !</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-night/70">
              On vous rappelle {callbackPromise} au <strong className="whitespace-nowrap font-semibold text-night">{phone}</strong>.
            </p>
          </div>
        ) : (
          <form noValidate onSubmit={submit} aria-label={`Être rappelé · ${label}`}>
            <p className="font-semibold">{moment === "closed" ? "Être rappelé demain matin" : "Pas le temps d'appeler ?"}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor={`reach-name-${context}`} className="sr-only">
                  Prénom
                </label>
                <input
                  id={`reach-name-${context}`}
                  name="name"
                  autoComplete="given-name"
                  placeholder="Prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? `reach-name-error-${context}` : undefined}
                  className="block h-12 w-full rounded-2xl border border-night/[0.12] bg-white px-4 text-base text-night placeholder:text-night/40 focus:border-night focus:outline-none focus:ring-4 focus:ring-night/[0.06] aria-[invalid=true]:border-flame"
                />
                {errors.name && (
                  <p id={`reach-name-error-${context}`} className="mt-1 text-xs text-flame">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor={`reach-phone-${context}`} className="sr-only">
                  Téléphone
                </label>
                <input
                  id={`reach-phone-${context}`}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Téléphone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? `reach-phone-error-${context}` : undefined}
                  className="block h-12 w-full rounded-2xl border border-night/[0.12] bg-white px-4 text-base text-night placeholder:text-night/40 focus:border-night focus:outline-none focus:ring-4 focus:ring-night/[0.06] aria-[invalid=true]:border-flame"
                />
                {errors.phone && (
                  <p id={`reach-phone-error-${context}`} className="mt-1 text-xs text-flame">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            {/* Champ piège anti-robots : invisible pour les humains. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={`reach-website-${context}`}>Site web</label>
              <input ref={honeypot} id={`reach-website-${context}`} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" disabled={status === "sending"} className={btn("dark", "mt-3 min-h-[52px] w-full disabled:opacity-70")}>
              {status === "sending" ? "Envoi…" : "Rappelez-moi"}
              {status !== "sending" && <BsArrowRight className="h-4 w-4" aria-hidden="true" />}
            </button>
            <p className="mt-2.5 text-center text-xs text-night/50">
              Rappel {callbackPromise} · sans engagement · votre numéro ne sert qu&apos;à vous rappeler
            </p>
            {status === "error" && (
              <div role="alert" className="mt-3 rounded-2xl bg-flame/[0.06] p-4 text-sm">
                <p className="font-semibold text-flame">L&apos;envoi n&apos;a pas fonctionné. Appelez-nous directement :</p>
                <PhoneButton variant="primary" className="mt-3 min-h-[48px] w-full text-sm" />
              </div>
            )}
          </form>
        )}
      </div>

      {/* Note Google */}
      <a
        href={company.google.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 border-t border-night/[0.08] pt-5 text-sm text-night/60 hover:text-night"
      >
        <span className="flex text-bolt drop-shadow-[0_1px_0_rgba(11,18,34,0.25)]" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className="h-3.5 w-3.5" />
          ))}
        </span>
        <span>
          <strong className="font-semibold text-night">{company.google.rating.toLocaleString("fr-BE", { minimumFractionDigits: 1 })}</strong> · plus de{" "}
          {company.google.reviewsFloor} avis Google
        </span>
      </a>
    </div>
  );
}
