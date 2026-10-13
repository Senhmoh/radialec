import { boilerBrandNamesNl } from "../brands";
import { companyCopy } from "../company";
import type { HomeContent } from "../home";

// Page d'accueil néerlandaise (/nl) : traduction de app/data/home.ts, mêmes
// promesses et mêmes faits. À faire relire par un néerlandophone.

const copy = companyCopy.nl;

export const homeNl: HomeContent = {
  metaTitle: "Chauffagist, elektricien en loodgieter in Brussel | Radialec",
  metaDescription: copy.description,
  hero: {
    eyebrow: "Chauffagist in Brussel · 7 op 7",
    title: "Uw verwarmingsketel, onze specialiteit.",
    intro:
      "Onderhoud, depannage en plaatsing van verwarmingsketels in Brussel en omgeving, 7 op 7. We komen ook voor uw elektrische installatie.",
    imageAlt: "Gascondensatieketel aan de muur",
    shortcutsLabel: "Uw ketel is…",
    shortcuts: [
      { label: "In panne", ref: "chauffage/depannage-chaudiere" },
      { label: "Aan onderhoud toe", ref: "chauffage/entretien-chaudiere" },
      { label: "Aan vervanging toe", ref: "chauffage/remplacement-chaudiere" },
      { label: "Iets anders", ref: "metiers" },
    ],
  },
  trust: [
    { icon: "users", stat: copy.promises.clients, label: "Ze bevelen ons aan in heel Brussel." },
    { icon: "shield", stat: copy.promises.warranty, label: "Op al onze onderdelen en interventies." },
    { icon: "clock", stat: copy.promises.intervention, label: `Een noodgeval? We nemen ${copy.promises.emergency} op, 7 op 7.` },
    { icon: "euro", stat: "Duidelijke prijzen", label: "De prijs die we zeggen, is de prijs die u betaalt." },
  ],
  boilers: { eyebrow: "Onze specialiteit", title: "Uw ketel, van onderhoud tot vervanging" },
  trades: {
    eyebrow: "Onze vakgebieden",
    title: "Specialist in verwarming, en meer",
    intro:
      "Onze technici doen ook elektriciteit, sanitair en airco. Voor alles in en rond het huis, in Brussel en omgeving, belt u hetzelfde nummer.",
    allServices: "Alle diensten",
    items: [
      {
        category: "chauffage",
        title: "Verwarming",
        image: { asset: "P05", alt: "Nieuwe wandketel geplaatst, aansluitingen zichtbaar" },
        links: [
          { label: "Depannage ketel", ref: "chauffage/depannage-chaudiere" },
          { label: "Onderhoud gasketel", ref: "chauffage/entretien-chaudiere" },
          { label: "Radiatoren", ref: "chauffage/installation-radiateurs" },
          { label: "Ontslibben", ref: "chauffage/desembouage" },
        ],
      },
      {
        category: "electricite",
        title: "Elektriciteit",
        image: { asset: "P20", alt: "Elektricien aan het werk aan een open zekeringkast" },
        links: [
          { label: "Elektrische installatie", ref: "electricite/installation-electricite" },
          { label: "Depannage elektriciteit", ref: "electricite/depannage-electrique" },
          { label: "Installatie in orde brengen", ref: "electricite/mise-en-conformite-electrique" },
          { label: "Laadpalen", ref: "electricite/installation-borne-recharge" },
        ],
      },
      {
        category: "climatisation",
        title: "Airco & warmtepompen",
        image: { asset: "P43", alt: "Technicus plaatst een binnenunit van een airco" },
        links: [
          { label: "Airco plaatsen", ref: "climatisation/installation-climatisation" },
          { label: "Onderhoud airco & warmtepomp", ref: "climatisation/entretien-climatisation" },
          { label: "Depannage airco & warmtepomp", ref: "climatisation/depannage-climatisation" },
          { label: "Warmtepompen", ref: "chauffage/pompe-a-chaleur" },
        ],
      },
      {
        category: "plomberie",
        title: "Sanitair & loodgieterij",
        image: { asset: "P30", alt: "Loodgieter herstelt een sifon onder een gootsteen" },
        links: [
          { label: "Depannage sanitair", ref: "plomberie/depannage" },
          { label: "Ontkalking", ref: "plomberie/detartrage" },
          { label: "Ontstopping", ref: "plomberie/debouchage" },
        ],
      },
    ],
  },
  pricing: {
    title: "Tarieven verwarming, elektriciteit en sanitair in Brussel",
    intro:
      "Voor de gewone interventies geldt een vaste prijs, btw inbegrepen, die hier staat. Voor een project is de offerte gratis, en we beginnen pas als u akkoord gaat met de prijs.",
    items: [
      { key: "entretienChaudiereGaz" },
      { key: "depannage" },
      { key: "entretienChaudiereMazout" },
      { key: "entretienChauffeEau" },
      { key: "entretienBoilerElectrique" },
      { key: "debouchage" },
      { key: "ramonage" },
      { key: "entretienPac" },
    ],
  },
  faqTitle: "Veelgestelde vragen",
  faqs: [
    {
      id: 1,
      question: "Hoe krijg ik een offerte voor een nieuwe verwarmingsketel?",
      answer:
        "Vul het [offerteformulier](/nl/offerte) in (twee minuten, foto's zijn welkom) of bel ons. U krijgt binnen 24 uur een gedetailleerde offerte, gratis en vrijblijvend. Alles over het [vervangen van uw ketel](/nl/verwarming/ketel-vervangen).",
    },
    {
      id: 2,
      question: "Op welke ketels werkt u?",
      answer: `Onze chauffagisten werken op gas- en stookolieketels van ${boilerBrandNamesNl}.`,
    },
    {
      id: 3,
      question: "Welke soorten ketels plaatst u?",
      answer:
        "We plaatsen gascondensatieketels, en warmtepompen als de woning zich ertoe leent. We helpen u het merk en het model te kiezen dat bij uw woning past.",
    },
    {
      id: 4,
      question: "Wat is het beste moment voor het onderhoud van mijn ketel?",
      answer:
        "Een gasketel laat u best om de twee jaar onderhouden, een stookolieketel elk jaar. Het goede moment: voor de winter, zodat alles klaar is wanneer u het nodig hebt.",
    },
    {
      id: 5,
      question: "Wanneer vervangt u uw ketel?",
      answer:
        "Een ketel gaat ongeveer 15 jaar mee. Is uw ketel ouder dan 12 à 15 jaar, denk dan aan een vervanging. Hebt u nog geen condensatieketel, dan kunt u uw installatie nu al vervangen.",
    },
  ],
  cta: {
    body: `Een panne komt altijd op het slechtste moment. Bel ons, we nemen ${copy.promises.emergency} op: een technicus komt binnen 24 uur langs, ook in het weekend, en u kent de prijs voor hij begint.`,
  },
};
