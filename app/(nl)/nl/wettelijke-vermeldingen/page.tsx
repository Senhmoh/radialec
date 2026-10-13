import { notFound } from "next/navigation";
import Link from "next/link";
import { MissingInfo, OrMissing } from "@/components/site/MissingInfo";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { company, legalNl } from "@/app/data/company";
import { showNl } from "@/app/data/visibility";
import { LegalPage } from "@/app/sections/LegalPage";

// Traduction de app/(fr)/mentions-legales/page.tsx (même contenu juridique). À faire relire.
export const metadata = pageMetadata({
  title: "Wettelijke vermeldingen",
  description: "Wettelijke vermeldingen van de site van Radialec: uitgever, hosting, erkenningen, intellectuele eigendom en toepasselijk recht.",
  path: "/nl/wettelijke-vermeldingen",
});

export default function WettelijkeVermeldingenPage() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  const { legal, address } = company;

  return (
    <LegalPage title="Wettelijke vermeldingen" path="/nl/wettelijke-vermeldingen" updated="13 oktober 2026">
      <h2>Uitgever van de site</h2>
      <ul>
        <li>
          <strong>Handelsnaam:</strong> {company.name}
        </li>
        <li>
          <strong>Maatschappelijke benaming:</strong> <OrMissing value={legal.companyName} what="maatschappelijke benaming" />
        </li>
        <li>
          <strong>Rechtsvorm:</strong> <OrMissing value={legal.legalForm && legalNl.legalForm} what="rechtsvorm (bv. BV)" />
        </li>
        <li>
          <strong>Maatschappelijke zetel:</strong>{" "}
          <OrMissing value={address ? `${address.street}, ${address.postalCode} ${address.city}` : null} what="adres van de zetel" />
        </li>
        <li>
          <strong>Ondernemingsnummer (KBO) / btw:</strong>{" "}
          <OrMissing value={legal.enterpriseNumber} what="KBO-nummer, bv. BE 0123.456.789" />
        </li>
        <li>
          <strong>Telefoon:</strong> <a href={company.phone.href}>{company.phone.display}</a>
        </li>
        <li>
          <strong>E-mail:</strong> <a href={`mailto:${company.email}`}>{company.email}</a>
        </li>
        <li>
          <strong>Verantwoordelijke uitgever:</strong>{" "}
          {legal.publisher ? (
            legalNl.publisher
          ) : (
            <>
              de zaakvoerder van {legal.companyName ?? company.name} <MissingInfo>Aan te leveren: naam van de zaakvoerder</MissingInfo>
            </>
          )}
        </li>
      </ul>

      <h2>Erkenningen</h2>
      <p>Onze technici zijn erkend door Leefmilieu Brussel, het VEKA (Vlaams Energie- en Klimaatagentschap) en Wallonië.</p>

      <h2>Hosting</h2>
      <p>
        <OrMissing value={legal.host && legalNl.host} what="hostingprovider van de site (naam, adres, contact), bv. Vercel Inc." />
      </p>

      <h2>Intellectuele eigendom</h2>
      <p>
        Alle inhoud van deze site (teksten, foto&apos;s, illustraties, logo, opmaak) is eigendom van {company.name}, tenzij
        anders vermeld. De logo&apos;s van merken en erkenningsinstanties behoren toe aan hun respectieve eigenaars en
        worden enkel ter informatie getoond.
      </p>
      <p>Elke volledige of gedeeltelijke reproductie, weergave of bewerking zonder voorafgaande schriftelijke toestemming is verboden.</p>

      <h2>Informatie en tarieven</h2>
      <p>
        De informatie op deze site wordt ter informatie gegeven en kan wijzigen. De getoonde prijzen zijn inclusief btw
        en gelden op de datum van raadpleging. Voor elke installatie of renovatie geldt alleen de offerte van {company.name}.
      </p>
      <p>
        De site kan links bevatten naar sites van derden (overheidsinstanties, partners): {company.name} heeft geen
        controle over hun inhoud en is er niet verantwoordelijk voor.
      </p>

      <h2>Persoonsgegevens en cookies</h2>
      <p>
        Hoe we uw gegevens verwerken, leest u in ons <Link href="/nl/privacy">privacybeleid</Link>, het gebruik van cookies
        in ons <Link href="/nl/cookies">cookiebeleid</Link>.
      </p>

      <h2>Toepasselijk recht en geschillen</h2>
      <p>
        Op deze site en deze wettelijke vermeldingen is het Belgisch recht van toepassing. Bij een geschil, en als er
        geen minnelijke oplossing komt, zijn de rechtbanken van het gerechtelijk arrondissement van de maatschappelijke
        zetel van {company.name} bevoegd.
      </p>
      <p>
        Bent u consument, dan kunt u zich ook gratis wenden tot de Consumentenombudsdienst:{" "}
        <a href="https://consumentenombudsdienst.be" target="_blank" rel="noopener noreferrer">
          consumentenombudsdienst.be
        </a>
        .
      </p>
    </LegalPage>
  );
}
