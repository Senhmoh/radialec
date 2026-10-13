import { notFound } from "next/navigation";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/site/CookieConsent";
import { MissingInfo } from "@/components/site/MissingInfo";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { company } from "@/app/data/company";
import { showNl } from "@/app/data/visibility";
import { LegalPage, LegalTable } from "@/app/sections/LegalPage";

// Traduction de app/(fr)/cookies/page.tsx (mêmes cookies, mêmes durées). À faire relire.
// Tools die via hun id actief zijn (company.ts): de pagina beschrijft alleen wat echt draait.
const clarity = Boolean(company.clarityId);
const ads = Boolean(company.googleAds.id);
const audience = clarity ? "Google Analytics en Microsoft Clarity" : "Google Analytics";

export const metadata = pageMetadata({
  title: "Cookiebeleid",
  description: ads
    ? `De cookies op de site van Radialec: bezoekersstatistieken (${audience}) en meting van onze Google Ads-advertenties, alleen met uw akkoord. Wijzig uw keuze wanneer u wilt.`
    : `De cookies op de site van Radialec: alleen bezoekersstatistieken (${audience}), met uw akkoord. Wijzig uw keuze wanneer u wilt.`,
  path: "/nl/cookies",
});

export default function CookiesPage() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return (
    <LegalPage
      title="Cookiebeleid"
      path="/nl/cookies"
      updated="13 oktober 2026"
      intro={
        ads
          ? `De bezoekersstatistieken (${audience}) en de meting van onze Google Ads-advertenties worden alleen geladen als u ze aanvaardt, elk apart. Geen gerichte reclame.`
          : `We gebruiken geen advertentiecookies. De bezoekersstatistieken van de site (${audience}) worden alleen geladen als u ze aanvaardt.`
      }
    >
      <h2>Uw keuze beheren</h2>
      <p>
        U kunt de bezoekersstatistieken{ads ? " en de meting van onze advertenties" : ""} aanvaarden of weigeren, en uw
        keuze wijzigen wanneer u wilt.
      </p>
      <p>
        <CookieSettingsButton className="btn btn-secondary btn-sm !mt-0" />
      </p>
      <p>
        Uw keuze blijft 6 maanden in uw browser bewaard, daarna vragen we het opnieuw. Weigeren heeft geen invloed op het
        gebruik van de site: alle pagina&apos;s en het offerteformulier werken normaal.
      </p>

      <h2>Wat de site in uw browser opslaat</h2>
      <LegalTable
        head={["Naam", "Leverancier", "Doel", "Duur", "Toestemming nodig"]}
        rows={[
          ["radialec_consent (lokale opslag)", company.name, "Uw keuze over cookies onthouden", "6 maanden", "Nee (noodzakelijk)"],
          [
            "radialec_attribution (sessieopslag)",
            company.name,
            "De landingspagina en de campagne van herkomst onthouden, alleen meegestuurd met een offerte- of terugbelaanvraag die u verstuurt",
            "Einde van het bezoek",
            "Nee (alleen meegestuurd met uw aanvraag)",
          ],
          ["_ga", "Google Analytics", "Bezoekers anoniem van elkaar onderscheiden", "13 maanden", "Ja"],
          ["_ga_<identificatie>", "Google Analytics", "De status van het bezoek bewaren", "13 maanden", "Ja"],
          ...(clarity
            ? [
                ["_clck", "Microsoft Clarity", "Uw browser van het ene bezoek op het andere herkennen (anonieme identificatie)", "1 jaar", "Ja"],
                ["_clsk", "Microsoft Clarity", "De pagina's van eenzelfde bezoek groeperen", "1 dag", "Ja"],
              ]
            : []),
          ...(ads
            ? [
                ["_gcl_au", "Google Ads", "Een verstuurde aanvraag koppelen aan de advertentie waarlangs u kwam", "90 dagen", "Ja"],
                ["_gcl_aw", "Google Ads", "De klik op de advertentie onthouden", "90 dagen", "Ja"],
              ]
            : []),
          [
            "Boekingsagenda",
            "Cal.com",
            "De beschikbare momenten tonen en uw boeking registreren (alleen op de pagina « Afspraak maken »)",
            <MissingInfo key="cd">te controleren</MissingInfo>,
            <MissingInfo key="cc">na te vragen bij Cal.com</MissingInfo>,
          ],
        ]}
      />
      <p>
        De IP-adressen die Google Analytics 4 verzamelt, worden niet bewaard. De statistieken dienen alleen om te begrijpen
        welke pagina&apos;s nuttig zijn en om de site te verbeteren.
      </p>
      {clarity && (
        <p>
          Microsoft Clarity registreert uw bezoek op geanonimiseerde wijze (klikken, scrollen) om te zien wat op de site
          hindert. Wat u in de formulieren invult, wordt nooit geregistreerd. De opnames worden 30 dagen bewaard.
        </p>
      )}
      {ads && (
        <p>
          Google Ads vertelt ons hoeveel aanvragen elke advertentie oplevert, zodat we niet betalen voor nutteloze
          advertenties. Geen gerichte reclame en geen remarketing.
        </p>
      )}

      <h2>Uw browser instellen</h2>
      <p>
        U kunt cookies ook blokkeren of verwijderen via de instellingen van uw browser (Chrome, Safari, Firefox, Edge). De
        site blijft bruikbaar.
      </p>

      <h2>Meer weten</h2>
      <p>
        Hoe we uw persoonsgegevens gebruiken, leest u in ons <Link href="/nl/privacy">privacybeleid</Link>. Voor elke vraag:{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPage>
  );
}
