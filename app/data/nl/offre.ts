import { companyCopy } from "../company";
import type { OffreContent } from "../offre";
import { prices, pricingPolicyNl, type FlyerOfferState } from "../pricing";

// Pagina van het flyeraanbod in het Nederlands (/nl/aanbod, QR radialec.be/fn) :
// traduction de app/data/offre.ts, mêmes faits et même prix. Déjà en ligne alors
// que le reste du site néerlandais est masqué (app/data/visibility.ts,
// nlLiveSegments). Checklist : reprise de la page ketelonderhoud traduite.

const promises = companyCopy.nl.promises;
const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);
const payment = lowerFirst(pricingPolicyNl.payment ?? "");

export function offreContentNl(offer: FlyerOfferState): OffreContent {
  const price = `${offer.amount}€`;
  const until = offer.untilLabel;
  return {
    path: "/nl/aanbod",
    anchor: "reserveren",
    vat: "btw incl.",
    topic: "Flyeraanbod ketelonderhoud",
    bookingLabel: "Of kies online een moment",
    faqTitle: "Uw vragen over het aanbod",
    metaTitle: offer.active ? `Onderhoud gasketel aan ${price}: flyeraanbod` : "Onderhoud gasketel in Brussel",
    metaDescription: `Onderhoud van uw gasketel aan ${price} btw incl. in Brussel${offer.active && until ? ` tot ${until}` : ""}: erkende technicus, attest dezelfde dag. Laat uw nummer achter, wij bellen u terug.`,
    eyebrow: offer.active ? `Flyeraanbod · tot ${until}` : `Flyeraanbod afgelopen${until ? ` op ${until}` : ""}`,
    title: "Onderhoud van uw gasketel",
    priceNote: offer.active
      ? "Verplaatsing inbegrepen. Reiniging, controle van de beveiligingen, verbrandingsanalyse en attest."
      : `Het flyeraanbod liep af${until ? ` op ${until}` : ""}: dit is onze gewone prijs, verplaatsing inbegrepen.`,
    facts: [
      { stat: "~1 uur", label: "werktijd" },
      { stat: "Attest", label: "per pdf, dezelfde dag" },
      { stat: "Erkende technicus", label: "Brussel en omgeving" },
    ],
    mazout: `Stookolieketel? Het onderhoud kost ${prices.entretienChaudiereMazout.amount}€ btw incl.`,
    steps: {
      eyebrow: "Zo gaat het",
      title: "Drie stappen, niets vooraf te betalen",
      items: [
        { icon: "phone", title: "U laat uw nummer achter", text: "Twee velden, dertig seconden. Of bel ons meteen." },
        {
          icon: "calendarCheck",
          title: `We bellen u terug ${promises.callback ?? "snel"}`,
          text: "Om de dag en het uur vast te leggen die u passen.",
        },
        {
          icon: "tools",
          title: "De technicus doet het onderhoud",
          text: `Ongeveer een uur. Het attest krijgt u dezelfde dag per pdf. U betaalt ter plaatse: ${payment}.`,
        },
      ],
    },
    // Même liste que la page ketelonderhoud (traduction de la liste validée, Q31).
    included: {
      title: "Wat is inbegrepen",
      items: [
        "Reiniging van de verbrandingskamer",
        "**Gasketel**: reiniging van de elektrische en elektronische onderdelen, lekcontrole, controle van het expansievat, verbrandingsanalyse",
        "**Stookolieketel**: controle en reiniging van de motor, controle van de pomp, afstelling van de verstuiver, controle en reiniging van de filter",
        "Controle van de afvoer van verbrandingsgassen en rook",
        "Conformiteitsattest per pdf bezorgd",
      ],
      note: "In het Brussels Gewest is het onderhoud verplicht: om de twee jaar voor een gasketel, elk jaar voor een stookolieketel.",
      image: { asset: "P07", alt: "Verbrandingsanalysator aangesloten op een ketel tijdens het onderhoud" },
    },
    faqs: [
      {
        id: 1,
        question: `Wat houdt het onderhoud aan ${price} in?`,
        answer:
          "De reiniging van de ketel, de lekcontrole en de controle van het expansievat, de verbrandingsanalyse, de controle van de rookafvoer en het conformiteitsattest, dezelfde dag per pdf. Reken op ongeveer een uur.",
      },
      {
        id: 2,
        question: "Mijn ketel werkt op stookolie: geldt het aanbod?",
        answer: `Het aanbod geldt voor het onderhoud van gasketels. Voor een stookolieketel kost het onderhoud ${prices.entretienChaudiereMazout.amount}€ btw inbegrepen, attest inbegrepen.`,
      },
      {
        id: 3,
        question: "Moet ik nu al iets betalen?",
        answer: `Nee. U laat uw nummer achter, we bellen u terug om de dag vast te leggen, en u betaalt ter plaatse: ${payment}.`,
      },
      {
        id: 4,
        question: "Is het onderhoud van mijn ketel echt verplicht?",
        answer:
          "Ja. In het Brussels Gewest is het periodieke onderhoud van uw ketel een wettelijke verplichting: om de twee jaar voor gas, elk jaar voor stookolie. Een erkende technicus moet het uitvoeren en u een officieel attest bezorgen.",
      },
    ],
    cta: {
      eyebrow: offer.active ? `Flyeraanbod · tot ${until}` : "Ketelonderhoud",
      title: offer.active ? `Uw onderhoud aan ${price}, tot ${until}.` : "Is uw onderhoud (bijna) aan de beurt? Maak een afspraak.",
      highlight: offer.active ? price : "(bijna)",
      body: `Laat uw nummer achter of bel ons: we zijn ${promises.availability} bereikbaar, van 10u tot 21u. De technicus doet het onderhoud en stuurt u het attest dezelfde dag.`,
      action: offer.active ? `Ik reserveer aan ${price}` : "Ik reserveer mijn onderhoud",
    },
  };
}
