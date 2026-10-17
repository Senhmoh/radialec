import type { Service } from "../../services/types";

// Page « syndici » en néerlandais (/nl/syndici) : traduction de
// app/data/services/professionnels.ts. Aucune référence client citée.
// ACP = VME (vereniging van mede-eigenaars), AG = algemene vergadering.

export const professionnelsServicesNl: Service[] = [
  {
    category: "professionnels",
    slug: "syndics-coproprietes",
    path: "/nl/syndici",
    title: "Syndici & mede-eigendommen",
    name: "Diensten voor syndici en mede-eigendommen",
    pageTitle: "Verwarming, elektriciteit en sanitair voor syndici en mede-eigendommen in Brussel",
    metaTitle: "Technicus voor syndici en mede-eigendommen in Brussel",
    metaDescription:
      "Syndici en mede-eigendommen in Brussel: collectieve stookplaats, elektriciteit van de gemene delen, parlofonie, kolommen. Eén nummer, offerte binnen 24 uur.",
    summary: "Collectieve verwarming, elektriciteit van de gemene delen, parlofonie, waterkolommen: één nummer voor alle techniek in uw gebouwen.",
    icon: "building",
    intent: "installation",
    hero: {
      eyebrow: "Syndici · Beheerders · VME",
      intro:
        "Een gebouw beheren betekent jongleren met vakmensen. Stookplaats, verlichting van de gemene delen, parlofonie, waterkolommen: met Radialec belt u één nummer, 7 op 7, en krijgt u offertes die u makkelijk aan uw mede-eigenaars voorlegt.",
      image: { asset: "P50", alt: "Gevel van een appartementsgebouw in Brussel" },
    },
    facts: [
      { icon: "users", stat: "Eén nummer", label: "Verwarming, elektriciteit, sanitair" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Snelle interventie, 7 op 7" },
      { icon: "fileSign", stat: "Gratis offerte binnen 24 uur", label: "Gedetailleerd, klaar voor de AV" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    blocks: [
      {
        type: "features",
        title: "Alle techniek van uw gemene delen",
        intro: "Eén dienstverlener voor de installaties die uw mede-eigenaars delen.",
        items: [
          {
            icon: "fire",
            title: "Collectieve verwarming",
            text: "Onderhoud en depannage van de stookplaats, controle van de kringen, [ontslibben](/nl/verwarming/ontslibben) als de radiatoren slecht verwarmen.",
          },
          {
            icon: "bolt",
            title: "Elektriciteit van de gemene delen",
            text: "Verlichting van hallen en trappen, minuterieën, stopcontacten en zekeringkasten van de gemene delen, [installatie in orde brengen](/nl/elektriciteit/installatie-in-orde-brengen).",
          },
          {
            icon: "bell",
            title: "Parlofonie en videofonie",
            text: "Buitenposten, binnenposten, [parlofonie van het gebouw](/nl/elektriciteit/parlofoon) herstellen of moderniseren.",
          },
          {
            icon: "water",
            title: "Sanitair en kolommen",
            text: "Lekken, waterkolommen, [ontstopping](/nl/sanitair/ontstopping) van kolommen en gemeenschappelijke afvoeren.",
          },
        ],
      },
      {
        type: "steps",
        title: "Hoe we met u samenwerken",
        intro: "Een eenvoudige werkwijze, afgestemd op wat een beheerder nodig heeft.",
        steps: [
          { title: "Eerste contact", description: "U stelt ons het gebouw voor, zijn installaties en uw behoeften, eenmalig of terugkerend." },
          { title: "Bezoek en plaatsbeschrijving", description: "We bekijken de betrokken gemeenschappelijke installaties en noteren de aandachtspunten." },
          { title: "Gedetailleerde offerte binnen 24 uur", description: "Gratis, post per post, makkelijk voor te leggen aan de algemene vergadering of de raad van mede-eigendom." },
          { title: "Interventies en opvolging", description: "Planning van werken en onderhoud, interventieverslag op aanvraag." },
        ],
      },
      {
        type: "callBand",
        title: "Een panne in de gemene delen? Eén telefoontje volstaat.",
        text: "Stookplaats stilgevallen, gemene delen in het donker, lek op een kolom: we komen binnen 24 uur, 7 op 7. Voor uw projecten: gedetailleerde offerte binnen 24 uur.",
      },
      {
        type: "features",
        layout: "list",
        title: "Een partner op maat van beheerders",
        items: [
          { icon: "headset", title: "Eén nummer", text: "Verwarming, elektriciteit, sanitair: één contact voor al uw gebouwen, 7 op 7." },
          { icon: "clock", title: "Termijnen die we halen", text: "Een panne in de gemene delen? Interventie binnen 24 uur, ook in het weekend." },
          {
            icon: "fileSign",
            title: "Leesbare offertes",
            text: "Gratis, binnen 24 uur en post per post, zodat de mede-eigenaars makkelijk kunnen beslissen.",
          },
          { icon: "calendar", title: "Gepland onderhoud", text: "We helpen u het periodieke onderhoud te plannen, zodat u geen vervaldata meer achternaloopt." },
          { icon: "euro", title: "Prijzen vooraf gekend", text: "Het bedrag van de offerte is het bedrag van de factuur: niets te verantwoorden bij het einde van het boekjaar." },
          { icon: "comments", title: "Een duidelijk verslag", text: "Op aanvraag een samenvatting van elke interventie, voor uw dossiers en uw mede-eigenaars." },
        ],
      },
      {
        type: "callout",
        title: "Periodiek onderhoud en keuringen: niets laten liggen",
        paragraphs: [
          "Collectieve ketels, elektrische installatie van de gemene delen: voor verschillende installaties in een gebouw legt de regelgeving periodiek onderhoud of keuringen op. Wij nemen die voor verwarming, elektriciteit en sanitair op ons, en helpen u de kalender te volgen.",
          "Voor de regelgeving over verwarming in het Brussels Gewest blijft [leefmilieu.brussels](https://leefmilieu.brussels) de officiële bron.",
        ],
      },
      {
        type: "pricing",
        title: "Duidelijke tarieven voor uw gebouwen",
        intro: "Depannage aan een forfait, onderhoud en werken op gedetailleerde offerte: zo bereidt u uw budget en uw algemene vergaderingen rustig voor.",
        items: [{ key: "depannage" }, { label: "Onderhoud van collectieve installaties", note: "Op offerte, volgens het gebouw" }],
      },
    ],
    faqTitle: "Veelgestelde vragen van syndici en beheerders",
    faqs: [
      {
        id: 1,
        question: "Werkt u in de gemene delen en in de appartementen?",
        answer: "Ja: in de gemene delen voor de syndicus, en in de appartementen op vraag van de eigenaars of de huurders.",
      },
      {
        id: 2,
        question: "Kunt u een offerte opmaken voor de algemene vergadering?",
        answer: "Ja. Onze offertes zijn gratis, binnen 24 uur en post per post, zodat de mede-eigenaars makkelijk kunnen beslissen.",
      },
      {
        id: 3,
        question: "Biedt u onderhoudscontracten aan?",
        answer:
          "Samen met u bekijken we de formule die het best bij uw gebouw past: gepland onderhoud, interventies op aanvraag… [Laten we erover praten](/nl/contact#terugbelformulier).",
      },
      {
        id: 4,
        question: "Hoe snel komt u bij een panne in de gemene delen?",
        answer: "We komen binnen 24 uur, 7 op 7: stookplaats stilgevallen, verlichting van de gemene delen in panne of een lek op een kolom.",
      },
      {
        id: 5,
        question: "Werkt u ook voor agentschappen en verhuurders?",
        answer:
          "Ja, onder meer voor het [ketelonderhoud](/nl/verwarming/ketelonderhoud), het [in orde brengen van de elektrische installatie](/nl/elektriciteit/installatie-in-orde-brengen) voor een verkoop of verhuur, en depannages tussen twee huurders.",
      },
      {
        id: 6,
        question: "In welke gemeenten komt u?",
        answer: "In de 19 gemeenten van het Brussels Gewest en in de rand, in Vlaams-Brabant en Waals-Brabant.",
      },
    ],
    related: ["chauffage/entretien-chaudiere", "electricite/installation-parlophonie", "plomberie/debouchage", "electricite/mise-en-conformite-electrique"],
    cta: {
      title: "Een gebouw te beheren? Eén nummer voor alle techniek.",
      body: "Stel ons uw gebouw en uw behoeften voor: u krijgt binnen 24 uur een gedetailleerde offerte, en we komen 7 op 7 in de gemene delen.",
    },
    zonesIntro:
      "We werken voor gebouwen en mede-eigendommen in de 19 Brusselse gemeenten en de rand, in Vlaams-Brabant en Waals-Brabant.",
    draft: false,
  },
];
