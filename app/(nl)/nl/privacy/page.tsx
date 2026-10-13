import { notFound } from "next/navigation";
import Link from "next/link";
import { MissingInfo, OrMissing } from "@/components/site/MissingInfo";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { company, legalNl } from "@/app/data/company";
import { showNl } from "@/app/data/visibility";
import { LegalPage, LegalTable } from "@/app/sections/LegalPage";

// Traduction de app/(fr)/confidentialite/page.tsx : mêmes traitements, mêmes
// prestataires et mêmes sources (voir le commentaire de la page française). À faire relire.
export const metadata = pageMetadata({
  title: "Privacybeleid",
  description:
    "Hoe Radialec uw gegevens verzamelt en gebruikt (offerteaanvraag, contact, bezoekersstatistieken) en hoe u uw rechten onder de AVG uitoefent.",
  path: "/nl/privacy",
});

export default function PrivacyPage() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  const { legal, address } = company;
  // Tools die via hun id actief zijn (company.ts): de pagina beschrijft alleen wat echt draait.
  const clarity = Boolean(company.clarityId);
  const ads = Boolean(company.googleAds.id);

  return (
    <LegalPage
      title="Privacybeleid"
      path="/nl/privacy"
      updated="13 oktober 2026"
      intro="Uw gegevens dienen om uw aanvragen te beantwoorden en bij u langs te komen, niets anders. Op deze pagina leest u welke gegevens we verzamelen, waarom, hoelang, en hoe u uw rechten uitoefent."
    >
      <h2>Verwerkingsverantwoordelijke</h2>
      <p>
        {company.name} — <OrMissing value={legal.companyName} what="maatschappelijke benaming" />,{" "}
        <OrMissing value={address ? `${address.street}, ${address.postalCode} ${address.city}` : null} what="adres van de zetel" />,
        ondernemingsnummer <OrMissing value={legal.enterpriseNumber} what="KBO-nummer" />.
      </p>
      <p>
        Voor elke vraag over uw gegevens: <a href={`mailto:${company.email}`}>{company.email}</a> of{" "}
        <a href={company.phone.href}>{company.phone.display}</a>.
      </p>

      <h2>De gegevens die we verzamelen</h2>
      <h3>Als u een offerte aanvraagt</h3>
      <ul>
        <li>uw naam, telefoon, e-mailadres, postcode, gemeente en, als u het opgeeft, uw adres;</li>
        <li>de beschrijving van wat u nodig hebt, de betrokken dienst, de gewenste termijn, het type pand;</li>
        <li>de foto&apos;s die u toevoegt;</li>
        <li>hoe u gecontacteerd wilt worden en wanneer we u best terugbellen;</li>
        <li>
          de herkomst van uw bezoek (landingspagina, vorige pagina, eventuele parameters van een advertentiecampagne),
          om te weten via welke kanalen klanten ons vinden.
        </li>
      </ul>
      <h3>Als u vraagt om teruggebeld te worden</h3>
      <ul>
        <li>uw naam en telefoon, en wanneer u teruggebeld wilt worden;</li>
        <li>als u ze opgeeft: het onderwerp, uw bericht en uw e-mailadres (om u de bevestiging te sturen);</li>
        <li>de pagina van waaruit u de aanvraag doet en de herkomst van uw bezoek, zoals bij een offerte.</li>
      </ul>
      <h3>Als u online een afspraak boekt</h3>
      <p>
        De agenda op de pagina « Afspraak maken » wordt geleverd door Cal.com. De gegevens die u daar invult (naam,
        e-mailadres en de andere velden van het boekingsformulier) en het gekozen moment worden door Cal.com
        geregistreerd en aan ons doorgegeven om de interventie te organiseren.
      </p>
      <h3>Als u ons belt of schrijft</h3>
      <p>
        De informatie die u ons geeft om de interventie te organiseren. Schrijft u ons via WhatsApp, dan lopen uw
        berichten, foto&apos;s en uw nummer via WhatsApp, waarvoor u zelf kiest; het vooraf ingevulde bericht vermeldt de
        pagina van waaruit u ons contacteert.
      </p>
      <h3>Als u de site bezoekt</h3>
      <p>Alleen als u ermee instemt:</p>
      <ul>
        <li>bezoekersstatistieken via Google Analytics (bekeken pagina&apos;s, type toestel, herkomst);</li>
        {clarity && (
          <li>
            geanonimiseerde opnames van uw bezoek via Microsoft Clarity (klikken, scrollen, bekeken pagina&apos;s), zonder
            wat u in de formulieren invult;
          </li>
        )}
        {ads && (
          <li>
            als u via een Google-advertentie komt: de meting van de aanvragen die ze ons opleverde (Google Ads). Verstuurt
            u een formulier, dan worden uw e-mail en uw telefoon in gecodeerde vorm (gehasht) aan Google doorgegeven, om de
            aanvraag aan de advertentie te koppelen. Geen gerichte reclame.
          </li>
        )}
      </ul>
      <p>
        Zie ons <Link href="/nl/cookies">cookiebeleid</Link>.
      </p>

      <h2>Waarom en op welke grond</h2>
      <LegalTable
        head={["Doel", "Rechtsgrond (AVG)"]}
        rows={[
          ["Uw aanvraag voor een offerte of afspraak beantwoorden", "Precontractuele maatregelen op uw verzoek (art. 6.1.b)"],
          ["De interventie uitvoeren, factureren en de garantie verzekeren", "Uitvoering van de overeenkomst (art. 6.1.b)"],
          ["Onze boekhouding voeren", "Wettelijke verplichting (art. 6.1.c)"],
          ["De bezoekersaantallen van de site meten", "Uw toestemming (art. 6.1.a), op elk moment in te trekken"],
          ...(ads ? [["De resultaten van onze Google Ads-advertenties meten", "Uw toestemming (art. 6.1.a), op elk moment in te trekken"]] : []),
          ["Weten via welke kanalen we aanvragen krijgen", "Gerechtvaardigd belang bij het evalueren van onze commerciële acties (art. 6.1.f)"],
        ]}
      />
      <p>We verkopen of verhuren uw gegevens niet, en gebruiken ze niet voor prospectie zonder uw akkoord.</p>

      <h2>Wie heeft toegang</h2>
      <p>Onze technici en onze administratieve ploeg. We werken ook met dienstverleners die bepaalde gegevens voor ons verwerken:</p>
      <LegalTable
        head={["Dienstverlener", "Rol", "Locatie"]}
        rows={[
          [
            "Resend",
            "Versturen per e-mail van de offerte- en terugbelaanvragen, en van de bevestigingsmails die u krijgt",
            "Verenigde Staten, gecertificeerd onder het EU-U.S. Data Privacy Framework, modelcontractbepalingen",
          ],
          [
            "Zoho Mail (info@radialec.be)",
            "Ontvangen en bewaren van de aanvraagmails",
            <MissingInfo key="m">regio van het Zoho-account te bepalen (Europese Unie als het account op zoho.eu staat)</MissingInfo>,
          ],
          [
            "Telegram",
            "Onmiddellijke melding aan onze technici bij elke offerte- of terugbelaanvraag (kopie van de aanvraag, foto's inbegrepen)",
            "Gegevens bewaard in Nederland (accounts geopend in de Europese Unie); bedrijf gevestigd buiten de EU, in de EU vertegenwoordigd door EDPO",
          ],
          ["Google (Analytics)", "Bezoekersstatistieken, alleen met uw akkoord", "Google LLC (Verenigde Staten), gecertificeerd onder het EU-U.S. Data Privacy Framework"],
          ...(ads
            ? [
                [
                  "Google (Ads)",
                  "Meting van de aanvragen via onze advertenties, alleen met uw akkoord",
                  "Google LLC (Verenigde Staten), gecertificeerd onder het EU-U.S. Data Privacy Framework",
                ],
              ]
            : []),
          ...(clarity
            ? [
                [
                  "Microsoft (Clarity)",
                  "Geanonimiseerde opnames van bezoeken en klikkaarten, alleen met uw akkoord",
                  "Microsoft Corporation (Verenigde Staten), gecertificeerd onder het EU-U.S. Data Privacy Framework",
                ],
              ]
            : []),
          [
            "WhatsApp",
            "Berichtendienst, als u ons via WhatsApp schrijft",
            "WhatsApp Ireland Limited (Ierland), doorgiften naar de Verenigde Staten (WhatsApp LLC, Meta Platforms, Inc.) onder het EU-U.S. Data Privacy Framework",
          ],
          ["Cal.com", "Online afspraken boeken", "Cal.com, Inc. (Verenigde Staten), gecertificeerd onder het EU-U.S. Data Privacy Framework, modelcontractbepalingen"],
          [
            <OrMissing key="h" value={legal.host && legalNl.host} what="hostingprovider" />,
            "Hosting van de site",
            "Verenigde Staten en andere landen, gecertificeerd onder het EU-U.S. Data Privacy Framework, modelcontractbepalingen",
          ],
        ]}
      />
      <p>
        Worden gegevens buiten de Europese Unie doorgegeven, dan gebeurt dat, afhankelijk van de dienstverlener, onder het
        EU-VS-kader voor gegevensbescherming (Data Privacy Framework) of met modelcontractbepalingen.
      </p>

      <h2>Hoelang we ze bewaren</h2>
      <ul>
        <li>Offerteaanvraag zonder interventie: 24 maanden na het laatste contact.</li>
        <li>Klantgegevens bij een interventie: tijdens de klantrelatie en de garantieperiode, daarna gearchiveerd.</li>
        <li>Facturen en boekhoudstukken: zolang de Belgische boekhoud- en fiscale wetgeving het oplegt.</li>
        <li>Statistieken van Google Analytics: maximaal 13 maanden voor de cookies.</li>
        {clarity && <li>Microsoft Clarity: opnames 30 dagen, klikkaarten 13 maanden.</li>}
        {ads && <li>Google Ads: 90 dagen voor de cookies die advertenties meten.</li>}
      </ul>

      <h2>Uw rechten</h2>
      <p>U kunt op elk moment:</p>
      <ul>
        <li>uw gegevens inzien en er een kopie van krijgen;</li>
        <li>ze laten verbeteren of aanvullen;</li>
        <li>vragen om ze te wissen, of om de verwerking te beperken;</li>
        <li>bezwaar maken tegen een verwerking op basis van ons gerechtvaardigd belang;</li>
        <li>de gegevens die u ons gaf in een leesbaar formaat ontvangen (overdraagbaarheid);</li>
        <li>uw toestemming voor de bezoekersstatistieken intrekken, via « Cookies beheren » onderaan de pagina.</li>
      </ul>
      <p>
        Schrijf ons op <a href={`mailto:${company.email}`}>{company.email}</a>: we antwoorden binnen een maand. Vindt u dat uw
        rechten niet gerespecteerd worden, dan kunt u een klacht indienen bij de Gegevensbeschermingsautoriteit,
        Drukpersstraat 35, 1000 Brussel —{" "}
        <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">
          gegevensbeschermingsautoriteit.be
        </a>
        .
      </p>

      <h2>Beveiliging</h2>
      <p>
        De site werkt via HTTPS, offerteaanvragen worden versleuteld verzonden en alleen wie uw aanvraag behandelt, heeft
        toegang tot de gegevens.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Dit beleid kan veranderen, bijvoorbeeld als we nieuwe diensten toevoegen. De datum van de laatste wijziging staat
        bovenaan de pagina.
      </p>
    </LegalPage>
  );
}
