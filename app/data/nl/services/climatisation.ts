import { companyCopy } from "../../company";
import { aircoPerIndoorUnit, prices } from "../../pricing";
import type { Service } from "../../services/types";

// Pages service « airco » en néerlandais : traduction de
// app/data/services/climatisation.ts (mêmes category / slug, adresse dans `path`).
// À faire relire par un néerlandophone.

const promises = companyCopy.nl.promises;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const climatisationServicesNl: Service[] = [
  // --- Plaatsing ---
  {
    category: "climatisation",
    slug: "installation-climatisation",
    path: "/nl/airco/airco-plaatsen",
    title: "Airco plaatsen",
    name: "Een airco plaatsen",
    pageTitle: "Een airco plaatsen in Brussel en omgeving",
    metaTitle: "Airco plaatsen in Brussel",
    metaDescription:
      "Plaatsing van een omkeerbare airco in Brussel: mono-split of multi-split, vermogen berekend voor uw kamers. Gratis offerte binnen 24 uur, 2 jaar garantie.",
    summary: "Omkeerbare airco, mono- of multi-split, gedimensioneerd voor uw kamers: koelte in de zomer, bijverwarming in de winter.",
    icon: "snowflake",
    intent: "installation",
    hero: {
      eyebrow: "Omkeerbare airco · Gratis offerte",
      intro:
        "We plaatsen uw omkeerbare airco, gedimensioneerd voor uw kamers en netjes geplaatst: koelte in de zomer, bijverwarming in de winter. Gedetailleerde offerte binnen 24 uur, gratis en vrijblijvend.",
      image: { asset: "P43", alt: "Technicus van Radialec zet een binnenunit van een airco waterpas" },
    },
    facts: [
      { icon: "clipboard", stat: "Gratis offerte binnen 24 uur", label: "Vrijblijvend" },
      { icon: "snowflake", stat: "Omkeerbaar", label: "Koel in de zomer, warm in de winter" },
      { icon: "ruler", stat: "Kamer per kamer", label: "Vermogen berekend voor elke kamer" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    blocks: [
      {
        type: "features",
        eyebrow: "Omkeerbare airco",
        title: "Koel in de zomer, warm in het tussenseizoen",
        intro: "Een omkeerbare airco is een **lucht-luchtwarmtepomp**: ze koelt in de zomer en verwarmt in de winter, kamer per kamer.",
        items: [
          {
            icon: "tempLow",
            title: "Tijdens hittegolven",
            text: "Een aangename temperatuur tijdens hittegolven, in de woonkamer, de slaapkamers of een bureau onder het dak.",
          },
          {
            icon: "tempHigh",
            title: "Doeltreffende bijverwarming",
            text: "In verwarmingsstand geeft ze meestal meer energie af dan ze verbruikt: ideaal in het tussenseizoen of voor een kamer die slecht verwarmd wordt.",
          },
          {
            icon: "volume",
            title: "Weinig geluid binnen",
            text: "Recente binnenunits zijn stil; de plaats van de buitenunit kiezen we zo dat ze zo weinig mogelijk stoort.",
          },
        ],
      },
      {
        type: "options",
        title: "Mono-split, multi-split of inbouw: welke installatie?",
        intro: "Het juiste systeem hangt af van het aantal kamers, de beschikbare plaats en de gewenste uitstraling. We adviseren u tijdens het bezoek.",
        items: [
          {
            title: "Mono-split",
            badge: "Het meest gekozen",
            text: "Eén buitenunit verbonden met één binnenunit aan de muur. De eenvoudige oplossing voor één kamer: slaapkamer, bureau of woonkamer.",
            points: ["Snelle plaatsing, beperkt budget", "Ideaal voor de belangrijkste kamer", "Uitbreidbaar: andere kamers kunnen volgen"],
          },
          {
            title: "Multi-split",
            text: "Eén buitenunit voor meerdere binnenunits, elk apart in te stellen.",
            points: ["Meerdere kamers, één unit aan de gevel", "Geschikt voor appartementen", "Temperatuur per kamer in te stellen"],
          },
          {
            title: "Inbouw (kanaalsysteem)",
            text: "De unit zit verborgen in een verlaagd plafond en de lucht komt via discrete roosters. Haalbaarheid te bekijken per project.",
            points: ["Onzichtbaar in de kamer", "Vraagt een verlaagd plafond", "Zinvol bij een grondige renovatie"],
          },
        ],
      },
      {
        type: "steps",
        title: "Uw installatie, stap voor stap",
        intro: "Van het bezoek tot de eerste keer aanzetten: zo gaat het.",
        steps: [
          {
            title: "Bezoek en dimensionering",
            description: "Oppervlakte, oriëntatie, isolatie, gebruik van elke kamer: we berekenen het juiste vermogen en kiezen samen met u de plaats van de units.",
          },
          { title: "Gedetailleerde offerte binnen 24 uur", description: "Een offerte post per post, gratis en vrijblijvend. Het bedrag is het bedrag van de factuur." },
          { title: "Verzorgde plaatsing", description: "Binnen- en buitenunit, koelleidingen, afvoer van het condenswater en elektrische aansluiting." },
          { title: "Inbedrijfstelling en uitleg", description: "Test in koel- en verwarmingsstand, instellingen, uitleg over de afstandsbediening en onderhoudstips." },
        ],
      },
      {
        type: "checklist",
        title: "Een plaatsing die lang meegaat",
        items: [
          "Vermogen berekend per kamer, niet te veel en niet te weinig",
          "Plaats van de buitenunit goed bekeken: geluid, buren, bereikbaarheid voor het onderhoud",
          "Nette, discrete afvoer van het condenswater",
          "Verzorgde en geteste koelleidingen",
          "Aangepaste en beveiligde elektrische kring, conform het [AREI](/nl/elektriciteit/installatie-in-orde-brengen)",
          "Zo weinig mogelijk goten en boringen",
          "Inbedrijfstelling met test in koel- en verwarmingsstand",
          "Tips voor het gebruik en het [onderhoud](/nl/airco/onderhoud-airco)",
        ],
        note: "Op onze plaatsing krijgt u 2 jaar garantie.",
        image: { asset: "P40", alt: "Binnenunit van een airco aan de muur in een woonkamer" },
      },
      {
        type: "callout",
        title: "Mede-eigendom, gevel, buren: wat u moet nagaan",
        paragraphs: [
          "In een appartement is voor een buitenunit (gevel, balkon, dak) meestal het **akkoord van de mede-eigendom** nodig. Afhankelijk van de plaats, zeker aan een straatgevel, kan ook een **stedenbouwkundige vergunning** gevraagd worden: informeer bij uw gemeente voor de werken.",
          "De buitenunit maakt geluid als ze werkt. Samen met u kiezen we een plaats die uw comfort en dat van uw buren spaart.",
          "Twijfelt u met een [lucht-waterwarmtepomp](/nl/verwarming/warmtepomp) om uw ketel te vervangen? De omkeerbare airco verwarmt via de lucht, kamer per kamer; de lucht-waterwarmtepomp voedt uw radiatoren of vloerverwarming. We helpen u kiezen.",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over het plaatsen van een airco",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost het plaatsen van een airco in Brussel?",
        answer:
          "De prijs hangt af van het aantal kamers, het nodige vermogen en de opstelling (mono-split, multi-split, lengte van de leidingen). U krijgt binnen 24 uur een gedetailleerde, gratis offerte, en het bedrag is het bedrag van de factuur.",
      },
      {
        id: 2,
        question: "Kan een omkeerbare airco mijn hele woning verwarmen?",
        answer:
          "Ze verwarmt de kamers waar ze staat goed, vaak als aanvulling op de centrale verwarming. Om een ketel te vervangen en radiatoren te voeden is een [lucht-waterwarmtepomp](/nl/verwarming/warmtepomp) meestal geschikter.",
      },
      {
        id: 3,
        question: "Heb ik een toelating nodig voor een airco in een appartement?",
        answer:
          "In een mede-eigendom is voor een buitenunit meestal het akkoord van de algemene vergadering nodig. Afhankelijk van de plaats kan de gemeente ook een stedenbouwkundige vergunning vragen: ga het best na voor de werken.",
      },
      {
        id: 4,
        question: "Hoelang duurt de plaatsing?",
        answer:
          "Dat hangt af van de opstelling: een eenvoudige installatie (mono-split) gebeurt vaak op één dag, een multi-split vraagt meer tijd. U leest de verwachte duur in de offerte.",
      },
      {
        id: 5,
        question: "Maakt een airco lawaai?",
        answer:
          "Recente binnenunits zijn stil, zeker op lage snelheid. De buitenunit maakt geluid als ze werkt: haar plaats wordt zo gekozen dat ze zo weinig mogelijk stoort, bij u en bij uw buren.",
      },
      {
        id: 6,
        question: "Moet een airco onderhouden worden?",
        answer:
          "Ja: regelmatig onderhoud, meestal één keer per jaar, houdt de lucht gezond, beperkt het verbruik en verlengt de levensduur van het toestel. Ontdek ons [onderhoud van airco](/nl/airco/onderhoud-airco).",
      },
      {
        id: 7,
        question: "Welke garantie krijg ik op de installatie?",
        answer: "Op ons werk krijgt u 2 jaar garantie. De fabrieksgarantie van het toestel hangt af van het gekozen merk en model.",
      },
    ],
    related: ["climatisation/entretien-climatisation", "chauffage/pompe-a-chaleur", "climatisation/depannage-climatisation", "electricite/installation-electricite"],
    cta: {
      body: "Een slaapkamer waar het 's zomers broeit, een bureau onder het dak? Beschrijf ons uw project: we berekenen het nodige vermogen en u krijgt binnen 24 uur een gedetailleerde offerte, vrijblijvend.",
    },
    zonesIntro: "We plaatsen uw airco in de 19 gemeenten van het Brussels Gewest en in de rand, in Vlaams-Brabant en Waals-Brabant.",
    draft: false,
  },

  // --- Onderhoud ---
  {
    category: "climatisation",
    slug: "entretien-climatisation",
    path: "/nl/airco/onderhoud-airco",
    title: "Onderhoud airco & warmtepomp",
    name: "Onderhoud van airco en warmtepomp",
    pageTitle: "Onderhoud van airco en warmtepomp in Brussel",
    metaTitle: "Onderhoud airco en warmtepomp in Brussel",
    metaDescription: `Onderhoud van airco en warmtepomp in Brussel: reiniging, ontsmetting, controle van de installatie. Onderhoud warmtepomp aan ${prices.entretienPac.amount}€ btw incl., prijs vooraf gekend.`,
    summary: "Reiniging, ontsmetting en controle van uw airco of warmtepomp, voor gezonde lucht en een beperkt verbruik.",
    icon: "fan",
    intent: "entretien",
    price: { key: "entretienPac" },
    hero: {
      eyebrow: "Jaarlijks onderhoud aangeraden",
      intro:
        "Een airco of warmtepomp die niet onderhouden wordt, verbruikt meer, verwarmt of koelt slechter en blaast minder gezonde lucht. Onze technici reinigen de filters en de warmtewisselaar, ontsmetten en controleren de installatie.",
      image: { asset: "P41", alt: "Technicus haalt de filter uit een airco aan de muur" },
    },
    facts: [
      { icon: "euro", stat: `${prices.entretienPac.amount}€ btw incl.`, label: "Onderhoud warmtepomp" },
      { icon: "calendar", stat: "1 keer per jaar", label: "Meestal aangeraden ritme" },
      { icon: "leaf", stat: "Gezondere lucht", label: "Filters en warmtewisselaar ontsmet" },
      { icon: "chart", stat: "Minder verbruik", label: "Een schoon toestel werkt minder hard" },
    ],
    blocks: [
      {
        type: "features",
        title: "Waarom uw airco of warmtepomp laten onderhouden?",
        items: [
          {
            icon: "leaf",
            title: "Gezonde lucht",
            text: "Filters, warmtewisselaar en condensbak verzamelen stof, schimmel en bacteriën: geurtjes, allergieën en bedompte lucht zijn het gevolg.",
          },
          {
            icon: "piggy",
            title: "Een lagere factuur",
            text: "Een vuil toestel moet harder werken voor hetzelfde comfort. Schoon en goed afgesteld verbruikt het minder.",
          },
          {
            icon: "shield",
            title: "Een installatie die lang meegaat",
            text: "Kleine defecten zien we voor de panne komt. Veel fabrikanten koppelen hun garantie ook aan regelmatig onderhoud: kijk de voorwaarden van de uwe na.",
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat ons onderhoud omvat",
        items: [
          "Reiniging of vervanging van de filters van de binnenunit",
          "Reiniging en ontsmetting van de warmtewisselaar en de ventilator",
          "Reiniging van de condensbak en controle van de afvoer van het condenswater",
          "Controle van het koelcircuit (drukken, geen zichtbaar lek)",
          "Reiniging van de buitenunit: lamellen, rooster, ventilator",
          "Controle van de elektrische aansluitingen en de bediening",
          "Lucht-waterwarmtepomp: controle van de druk van de verwarmingsinstallatie en van de instellingen",
          "Werkingstest in koel- en verwarmingsstand, tips voor de instellingen",
        ],
        note: "Een defect gevonden tijdens het onderhoud? U kent de prijs van de herstelling voor we iets doen.",
        image: { asset: "P44", alt: "Ontsmetting van de warmtewisselaar van een binnenunit van een airco" },
      },
      {
        type: "pricing",
        title: "Tarieven onderhoud airco en warmtepomp",
        intro: "Een prijs die u kent voor de afspraak. Voor een airco: een forfait plus een bedrag per binnenunit.",
        items: [{ key: "entretienPac" }, { key: "entretienAirco" }],
      },
      {
        type: "steps",
        title: "Uw onderhoud in 4 stappen",
        steps: [
          { title: "Afspraak maken", description: "Snel een moment, telefonisch, aan de prijs die u vooraf kent." },
          { title: "Reinigen en ontsmetten", description: "Filters, warmtewisselaar, ventilator, condensbak en buitenunit." },
          { title: "Controles en tests", description: "Koelcircuit, afvoer, elektrische aansluitingen, werking in koel- en verwarmingsstand." },
          {
            title: "Overzicht en advies",
            description: "U weet wat er gedaan werd. Is er een herstelling nodig, dan kent u de prijs voor we eraan beginnen.",
          },
        ],
      },
      {
        type: "callout",
        title: "Wanneer plant u het onderhoud?",
        paragraphs: [
          "Liefst **in de lente** voor een airco die vooral in de zomer draait, en **voor de winter** voor een warmtepomp die uw verwarming verzorgt. Eén bezoek per jaar is wat fabrikanten meestal aanraden.",
          "Tussen twee bezoeken in stoft u de filters van de binnenunit regelmatig af tijdens het seizoen, volgens de handleiding: dat maakt het grootste verschil.",
          "Een probleem voor het geplande onderhoud? Bekijk onze [depannage van airco en warmtepomp](/nl/airco/depannage-airco).",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over het onderhoud van airco en warmtepomp",
    faqs: [
      {
        id: 1,
        question: "Hoe vaak moet een airco onderhouden worden?",
        answer: "Eén keer per jaar is wat meestal aangeraden wordt. Tussen twee onderhouden in stoft u de filters van de binnenunit regelmatig af tijdens het seizoen.",
      },
      {
        id: 2,
        question: "Hoeveel kost het onderhoud van een warmtepomp?",
        answer: `Het onderhoud van een warmtepomp kost **${prices.entretienPac.amount}€ btw inbegrepen**. Voor een airco rekent u **${prices.entretienAirco.amount}€ btw inbegrepen**, plus ${aircoPerIndoorUnit} € per binnenunit.`,
      },
      {
        id: 3,
        question: "Is het onderhoud van een airco verplicht?",
        answer:
          "Het gewone onderhoud is niet altijd wettelijk verplicht, maar het is sterk aangeraden en fabrikanten vragen het vaak om de garantie te behouden. Voor sommige installaties gelden bovendien wettelijke controles: informeer op [leefmilieu.brussels](https://leefmilieu.brussels).",
      },
      {
        id: 4,
        question: "Mijn airco ruikt slecht, is dat erg?",
        answer: "Een schimmelgeur komt meestal van een vuile filter, warmtewisselaar of condensbak. Een reiniging met ontsmetting lost het in de meeste gevallen op.",
      },
      {
        id: 5,
        question: "Wat als de technicus een defect vindt?",
        answer: "Hij legt het probleem uit en zegt u de prijs van de herstelling voor er iets gebeurt. Niets gebeurt zonder uw akkoord.",
      },
      {
        id: 6,
        question: "Kan ik mijn airco zelf reinigen?",
        answer:
          "De filters afstoffen wel: dat wordt zelfs aangeraden. De ontsmetting van de warmtewisselaar, de controle van het koelcircuit en de reiniging van de buitenunit laat u beter aan een vakman over.",
      },
      {
        id: 7,
        question: "Moet ik thuis zijn tijdens het onderhoud?",
        answer: "Ja, of iemand die u vertrouwt: de technicus moet bij de binnenunits en de buitenunit kunnen.",
      },
    ],
    related: ["climatisation/depannage-climatisation", "climatisation/installation-climatisation", "chauffage/pompe-a-chaleur", "chauffage/entretien-chaudiere"],
    cta: {
      body: "Airco aan de muur, multi-split of warmtepomp? Maak een afspraak: de technicus reinigt, ontsmet en controleert de installatie, en legt u uit wat hij gedaan heeft. De prijs kent u op voorhand.",
    },
    draft: false,
  },

  // --- Depannage ---
  {
    category: "climatisation",
    slug: "depannage-climatisation",
    path: "/nl/airco/depannage-airco",
    title: "Depannage airco & warmtepomp",
    name: "Depannage van airco en warmtepomp",
    pageTitle: "Depannage van airco en warmtepomp in Brussel",
    metaTitle: "Depannage airco en warmtepomp in Brussel",
    metaDescription: `Airco of warmtepomp in panne in Brussel? Interventie binnen 24 uur, 7 op 7. Depannage aan ${prices.depannage.amount}€ btw incl.: verplaatsing, diagnose en 1e uur inbegrepen.`,
    summary: "Uw airco koelt niet meer, lekt of toont een foutcode? Diagnose en herstelling binnen 24 uur, 7 op 7.",
    icon: "tempHigh",
    intent: "urgence",
    price: { key: "depannage", label: "Depannage airco / warmtepomp" },
    hero: {
      eyebrow: "Depannage 7 op 7 · Binnen 24 uur",
      intro: `Geen koeling meer midden in een hittegolf, een warmtepomp die niet meer verwarmt, water dat onder de unit loopt? Onze technici vinden de panne en herstellen uw installatie, aan de prijs die u vooraf kent. Voor een noodgeval nemen we ${promises.emergency} op.`,
      image: { asset: "P42", alt: "Koelmanometers aangesloten op de buitenunit van een airco" },
    },
    facts: [
      { icon: "euro", stat: `${prices.depannage.amount}€ btw incl.`, label: "Verplaatsing + diagnose + 1e uur" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Interventie, 7 op 7" },
      { icon: "phone", stat: capitalize(promises.emergency), label: "We nemen op voor dringende gevallen" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    blocks: [
      {
        type: "features",
        layout: "list",
        title: "De pannes die we herstellen",
        intro: "Beschrijf ons wat het toestel doet (of niet meer doet): airco aan de muur, multi-split of warmtepomp, we zoeken de oorzaak.",
        items: [
          { icon: "tempHigh", title: "Koelt niet meer", text: "Het toestel draait maar blaast lauwe lucht: verstopte filter, gebrek aan koelmiddel, sonde of compressor." },
          { icon: "tempLow", title: "Verwarmt niet meer", text: "Uw warmtepomp of omkeerbare airco maakt geen warmte meer, of gaat in storing bij koud weer." },
          { icon: "drop", title: "Waterlek aan de binnenunit", text: "Verstopte condensafvoer, volle bak of verkeerde helling: het water loopt langs de muur." },
          { icon: "smog", title: "Slechte geur", text: "Schimmelgeur bij het aanzetten: warmtewisselaar en condensbak moeten gereinigd en ontsmet worden." },
          { icon: "volume", title: "Vreemd geluid", text: "Tikken, trillingen of fluiten, aan de binnenunit of aan de buitenunit." },
          { icon: "alert", title: "Foutcode of knipperend lampje", text: "De code op het scherm helpt de diagnose: noteer hem voor u ons belt." },
          { icon: "snowflake", title: "IJs op de unit of de leidingen", text: "Abnormale ijsvorming wijst vaak op een probleem met de luchtstroom of het koelmiddel." },
          { icon: "power", title: "Het toestel start niet meer", text: "Afstandsbediening, stroomvoorziening, elektronische kaart: we zoeken de precieze oorzaak." },
        ],
      },
      {
        type: "alert",
        tone: "info",
        title: "Voor u belt: 4 snelle controles",
        paragraphs: [
          "**Afstandsbediening**: controleer de batterijen en de gekozen stand (koelen, verwarmen, ontvochtigen, ventileren).",
          "**Zekering**: kijk of de zekering van de airco niet gesprongen is in uw zekeringkast. Springt ze opnieuw, zet ze dan niet steeds weer aan.",
          "**Filters**: filters vol stof volstaan om de prestaties te laten dalen. Stof ze af als u erbij kunt.",
          "**Buitenunit**: niets mag de luchtstroom hinderen (zeil, bladeren, meubel). Nog altijd in panne? Zet het toestel uit en bel ons.",
        ],
      },
      {
        type: "steps",
        title: "Hoe verloopt een depannage?",
        steps: [
          {
            title: "U beschrijft de symptomen",
            description: "Wat het toestel doet, de eventuele code op het scherm, het merk: we komen binnen 24 uur langs, 7 op 7.",
          },
          {
            title: "Volledige controle ter plaatse",
            description: "Elektrisch gedeelte, koelcircuit, afvoer van het condenswater en buitenunit: de technicus controleert alles.",
          },
          { title: "U keurt de prijs goed", description: "U weet wat er moet gebeuren en wat het kost voor we beginnen." },
          { title: "Test in koel- en verwarmingsstand", description: "Weer in werking, test in koel- en verwarmingsstand, tips om te vermijden dat de panne terugkomt." },
        ],
      },
      {
        type: "pricing",
        title: "Tarief depannage airco en warmtepomp",
        intro: "Het forfait omvat de verplaatsing, de diagnose en het eerste werkuur. Eventuele onderdelen: prijs vooraf meegedeeld en goedgekeurd.",
        items: [{ key: "depannage", label: "Depannage airco / warmtepomp" }, { key: "entretienPac" }],
      },
      {
        type: "callout",
        title: "Uw toestel herstellen of vervangen?",
        paragraphs: [
          "Bij een recente installatie is herstellen bijna altijd de beste keuze. Bij een oud toestel met steeds meer pannes geven we u een eerlijk advies: herstellen, of een [nieuwe installatie](/nl/airco/airco-plaatsen) overwegen.",
          "In elk geval blijft een [jaarlijks onderhoud](/nl/airco/onderhoud-airco) de beste manier om een panne midden in een hittegolf of hartje winter te vermijden.",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over de depannage van uw airco",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost een depannage van een airco?",
        answer: `De depannage kost **${prices.depannage.amount}€ btw inbegrepen**, verplaatsing, diagnose en eerste uur inbegrepen. Na het eerste uur kost elk extra uur **${prices.heureSupplementaire.amount}€ btw inbegrepen**. Eventuele onderdelen kent u voor de herstelling.`,
      },
      {
        id: 2,
        question: "Komt u ook in het weekend?",
        answer: `Ja. We nemen ${promises.emergency} op, en een technicus komt binnen 24 uur langs, ook in het weekend, in Brussel en de rand.`,
      },
      {
        id: 3,
        question: "Waarom lekt mijn airco?",
        answer: "Meestal is de condensafvoer verstopt of is de bak vol. Zet het toestel uit om schade te vermijden en laat het controleren.",
      },
      {
        id: 4,
        question: "Mijn airco koelt niet meer, wat doe ik?",
        answer:
          "Controleer de stand, de ingestelde temperatuur en de staat van de filters. Blijft de lucht lauw, dan kan er koelmiddel ontbreken of een onderdeel defect zijn: een professionele diagnose is nodig.",
      },
      {
        id: 5,
        question: "Herstelt u ook warmtepompen?",
        answer: "Ja, zowel lucht-luchtwarmtepompen (omkeerbare airco) als lucht-waterwarmtepompen, die uw verwarming voeden. Hetzelfde forfait voor depannage geldt.",
      },
      {
        id: 6,
        question: "Kan het koelmiddel gewoon bijgevuld worden?",
        answer: "Een gebrek aan koelmiddel wijst bijna altijd op een lek: dat moet gevonden en hersteld worden voor er bijgevuld wordt, door een bevoegde technicus.",
      },
      {
        id: 7,
        question: "Hoe vermijd ik pannes aan mijn airco?",
        answer: "Een [jaarlijks onderhoud](/nl/airco/onderhoud-airco) en regelmatig afgestofte filters vermijden de meeste pannes en geurtjes.",
      },
      {
        id: 8,
        question: "Krijg ik garantie op de depannage?",
        answer:
          "Ja, op onze depannages krijgt u 2 jaar garantie. Tijdens die periode mag geen ander bedrijf aan de betrokken installatie werken, anders vervalt de garantie.",
      },
    ],
    related: ["climatisation/entretien-climatisation", "climatisation/installation-climatisation", "electricite/depannage-electrique", "chauffage/depannage-chaudiere"],
    cta: {
      title: "Airco in panne? Uw technicus is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Beschrijf ons de panne: een technicus komt binnen 24 uur, 7 op 7, in Brussel en de rand, en zegt u de prijs voor hij herstelt.",
    },
    draft: false,
  },
];
