"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { company, contactActionHref } from "@/app/data/company";
import type { PageAction } from "@/app/data/navigation";
import { useLocale } from "@/lib/i18n/client";
import { locales } from "@/lib/i18n/locale";
import { pagePath } from "@/lib/i18n/routes";
import { ui } from "@/lib/i18n/ui";
import { btn, WhatsAppButton } from "./ui";

/** Pages qui sont déjà un formulaire de contact, dans chaque langue. */
const formPages = locales.flatMap((locale) => [pagePath("devis", locale), pagePath("rendezVous", locale)]);

/**
 * Mobile uniquement : les actions à portée de pouce, adaptées à l'intention de
 * la page (prompts/refonte/06-cta-whatsapp-avis.md) :
 * - urgence : Appeler + WhatsApp (envoyer une photo de la panne) ;
 * - entretien : Appeler + Rendez-vous + WhatsApp (icône) ;
 * - projet et pages générales : Appeler + Devis gratuit + WhatsApp (icône).
 */
export function MobileActionBar({ actions }: { actions: Record<string, PageAction> }) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = ui(locale);
  // Inutile sur les pages qui sont déjà un formulaire de contact.
  if (formPages.includes(pathname)) return null;

  const page = actions[pathname];
  const context = page?.context;
  const call = (
    <a href={company.phone.href} className={btn("primary", "min-h-[52px] px-3 text-sm")}>
      <FaPhoneAlt className="h-3.5 w-3.5" aria-hidden="true" />
      {t.call}
    </a>
  );

  return (
    <div className="v2-mobile-bar fixed inset-x-0 bottom-0 z-30 border-t border-night/[0.08] bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 lg:hidden">
      {page?.intent === "urgence" ? (
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          {call}
          <WhatsAppButton topic={page.label} variant="outline" className="min-h-[52px] px-3 text-sm">
            WhatsApp
          </WhatsAppButton>
        </div>
      ) : (
        <div className="mx-auto grid max-w-md grid-cols-[1fr_1fr_52px] gap-2">
          {call}
          {page?.intent === "entretien" ? (
            <Link href={contactActionHref("rendezVous", context, locale)} className={btn("dark", "min-h-[52px] px-3 text-sm")}>
              {t.appointment}
            </Link>
          ) : (
            <Link href={contactActionHref("devis", context, locale)} className={btn("dark", "min-h-[52px] px-3 text-sm")}>
              {t.quoteFree}
            </Link>
          )}
          <WhatsAppButton topic={page?.label} kind="icon" variant="outline" className="h-[52px] w-[52px]" />
        </div>
      )}
    </div>
  );
}
