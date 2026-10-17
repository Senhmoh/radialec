import { companyCopy } from "../../company";
import { prices } from "../../pricing";
import type { Service } from "../../services/types";

// Pages service « elektriciteit » en néerlandais : traduction de
// app/data/services/electricite.ts (mêmes category / slug, adresse dans `path`).
// RGIE = AREI, organisme agréé = erkend keuringsorganisme, SPF Économie = FOD
// Economie. À faire relire par un néerlandophone.

const promises = companyCopy.nl.promises;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const electriciteServicesNl: Service[] = [
  // --- Depannage elektriciteit ---
  {
    category: "electricite",
    slug: "depannage-electrique",
    path: "/nl/elektriciteit/depannage-elektriciteit",
    title: "Depannage elektriciteit",
    name: "Depannage elektriciteit",
    pageTitle: "Depannage elektriciteit in Brussel, 7 op 7",
    metaTitle: "Depannage elektriciteit in Brussel – 7 op 7",
    metaDescription: `Dringend een elektricien in Brussel: stroomuitval, verliesstroomschakelaar die springt, stopcontact defect. Interventie binnen 24 uur, 7 op 7, forfait ${prices.depannage.amount}€ btw incl. Bel ons.`,
    summary: "Stroomuitval, differentieel die springt, stopcontact of schakelaar defect: een elektricien bij u binnen 24 uur, 7 op 7.",
    icon: "bolt",
    intent: "urgence",
    price: { key: "depannage", label: "Depannage elektriciteit" },
    hero: {
      eyebrow: "Dringend elektriciteit · 7 op 7",
      intro: `Geen stroom meer, een differentieel die blijft springen, een stopcontact dat warm wordt? Bel ons, we nemen ${promises.emergency} op. Een elektricien vindt de panne, maakt uw installatie veilig en zet de stroom weer op, binnen 24 uur, 7 op 7. U kent de prijs voor de herstelling.`,
      image: { asset: "P20", alt: "Elektricien aan het werk aan een open zekeringkast, met een geïsoleerde schroevendraaier" },
    },
    facts: [
      { icon: "euro", stat: `${prices.depannage.amount}€ btw incl.`, label: "Verplaatsing + diagnose + 1e uur" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Interventie, 7 op 7" },
      { icon: "phone", stat: capitalize(promises.emergency), label: "We nemen op voor dringende gevallen" },
      { icon: "shield", stat: "2 jaar garantie", label: "Onderdelen en werk" },
    ],
    blocks: [
      {
        type: "features",
        layout: "list",
        eyebrow: "Diagnose",
        title: "De meest voorkomende elektrische pannes",
        intro: "Dit zijn de pannes die we het vaakst tegenkomen, en wat ze meestal veroorzaakt.",
        items: [
          {
            icon: "power",
            title: "Zekering of differentieel die springt",
            text: "Hij valt uit zodra u een toestel aansluit, of zonder duidelijke reden: defect toestel, isolatiefout of overbelaste kring. Wij vinden de boosdoener.",
          },
          { icon: "bolt", title: "Gedeeltelijke stroomuitval", text: "Eén kamer, één verdieping of één kring werkt niet meer, terwijl de rest van de woning stroom heeft." },
          {
            icon: "plug",
            title: "Stopcontact of schakelaar defect",
            text: "Stopcontact zonder stroom, schakelaar die knettert of niets meer bedient: vervanging volgens de normen.",
          },
          {
            icon: "smog",
            title: "Brandgeur",
            text: "Een geur van warm plastic bij een stopcontact, een schakelaar of de zekeringkast is een alarmsignaal: een contact dat opwarmt, kan brand veroorzaken.",
          },
          {
            icon: "tempHigh",
            title: "Stopcontact of stekker die warm wordt",
            text: "Los contact, versleten stopcontact of overbelaste stekkerdoos: warmte is het eerste teken van gevaarlijke opwarming.",
          },
          {
            icon: "lightbulb",
            title: "Flikkerende verlichting",
            text: "Lampen die flikkeren of herhaalde spanningsdalingen: losse verbinding, defecte dimmer of een probleem op de kring.",
          },
        ],
      },
      {
        type: "alert",
        tone: "danger",
        title: "Blootliggende draad, vonken, brandgeur: de juiste reflexen",
        paragraphs: [
          "**Zet meteen de hoofdschakelaar van uw zekeringkast uit**, raak de draden en het betrokken toestel niet aan en hou kinderen weg.",
          "Probeer nooit zelf een blootliggende kabel of een zwartgeblakerd stopcontact te herstellen. Krijgt iemand een elektrische schok, raak hem dan niet aan voor de stroom uit is. Bij een elektrische schok of een beginnende brand belt u meteen **112**.",
          "Is de situatie veilig, bel ons dan: een elektricien komt binnen 24 uur, 7 op 7, vindt het defect en zet de stroom weer op.",
        ],
      },
      {
        type: "features",
        layout: "columns",
        eyebrow: "Voor u belt",
        title: "Drie controles die tijd winnen",
        items: [
          {
            icon: "search",
            title: "Zit de hele straat zonder stroom?",
            text: "Zitten ook uw buren in het donker, dan komt de panne van het openbare net, beheerd door de netbeheerder (Sibelga in Brussel): uw installatie is niet de oorzaak.",
          },
          {
            icon: "power",
            title: "Welke zekering is gesprongen?",
            text: "Zoek in de zekeringkast de automaat of differentieel die naar beneden staat. Gaat hij niet meer omhoog of valt hij meteen terug, forceer dan niet.",
          },
          {
            icon: "plug",
            title: "Stekkers eruit, dan opnieuw aanzetten",
            text: "Trek de stekkers van de toestellen op die kring uit en zet de zekering weer aan. Komt alles terug, steek ze dan één voor één weer in: het toestel waardoor alles uitvalt, is waarschijnlijk defect.",
          },
        ],
        note: "Valt de differentieel ook met alles uitgetrokken? Dan zit het defect in de installatie zelf: dat is het moment om ons te bellen.",
      },
      {
        type: "steps",
        title: "Zo verloopt een depannage elektriciteit",
        steps: [
          {
            title: "Aan de telefoon, de juiste handelingen",
            description: "Beschrijf ons de panne: we zeggen u meteen wat u uitzet en wat u niet aanraakt, en we komen binnen 24 uur langs, 7 op 7.",
          },
          { title: "Het defect zoeken", description: "De elektricien test de zekeringkast, de kringen en de isolatie tot hij vindt waar de panne vandaan komt." },
          {
            title: "U keurt de prijs goed",
            description: "Is er een onderdeel of meer tijd nodig, dan kent u de prijs voor we beginnen. U keurt goed, wij herstellen.",
          },
          { title: "Tests en stroom weer op", description: "Werkings- en veiligheidstests, en enkele tips zodat het niet opnieuw gebeurt." },
        ],
      },
      {
        type: "pricing",
        title: "Tarief depannage elektriciteit in Brussel",
        intro:
          "Het forfait omvat de verplaatsing, de diagnose en het eerste werkuur. Zijn er onderdelen nodig, dan krijgt u de prijs voor de herstelling.",
        items: [
          { key: "depannage", label: "Depannage elektriciteit", popular: true },
          { label: "Bijkomende werken (zekeringkast, kring…)", note: "Gratis offerte, goedgekeurd voor de werken" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over depannage elektriciteit",
    faqs: [
      {
        id: 1,
        question: "Komt u dringend in het weekend?",
        answer: `Ja. We nemen ${promises.emergency} op, en een elektricien komt binnen 24 uur langs, ook in het weekend.`,
      },
      {
        id: 2,
        question: "Hoeveel kost een depannage elektriciteit in Brussel?",
        answer: `Het forfait voor een depannage is **${prices.depannage.amount}€ btw inbegrepen**: verplaatsing, diagnose en eerste werkuur inbegrepen. Na het eerste uur kost elk extra uur **${prices.heureSupplementaire.amount}€ btw inbegrepen**. Zijn er onderdelen of bijkomende werken nodig, dan kent u de prijs voor de interventie. Bekijk [al onze tarieven](/nl/tarieven).`,
      },
      {
        id: 3,
        question: "Waarom springt mijn differentieel steeds?",
        answer:
          "Meestal door een defect toestel (wasmachine, oven, boiler…), vocht in een aftakdoos of een isolatiefout van een kabel. Trek alles uit en zet hem weer aan: valt hij nog, dan zit het defect in de installatie en moet een elektricien het zoeken.",
      },
      {
        id: 4,
        question: "Ik heb helemaal geen stroom meer, wat nu?",
        answer:
          "Controleer eerst uw hoofdschakelaar, en vraag uw buren of zij ook zonder stroom zitten. Zit de hele straat in het donker, dan komt de panne van het openbare net, beheerd door Sibelga in Brussel. Gaat het alleen om uw woning, bel ons dan.",
      },
      {
        id: 5,
        question: "Is een stopcontact dat warm wordt gevaarlijk?",
        answer:
          "Ja. Opwarming wijst op een slecht contact of een overbelasting, wat brand kan veroorzaken. Trek de stekkers uit, zet de kring uit in de zekeringkast en laat het snel nakijken.",
      },
      {
        id: 6,
        question: "Kunt u na de depannage mijn zekeringkast vervangen?",
        answer:
          "Ja. Blijkt uit de diagnose dat de zekeringkast verouderd of niet conform is, dan krijgt u een gratis offerte voor de [renovatie](/nl/elektriciteit/renovatie) of om hem [in orde te brengen](/nl/elektriciteit/installatie-in-orde-brengen).",
      },
      {
        id: 8,
        question: "Krijg ik garantie op de depannage?",
        answer:
          "Ja, op onze depannages krijgt u 2 jaar garantie. Tijdens die periode mag geen ander bedrijf aan de betrokken installatie werken, anders vervalt de garantie.",
      },
    ],
    related: ["electricite/renovation", "electricite/mise-en-conformite-electrique", "electricite/installation-electricite", "chauffage/depannage-chaudiere"],
    cta: {
      title: "Geen stroom meer? Uw elektricien is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Blijf niet in het donker zitten: een elektricien komt binnen 24 uur, 7 op 7, in Brussel en de rand, en zegt u de prijs voor hij herstelt.",
    },
    draft: false,
  },

  // --- Elektrische installatie ---
  {
    category: "electricite",
    slug: "installation-electricite",
    path: "/nl/elektriciteit/elektrische-installatie",
    title: "Elektrische installatie",
    name: "Elektrische installatie",
    pageTitle: "Elektrische installatie in Brussel: nieuwbouw, renovatie, uitbreiding",
    metaTitle: "Elektrische installatie in Brussel",
    metaDescription:
      "Volledige elektrische installatie of uitbreiding in Brussel: zekeringkast, kringen, stopcontacten, verlichting. Conform het AREI, gratis offerte binnen 24 uur, 2 jaar garantie.",
    summary: "Nieuwbouw, renovatie of uitbreiding: zekeringkast, kringen, stopcontacten en verlichting geplaatst volgens het AREI, klaar voor de keuring.",
    icon: "plug",
    intent: "installation",
    hero: {
      eyebrow: "Installatie · Gratis offerte",
      intro:
        "Nieuwbouw, renovatie of een eenvoudige uitbreiding: we leggen uw elektrische installatie aan (zekeringkast, kringen, stopcontacten, verlichting) volgens het AREI, met een gedetailleerde offerte binnen 24 uur.",
      image: { asset: "P26", alt: "Nieuwe zekeringkast geplaatst in haar kast" },
    },
    facts: [
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "schema", stat: "Conform het AREI", label: "Klaar voor de keuring" },
      { icon: "users", stat: "Schema's inbegrepen", label: "Klaar voor de AREI-keuring" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op onze werken" },
    ],
    blocks: [
      {
        type: "options",
        eyebrow: "Uw project",
        title: "Een elektrische installatie voor elk project",
        intro:
          "Van een nieuwe woning tot een extra kamer, het vertrekpunt is hetzelfde: een veilige installatie, afgestemd op uw gebruik en conform het AREI.",
        items: [
          {
            title: "Nieuwbouw",
            text: "We leggen de volledige installatie aan op basis van uw plannen: plaats van stopcontacten en lichtpunten, zekeringkast, aparte kringen (keuken, boiler, laadpaal…).",
            points: ["Studie van de behoeften kamer per kamer", "Zekeringkast gedimensioneerd voor de toekomst", "Documenten klaar voor de keuring"],
          },
          {
            title: "Renovatie",
            badge: "Oud huis",
            text: "Oud huis, gerenoveerd appartement: we vervangen een verouderde installatie geheel of gedeeltelijk. Zie onze pagina [elektrische renovatie](/nl/elektriciteit/renovatie).",
            points: ["Vervanging van de zekeringkast", "Nieuwe kringen met aarding", "Werken georganiseerd in een bewoonde woning"],
          },
          {
            title: "Uitbreiding",
            text: "Nieuwe kamer, keuken, veranda, ingerichte zolder, garage: we voegen de nodige kringen toe en controleren of uw zekeringkast en aansluiting het aankunnen.",
            points: ["Controle van de bestaande capaciteit", "Nieuwe beveiligde kringen", "Netjes geïntegreerd in het bestaande"],
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat uw installatie omvat",
        items: [
          "Studie van uw behoeften en inplantingsplan (stopcontacten, verlichting, kringen)",
          "Zekeringkast met aangepaste automaten en verliesstroomschakelaars",
          "Aparte kringen voor grote toestellen (koken, wasmachine, boiler…)",
          "Stopcontacten, schakelaars en lichtpunten geplaatst en aangesloten",
          "Aarding en equipotentiale verbindingen (badkamer)",
          "Werkings- en veiligheidstests voor de ingebruikname",
          "[Ééndraadschema en situatieschema](/nl/elektriciteit/elektrische-schemas) voor de keuring",
        ],
        note: "Het schakelmateriaal en de verlichting kiezen we samen met u, bij de offerte.",
        image: { asset: "P22", alt: "Elektricien meet de spanning van een stopcontact met een multimeter" },
      },
      {
        type: "callout",
        title: "AREI en keuring: wat u moet weten",
        paragraphs: [
          "In België moet elke huishoudelijke elektrische installatie voldoen aan het **AREI** (Algemeen Reglement op de Elektrische Installaties). Voor de ingebruikname moet een nieuwe installatie in principe gekeurd worden door een **erkend keuringsorganisme**, onafhankelijk van de elektricien die ze aanlegde.",
          "Voor die keuring vraagt het organisme het **ééndraadschema** en het **situatieschema** van de installatie. We maken ze samen met uw installatie, zodat de keuring vlot verloopt. Meer over [een installatie in orde brengen](/nl/elektriciteit/installatie-in-orde-brengen).",
          "De gedetailleerde regels worden gepubliceerd door de [FOD Economie](https://economie.fgov.be).",
        ],
      },
      {
        type: "steps",
        title: "Uw installatie, stap voor stap",
        steps: [
          { title: "Bezoek en offerte binnen 24 uur", description: "We bekijken uw project ter plaatse en bezorgen u een gedetailleerde offerte, gratis en vrijblijvend." },
          { title: "Inplantingsplan", description: "Plaats van stopcontacten, lichtpunten en kringen, samen met u bepaald, kamer per kamer." },
          { title: "Uitvoering", description: "Plaatsing van buizen, bekabeling, zekeringkast en schakelmateriaal door een gekwalificeerde elektricien." },
          { title: "Tests en documenten", description: "Werkings- en veiligheidstests, schema's bezorgd voor de keuring." },
        ],
      },
      {
        type: "pricing",
        title: "Tarieven elektrische installatie in Brussel",
        intro:
          "Elke installatie hangt af van de oppervlakte, het aantal kringen en de gekozen uitrusting: we berekenen uw project precies, gratis.",
        items: [
          { label: "Volledige installatie (nieuw of renovatie)", note: "Gratis offerte binnen 24 uur" },
          { label: "Uitbreiding of nieuwe kring", note: "Gratis offerte binnen 24 uur" },
          { key: "depannage", label: "Depannage elektriciteit" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over de elektrische installatie",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost een volledige elektrische installatie?",
        answer:
          "De prijs hangt af van de oppervlakte van de woning, het aantal kringen en punten (stopcontacten, verlichting) en het gekozen materiaal. U krijgt binnen 24 uur een gedetailleerde, gratis offerte, vrijblijvend.",
      },
      {
        id: 2,
        question: "Moet een nieuwe elektrische installatie gekeurd worden?",
        answer:
          "Ja. Volgens het AREI moet een nieuwe installatie gekeurd worden door een erkend keuringsorganisme voor de ingebruikname. We maken het [ééndraadschema en het situatieschema](/nl/elektriciteit/elektrische-schemas) die voor die keuring nodig zijn.",
      },
      {
        id: 3,
        question: "Kunt u stopcontacten of een kring toevoegen aan mijn installatie?",
        answer:
          "Ja. We controleren eerst of uw zekeringkast en aansluiting die nieuwe kring aankunnen, en integreren hem dan netjes. Een grote wijziging kan een nieuwe keuring vragen: dat staat dan in de offerte.",
      },
      {
        id: 4,
        question: "Hoelang duren de werken?",
        answer: "Dat hangt af van de omvang: enkele uren voor een nieuwe kring, meer voor een volledige installatie. De planning leggen we samen met u vast in de offerte.",
      },
      {
        id: 5,
        question: "Werkt u ook aan verwarming en sanitair?",
        answer:
          "Ja: we doen ook [verwarming](/nl/verwarming), [sanitair](/nl/sanitair) en [airco](/nl/airco). Bij een renovatie is dat handig: één nummer om de werken te coördineren.",
      },
      { id: 6, question: "Krijg ik garantie op mijn installatie?", answer: "Ja, op onze werken krijgt u 2 jaar garantie." },
    ],
    related: ["electricite/schema-electrique", "electricite/renovation", "electricite/installation-borne-recharge", "electricite/installation-videophonie"],
    cta: {
      body: "Nieuwbouw, renovatie of uitbreiding? Beschrijf ons uw project: een elektricien komt kijken, en u krijgt binnen 24 uur een gedetailleerde offerte. We maken ook de schema's voor de keuring.",
    },
    draft: false,
  },

  // --- Installatie in orde brengen (AREI) ---
  {
    category: "electricite",
    slug: "mise-en-conformite-electrique",
    path: "/nl/elektriciteit/installatie-in-orde-brengen",
    title: "Installatie in orde brengen",
    name: "Elektrische installatie in orde brengen",
    pageTitle: "Uw elektrische installatie in orde brengen in Brussel (AREI)",
    metaTitle: "Elektrische installatie in orde brengen in Brussel",
    metaDescription:
      "Verkoop, negatief keuringsverslag, oude installatie: uw installatie conform het AREI in Brussel, werken en schema's voor de keuring. Gratis offerte binnen 24 uur.",
    summary: "Verkoop van uw woning, negatief keuringsverslag: we voeren de werken uit en maken de documenten klaar om de AREI-keuring te halen.",
    icon: "shield",
    intent: "installation",
    price: { key: "miseEnConformite" },
    hero: {
      eyebrow: "AREI · Verkoop & keuring",
      intro:
        "U verkoopt uw woning of kreeg een negatief keuringsverslag? We bekijken de opmerkingen, voeren de werken uit om uw installatie in orde te brengen en maken de schema's klaar die het erkende keuringsorganisme vraagt.",
      image: { asset: "P20", alt: "Elektricien controleert een open zekeringkast" },
    },
    facts: [
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "file", stat: "Verslag bekeken", label: "Elke opmerking behandeld" },
      { icon: "schema", stat: "Schema's klaar", label: "Ééndraadschema + situatieschema" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op onze werken" },
    ],
    blocks: [
      {
        type: "features",
        layout: "columns",
        eyebrow: "Wettelijke verplichting",
        title: "Wanneer is de AREI-keuring verplicht?",
        intro: "De keuring wordt uitgevoerd door een **erkend keuringsorganisme**, onafhankelijk van de elektricien. Ze is verplicht in vier gevallen.",
        items: [
          { icon: "home", title: "Verkoop van een woning", text: "De verkoper moet de elektrische installatie laten keuren en het proces-verbaal aan de koper bezorgen." },
          { icon: "plug", title: "Nieuwe installatie", text: "Elke nieuwe installatie moet gekeurd worden voor ze in gebruik genomen wordt." },
          { icon: "tools", title: "Belangrijke wijziging", text: "Een uitbreiding of een grote aanpassing van de installatie moet ook gekeurd worden." },
          { icon: "calendar", title: "Periodieke keuring", text: "Een huishoudelijke installatie moet om de 25 jaar opnieuw gekeurd worden." },
        ],
        note: "Radialec voert de werken uit en maakt uw dossier klaar; het proces-verbaal van conformiteit wordt afgeleverd door het erkende keuringsorganisme dat u aanstelt. De precieze regels worden gepubliceerd door de [FOD Economie](https://economie.fgov.be).",
      },
      {
        type: "checklist",
        title: "Negatief verslag: wat we in orde brengen",
        intro: "Een negatief proces-verbaal somt inbreuken op die verholpen moeten worden. De meest voorkomende:",
        items: [
          "Geen of onvoldoende **verliesstroombeveiliging**",
          "Verouderde zekeringkast, smeltzekeringen te vervangen door automaten",
          "Kringen zonder **aarding** of met onvoldoende aarding",
          "Kabelsectie niet aangepast aan de beveiliging",
          "Stopcontacten, aftakdozen of verbindingen slecht beschermd",
          "Ontbrekende equipotentiale verbindingen in de badkamer",
          "[Ééndraadschema en situatieschema](/nl/elektriciteit/elektrische-schemas) ontbreken of zijn onvolledig",
        ],
        note: "Op basis van het verslag van het organisme krijgt u een duidelijke offerte, post per post.",
        image: { asset: "P25", alt: "Ééndraadschema naast de zekeringkast" },
      },
      {
        type: "callBand",
        title: "Een negatief verslag? Stuur het ons.",
        text: "Bezorg ons het proces-verbaal van het erkende keuringsorganisme: we berekenen gratis de werken om uw installatie in orde te brengen, post per post, binnen 24 uur.",
      },
      {
        type: "callout",
        title: "Verkopen of kopen met een negatief verslag",
        paragraphs: [
          "Een negatief proces-verbaal verhindert de verkoop niet. Maar de koper moet de werken laten uitvoeren en **de installatie opnieuw laten keuren binnen de termijn die het AREI oplegt**. Vaak wordt daarover onderhandeld bij de prijs.",
          "Als verkoper kunt u de werken vooraf laten doen om met een positief verslag te verkopen. Als koper berekenen we de correcties om u te helpen beslissen, en brengen we de installatie na de verkoop in orde.",
          "Een heel oude installatie? Een volledige [elektrische renovatie](/nl/elektriciteit/renovatie) kan goedkoper uitvallen dan een opeenstapeling van correcties.",
        ],
      },
      {
        type: "steps",
        title: "Van analyse tot geslaagde keuring",
        steps: [
          { title: "Analyse van het verslag of bezoek", description: "We bestuderen het proces-verbaal van het organisme of bekijken uw installatie voor de keuring." },
          { title: "Gedetailleerde offerte binnen 24 uur", description: "Elke correctie berekend, post per post, gratis en vrijblijvend." },
          { title: "Werken om in orde te brengen", description: "Uitgevoerd door een gekwalificeerde elektricien, volgens het AREI." },
          { title: "Dossier voor de keuring", description: "Ééndraadschema en situatieschema bijgewerkt, klaar voor het nieuwe bezoek van het erkende keuringsorganisme." },
        ],
      },
      {
        type: "pricing",
        title: "Tarieven elektrische installatie in orde brengen",
        intro:
          "Een forfait als uw installatie al conform is. Zijn er werken nodig, dan berekenen we ze gratis, post per post.",
        items: [
          { key: "miseEnConformite" },
          { label: "Werken om in orde te brengen na een verslag", note: "Gratis offerte, post per post" },
          { label: "Ééndraadschema + situatieschema", note: "Op offerte, volgens de grootte van de woning" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over een elektrische installatie in orde brengen",
    faqs: [
      {
        id: 1,
        question: "Is de elektrische keuring verplicht om te verkopen in Brussel?",
        answer:
          "Ja. In België moet bij de verkoop van een woning de elektrische installatie gekeurd worden door een erkend keuringsorganisme. Het proces-verbaal wordt aan de koper bezorgd, positief of negatief.",
      },
      {
        id: 2,
        question: "Kan Radialec het conformiteitsattest afleveren?",
        answer:
          "Nee: het proces-verbaal wordt opgemaakt door een erkend keuringsorganisme, onafhankelijk van de elektricien. Wij voeren de werken uit en maken de gevraagde documenten klaar, zodat de keuring vlot verloopt.",
      },
      {
        id: 3,
        question: "Wat na een negatief keuringsverslag?",
        answer:
          "Laat de opgesomde inbreuken verhelpen en laat de installatie opnieuw keuren binnen de termijn die het AREI voorziet. Stuur ons het verslag: we berekenen de werken gratis.",
      },
      {
        id: 4,
        question: "Hoeveel kost het om een elektrische installatie in orde te brengen?",
        answer: `Is er niets aan te passen, dan rekent u **${prices.miseEnConformite.amount}€ btw inbegrepen**: inventaris van de installatie, elektrische schema's en het bezoek van het erkende keuringsorganisme voor het conformiteitsattest. Zijn er werken nodig, dan hangt alles af van het aantal en de aard van de opmerkingen: u krijgt een gratis offerte, post per post.`,
      },
      {
        id: 5,
        question: "Wat is een ééndraadschema?",
        answer:
          "Het is het plan dat de kringen van uw installatie en hun beveiliging weergeeft. Het erkende keuringsorganisme vraagt het bij de keuring, samen met het situatieschema. [Meer weten](/nl/elektriciteit/elektrische-schemas).",
      },
      {
        id: 6,
        question: "Moet mijn installatie opnieuw gekeurd worden als ik niet verkoop?",
        answer: "Ja: een huishoudelijke installatie moet periodiek gekeurd worden, om de 25 jaar, en na elke belangrijke wijziging.",
      },
    ],
    related: ["electricite/schema-electrique", "electricite/renovation", "electricite/depannage-electrique", "electricite/installation-electricite"],
    cta: {
      title: "Een keuring te halen? De offerte is gratis.",
      highlight: "gratis",
      body: "U verkoopt, of uw keuringsverslag is negatief? Stuur ons het verslag: we berekenen de correcties, voeren ze uit en maken de documenten klaar voor het nieuwe bezoek van het erkende keuringsorganisme.",
    },
    draft: false,
  },

  // --- Laadpaal ---
  {
    category: "electricite",
    slug: "installation-borne-recharge",
    path: "/nl/elektriciteit/laadpaal-plaatsen",
    title: "Laadpaal",
    name: "Een laadpaal plaatsen",
    pageTitle: "Een laadpaal plaatsen in Brussel",
    metaTitle: "Laadpaal plaatsen in Brussel",
    metaDescription:
      "Laadpaal voor uw elektrische auto in Brussel: studie van de aansluiting, aparte kring, aangepaste beveiliging. Gratis offerte binnen 24 uur, 2 jaar garantie.",
    summary: "Wallbox thuis of in een parking: studie van uw aansluiting, aparte kring en beveiliging aangepast aan het laden van een elektrische wagen.",
    icon: "charging",
    intent: "installation",
    hero: {
      eyebrow: "Elektrische wagen · Gratis offerte",
      intro:
        "Laad uw wagen thuis op, zonder uw installatie te overbelasten. We controleren uw aansluiting, kiezen het nuttige vermogen en plaatsen de laadpaal op een aparte kring, met de beveiliging die voor het laden vereist is.",
      image: { asset: "P23", alt: "Laadpaal aan de muur in een garage, wagen aan het laden" },
    },
    facts: [
      { icon: "search", stat: "Studie van de aansluiting", label: "Vermogen en net gecontroleerd" },
      { icon: "plug", stat: "Aparte kring", label: "Aangepaste beveiliging" },
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op de installatie" },
    ],
    blocks: [
      {
        type: "options",
        eyebrow: "Vermogen",
        title: "Welk vermogen voor uw wagen?",
        intro:
          "Het juiste vermogen hangt af van uw aansluiting, uw wagen en uw ritten. De meeste particulieren laden 's nachts: overdimensioneren is niet nodig.",
        items: [
          {
            title: "7,4 kW – eenfasig",
            badge: "Het meest gekozen",
            text: "De meest gebruikte oplossing in een huis. Eén nacht laden dekt ruim de dagelijkse ritten van de meeste bestuurders.",
            points: ["Werkt met een eenfasige aansluiting", "Beperkte installatiekosten", "Ideaal om 's nachts te laden"],
          },
          {
            title: "11 kW – driefasig",
            text: "Voor een aangepaste driefasige aansluiting en een wagen die dit vermogen in wisselstroom aanvaardt. Sneller laden.",
            points: ["Aangepaste driefasige aansluiting nodig", "Lading verdeeld over de drie fasen", "Na te gaan welk vermogen de wagen aanvaardt"],
          },
          {
            title: "22 kW",
            text: "Alleen voor installaties waarvan de aansluiting het toelaat en wagens die er gebruik van kunnen maken: zeldzaam bij particulieren, vaker in bedrijven.",
            points: ["Aansluiting met groot vermogen nodig", "Weinig wagens laden aan 22 kW in wisselstroom", "Voorafgaande studie onmisbaar"],
          },
        ],
      },
      {
        type: "callout",
        title: "3×230 V-net: een Brusselse eigenheid",
        paragraphs: [
          "Veel Brusselse woningen zijn aangesloten op **3×230 V** (driefasig zonder nulgeleider), niet op 3N400 V. Niet elke laadpaal en niet elke wagen gedraagt zich op dat net op dezelfde manier: sommige beperken het laadvermogen.",
          "Voor we u een model aanraden, controleren we uw type aansluiting, het beschikbare vermogen aan de meter en de capaciteit van uw zekeringkast. Is een verhoging van het vermogen nodig, dan vraagt u die aan bij de netbeheerder (Sibelga in Brussel): we zeggen u hoe.",
        ],
      },
      {
        type: "checklist",
        title: "Een installatie volgens de regels",
        items: [
          "Technisch bezoek: aansluiting, meter en zekeringkast",
          "Advies over het vermogen en het type laadpaal dat bij uw wagen past",
          "Aparte kring vanaf de zekeringkast, kabel gedimensioneerd voor het laden",
          "Aangepaste verliesstroombeveiliging (type A met DC-detectie 6 mA, of type B)",
          "Plaatsing van de laadpaal aan de muur of op een paal, binnen of buiten",
          "Configuratie, laadtest en uitleg over het gebruik",
          "Documenten voor de keuring van de nieuwe kring",
        ],
        note: "De keuze van de laadpaal (laadbeheer, app, vaste kabel of niet) maken we samen met u, volgens uw wagen en uw budget.",
        image: { asset: "P21", alt: "Nieuwe zekeringkast met verliesstroomschakelaars" },
      },
      {
        type: "steps",
        title: "Uw laadpaal geplaatst in 4 stappen",
        steps: [
          { title: "Haalbaarheidsstudie", description: "We controleren uw aansluiting, het beschikbare vermogen en de beste plaats voor de laadpaal." },
          { title: "Gedetailleerde offerte binnen 24 uur", description: "Laadpaal, bekabeling, beveiliging en werkuren: alles berekend, gratis." },
          { title: "Plaatsing", description: "Plaatsing van de aparte kring, de beveiliging en de laadpaal door een gekwalificeerde elektricien." },
          { title: "Inbedrijfstelling", description: "Configuratie, laadtest met uw wagen en tips voor het gebruik." },
        ],
      },
      {
        type: "pricing",
        title: "Tarief plaatsing van een laadpaal",
        intro:
          "De prijs hangt vooral af van de afstand tussen de zekeringkast en de laadpaal, uw aansluiting en het gekozen model. We berekenen hem precies na een bezoek.",
        items: [
          { label: "Laadpaal thuis", note: "Levering + plaatsing, gratis offerte" },
          { label: "Laadpaal in de parking van een mede-eigendom", note: "Gratis studie en offerte" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over laadpalen",
    faqs: [
      {
        id: 1,
        question: "Welk vermogen kies ik voor mijn laadpaal?",
        answer:
          "Voor de meeste particulieren volstaat een laadpaal van 7,4 kW om 's nachts te laden. 11 kW is alleen zinvol met een aangepaste driefasige aansluiting en een wagen die dat vermogen aanvaardt. We adviseren u nadat we uw installatie gezien hebben.",
      },
      {
        id: 2,
        question: "Is mijn elektrische aansluiting voldoende?",
        answer:
          "Dat controleren we eerst: type net (eenfasig, 3×230 V of 3N400 V), vermogen aan de meter en capaciteit van de zekeringkast. Is een verhoging van het vermogen nodig, dan vraagt u die aan bij de netbeheerder.",
      },
      {
        id: 3,
        question: "Moet de installatie van een laadpaal gekeurd worden?",
        answer:
          "In principe wel: de laadpaal krijgt een nieuwe kring, die gekeurd moet worden door een erkend keuringsorganisme. We maken de nodige documenten klaar.",
      },
      {
        id: 4,
        question: "Kan een laadpaal in de parking van een mede-eigendom?",
        answer:
          "Ja, met het akkoord van de mede-eigendom en een studie van de gemeenschappelijke aansluiting. We werken ook samen met syndici: [bekijk onze diensten voor mede-eigendommen](/nl/syndici).",
      },
      {
        id: 5,
        question: "Kan ik mijn wagen opladen aan een gewoon stopcontact?",
        answer:
          "In nood wel, maar traag, en met een stopcontact dat niet gemaakt is om urenlang een hoge stroom te leveren. Voor dagelijks gebruik is een laadpaal op een aparte kring veel veiliger.",
      },
      {
        id: 6,
        question: "Hoeveel kost het plaatsen van een laadpaal?",
        answer:
          "Dat hangt af van het model, de afstand tussen de zekeringkast en de laadpaal, en eventuele aanpassingen aan de zekeringkast. U krijgt binnen 24 uur een gratis en gedetailleerde offerte.",
      },
    ],
    related: ["electricite/installation-electricite", "electricite/renovation", "electricite/mise-en-conformite-electrique", "professionnels/syndics-coproprietes"],
    cta: {
      title: "Een elektrische wagen? Laten we het over uw laadpaal hebben.",
      body: "Voor we een laadpaal plaatsen, controleren we uw aansluiting en het beschikbare vermogen. Daarna krijgt u binnen 24 uur een gedetailleerde offerte, in Brussel en omgeving.",
    },
    draft: false,
  },

  // --- Parlofoon ---
  {
    category: "electricite",
    slug: "installation-parlophonie",
    path: "/nl/elektriciteit/parlofoon",
    title: "Parlofonie",
    name: "Een parlofoon plaatsen",
    pageTitle: "Een parlofoon plaatsen of vervangen in Brussel",
    metaTitle: "Parlofoon plaatsen in Brussel",
    metaDescription:
      "Parlofoon plaatsen of vervangen in Brussel, huis of appartementsgebouw: buitenpost, binnenposten, deuropener. Gratis offerte binnen 24 uur, 2 jaar garantie.",
    summary: "Parlofoon voor huis of gebouw: buitenpost, een binnenpost in elke wooneenheid en deuropener, nieuw of als vervanging.",
    icon: "bell",
    intent: "installation",
    hero: {
      eyebrow: "Huis & gebouw",
      intro:
        "Een parlofoon die kraakt, een binnenpost die niet meer belt, een deuropener in panne? We plaatsen of vervangen uw parlofonie (buitenpost, binnenposten, elektrisch slot), in een huis en in een appartementsgebouw.",
      image: { asset: "P24", alt: "Buitenpost van een parlofoon en videofoon aan een gevel" },
    },
    facts: [
      { icon: "building", stat: "Huis of gebouw", label: "Particulieren en mede-eigendommen" },
      { icon: "sync", stat: "Vervanging", label: "Bestaande bekabeling hergebruikt als het kan" },
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op de installatie" },
    ],
    blocks: [
      {
        type: "features",
        layout: "list",
        title: "Tekenen dat het tijd is om uw parlofoon te vervangen",
        items: [
          { icon: "volume", title: "Geluid dat kraakt of wegvalt", text: "Onverstaanbare stem, ruis, een gesprek dat wegvalt: de onderdelen of de bekabeling raken versleten." },
          { icon: "bell", title: "Het belt niet meer", text: "Een binnenpost die zwijgt, of een bel die maar één keer op twee werkt." },
          { icon: "key", title: "De deuropener reageert niet meer", text: "Elektrisch slot in panne of defecte bediening: uw bezoekers blijven aan de deur staan." },
          { icon: "damage", title: "Beschadigde buitenpost", text: "Versleten knoppen, onleesbare naamplaatjes, buitenpost beschadigd door vandalisme of het weer." },
          {
            icon: "tools",
            title: "Onderdelen niet meer te vinden",
            text: "Bij oude installaties zijn vervangposten niet meer te krijgen: een volledige vervanging wordt eenvoudiger.",
          },
          {
            icon: "video",
            title: "U wilt zien wie er belt",
            text: "Afhankelijk van het bestaande systeem kan de overstap naar [videofonie](/nl/elektriciteit/videofoon) een deel van de bekabeling hergebruiken.",
          },
        ],
      },
      {
        type: "options",
        title: "Huis of gebouw: twee opstellingen",
        items: [
          {
            title: "Eengezinswoning",
            text: "Een buitenpost met één belknop, een binnenpost (of één per verdieping) en de bediening van het elektrische slot van de voordeur.",
            points: ["Buitenpost met één knop", "Eén of meer binnenposten", "Deur openen vanaf de binnenpost"],
          },
          {
            title: "Appartementsgebouw",
            badge: "Mede-eigendommen",
            text: "Een buitenpost met een knop per wooneenheid, een binnenpost in elk appartement en een gemeenschappelijke voeding. We stemmen de interventie af met de [syndicus](/nl/syndici).",
            points: ["Buitenpost voor meerdere wooneenheden", "Binnenpost in elk appartement", "Werken afgestemd met de syndicus"],
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat de installatie omvat",
        items: [
          "Diagnose van de bestaande installatie en de bekabeling",
          "Advies over het juiste systeem: audio of video, aantal wooneenheden",
          "Plaatsing van de buitenpost en de binnenposten",
          "Aansluiting van het elektrische slot of de deurvergrendeling",
          "Naamplaatjes op de buitenpost",
          "Tests van oproep en deuropening vanaf elke binnenpost",
        ],
        image: { asset: "P52", alt: "Buitenpost van een parlofoon aan de ingang van een gebouw" },
      },
      {
        type: "steps",
        title: "Zo verloopt een vervanging",
        steps: [
          { title: "Bezoek en diagnose", description: "We bekijken de buitenpost, de binnenposten en de bestaande bekabeling om te weten wat we kunnen behouden." },
          { title: "Gratis offerte binnen 24 uur", description: "Een duidelijke prijs en, voor een gebouw, een offerte die u aan de mede-eigendom kunt voorleggen." },
          { title: "Plaatsing", description: "Plaatsing van de buitenpost en de binnenposten, aansluiting van de deuropener, met zo weinig mogelijk hinder voor de bewoners." },
          { title: "Tests samen met u", description: "Oproep en deuropening getest vanuit elke wooneenheid voor we vertrekken." },
        ],
      },
      {
        type: "pricing",
        title: "Tarieven parlofonie in Brussel",
        intro: "De prijs hangt af van het aantal wooneenheden, het type buitenpost en de staat van de bekabeling: we berekenen hem gratis, binnen 24 uur.",
        items: [
          { label: "Parlofoon voor een huis", note: "Levering + plaatsing, gratis offerte" },
          { label: "Parlofonie voor een gebouw", note: "Gratis offerte voor de mede-eigendom" },
          { key: "depannage", label: "Depannage parlofoon" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over parlofoons",
    faqs: [
      {
        id: 1,
        question: "Kan een parlofoon vervangen worden zonder nieuwe bekabeling?",
        answer:
          "Vaak wel: veel recente systemen werken op twee bestaande draden. We controleren de staat en het type bekabeling tijdens het bezoek voor we u adviseren.",
      },
      {
        id: 2,
        question: "Plaatst u parlofoons in appartementsgebouwen?",
        answer:
          "Ja. We plaatsen en vervangen de parlofonie van gebouwen en stemmen de interventie af met de syndicus. [Ontdek onze diensten voor mede-eigendommen](/nl/syndici).",
      },
      {
        id: 3,
        question: "Mijn deuropener werkt niet meer, wat nu?",
        answer: `De panne kan komen van het elektrische slot, de voeding ervan of de knop van de binnenpost. Een diagnose wijst het snel uit: dat is een [depannage elektriciteit](/nl/elektriciteit/depannage-elektriciteit) aan het forfait van ${prices.depannage.amount}€ btw incl. (verplaatsing + diagnose + 1e uur).`,
      },
      {
        id: 4,
        question: "Parlofoon of videofoon: wat kies ik?",
        answer:
          "Een parlofoon volstaat om te praten en de deur te openen. Met een [videofoon](/nl/elektriciteit/videofoon) ziet u de bezoeker bovendien voor u opendoet, een echte plus voor de veiligheid. We adviseren u volgens uw gebouw en uw budget.",
      },
      {
        id: 5,
        question: "Kan in een gebouw één binnenpost vervangen worden?",
        answer:
          "Ja, als er nog een binnenpost te krijgen is die werkt met het bestaande systeem. Bij oude installaties is dat niet altijd zo: we zeggen het u bij de diagnose.",
      },
      {
        id: 6,
        question: "Hoeveel kost het plaatsen van een parlofoon?",
        answer: "De prijs hangt af van het aantal wooneenheden, het type buitenpost en de staat van de bekabeling. De offerte is gratis, binnen 24 uur.",
      },
    ],
    related: ["electricite/installation-videophonie", "professionnels/syndics-coproprietes", "electricite/depannage-electrique", "electricite/installation-electricite"],
    cta: {
      title: "Een parlofoon te vervangen? De offerte is gratis.",
      highlight: "gratis",
      body: "Huis of gebouw, nieuw of vervanging? Beschrijf ons uw ingang: we raden u het juiste systeem aan, en een elektricien plaatst het netjes.",
    },
    draft: false,
  },

  // --- Videofoon ---
  {
    category: "electricite",
    slug: "installation-videophonie",
    path: "/nl/elektriciteit/videofoon",
    title: "Videofonie",
    name: "Een videofoon plaatsen",
    pageTitle: "Een videofoon plaatsen in Brussel",
    metaTitle: "Videofoon plaatsen in Brussel",
    metaDescription:
      "Zie wie er belt voor u opendoet: een videofoon plaatsen in Brussel, huis of gebouw, nieuw of ter vervanging van een parlofoon. Gratis offerte binnen 24 uur.",
    summary: "Binnenscherm, buitenpost met camera en deuropener, in een huis en in een gebouw.",
    icon: "video",
    intent: "installation",
    hero: {
      eyebrow: "Veiligheid · Toegangscontrole",
      intro:
        "Zie wie er belt voor u opendoet. We plaatsen uw videofoon (buitenpost met camera, binnenscherm, deuropener) in een huis of een gebouw, nieuw of ter vervanging van een oude parlofoon.",
      image: { asset: "P24", alt: "Buitenpost van een videofoon met camera aan een gevel" },
    },
    facts: [
      { icon: "video", stat: "Zien voor u opendoet", label: "Beeld van de bezoeker op het scherm" },
      { icon: "sync", stat: "Vervanging mogelijk", label: "Van een oude parlofoon" },
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op de installatie" },
    ],
    blocks: [
      {
        type: "features",
        layout: "columns",
        title: "Waarom overstappen op videofonie?",
        items: [
          { icon: "userShield", title: "Meer veiligheid", text: "U ziet wie er is voor u opneemt of opendoet: geen blinde deuropeningen meer." },
          { icon: "door", title: "Opendoen zonder naar beneden te gaan", text: "Antwoord en open de deur vanaf het scherm, zonder naar beneden te gaan, ook vanaf de verdieping." },
          {
            icon: "wifi",
            title: "Verbonden, afhankelijk van het model",
            text: "Sommige systemen sturen de oproep via wifi door naar uw smartphone: u antwoordt ook als u niet thuis bent.",
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat de installatie omvat",
        items: [
          "Advies over het model: scherm, buitenpost, verbonden opties",
          "Plaatsing van de buitenpost met camera aan de ingang, op de juiste hoogte",
          "Plaatsing van het binnenscherm, en extra posten indien nodig",
          "Aansluiting van de deuropener (elektrisch slot)",
          "Configuratie van de smartphone-app, afhankelijk van het model",
          "Tests van oproep, beeld en deuropening samen met u",
        ],
        image: { asset: "P27", alt: "Binnenscherm van een videofoon met een bezoeker in beeld" },
      },
      {
        type: "options",
        title: "Huis of gebouw",
        items: [
          {
            title: "Huis",
            text: "Een buitenpost met camera aan de deur of de poort en één of meer binnenschermen. Ideaal als u uw voordeur niet ziet vanuit de woonkamer.",
            points: ["Buitenpost met camera en één knop", "Eén of meer schermen", "Doorsturen naar smartphone afhankelijk van het model"],
          },
          {
            title: "Appartementsgebouw",
            badge: "Mede-eigendommen",
            text: "Een gemeenschappelijke buitenpost met camera, een oproep per wooneenheid en een scherm in elk appartement. We organiseren de werken met de [syndicus](/nl/syndici).",
            points: ["Buitenpost voor meerdere wooneenheden", "Scherm in elk appartement", "Afstemming met de syndicus"],
          },
        ],
      },
      {
        type: "steps",
        title: "Uw videofoon geplaatst in 4 stappen",
        steps: [
          { title: "Bezoek", description: "We bekijken de ingang, de bestaande bekabeling en uw behoeften (aantal schermen, smartphone…)." },
          { title: "Gratis offerte binnen 24 uur", description: "Materiaal en plaatsing duidelijk berekend, vrijblijvend." },
          { title: "Plaatsing", description: "Plaatsing van de buitenpost en de schermen, aansluiting van de deuropener." },
          { title: "Inbedrijfstelling", description: "Afstelling van beeld en geluid, configuratie van de app indien van toepassing, tests samen met u." },
        ],
      },
      {
        type: "pricing",
        title: "Tarieven videofonie in Brussel",
        intro: "De prijs hangt af van het gekozen materiaal, het aantal schermen en de staat van de bekabeling: we berekenen hem gratis, binnen 24 uur.",
        items: [
          { label: "Videofoon voor een huis", note: "Levering + plaatsing, gratis offerte" },
          { label: "Videofonie voor een gebouw", note: "Gratis offerte voor de mede-eigendom" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over videofoons",
    faqs: [
      {
        id: 1,
        question: "Kan een parlofoon vervangen worden door een videofoon?",
        answer:
          "Ja, en vaak zonder alles opnieuw te bekabelen: veel videofoons werken op twee draden. We controleren uw bestaande installatie tijdens het bezoek.",
      },
      {
        id: 2,
        question: "Kan ik de videofoon beantwoorden met mijn smartphone?",
        answer:
          "Ja, met een verbonden model: de oproep wordt via de wifi van de woning naar uw smartphone doorgestuurd. We raden u een passend model aan en configureren het samen met u.",
      },
      {
        id: 3,
        question: "Is er een stroomvoorziening nodig bij het scherm?",
        answer:
          "Het scherm moet gevoed worden, via een voeding in de zekeringkast of via de bus van het systeem, afhankelijk van het model. We voorzien de voeding bij de plaatsing.",
      },
      {
        id: 4,
        question: "Plaatst u videofoons in gebouwen?",
        answer:
          "Ja, met een gemeenschappelijke buitenpost en een scherm per appartement. We werken samen met de syndicus: [bekijk onze diensten voor mede-eigendommen](/nl/syndici).",
      },
      {
        id: 5,
        question: "Bedrade of draadloze videofoon?",
        answer:
          "Voor de buitenpost en het hoofdscherm blijft bedraad het betrouwbaarst. Draadloos gaat vooral over het doorsturen van de oproep naar een smartphone. We adviseren u volgens uw gebouw.",
      },
      {
        id: 6,
        question: "Hoeveel kost het plaatsen van een videofoon?",
        answer: "Dat hangt af van het model, het aantal schermen en de nodige bekabeling. U krijgt binnen 24 uur een gratis en gedetailleerde offerte.",
      },
    ],
    related: ["electricite/installation-parlophonie", "electricite/installation-electricite", "professionnels/syndics-coproprietes", "electricite/depannage-electrique"],
    cta: {
      title: "Wilt u zien wie er belt? De offerte is gratis.",
      highlight: "gratis",
      body: "Huis of gebouw, nieuw of in de plaats van een oude parlofoon: we raden u het juiste systeem aan, en een elektricien plaatst het netjes.",
    },
    draft: false,
  },

  // --- Elektrische schema's ---
  {
    category: "electricite",
    slug: "schema-electrique",
    path: "/nl/elektriciteit/elektrische-schemas",
    title: "Elektrische schema's",
    name: "Ééndraadschema en situatieschema",
    pageTitle: "Ééndraadschema van uw elektrische installatie in Brussel",
    metaTitle: "Ééndraadschema en situatieschema in Brussel",
    metaDescription:
      "Ééndraadschema en situatieschema van uw elektrische installatie in Brussel, verplicht voor de AREI-keuring (verkoop, conformiteit). Gratis offerte binnen 24 uur.",
    summary: "Bijgewerkt ééndraadschema en situatieschema, die het erkende keuringsorganisme vraagt bij de AREI-keuring: verkoop, conformiteit, werken.",
    icon: "schema",
    intent: "installation",
    hero: {
      eyebrow: "AREI-keuring · Verkoop",
      intro:
        "Bij de AREI-keuring vraagt het erkende keuringsorganisme een bijgewerkt ééndraadschema en situatieschema. We brengen uw installatie kring per kring in kaart en maken ze voor u op.",
      image: { asset: "P25", alt: "Ééndraadschema naast een zekeringkast" },
    },
    facts: [
      { icon: "schema", stat: "Ééndraadschema", label: "Kringen en beveiliging" },
      { icon: "map", stat: "Situatieschema", label: "Kamer per kamer" },
      { icon: "file", stat: "Klaar voor de keuring", label: "Gevraagd door het keuringsorganisme" },
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
    ],
    blocks: [
      {
        type: "options",
        eyebrow: "Twee documenten",
        title: "Ééndraadschema en situatieschema: waarover gaat het?",
        intro: "Het AREI legt twee aanvullende documenten op, die het erkende keuringsorganisme bij elke keuring vraagt.",
        items: [
          {
            title: "Het ééndraadschema",
            text: "Het geeft met genormaliseerde symbolen de elektrische opbouw van uw installatie weer: zekeringkast, beveiliging, kringen en wat ze voeden.",
            points: ["Automaten en verliesstroomschakelaars, met hun waarden", "Kabelsecties", "Stopcontacten en lichtpunten per kring"],
          },
          {
            title: "Het situatieschema",
            text: "Het toont op een plan van elke verdieping waar de elektrische toestellen zitten en tot welke kring elk ervan behoort.",
            points: ["Stopcontacten, schakelaars en lichtpunten", "Zekeringkast en vaste toestellen", "Kringen gemarkeerd kamer per kamer"],
          },
        ],
      },
      {
        type: "features",
        layout: "columns",
        title: "Wanneer hebt u een elektrisch schema nodig?",
        items: [
          { icon: "home", title: "Verkoop van uw woning", text: "De verplichte keuring voor de verkoop vraagt een bijgewerkt schema en plan." },
          { icon: "clipboard", title: "Conformiteitskeuring", text: "Keuring van een nieuwe installatie, periodieke keuring of herkeuring na een negatief verslag." },
          { icon: "tools", title: "Werken of uitbreiding", text: "Na een wijziging moeten de documenten bijgewerkt worden, zodat ze de echte installatie weergeven." },
        ],
        note: "Schema ontbreekt, is onleesbaar of klopt niet meer met de installatie? Dat is een veelvoorkomende opmerking in keuringsverslagen. We maken het opnieuw op basis van het bestaande. Meer over [een installatie in orde brengen](/nl/elektriciteit/installatie-in-orde-brengen).",
      },
      {
        type: "steps",
        title: "Hoe we uw schema opmaken",
        steps: [
          { title: "Opname van de zekeringkast", description: "Elke beveiliging, haar waarde en de kring die ze voedt, in kaart gebracht." },
          { title: "Opname kamer per kamer", description: "Elk stopcontact, elke schakelaar en elk lichtpunt gemarkeerd, met de kring waartoe het behoort." },
          { title: "Uitwerking", description: "Opmaak van het ééndraadschema en het situatieschema volgens de afspraken die keuringsorganismen verwachten." },
          { title: "Overhandiging", description: "U krijgt een dossier dat u bij het bezoek van het erkende keuringsorganisme kunt voorleggen." },
        ],
      },
      {
        type: "callout",
        title: "Een opname brengt vaak gebreken aan het licht",
        paragraphs: [
          "Bij het in kaart brengen van de installatie ontdekken we geregeld punten die niet conform zijn: een kring zonder verliesstroombeveiliging, een te dunne kabel, geen aarding. We melden ze u voor de keuring, zodat u met kennis van zaken kunt beslissen.",
          "Zijn er correcties nodig, dan krijgt u een duidelijke offerte en kunnen we de werken meteen uitvoeren: zie de [elektrische renovatie](/nl/elektriciteit/renovatie).",
        ],
      },
      {
        type: "pricing",
        title: "Tarief elektrische schema's",
        intro: "De prijs hangt af van de grootte van de woning en het aantal kringen: we berekenen hem gratis, binnen 24 uur.",
        items: [
          { label: "Ééndraadschema + situatieschema", note: "Gratis offerte volgens de grootte van de woning" },
          { label: "In orde brengen na de opname", note: "Gratis offerte, post per post" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over het elektrisch schema",
    faqs: [
      {
        id: 1,
        question: "Wat is een ééndraadschema?",
        answer:
          "Het is de vereenvoudigde weergave van uw elektrische installatie met genormaliseerde symbolen: beveiliging, kringen en gevoede toestellen. Het wordt gevraagd bij de AREI-keuring, samen met het situatieschema.",
      },
      {
        id: 2,
        question: "Is het elektrisch schema verplicht om te verkopen?",
        answer:
          "Ja: het erkende keuringsorganisme dat de verplichte keuring voor de verkoop uitvoert, vraagt het ééndraadschema en het situatieschema. Zonder bijgewerkte documenten dreigt het verslag negatief te zijn.",
      },
      {
        id: 3,
        question: "Ik heb het schema van mijn installatie niet meer, wat nu?",
        answer:
          "We kunnen het opnieuw maken op basis van de bestaande installatie: eerst de zekeringkast, dan elke kamer. Dat is een courant werk, zeker voor een verkoop.",
      },
      {
        id: 4,
        question: "Hoelang duurt het om een schema te maken?",
        answer: "Dat hangt af van de grootte van de woning en hoe leesbaar de zekeringkast is. U krijgt een precieze termijn samen met de offerte.",
      },
      {
        id: 5,
        question: "Hoeveel kost een ééndraadschema?",
        answer: "De prijs verschilt volgens de oppervlakte en het aantal kringen. U krijgt binnen 24 uur een gratis offerte, vrijblijvend.",
      },
      {
        id: 6,
        question: "Doet Radialec ook de keuring?",
        answer:
          "Nee, de keuring wordt uitgevoerd door een onafhankelijk erkend keuringsorganisme. Wij maken de documenten klaar en voeren de eventuele werken uit om de installatie [in orde te brengen](/nl/elektriciteit/installatie-in-orde-brengen).",
      },
    ],
    related: ["electricite/mise-en-conformite-electrique", "electricite/renovation", "electricite/installation-electricite", "electricite/depannage-electrique"],
    cta: {
      title: "Een elektrische keuring voor te bereiden? De offerte is gratis.",
      highlight: "gratis",
      body: "Verkoop, negatief verslag of recente werken? Een elektricien brengt uw installatie in kaart en bezorgt u duidelijke schema's, klaar voor het erkende keuringsorganisme.",
    },
    draft: false,
  },

  // --- Elektrische renovatie ---
  {
    category: "electricite",
    slug: "renovation",
    path: "/nl/elektriciteit/renovatie",
    title: "Elektrische renovatie",
    name: "Elektrische renovatie",
    pageTitle: "Elektrische renovatie in Brussel: zekeringkast en bekabeling",
    metaTitle: "Elektrische renovatie en zekeringkast in Brussel",
    metaDescription:
      "Zekeringkast met smeltzekeringen, oude bekabeling zonder aarding: gedeeltelijke of volledige elektrische renovatie in Brussel, conform het AREI. Gratis offerte binnen 24 uur.",
    summary: "Zekeringkast met smeltzekeringen, bekabeling zonder aarding, oorspronkelijke installatie: we moderniseren uw installatie geheel of gedeeltelijk.",
    icon: "hardhat",
    intent: "installation",
    hero: {
      eyebrow: "Renovatie · Gratis offerte",
      intro:
        "Zekeringkast met smeltzekeringen, stopcontacten zonder aarding, bekabeling uit een ander tijdperk: we moderniseren uw elektrische installatie, gedeeltelijk of volledig, voor meer veiligheid en een installatie conform het AREI.",
      image: { asset: "P21", alt: "Nieuwe zekeringkast, verliesstroomschakelaars en automaten op een rij" },
    },
    facts: [
      { icon: "userShield", stat: "Meer veiligheid", label: "Verliesstroomschakelaars en aarding" },
      { icon: "layers", stat: "Gedeeltelijk of volledig", label: "Volgens de staat van de installatie" },
      { icon: "clipboard", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op onze werken" },
    ],
    blocks: [
      {
        type: "features",
        layout: "list",
        title: "Heeft uw installatie een renovatie nodig?",
        intro: "Veel Brusselse huizen en appartementen hebben nog hun oorspronkelijke elektrische installatie. Deze tekenen moeten u alarmeren:",
        items: [
          { icon: "power", title: "Zekeringkast met smeltzekeringen", text: "Steek- of porseleinen zekeringen, zonder moderne automaten: verouderde technologie die slecht beschermt." },
          {
            icon: "shield",
            title: "Geen verliesstroombeveiliging",
            text: "De verliesstroomschakelaar zet de stroom af bij een lek naar de aarde: hij beschermt personen tegen elektrocutie.",
          },
          { icon: "plug", title: "Stopcontacten zonder aarding", text: "Stopcontacten met twee gaatjes, geen aarding: metalen toestellen zijn niet beschermd." },
          { icon: "damage", title: "Oude kabels", text: "Textielmantel, kabels die afbrokkelen, zichtbare draden: de isolatie veroudert en gaat achteruit." },
          {
            icon: "tempHigh",
            title: "Zekeringen die vaak springen",
            text: "Een ondergedimensioneerde installatie kan het huidige gebruik niet meer aan: koken, wasmachine, bijverwarming…",
          },
          { icon: "file", title: "Negatief keuringsverslag", text: "Stapelen de opmerkingen zich op, dan is renoveren soms goedkoper dan punt per punt corrigeren." },
        ],
      },
      {
        type: "options",
        title: "Gedeeltelijke of volledige renovatie?",
        intro: "Dat hangt af van de staat van de installatie en uw plannen. We adviseren u na de diagnose, zonder de werken groter te maken dan nodig.",
        items: [
          {
            title: "Vervanging van de zekeringkast",
            text: "Nieuwe zekeringkast met automaten en verliesstroomschakelaars, aangesloten op de bestaande kringen als die in goede staat zijn.",
            points: ["Snelle interventie", "Meteen veiliger", "Ideaal als de bekabeling gezond is"],
          },
          {
            title: "Gedeeltelijke renovatie",
            text: "Zekeringkast en enkele kringen vernieuwd: keuken, badkamer, gerenoveerde kamer. De rest wordt gecontroleerd en behouden.",
            points: ["Gerichte werken, beperkt budget", "Voorrang voor de risicokamers", "Kan in een bewoonde woning"],
          },
          {
            title: "Volledige renovatie",
            badge: "Oud huis",
            text: "Alles wordt vernieuwd: zekeringkast, bekabeling, stopcontacten, verlichting, aarding. De duurzame oplossing voor een oorspronkelijke installatie of voor grote werken.",
            points: ["Installatie volledig vernieuwd", "Afgestemd op uw huidige gebruik", "Documenten klaar voor de keuring"],
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat een elektrische renovatie omvat",
        items: [
          "Volledige diagnose van de bestaande installatie",
          "Nieuwe zekeringkast met automaten en verliesstroomschakelaars",
          "Vervanging van verouderde bekabeling, kringen opnieuw ingedeeld",
          "Aarding en equipotentiale verbindingen",
          "Nieuwe stopcontacten, schakelaars en lichtpunten volgens uw behoeften",
          "Bijgewerkt [ééndraadschema en situatieschema](/nl/elektriciteit/elektrische-schemas)",
          "Veiligheidstests voor de installatie weer in gebruik gaat",
        ],
        note: "We maken de documenten klaar voor de keuring die na een belangrijke wijziging van de installatie vereist is.",
        image: { asset: "P20", alt: "Elektricien aan het werk aan een open zekeringkast" },
      },
      {
        type: "steps",
        title: "Een goed georganiseerde renovatie",
        steps: [
          { title: "Diagnose en advies", description: "We bekijken de installatie en leggen uit wat behouden kan worden en wat vervangen moet worden." },
          { title: "Gratis offerte binnen 24 uur", description: "Werken in volgorde van prioriteit en duidelijk berekend, zodat u rustig kunt beslissen." },
          { title: "Werken", description: "Samen met u gepland, kamer per kamer als u er woont, om stroomonderbrekingen te beperken." },
          { title: "Tests en documenten", description: "Veiligheidstests, schema's bezorgd en de keuring voorbereid." },
        ],
      },
      {
        type: "pricing",
        title: "Tarieven elektrische renovatie",
        intro: "Elke renovatie is anders: we berekenen uw project precies na een bezoek, gratis en vrijblijvend.",
        items: [
          { label: "Vervanging van de zekeringkast", note: "Gratis offerte binnen 24 uur" },
          { label: "Gedeeltelijke of volledige renovatie", note: "Gratis offerte na een bezoek" },
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over elektrische renovatie",
    faqs: [
      {
        id: 1,
        question: "Wanneer moet een elektrische installatie gerenoveerd worden?",
        answer:
          "Als de zekeringkast nog met smeltzekeringen werkt, er geen verliesstroombeveiliging of aarding is, of de kabels oud en beschadigd zijn. Een negatief keuringsverslag is ook een goed moment om de balans op te maken.",
      },
      {
        id: 2,
        question: "Kan alleen de zekeringkast vervangen worden?",
        answer:
          "Ja, als de bekabeling in goede staat is. Dat is vaak de eerste stap, en meteen veiliger. We controleren de kringen voor we het u voorstellen.",
      },
      {
        id: 3,
        question: "Kan ik in de woning blijven tijdens de werken?",
        answer:
          "In de meeste gevallen wel. We organiseren de werken kamer per kamer om stroomonderbrekingen te beperken. Voor een volledige renovatie leggen we samen met u een precieze planning vast.",
      },
      {
        id: 4,
        question: "Is er een keuring nodig na een elektrische renovatie?",
        answer:
          "Een belangrijke wijziging van de installatie moet in principe gekeurd worden door een erkend keuringsorganisme. We maken het [ééndraadschema en het situatieschema](/nl/elektriciteit/elektrische-schemas) klaar voor die keuring.",
      },
      {
        id: 5,
        question: "Hoeveel kost de elektrische renovatie van een huis?",
        answer: "De prijs hangt af van de oppervlakte, het aantal kringen en de omvang van de werken. U krijgt binnen 24 uur een gratis offerte, post per post.",
      },
      {
        id: 6,
        question: "Kunt u de renovatie afstemmen met de verwarming of het sanitair?",
        answer: "Ja: we doen ook [verwarming](/nl/verwarming) en [sanitair](/nl/sanitair). Bij een renovatie is dat handig: één nummer om de werken te coördineren.",
      },
    ],
    related: ["electricite/mise-en-conformite-electrique", "electricite/schema-electrique", "electricite/installation-electricite", "chauffage/remplacement-chaudiere"],
    cta: {
      title: "Een installatie uit een ander tijdperk? De offerte is gratis.",
      highlight: "gratis",
      body: "Zekeringkast met smeltzekeringen, stopcontacten zonder aarding? Een elektricien bekijkt uw installatie, zegt u wat eerst vernieuwd moet worden, en u krijgt binnen 24 uur een gedetailleerde offerte.",
    },
    draft: false,
  },
];
