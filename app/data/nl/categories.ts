import type { CategoryContent } from "../categories";
import type { ServiceCategory } from "../services/types";
import { boilerBrandNamesNl } from "../brands";
import { companyCopy } from "../company";
import { prices } from "../pricing";

// Pages métier en néerlandais (/nl/verwarming…) : traduction de
// app/data/categories.ts, à faire relire par un néerlandophone. Ne pas importer
// ../services (index) ici : seulement des types (dépendance circulaire).
// Liens internes : adresses néerlandaises (/nl/…), vérifiées par
// `npm run check:links` avant la mise en ligne.

export const categoryLabelsNl: Record<ServiceCategory, string> = {
  chauffage: "Verwarming",
  electricite: "Elektriciteit",
  plomberie: "Sanitair",
  climatisation: "Airco",
  professionnels: "Professionals",
};

const promises = companyCopy.nl.promises;
// Instapprijs verwarming: de goedkoopste van depannage en onderhoud gasketel.
const chauffageFrom = `Vanaf ${Math.min(prices.depannage.amount, prices.entretienChaudiereGaz.amount)}€ btw incl.`;

export const categoriesNl: Partial<Record<ServiceCategory, CategoryContent>> = {
  // ---------------------------------------------------------------------------
  // VERWARMING
  // ---------------------------------------------------------------------------
  chauffage: {
    category: "chauffage",
    label: "Verwarming",
    metaTitle: "Chauffagist in Brussel – depannage 7 op 7",
    metaDescription:
      "Chauffagist in Brussel: installatie, onderhoud en depannage van uw verwarmingsketel 7 op 7, interventie binnen 24 uur, gratis offerte. Vaillant, Bulex, Bosch…, 2 jaar garantie.",
    hero: {
      eyebrow: "Erkende chauffagist · 7 op 7",
      title: "Chauffagist in Brussel: installatie, onderhoud en depannage",
      highlight: "Brussel",
      intro: `Ketel in panne, onderhoud nodig of tijd voor een nieuwe ketel? Onze erkende technici werken op ${boilerBrandNamesNl}, 7 op 7, en komen binnen 24 uur langs. U kent de prijs voor we beginnen, en de offerte is gratis.`,
      intent: "urgence",
    },
    facts: [
      { icon: "euro", stat: chauffageFrom, label: "Depannage of onderhoud gasketel" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Interventie in Brussel en omgeving" },
      { icon: "calendarCheck", stat: "7 op 7", label: "Ook in het weekend" },
      { icon: "shield", stat: "2 jaar garantie", label: "Onderdelen en werk" },
    ],
    servicesTitle: "Al onze diensten voor uw verwarming",
    servicesIntro:
      "Kies wat bij uw situatie past: op elke pagina leest u wat we doen, wat het kost en hoe het verloopt.",
    services: [
      "chauffage/remplacement-chaudiere",
      "chauffage/entretien-chaudiere",
      "chauffage/depannage-chaudiere",
      "chauffage/entretien-chauffe-eau-boiler",
      "chauffage/desembouage",
      "chauffage/installation-radiateurs",
      "chauffage/pompe-a-chaleur",
      "chauffage/ramonage-cheminee",
    ],
    why: {
      title: "Waarom uw verwarming aan Radialec toevertrouwen?",
      items: [
        {
          icon: "award",
          title: "Erkende technici",
          text: "Erkend door Leefmilieu Brussel, het VEKA en Wallonië: onze attesten gelden in de drie gewesten.",
        },
        {
          icon: "tools",
          title: "De grote merken",
          text: `${boilerBrandNamesNl}: we kennen uw ketel, ook als hij al wat jaren meedraait.`,
        },
        {
          icon: "euro",
          title: "Prijzen online",
          text: "Onderhoud, depannage, schoorsteenvegen: onze prijzen staan online, btw inbegrepen. U weet wat u betaalt nog voor u belt. [Bekijk onze tarieven](/nl/tarieven).",
        },
        {
          icon: "handshake",
          title: "Elk jaar dezelfde ploeg",
          text: "Ketel, radiatoren, boiler, warmtepomp: dezelfde ploeg onderhoudt en herstelt uw installatie.",
        },
      ],
    },
    pricing: {
      title: "Tarieven verwarming in Brussel",
      intro:
        "De meest gevraagde diensten, tegen een vaste prijs. Voor een installatie of vervanging is de [offerte gratis](/nl/offerte).",
      items: [
        { key: "entretienChaudiereGaz" },
        { key: "depannage", label: "Depannage verwarmingsketel" },
        { key: "entretienChaudiereMazout" },
        { key: "ramonage" },
      ],
    },
    brands: {
      title: "Alle grote ketelmerken",
      intro:
        "De merken die we plaatsen, onderhouden en herstellen: degelijke fabrikanten, waarvan de onderdelen jarenlang verkrijgbaar blijven.",
    },
    guide: {
      title: "Uw ketel herstellen of vervangen?",
      paragraphs: [
        "Een ketel die in panne valt, moet niet altijd vervangen worden. Voor we over een offerte praten, stellen onze technici een diagnose en zeggen ze u eerlijk of een [herstelling](/nl/verwarming/depannage-ketel) volstaat.",
        "## Wanneer herstellen de beste keuze blijft",
        "Een vrij recente ketel, een losstaande panne (sonde, klep, circulatiepomp, elektronische kaart), onderhoud in orde: een gerichte herstelling is meestal de voordeligste oplossing.",
        "## Wanneer u beter vervangt",
        "Na een jaar of vijftien komen pannes vaker terug, worden sommige onderdelen moeilijk te vinden en daalt het rendement, wat u op elke gasfactuur betaalt. Een recente condensatieketel verbruikt merkbaar minder dan een oud model.",
        "Verwarmt u met stookolie? In het Brussels Gewest mag geen nieuwe stookolieketel meer geplaatst worden: bij de [vervanging](/nl/verwarming/ketel-vervangen) stapt u over op een gascondensatieketel of een [warmtepomp](/nl/verwarming/warmtepomp).",
        "In elk geval is onze offerte gratis en gedetailleerd: u vergelijkt herstelling en vervanging met kennis van zaken. Voor de actuele premies en verplichtingen kijkt u op [leefmilieu.brussels](https://leefmilieu.brussels).",
      ],
    },
    faqTitle: "Veelgestelde vragen over verwarming",
    faqs: [
      {
        id: 1,
        question: "Komt u ook in het weekend voor een panne aan de verwarming?",
        answer: `Ja. Voor dringende gevallen nemen we ${promises.emergency} op, en een technicus komt binnen 24 uur langs, ook in het weekend, in Brussel en omgeving. Aan de telefoon zeggen we u of het kan wachten en spreken we een moment af.`,
      },
      {
        id: 2,
        question: "Hoeveel kost de verplaatsing van een chauffagist?",
        answer:
          "Ons forfait voor een depannage omvat de verplaatsing, de diagnose en het eerste werkuur, tegen een vaste prijs btw inbegrepen. Zijn er onderdelen nodig, dan kent u hun prijs voor we iets herstellen. Al onze prijzen staan op de pagina [Tarieven](/nl/tarieven).",
      },
      {
        id: 3,
        question: "Mijn ketel is oud: kunt u hem nog herstellen?",
        answer: `Meestal wel: we werken op ${boilerBrandNamesNl}, ook op oudere modellen. Zijn de onderdelen niet meer te krijgen of loont de herstelling niet meer, dan zeggen we het u duidelijk en krijgt u een gratis offerte voor een [nieuwe ketel](/nl/verwarming/ketel-vervangen).`,
      },
      {
        id: 4,
        question: "Moet ik mijn stookolieketel vervangen?",
        answer:
          "Een bestaande stookolieketel die onderhouden wordt en in goede staat is, mag in principe blijven werken. Een nieuwe stookolieketel plaatsen mag in het Brussels Gewest wel niet meer: bij de vervanging stapt u over op een gascondensatieketel of een [warmtepomp](/nl/verwarming/warmtepomp). De actuele regels staan op [leefmilieu.brussels](https://leefmilieu.brussels).",
      },
      {
        id: 5,
        question: "Mijn radiatoren worden slecht warm: ligt het aan de ketel?",
        answer:
          "Niet altijd. Radiatoren die onderaan lauw blijven of plaatselijk koud zijn, wijzen vaak op lucht of slib in de leidingen: ontluchten, de installatie uitbalanceren of [ontslibben](/nl/verwarming/ontslibben) kan volstaan. Onze technicus controleert eerst de ketel, daarna de leidingen.",
      },
      {
        id: 6,
        question: "Komt u ook buiten Brussel?",
        answer:
          "Ja: in de 19 Brusselse gemeenten en in de rand, in Vlaams-Brabant (Tervuren, Kraainem, Sint-Genesius-Rode…) en in Waals-Brabant (Waterloo, Terhulpen, Lasne…). De volledige lijst vindt u bij ons werkgebied.",
      },
    ],
    cta: {
      intent: "urgence",
      title: "Geen verwarming meer? Uw chauffagist is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Ketel in storing, koude radiatoren, geen warm water meer? Een chauffagist komt binnen 24 uur langs, 7 op 7, in Brussel en omgeving, en zegt u de prijs voor hij begint.",
    },
    draft: false,
  },
};
