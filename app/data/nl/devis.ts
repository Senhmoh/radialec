import { company, companyCopy } from "../company";
import type { QuoteContent } from "../devis";
import { prices } from "../pricing";

// Offertepagina (/nl/offerte) : traduction de app/data/devis.ts.
const promises = companyCopy.nl.promises;

export const devisNl: QuoteContent = {
  metaTitle: "Gratis offerte verwarming, elektriciteit, sanitair in Brussel",
  metaDescription:
    "Vraag in 2 minuten uw gratis offerte aan: verwarmingsketel, warmtepomp, elektriciteit, sanitair, airco in Brussel. Teruggebeld binnen 2 uur, offerte binnen 24 uur, vrijblijvend.",
  breadcrumb: "Offerte aanvragen",
  eyebrow: "Gratis offerte · Teruggebeld binnen 2 uur",
  title: "Vraag uw gratis offerte aan in Brussel",
  intro:
    "Beschrijf in twee minuten wat u nodig hebt: een technicus belt u binnen 2 uur terug en stuurt u daarna een duidelijke, vrijblijvende offerte.",
  reviewSource: "Google-review",
  categories: [
    {
      id: "chauffage",
      label: "Verwarming",
      hint: "Ketel, radiatoren, warmtepomp",
      placeholder: "Bv.: gasketel van een jaar of vijftien te vervangen, halfopen bebouwing, 4 radiatoren per verdieping…",
    },
    {
      id: "electricite",
      label: "Elektriciteit",
      hint: "Zekeringkast, stopcontacten, laadpaal",
      placeholder: "Bv.: zekeringkast met smeltzekeringen te vervangen voor de verkoop, AREI-keuring volgende maand…",
    },
    {
      id: "plomberie",
      label: "Sanitair",
      hint: "Lek, ontstopping, ontkalking",
      placeholder: "Bv.: keukengootsteen loopt al een week slecht af, appartement op de 3e verdieping…",
    },
    {
      id: "climatisation",
      label: "Airco & warmtepomp",
      hint: "Airco en warmtepomp",
      placeholder: "Bv.: omkeerbare airco voor 2 slaapkamers boven, rijwoning, tuin achteraan…",
    },
    {
      id: "professionnels",
      label: "Syndicus / mede-eigendom",
      hint: "Gemeenschappelijke delen",
      placeholder: "Bv.: gebouw met 12 wooneenheden, jaarlijks onderhoud van de collectieve stookplaats en de parlofoon…",
    },
    {
      id: "autre",
      label: "Iets anders",
      hint: "We helpen u verder",
      placeholder: "Beschrijf wat u nodig hebt: we zoeken de juiste oplossing.",
    },
  ],
  related: {
    title: "De meest gevraagde offertes in Brussel",
    intro: "Wilt u zich eerst informeren? Elke pagina beschrijft de dienst, hoe het verloopt en de veelgestelde vragen.",
    refs: [
      "chauffage/remplacement-chaudiere",
      "chauffage/pompe-a-chaleur",
      "electricite/installation-borne-recharge",
      "electricite/mise-en-conformite-electrique",
      "electricite/renovation",
      "climatisation/installation-climatisation",
      "chauffage/installation-radiateurs",
      "chauffage/desembouage",
    ],
  },
  faqTitle: "Veelgestelde vragen over onze offertes",
  faqs: [
    {
      id: 1,
      question: "Is de offerte echt gratis?",
      answer: "Ja. De offerte is gratis en vrijblijvend: aanvaardt u ze niet, dan bent u ons niets verschuldigd.",
    },
    {
      id: 2,
      question: "Wanneer krijg ik mijn offerte?",
      answer: `Een technicus belt u terug ${promises.callback}. Voor de meeste aanvragen krijgt u daarna binnen 24 uur uw gedetailleerde offerte; voor een groter project is soms eerst een bezoek ter plaatse nodig.`,
    },
    {
      id: 3,
      question: "Is er een plaatsbezoek nodig voor de offerte?",
      answer:
        "Niet altijd. Voor een nieuwe ketel, een elektrische installatie of een warmtepomp helpt een bezoek ter plaatse om de prijs juist te bepalen. We stellen het alleen voor als het nodig is.",
    },
    {
      id: 4,
      question: "Welke informatie houd ik best klaar?",
      answer:
        "Het belangrijkste: wat er moet gebeuren en waar. Voeg als het kan foto's toe (het toestel, het typeplaatje, de zekeringkast…), het merk en de leeftijd van de installatie. Hoe preciezer de aanvraag, hoe juister de offerte.",
    },
    {
      id: 5,
      question: "Ik heb een panne, moet ik een offerte aanvragen?",
      answer: `Nee, bel ons meteen op **${company.phone.display}**. Een depannage heeft een vaste prijs van ${prices.depannage.amount}€ btw inbegrepen (verplaatsing, diagnose en eerste uur) en we komen binnen 24 uur, 7 op 7.`,
    },
    {
      id: 6,
      question: "Maakt u offertes voor syndici en mede-eigendommen?",
      answer:
        "Ja, voor de gemeenschappelijke delen en voor de wooneenheden: collectieve stookplaats, parlofonie, leidingen, elektriciteit van de gemene delen. [Onze diensten voor professionals](/nl/syndici).",
    },
    {
      id: 7,
      question: "Wat gebeurt er met mijn aanvraag?",
      answer:
        "Ze gaat rechtstreeks naar onze technici. We gebruiken uw gegevens alleen om uw offerteaanvraag te behandelen.",
    },
  ],
};
