"use client";
import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/app/data/company";
import { useLocale } from "@/lib/i18n/client";
import { ui } from "@/lib/i18n/ui";
import { btn } from "./button";

/**
 * WhatsApp : niveau 3 de la hiérarchie des actions (prompts/refonte/06). Jamais
 * en aplat vert (il volerait la vedette au bouton d'appel) : bouton blanc, icône
 * verte reconnaissable. Message pré-rempli avec le sujet de la page.
 * - `button` : bouton avec libellé (variante `light` sur lavande, `outline` sur blanc) ;
 * - `icon` : bouton carré, icône seule ;
 * - `link` : lien texte.
 */
export function WhatsAppButton({
  topic,
  kind = "button",
  variant = "outline",
  className,
  children,
}: {
  topic?: string;
  kind?: "button" | "icon" | "link";
  variant?: "light" | "outline" | "outlineLight";
  className?: string;
  children?: ReactNode;
}) {
  const locale = useLocale();
  const t = ui(locale).whatsapp;
  const glyph = <FaWhatsapp className={cn("flex-shrink-0 text-[#25D366]", kind === "link" ? "h-4 w-4" : "h-5 w-5")} aria-hidden="true" />;
  const common = { href: whatsappHref(topic, locale), target: "_blank", rel: "noopener noreferrer" } as const;
  if (kind === "link") {
    return (
      <a {...common} className={cn("inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline", className)}>
        {glyph}
        {children ?? "WhatsApp"}
      </a>
    );
  }
  if (kind === "icon") {
    return (
      <a {...common} aria-label={t.writeUs} title={t.writeUs} className={btn(variant, cn("aspect-square px-0", className))}>
        {glyph}
      </a>
    );
  }
  return (
    <a {...common} className={btn(variant, className)}>
      {glyph}
      {children ?? "WhatsApp"}
    </a>
  );
}
