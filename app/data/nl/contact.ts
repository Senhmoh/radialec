import { company, companyCopy } from "../company";
import type { ContactContent } from "../contact";
import { prices } from "../pricing";

// Page contact néerlandaise (/nl/contact) : traduction de app/data/contact.ts.
const promises = companyCopy.nl.promises;

export const contactNl: ContactContent = {
  metaTitle: "Contact en gratis offerte in Brussel",
  metaDescription:
    "Gratis offerte binnen 24 uur, online afspraak of terugbelverzoek: neem contact op met Radialec voor uw verwarming, elektriciteit of sanitair in Brussel, 7 op 7.",
  header: {
    eyebrow: "Contact · Brussel en omgeving",
    title: "Neem contact op met Radialec, uw technicus in Brussel",
    intro: `Bellen gaat het snelst: we nemen ${promises.availability} op van 10u tot 21u, en ${promises.emergency} voor dringende gevallen. Schrijft u liever? Vraag een offerte aan, maak een afspraak of laat uw nummer achter.`,
  },
  callback: {
    eyebrow: "Laat u terugbellen",
    title: "Laat uw nummer achter, wij bellen u terug",
    intro: `Nu geen tijd om te bellen? Zeg ons wanneer u bereikbaar bent: we bellen u terug${
      promises.callback ? ` ${promises.callback}` : ""
    } om uw vraag te beantwoorden of de interventie te plannen. Vrijblijvend.`,
    emergency: "Een panne op dit moment? Bel ons liever:",
  },
  band: {
    title: "Een noodgeval? Wacht niet op een formulier.",
    text: `Bel ons meteen, we nemen ${promises.emergency} op. Een technicus komt binnen 24 uur langs, ook in het weekend, in Brussel en de rand.`,
  },
  faqTitle: "Veelgestelde vragen",
  faqs: [
    {
      id: 1,
      question: "Is de offerte echt gratis?",
      answer:
        "Ja, gratis en vrijblijvend, en u krijgt ze binnen 24 uur. Het bedrag van de offerte is het bedrag van de factuur: achteraf komt er niets bij.",
    },
    {
      id: 2,
      question: "Hoe snel kunt u komen?",
      answer: `Een technicus komt binnen 24 uur langs, 7 op 7, in Brussel en de rand. Voor een noodgeval belt u meteen **${company.phone.display}**: we nemen ${promises.emergency} op.`,
    },
    {
      id: 3,
      question: "Hoeveel kost een depannage?",
      answer: `Een depannage kost ${prices.depannage.amount}€ btw inbegrepen, verplaatsing, diagnose en eerste uur inbegrepen. Is er een bijkomende herstelling nodig, dan kent u de prijs voor we eraan beginnen. Bekijk [al onze tarieven](/nl/tarieven).`,
    },
    {
      id: 4,
      question: "In welke gemeenten komt u?",
      answer:
        "De 19 gemeenten van het Brussels Gewest, en een deel van Vlaams-Brabant en Waals-Brabant: [bekijk de volledige lijst](#zones).",
    },
    {
      id: 5,
      question: "Werkt u ook voor syndici en mede-eigendommen?",
      answer:
        "Ja, we werken voor syndici en beheerders aan de installaties van de gemeenschappelijke delen: [ontdek onze diensten voor professionals](/nl/syndici).",
    },
    {
      id: 6,
      question: "Wat houdt u best bij de hand voor u belt?",
      answer:
        "Indien mogelijk het merk en model van het toestel, een beschrijving van het probleem (foutcode, geluid, lek…) en een foto. Zo kunnen we een eerste diagnose stellen en met het juiste materiaal komen.",
    },
  ],
};
