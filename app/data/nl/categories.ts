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
  professionnels: "Syndici",
};

const promises = companyCopy.nl.promises;
const depannageFrom = `Vanaf ${prices.depannage.amount}€ btw incl.`;
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

  // ---------------------------------------------------------------------------
  // SANITAIR
  // ---------------------------------------------------------------------------
  plomberie: {
    category: "plomberie",
    label: "Sanitair",
    metaTitle: "Loodgieter in Brussel – depannage 7 op 7",
    metaDescription:
      "Loodgieter in Brussel: waterlek, verstopte wc of gootsteen, ontkalking. Interventie 7 op 7 binnen 24 uur, vaste prijzen btw incl. vooraf gekend, gratis offerte.",
    hero: {
      eyebrow: "Loodgieter · Dringend 7 op 7",
      title: "Loodgieter in Brussel: lekken, ontstopping en ontkalking",
      highlight: "Brussel",
      intro:
        "Een lek, een verstopte wc, een gootsteen die niet meer afloopt? Onze loodgieters komen binnen 24 uur langs, 7 op 7, aan een vaste prijs die u vooraf kent.",
      intent: "urgence",
    },
    facts: [
      { icon: "euro", stat: depannageFrom, label: "Depannage sanitair" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Snelle interventie" },
      { icon: "calendarCheck", stat: "7 op 7", label: "Ook in het weekend" },
      { icon: "balance", stat: "Vaste prijzen", label: "Vooraf meegedeeld" },
    ],
    servicesTitle: "Onze diensten voor uw sanitair",
    servicesIntro: "De meest voorkomende interventies, met een prijs die u op voorhand kent.",
    services: ["plomberie/depannage", "plomberie/debouchage", "plomberie/detartrage", "chauffage/entretien-chauffe-eau-boiler"],
    why: {
      title: "Een loodgieter op wie u kunt rekenen",
      items: [
        {
          icon: "stopwatch",
          title: "Binnen 24 uur, 7 op 7",
          text: `Een lek wacht niet: een loodgieter komt binnen 24 uur langs, ook in het weekend, in Brussel en de rand. En we nemen ${promises.emergency} op.`,
        },
        {
          icon: "search",
          title: "De oorzaak, niet het symptoom",
          text: "We zoeken waar het lek of de verstopping vandaan komt, zodat het de week erna niet terugkomt.",
        },
        {
          icon: "euro",
          title: "Vaste prijzen",
          text: "Depannage en ontstopping aan een vaste prijs btw inbegrepen, online te zien. [Bekijk onze tarieven](/nl/tarieven).",
        },
      ],
    },
    pricing: {
      title: "Tarieven sanitair in Brussel",
      intro: "Twee vaste prijzen voor de meest voorkomende interventies; voor de rest een gratis offerte.",
      items: [{ key: "depannage", label: "Depannage sanitair" }, { key: "debouchage" }],
    },
    guide: {
      eyebrow: "In afwachting van de loodgieter",
      title: "Waterlek: de juiste reflexen",
      paragraphs: [
        "Een lek kan snel schade veroorzaken, bij u en bij de buren onder u. Met enkele eenvoudige handelingen beperkt u de schade tot wij er zijn.",
        "## 1. Draai het water dicht",
        "Draai de stopkraan van het betrokken toestel dicht (wc, lavabo, wasmachine) als er een is. Zo niet, draai dan de **hoofdkraan** dicht, meestal bij de watermeter van Vivaqua, vaak in de kelder of een technische ruimte.",
        "## 2. Zet de stroom uit als het water bij toestellen komt",
        "Komt het water bij stopcontacten, toestellen of de zekeringkast, zet dan de hoofdschakelaar uit voor u in de buurt komt. Bij gevaar belt u 112.",
        "## 3. Bescherm en documenteer",
        "Dweil op, zet een emmer onder het lek en neem foto's: ze zijn nuttig voor uw verzekeraar. In een appartement verwittigt u de buren onder u en uw syndicus.",
        "## 4. Bel ons",
        "We komen 7 op 7 voor een [depannage sanitair](/nl/sanitair/depannage), met een prijs die u kent voor we iets herstellen. Eerder een verstopte leiding dan een lek? Bekijk onze [ontstopping](/nl/sanitair/ontstopping).",
      ],
    },
    faqTitle: "Veelgestelde vragen over sanitair",
    faqs: [
      {
        id: 1,
        question: "Mijn wc blijft lopen: is dat dringend?",
        answer:
          "Het is niet gevaarlijk, maar een wc die blijft lopen kan veel water verspillen en uw factuur doen stijgen. Meestal ligt het aan het spoelmechanisme of de vlotterkraan: een snelle interventie, meestal zonder grote werken.",
      },
      {
        id: 2,
        question: "Moet ik bijtende soda gebruiken om te ontstoppen?",
        answer:
          "Liever niet: die producten tasten dichtingen en sommige leidingen aan, en zijn gevaarlijk om te gebruiken, zeker als de verstopping blijft en een technicus nadien moet komen. Een [professionele ontstopping](/nl/sanitair/ontstopping) is veiliger en doeltreffender.",
      },
      {
        id: 3,
        question: "Is het water in Brussel kalkrijk?",
        answer:
          "Ja, het leidingwater in Brussel is eerder hard. Kalk zet zich af in kranen, douchekoppen en boilers, waardoor het debiet daalt en de toestellen slijten. Regelmatige [ontkalking](/nl/sanitair/ontkalking) verlengt hun levensduur.",
      },
      {
        id: 4,
        question: "Werkt u ook aan boilers en geisers?",
        answer: "Ja: onderhoud, ontkalking en depannage van elektrische boilers en geisers. Bekijk onze pagina [boiler en geiser](/nl/verwarming/onderhoud-boiler).",
      },
      {
        id: 5,
        question: "Hoeveel kost een loodgieter?",
        answer:
          "De depannage sanitair en de ontstopping hebben een vaste prijs btw inbegrepen, te zien op onze pagina [Tarieven](/nl/tarieven). Zijn er onderdelen of bijkomende werken nodig, dan kent u de prijs voor de interventie.",
      },
      {
        id: 6,
        question: "Werkt u ook in appartementen en voor syndici?",
        answer:
          "Ja, bij particulieren en in de gemeenschappelijke delen van mede-eigendommen (afvoerkolommen, gemeenschappelijke afvoeren). Bekijk onze diensten voor [syndici en mede-eigendommen](/nl/syndici).",
      },
    ],
    cta: {
      intent: "urgence",
      title: "Een lek? Uw loodgieter is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Een lek, een verstopte wc? Draai het water dicht en bel: een loodgieter komt binnen 24 uur, 7 op 7, en zegt u de prijs voor de interventie.",
    },
    draft: false,
  },

  // ---------------------------------------------------------------------------
  // AIRCO & WARMTEPOMP
  // ---------------------------------------------------------------------------
  climatisation: {
    category: "climatisation",
    label: "Airco",
    metaTitle: "Airco en warmtepomp in Brussel",
    metaDescription:
      "Plaatsing, onderhoud en depannage van airco en warmtepomp in Brussel en omgeving. Gratis offerte binnen 24 uur, depannage 7 op 7.",
    hero: {
      eyebrow: "Airco & warmtepomp",
      title: "Airco en warmtepomp in Brussel",
      highlight: "Brussel",
      intro:
        "Een omkeerbare airco voor de zomer, een warmtepomp om de ketel te vervangen? We adviseren u, plaatsen, onderhouden, en komen 7 op 7 als het toestel het opgeeft.",
      intent: "installation",
    },
    facts: [
      { icon: "file", stat: "Gratis offerte", label: "Binnen 24 uur, vrijblijvend" },
      { icon: "euro", stat: `${prices.entretienPac.amount}€ btw incl.`, label: "Onderhoud warmtepomp" },
      { icon: "calendarCheck", stat: "Depannage 7 op 7", label: "Airco en warmtepomp" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    servicesTitle: "Onze diensten voor airco en warmtepomp",
    servicesIntro: "Plaatsing, onderhoud of panne: kies wat u nodig hebt.",
    services: [
      "climatisation/installation-climatisation",
      "climatisation/entretien-climatisation",
      "climatisation/depannage-climatisation",
      "chauffage/pompe-a-chaleur",
    ],
    why: {
      title: "Wat we controleren voor we een toestel plaatsen",
      items: [
        {
          icon: "ruler",
          title: "Het juiste vermogen",
          text: "Een te sterk of te zwak toestel verbruikt meer en slijt sneller: we berekenen het vermogen dat bij uw kamers past.",
        },
        {
          icon: "volume",
          title: "De plaats en het geluid",
          text: "Waar komt de buitenunit, hoe beperken we het geluid voor u en uw buren, waar gaat het water heen: dat regelen we voor de plaatsing.",
        },
        { icon: "sync", title: "Warm en koel", text: "Een omkeerbare airco is in het tussenseizoen ook een doeltreffende bijverwarming." },
        {
          icon: "tools",
          title: "Daarna onderhoud en depannage",
          text: "Na de plaatsing onderhouden en herstellen wij het toestel, aan prijzen die online staan.",
        },
      ],
    },
    pricing: {
      title: "Tarieven airco en warmtepomp",
      intro: "Onderhoud en depannage aan een vaste prijs; plaatsing op gratis offerte, na studie van uw woning.",
      items: [
        { key: "entretienPac" },
        { key: "depannage", label: "Depannage airco / warmtepomp" },
        { label: "Plaatsing van airco of warmtepomp", note: "Gratis offerte binnen 24 uur" },
      ],
    },
    guide: {
      title: "Omkeerbare airco of lucht-waterwarmtepomp: wat is het verschil?",
      paragraphs: [
        "Beide zijn warmtepompen: ze halen warmte uit de buitenlucht. Het verschil zit in hoe ze die warmte in uw woning afgeven.",
        "## De omkeerbare airco (lucht-luchtwarmtepomp)",
        "Ze blaast warme of koele lucht in de kamer via een unit aan de muur. Ideaal om slaapkamers of een woonkamer in de zomer te koelen en in het tussenseizoen te verwarmen, zonder aan uw centrale verwarming te raken. Zie [een airco plaatsen](/nl/airco/airco-plaatsen).",
        "## De lucht-waterwarmtepomp",
        "Ze verwarmt het water van uw radiatoren of vloerverwarming, en vaak ook uw sanitair warm water: ze vervangt de ketel. Ze werkt het best met lagetemperatuurradiatoren of vloerverwarming en een goed geïsoleerde woning. Zie [warmtepomp](/nl/verwarming/warmtepomp).",
        "## Wat er verandert in 2026",
        "De RENOLUTION-premies voor de vervanging van een ketel zijn momenteel opgeschort. Bekijk de actuele informatie op [leefmilieu.brussels](https://leefmilieu.brussels). Tijdens het bezoek helpen we u om het overzicht te bewaren.",
      ],
    },
    faqTitle: "Veelgestelde vragen: airco en warmtepomp",
    faqs: [
      {
        id: 1,
        question: "Kan een airco ook verwarmen?",
        answer:
          "Ja, als ze omkeerbaar is, zoals de meeste huidige modellen. In verwarmingsstand werkt ze als een lucht-luchtwarmtepomp, doeltreffend als aanvulling op uw centrale verwarming, zeker in het tussenseizoen.",
      },
      {
        id: 2,
        question: "Heb ik een toelating nodig voor een buitenunit in Brussel?",
        answer:
          "Dat hangt af van de plaats: een unit die zichtbaar is vanaf de straat, aan de gevel of in een mede-eigendom kan een toelating vragen (stedenbouw, akkoord van de algemene vergadering). Tijdens het technisch bezoek helpen we u te zien welke stappen nodig zijn.",
      },
      {
        id: 3,
        question: "Hoe vaak moet een airco of warmtepomp onderhouden worden?",
        answer:
          "Fabrikanten raden meestal een jaarlijks onderhoud aan: reiniging van de filters en de warmtewisselaar, controle van het circuit en de prestaties. Zo blijft het rendement goed, zijn er minder pannes en blijft de lucht gezond. Zie ons [onderhoud](/nl/airco/onderhoud-airco).",
      },
      {
        id: 4,
        question: "Mijn airco koelt niet meer: wat nu?",
        answer:
          "Controleer eerst de stand, de ingestelde temperatuur en of de filters schoon zijn. Blijft het probleem, of druppelt de unit, vormt er zich ijs of maakt ze een vreemd geluid, zet het toestel dan uit en doe een beroep op onze [depannage](/nl/airco/depannage-airco), 7 op 7.",
      },
      {
        id: 5,
        question: "Kan een warmtepomp mijn ketel vervangen?",
        answer:
          "Vaak wel, als de woning en de radiatoren zich ertoe lenen. We bekijken uw isolatie, uw radiatoren en uw behoeften voor we u een [warmtepomp](/nl/verwarming/warmtepomp), een hybride oplossing of een [condensatieketel](/nl/verwarming/ketel-vervangen) aanraden.",
      },
      {
        id: 6,
        question: "Is het geluid van een buitenunit hinderlijk?",
        answer:
          "Recente toestellen zijn veel stiller dan vroeger, maar de plaats telt: afstand tot de ramen van de buren, trillingsdempers, oriëntatie. We houden er vanaf de studie van uw project rekening mee.",
      },
    ],
    cta: {
      intent: "installation",
      title: "Een project met airco of warmtepomp? De offerte is gratis.",
      highlight: "gratis",
      body: "We komen uw woning bekijken, berekenen het vermogen dat u nodig hebt, en u krijgt binnen 24 uur een gedetailleerde offerte, vrijblijvend.",
    },
    draft: false,
  },

  // ---------------------------------------------------------------------------
  // ELEKTRICITEIT
  // ---------------------------------------------------------------------------
  electricite: {
    category: "electricite",
    label: "Elektriciteit",
    metaTitle: "Elektricien in Brussel – depannage 7 op 7",
    metaDescription:
      "Elektricien in Brussel: depannage 7 op 7 binnen 24 uur, installatie, in orde brengen volgens het AREI, laadpaal, parlofoon. Gratis offerte, prijzen vooraf gekend.",
    hero: {
      eyebrow: "Elektricien · Depannage 7 op 7",
      title: "Elektricien in Brussel: depannage, installatie en keuring",
      highlight: "Brussel",
      intro:
        "Een stroomonderbreking, een differentieel die springt, een zekeringkast die vervangen moet worden of een AREI-keuring voor de verkoop? Onze elektriciens komen 7 op 7, binnen 24 uur, en voor werken is de offerte gratis.",
      intent: "urgence",
    },
    facts: [
      { icon: "euro", stat: depannageFrom, label: "Verplaatsing + diagnose + 1e uur" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Interventie in Brussel en omgeving" },
      { icon: "shield", stat: "AREI-normen", label: "Werken klaar voor de keuring" },
      { icon: "file", stat: "Gratis offerte", label: "Voor alle werken" },
    ],
    servicesTitle: "Al onze diensten voor elektriciteit",
    servicesIntro: "Van depannage tot volledige renovatie, van laadpaal tot parlofoon: kies wat u nodig hebt.",
    services: [
      "electricite/depannage-electrique",
      "electricite/installation-electricite",
      "electricite/mise-en-conformite-electrique",
      "electricite/renovation",
      "electricite/schema-electrique",
      "electricite/installation-borne-recharge",
      "electricite/installation-parlophonie",
      "electricite/installation-videophonie",
    ],
    why: {
      title: "Een elektricien die volgens de regels werkt",
      items: [
        {
          icon: "shield",
          title: "Volgens het AREI",
          text: "Elke kring die we plaatsen of aanpassen voldoet aan het Algemeen Reglement op de Elektrische Installaties (AREI), zodat de keuring vlot verloopt.",
        },
        {
          icon: "search",
          title: "Eerst de diagnose",
          text: "We zoeken de oorzaak van de panne voor we iets vervangen: u betaalt alleen wat nuttig is.",
        },
        {
          icon: "euro",
          title: "Prijs vooraf gekend",
          text: "Het forfait voor een depannage staat online, en elke werf heeft een gratis offerte, post per post.",
        },
        {
          icon: "handshake",
          title: "Eén nummer voor het hele huis",
          text: "Elektriciteit, verwarming, sanitair: u hoeft geen drie verschillende vakmensen te zoeken.",
        },
      ],
    },
    pricing: {
      title: "Tarieven elektriciteit in Brussel",
      intro: "Een depannage heeft een vaste prijs; voor werken is elke offerte gratis en gedetailleerd, post per post.",
      items: [
        { key: "depannage", label: "Depannage elektriciteit" },
        { label: "In orde brengen volgens het AREI", note: "Gratis en gedetailleerde offerte" },
        { label: "Plaatsing van een laadpaal", note: "Gratis offerte volgens uw installatie" },
        { label: "Renovatie / zekeringkast", note: "Gratis en gedetailleerde offerte" },
      ],
    },
    guide: {
      eyebrow: "De tip van de elektricien",
      title: "Een woning verkopen: wat u nodig hebt voor de elektrische keuring",
      paragraphs: [
        "In België moet bij de verkoop van een woning de **elektrische installatie gekeurd worden** door een erkend keuringsorganisme, volgens het AREI. Het keuringsverslag wordt aan de koper bezorgd: conform of niet, de verkoop kan doorgaan, maar de vastgestelde inbreuken moeten verholpen worden binnen de termijn die de regelgeving voorziet.",
        "## De documenten die u klaarlegt",
        "Het keuringsorganisme heeft een bijgewerkt **ééndraadschema** en **situatieschema** nodig. Ontbreken ze of kloppen ze niet meer, dan [maken wij ze voor u](/nl/elektriciteit/elektrische-schemas) voor de keurder langskomt.",
        "## Als de installatie niet conform is",
        "Geen paniek: het verslag somt precies op wat verholpen moet worden. We berekenen gratis wat nodig is om [de installatie in orde te brengen](/nl/elektriciteit/installatie-in-orde-brengen) en voeren de werken uit voor de herkeuring. Voor een te oude zekeringkast of bekabeling is een volledige [renovatie](/nl/elektriciteit/renovatie) soms verstandiger.",
        "De gedetailleerde regels worden gepubliceerd door de FOD Economie: [economie.fgov.be](https://economie.fgov.be).",
      ],
    },
    faqTitle: "Veelgestelde vragen over elektriciteit",
    faqs: [
      {
        id: 1,
        question: "Mijn differentieel springt steeds: wat doe ik?",
        answer:
          "Trek alle stekkers uit, zet de differentieel weer aan en steek de toestellen één voor één weer in: springt hij opnieuw bij een bepaald toestel, dan is dat waarschijnlijk de oorzaak. Springt hij ook zonder dat er iets aangesloten is, dan zit het defect in de installatie: forceer het niet en doe een beroep op onze [depannage elektriciteit](/nl/elektriciteit/depannage-elektriciteit).",
      },
      {
        id: 2,
        question: "De hele buurt zit zonder stroom: moet u komen?",
        answer:
          "Zitten uw buren ook zonder stroom, dan komt de panne waarschijnlijk van het distributienet, beheerd door Sibelga in Brussel: daar meldt u ze. Gaat het alleen om u, dan ligt het probleem in principe bij u thuis: we komen 7 op 7.",
      },
      {
        id: 3,
        question: "Wanneer is een keuring van de elektrische installatie verplicht?",
        answer:
          "Het AREI legt een keuring door een erkend keuringsorganisme op, onder meer bij de verkoop van een woning, voor de ingebruikname van een nieuwe installatie en na een belangrijke wijziging. We maken uw installatie en de [schema's](/nl/elektriciteit/elektrische-schemas) klaar zodat die keuring vlot verloopt.",
      },
      {
        id: 4,
        question: "Kunt u een laadpaal plaatsen in een oud huis?",
        answer:
          "In de overgrote meerderheid van de gevallen wel. We controleren eerst het beschikbare vermogen, het type net (3x230 V komt in Brussel nog vaak voor) en de staat van de zekeringkast, en stellen dan de juiste oplossing voor. Meer op de pagina [laadpaal](/nl/elektriciteit/laadpaal-plaatsen).",
      },
      {
        id: 5,
        question: "Moet de elektriciteit van een oud huis volledig vernieuwd worden?",
        answer:
          "Niet altijd. Afhankelijk van de staat van de zekeringkast, de kabels en de aarding kan een gerichte aanpak volstaan. Na de diagnose krijgt u beide opties met prijs: [in orde brengen](/nl/elektriciteit/installatie-in-orde-brengen) of [renoveren](/nl/elektriciteit/renovatie).",
      },
      {
        id: 6,
        question: "Plaatst u ook parlofoons in gebouwen?",
        answer:
          "Ja, in huizen en appartementsgebouwen, voor particulieren en voor syndici: audio-[parlofonie](/nl/elektriciteit/parlofoon) of [videofonie](/nl/elektriciteit/videofoon).",
      },
    ],
    cta: {
      intent: "urgence",
      title: "Geen stroom meer? Uw elektricien is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Een differentieel die springt, een stopcontact dat warm wordt? Een elektricien komt binnen 24 uur, 7 op 7, en zegt u de prijs voor hij begint. Voor uw projecten is de offerte gratis.",
    },
    draft: false,
  },

  // ---------------------------------------------------------------------------
  // SYNDICI (mede-eigendommen, beheerders) — page unique /nl/syndici
  // ---------------------------------------------------------------------------
  professionnels: {
    category: "professionnels",
    label: "Syndici",
    metaTitle: "Technische diensten voor syndici in Brussel",
    metaDescription:
      "Verwarming, elektriciteit en sanitair van de gemene delen: Radialec werkt voor syndici en mede-eigendommen in Brussel. Depannage 7 op 7, gratis offertes.",
    hero: {
      eyebrow: "Syndici · Beheerders · Mede-eigendommen",
      title: "Syndici en mede-eigendommen: een technische partner in Brussel",
      highlight: "Brussel",
      intro:
        "Collectieve stookplaats, waterkolommen, parlofonie, verlichting van de gemene delen: één nummer voor het onderhoud en de depannage van uw gebouwen, met duidelijke offertes voor de algemene vergadering.",
      intent: "installation",
    },
    facts: [
      { icon: "handshake", stat: "Eén nummer", label: "Verwarming, elektriciteit, sanitair" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Depannage van de gemene delen" },
      { icon: "file", stat: "Gratis offertes", label: "Duidelijk en gedetailleerd voor de AV" },
      { icon: "calendarCheck", stat: "7 op 7", label: "Ook voor dringende gevallen" },
    ],
    servicesTitle: "Onze diensten voor gebouwen",
    servicesIntro: "De interventies die Brusselse syndici en vastgoedbeheerders het vaakst vragen.",
    services: [
      "professionnels/syndics-coproprietes",
      "chauffage/entretien-chaudiere",
      "plomberie/debouchage",
      "electricite/installation-parlophonie",
    ],
    faqTitle: "Veelgestelde vragen van syndici",
    faqs: [
      {
        id: 1,
        question: "Werkt u met professionele en vrijwillige syndici?",
        answer: "Ja: professionele syndici, vrijwillige syndici, vastgoedbeheerders en eigenaars van opbrengsteigendommen.",
      },
      {
        id: 2,
        question: "Komt u dringend in de gemene delen?",
        answer: "Ja, 7 op 7, binnen 24 uur: collectieve verwarming in panne, lek op een kolom, verstopte afvoer, verlichting van de gemene delen…",
      },
    ],
    cta: {
      intent: "installation",
      title: "Beheert u een gebouw? Laten we het over uw installaties hebben.",
      body: "Stookplaats, kolommen, parlofonie, verlichting van de gemene delen: stel ons uw gebouw voor, u krijgt een duidelijke offerte, en voor dringende gevallen zijn we er 7 op 7.",
    },
    draft: false,
  },
};
