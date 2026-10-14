"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { FaCheck, FaLock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { ErrorText, FieldLabel, Pill, TextField } from "@/components/site/FormFields";
import { useAttribution } from "@/components/site/useAttribution";
import { trackLead } from "@/lib/tracking";
import { company } from "@/app/data/company";
import { LIMITS } from "@/lib/quote/schema";
import { callbackWhen } from "@/lib/quote/messages";
import { cleanZoneCode } from "@/lib/quote/offer";
import {
  callbackTimes,
  emptyCallback,
  validateCallback,
  type CallbackErrors,
  type CallbackField,
  type CallbackRequest,
  type CallbackTime,
} from "@/lib/quote/callback";
import { btn, PhoneButton } from "../v2/ui";

type Status = "idle" | "sending" | "success" | "error";

const context = "chauffage/entretien-chaudiere";

/**
 * Formulaire de l'offre flyer (/offre) : prénom, téléphone, moment du rappel,
 * e-mail facultatif (pour recevoir le prix par écrit). Envoyé à /api/rappel comme
 * un rendez-vous à fixer, avec `offre=flyer` et le code zone du flyer (lu dans
 * l'adresse ou la visite) : l'e-mail et l'alerte Telegram affichent le prix à appliquer.
 */
export function OfferForm({ amount, active, untilLabel }: { amount: number; active: boolean; untilLabel?: string }) {
  const [callback, setCallback] = useState<CallbackRequest>({
    ...emptyCallback,
    purpose: "rendez-vous",
    topic: "chauffage",
    service: context,
  });
  const [code, setCode] = useState<string>();
  const [errors, setErrors] = useState<CallbackErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>();
  const [result, setResult] = useState<{ reference: string; confirmed?: boolean }>();
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);
  const attribution = useAttribution();

  useEffect(() => {
    startedAt.current = Date.now();
    // Code zone du flyer : dans l'adresse (/f/WO1 → ?utm_content=WO1) ou gardé pour la visite.
    const fromUrl = new URLSearchParams(window.location.search).get("utm_content");
    setCode(cleanZoneCode(fromUrl) ?? cleanZoneCode(attribution.current.utm_content));
  }, [attribution]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const set = <K extends CallbackField>(key: K, value: CallbackRequest[K]) => {
    setCallback((c) => ({ ...c, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const found = validateCallback(callback);
    if (Object.keys(found).length) {
      setErrors(found);
      const field = (["name", "phone", "email"] as CallbackField[]).find((f) => found[f]);
      if (field) requestAnimationFrame(() => document.getElementById(`field-${field}`)?.focus());
      return;
    }
    setStatus("sending");
    setServerMessage(undefined);
    const body = new FormData();
    (Object.keys(callback) as CallbackField[]).forEach((key) => body.append(key, callback[key]));
    body.append("startedAt", String(startedAt.current));
    body.append("website", honeypot.current?.value ?? "");
    body.append("attribution", JSON.stringify(attribution.current));
    body.append("offre", "flyer");
    if (code) body.append("code", code);
    try {
      const response = await fetch("/api/rappel", { method: "POST", body });
      const data = (await response.json()) as { ok: boolean; reference?: string; confirmed?: boolean; errors?: CallbackErrors; message?: string };
      if (response.ok && data.ok && data.reference) {
        setResult({ reference: data.reference, confirmed: data.confirmed });
        setStatus("success");
        trackLead(
          "rappel",
          { topic: "chauffage", callback_time: callback.time, form_location: "offre_flyer", flyer_zone: code ?? "aucune" },
          { reference: data.reference, email: callback.email || undefined, phone: callback.phone }
        );
        return;
      }
      if (data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      setServerMessage(data.message ?? "Une erreur est survenue. Réessayez ou appelez-nous.");
      setStatus("error");
    } catch {
      setServerMessage("Connexion impossible. Vérifiez votre réseau ou appelez-nous directement.");
      setStatus("error");
    }
  };

  if (status === "success" && result) {
    const firstName = callback.name.trim().split(/\s+/)[0];
    return (
      <div role="status" className="py-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-night text-white">
          <FaCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <p ref={successRef} tabIndex={-1} className="v2-title mt-6 text-[1.8rem] outline-none sm:text-[2.1rem]">
          C&apos;est réservé, {firstName}&nbsp;!
        </p>
        <p className="mt-3 text-[17px] leading-relaxed text-night/70">
          Nous vous rappelons {callbackWhen(callback)}, au <strong className="whitespace-nowrap font-semibold text-night">{callback.phone}</strong>,
          pour fixer le jour de votre entretien{active ? ` à ${amount}€ TVAC` : ""}.
        </p>
        <p className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-chalk px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-night/45">Référence</span>
          <span className="v2-semi font-display font-bold tracking-wider text-night">{result.reference}</span>
        </p>
        {result.confirmed && (
          <p className="mt-3 text-sm text-night/60">
            Votre prix et votre référence sont envoyés à <strong className="font-semibold text-night">{callback.email}</strong>.
          </p>
        )}
        <p className="mt-6 border-t border-night/[0.08] pt-5 text-sm text-night/65">Une urgence entre-temps ? On décroche {company.promises.emergency}.</p>
        <PhoneButton variant="primary" className="mt-3 min-h-[48px] px-5 text-sm" />
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form noValidate onSubmit={submit} data-clarity-mask="true" aria-labelledby="offre-form-titre">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-night/50">
        {active ? "Réservez votre prix" : "Prenez rendez-vous"}
      </p>
      <h2 id="offre-form-titre" className="v2-title mt-3 text-[1.7rem] leading-tight sm:text-[2rem]">
        {active ? `Votre entretien à ${amount}€, en 30 secondes` : "Votre entretien, en 30 secondes"}
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-night/65">
        Laissez votre numéro : un technicien vous rappelle {company.promises.callback ?? "rapidement"}, pour fixer le jour. Rien à payer maintenant.
      </p>
      {active && code && (
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-lavender px-3.5 py-1.5 text-sm font-semibold text-night">
          <FaCheck className="h-3 w-3 text-flame" aria-hidden="true" />
          Code flyer {code} : {amount}€ TVAC appliqué
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <TextField
          name="name"
          label="Prénom et nom"
          autoComplete="name"
          value={callback.name}
          onChange={(e) => set("name", e.target.value)}
          error={errors.name}
          maxLength={LIMITS.name}
        />
        <TextField
          name="phone"
          label="Téléphone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="0486 12 34 56"
          value={callback.phone}
          onChange={(e) => set("phone", e.target.value)}
          error={errors.phone}
        />
      </div>

      <fieldset className="mt-5">
        <FieldLabel as="legend">Quand vous rappeler&nbsp;?</FieldLabel>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(callbackTimes) as CallbackTime[]).map((key) => (
            <Pill key={key} name="time" value={key} checked={callback.time === key} onChange={(v) => set("time", v as CallbackTime)}>
              {callbackTimes[key]}
            </Pill>
          ))}
        </div>
        <ErrorText id="field-time-error">{errors.time}</ErrorText>
      </fieldset>

      <TextField
        name="email"
        label="E-mail"
        type="email"
        inputMode="email"
        autoComplete="email"
        optional
        hint={active ? "Pour recevoir votre prix de l'offre par écrit." : "Pour recevoir la confirmation de votre demande."}
        value={callback.email}
        onChange={(e) => set("email", e.target.value)}
        error={errors.email}
        maxLength={120}
        className="mt-5"
      />

      {/* Champ piège anti-robots : invisible pour les humains. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="offre-website">Site web</label>
        <input ref={honeypot} id="offre-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && serverMessage && (
        <div role="alert" className="mt-5 rounded-2xl bg-flame/[0.06] p-4 text-sm">
          <p className="font-semibold text-flame">{serverMessage}</p>
          <PhoneButton variant="primary" className="mt-3 min-h-[44px] px-4 text-sm" />
        </div>
      )}

      <button type="submit" disabled={sending} className={btn("dark", cn("group mt-6 min-h-[58px] w-full text-base disabled:opacity-70"))}>
        {sending ? "Envoi en cours…" : active ? `Je réserve mon entretien à ${amount}€` : "Je réserve mon entretien"}
        {!sending && <BsArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
      </button>
      <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-night/55">
        <li>Sans engagement</li>
        <li aria-hidden="true">·</li>
        <li>Rien à payer en ligne</li>
        <li aria-hidden="true">·</li>
        <li>Attestation le jour même</li>
      </ul>
      <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-night/45">
        <FaLock className="mt-0.5 h-3 w-3 flex-shrink-0" aria-hidden="true" />
        <span>
          Votre numéro sert uniquement à vous rappeler.{" "}
          <Link href="/confidentialite" className="underline underline-offset-2 hover:text-night">
            Confidentialité
          </Link>
        </span>
      </p>
    </form>
  );
}

/**
 * Sous le bouton d'appel de /offre : le code zone du flyer à donner au téléphone,
 * pour que le technicien applique le prix de l'offre et note la zone (les appels
 * directs ne laissent aucune trace dans les statistiques).
 */
export function FlyerCodeHint({ amount }: { amount: number }) {
  const attribution = useAttribution();
  const [code, setCode] = useState<string>();
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("utm_content");
    setCode(cleanZoneCode(fromUrl) ?? cleanZoneCode(attribution.current.utm_content));
  }, [attribution]);
  return (
    <p className="mt-4 text-sm text-night/70">
      {code ? (
        <>
          Au téléphone, donnez le code <strong className="font-semibold text-night">{code}</strong> : on applique le prix de {amount}€.
        </>
      ) : (
        <>Au téléphone, dites que vous appelez pour l&apos;offre du flyer : on applique le prix de {amount}€.</>
      )}
    </p>
  );
}
