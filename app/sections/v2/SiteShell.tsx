import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import { ClickTracking } from "@/components/site/ClickTracking";
import { AttributionCapture } from "@/components/site/useAttribution";
import { CookieConsent } from "@/components/site/CookieConsent";
import { JsonLd } from "@/components/site/JsonLd";
import { MotionProvider } from "@/components/site/Motion";
import { LocaleProvider } from "@/lib/i18n/client";
import { htmlLang, type Locale } from "@/lib/i18n/locale";
import { localBusinessJsonLd } from "@/lib/seo";
import { company } from "@/app/data/company";
import { getAlternates, getNavGroups, getPageActions } from "@/app/data/navigation";
import { hasPage, pagePath } from "@/lib/i18n/routes";
import { ui } from "@/lib/i18n/ui";
import { FooterV2 } from "./chrome";
import { archivo, geistSans } from "./fonts";
import { HeaderV2 } from "./HeaderV2";
import { MobileActionBar } from "./MobileActionBar";

/**
 * Document commun aux deux langues (et à la page 404 globale) : <html lang>,
 * polices, en-tête, pied de page, barre mobile, données structurées, cookies,
 * mesure. Chaque mise en page racine ((fr), (nl)/nl) ne fait que l'appeler.
 */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = ui(locale);
  // Tarifs et Contact après les métiers dans l'en-tête, s'ils existent dans cette langue.
  const extraLinks = (["tarifs", "contact"] as const)
    .filter((key) => hasPage(key, locale))
    .map((key) => ({ label: t.header[key], href: pagePath(key, locale) }));
  return (
    // Variables de police sur <html> : la page entière est en Archivo (Geist : mot « Radialec » du logo seulement).
    <html lang={htmlLang[locale]} className={`${geistSans.variable} ${archivo.variable}`}>
      <body className="bg-white font-display text-night antialiased">
        <LocaleProvider locale={locale}>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-3 focus:font-bold focus:text-white"
          >
            {t.skipLink}
          </a>
          <MotionProvider>
            <HeaderV2 groups={getNavGroups(locale)} extraLinks={extraLinks} alternates={getAlternates()} />
            <main id="contenu">{children}</main>
            <FooterV2 locale={locale} />
            <MobileActionBar actions={getPageActions(locale)} />
          </MotionProvider>

          <JsonLd data={localBusinessJsonLd(`${company.siteUrl}${logo.src}`, locale)} />

          {/* Bandeau cookies + mesure (chargées uniquement après consentement) */}
          <CookieConsent />
          <ClickTracking />
          <AttributionCapture />
        </LocaleProvider>
      </body>
    </html>
  );
}
