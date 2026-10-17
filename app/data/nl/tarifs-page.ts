import { prices } from "../pricing";
import type { TarifsContent } from "../tarifs-page";

// Tarievenpagina (/nl/tarieven) : traduction de app/data/tarifs-page.ts.
// Bedragen : pricing.ts. Nooit een btw-percentage.

const year = new Date().getFullYear();
const p = prices;

export const tarifsNl: TarifsContent = {
  metaTitle: `Tarieven ${year}: chauffagist en loodgieter in Brussel`,
  metaDescription: `Onderhoud gasketel ${p.entretienChaudiereGaz.amount}€, depannage ${p.depannage.amount}€ verplaatsing inbegrepen, ontstopping ${p.debouchage.amount}€: al onze prijzen btw inbegrepen in Brussel, zonder verborgen kosten.`,
  breadcrumb: "Tarieven",
  eyebrow: `Tarieven ${year} · Prijzen btw incl.`,
  title: "Tarieven chauffagist, elektricien en loodgieter in Brussel",
  intro:
    "Onderhoud, depannage: de prijs staat hier, btw inbegrepen, nog voor u ons belt. Voor een installatie is de offerte gratis en hebt u ze binnen 24 uur.",
  from: (amount) => `Vanaf ${amount}€`,
  onQuote: "Op offerte",
  shortcutsLabel: "Naar de tarieven per vak",
  engagementsTitle: "Wat we beloven",
  engagements: [
    { icon: "euro", stat: "Prijzen btw incl. online", label: "Onderhoud en depannage aan een vaste prijs" },
    { icon: "handshake", stat: "Niets zonder uw akkoord", label: "Elke toeslag vooraf gemeld" },
    { icon: "clipboard", stat: "Gratis offerte binnen 24 uur", label: "Voor elke installatie, vrijblijvend" },
    { icon: "shield", stat: "2 jaar garantie", label: "Op onze onderdelen en interventies" },
  ],
  faqTitle: "Veelgestelde vragen over onze tarieven",
  faqs: [
    {
      id: 1,
      question: "Hoeveel kost een ketelonderhoud in Brussel?",
      answer: `${p.entretienChaudiereGaz.amount}€ btw inbegrepen voor een gasketel en ${p.entretienChaudiereMazout.amount}€ btw inbegrepen voor een stookolieketel. Volledige controle, veiligheidstests en attest dezelfde dag inbegrepen. [Meer over het ketelonderhoud](/nl/verwarming/ketelonderhoud).`,
    },
    {
      id: 2,
      question: "Wat kost een depannage?",
      answer: `${p.depannage.amount}€ btw inbegrepen, verplaatsing, diagnose en eerste uur inbegrepen, of de panne nu uw ketel, uw sanitair, uw elektriciteit of uw airco / warmtepomp betreft. Is er een onderdeel of extra tijd nodig, dan kent u de prijs voor de interventie.`,
    },
    {
      id: 3,
      question: "Hoeveel kost het ontstoppen van een leiding?",
      answer: `${p.debouchage.amount}€ btw inbegrepen om een gootsteen, lavabo of wc te ontstoppen. [Alles over ontstopping](/nl/sanitair/ontstopping).`,
    },
    {
      id: 4,
      question: "Wat kost het onderhoud van een warmtepomp?",
      answer: `${p.entretienPac.amount}€ btw inbegrepen. Regelmatig onderhoud behoudt het rendement en de levensduur van uw warmtepomp: [bekijk de details](/nl/airco/onderhoud-airco).`,
    },
    {
      id: 5,
      question: "Hoeveel kost het onderhoud van een boiler of geiser?",
      answer: `${p.entretienChauffeEau.amount}€ btw inbegrepen voor een gasboiler en ${p.entretienBoilerElectrique.amount}€ btw inbegrepen voor een elektrische boiler. [Boiler en geiser: wat we controleren](/nl/verwarming/onderhoud-boiler).`,
    },
    {
      id: 6,
      question: "Zijn uw prijzen inclusief btw?",
      answer: "Ja, alle prijzen op onze site zijn inclusief btw: dat is het bedrag dat u betaalt.",
    },
    {
      id: 7,
      question: "Waarom zijn sommige diensten « op offerte »?",
      answer:
        "Een installatie of renovatie hangt af van uw woning: vermogen, plaats, staat van het bestaande. We geven liever een precieze offerte dan een misleidende lokprijs. Ze is gratis, vrijblijvend, en u krijgt ze binnen 24 uur: [vraag een offerte aan](/nl/offerte).",
    },
    {
      id: 8,
      question: "Zijn er verborgen kosten?",
      answer: "Nee. De prijs die we zeggen, is de prijs die u betaalt, en niets wordt aangerekend zonder uw voorafgaand akkoord.",
    },
    {
      id: 9,
      question: "Krijg ik garantie op uw interventies?",
      answer:
        "Ja, op onze onderdelen en interventies krijgt u 2 jaar garantie. Voor een nieuwe ketel komt de fabrieksgarantie van 2 jaar op de onderdelen bovenop onze garantie van 2 jaar op de plaatsing.",
    },
  ],
  ctaBody: "Beschrijf ons uw project: u krijgt binnen 24 uur een gedetailleerde offerte, gratis en vrijblijvend. Het bedrag is het bedrag van de factuur.",
  catalogName: `Tarieven Radialec ${year} — verwarming, sanitair, elektriciteit, airco in Brussel`,
  areaServed: "Brussel",
};
