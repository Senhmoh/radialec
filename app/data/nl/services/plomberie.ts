import { companyCopy } from "../../company";
import { prices } from "../../pricing";
import type { Service } from "../../services/types";

// Pages service « sanitair » en néerlandais : traduction de
// app/data/services/plomberie.ts (mêmes category / slug, adresse dans `path`).
// À faire relire par un néerlandophone.

const promises = companyCopy.nl.promises;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const plomberieServicesNl: Service[] = [
  // --- Depannage ---
  {
    category: "plomberie",
    slug: "depannage",
    path: "/nl/sanitair/depannage",
    title: "Depannage sanitair",
    name: "Depannage sanitair",
    pageTitle: "Dringend een loodgieter in Brussel: depannage sanitair 7 op 7",
    metaTitle: "Dringend een loodgieter in Brussel, 7 op 7",
    metaDescription: `Waterlek, wc die blijft lopen, lekkende leiding in Brussel? Loodgieter binnen 24 uur, 7 op 7. Depannage aan ${prices.depannage.amount}€ btw incl.: verplaatsing, diagnose en 1e uur.`,
    summary: "Waterlek, wc die blijft lopen, lekkende kraan of leiding: een loodgieter bij u binnen 24 uur, 7 op 7, aan de prijs die we vooraf zeggen.",
    icon: "faucet",
    intent: "urgence",
    price: { key: "depannage", label: "Depannage sanitair" },
    hero: {
      eyebrow: "Dringend sanitair · 7 op 7",
      intro: `Lek onder de gootsteen, een wc die blijft doorlopen, een lekkende buis? Draai het water dicht en bel ons, we nemen ${promises.emergency} op. Een loodgieter komt binnen 24 uur, 7 op 7, in Brussel en de rand, en zegt u de prijs voor hij herstelt.`,
      image: { asset: "P30", alt: "Loodgieter herstelt een sifon onder een gootsteen" },
    },
    facts: [
      { icon: "euro", stat: `${prices.depannage.amount}€ btw incl.`, label: "Verplaatsing + diagnose + 1e uur" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Interventie, 7 op 7" },
      { icon: "phone", stat: capitalize(promises.emergency), label: "We nemen op voor dringende gevallen" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    blocks: [
      {
        type: "alert",
        tone: "danger",
        title: "Groot lek: de juiste reflexen",
        paragraphs: [
          "**Draai het water dicht.** De hoofdkraan zit meestal bij de watermeter van Vivaqua, vaak in de kelder, in een technische ruimte of een technische koker in een appartement. Bij een plaatselijk lek draait u de stopkraan van het toestel dicht (wc, lavabo, wasmachine).",
          "**Hou water en elektriciteit uit elkaar.** Komt het water bij stopcontacten, een toestel of de zekeringkast, zet dan de betrokken zekering uit, zonder ooit een elektrisch toestel aan te raken met de voeten in het water.",
          "**Beperk de schade**: dweil op, bescherm uw spullen en neem foto's voor uw verzekering. Bij direct gevaar voor personen belt u 112; voor het lek zelf belt u ons.",
        ],
      },
      {
        type: "features",
        layout: "list",
        title: "De sanitaire pannes die we herstellen",
        items: [
          { icon: "drop", title: "Waterlek", text: "Druppelende kraan, gebarsten flexibele slang, lekkende koppeling of sifon, zichtbaar lek op een leiding." },
          {
            icon: "toilet",
            title: "Wc die blijft lopen",
            text: "Spoelmechanisme, vlotter of dichting defect: een stil lek dat flink kan doorwegen op uw waterfactuur.",
          },
          { icon: "water", title: "Lekkende leiding", text: "Gebarsten, verroeste of bij werken doorboorde buis: herstelling of vervanging van het beschadigde stuk." },
          {
            icon: "pressure",
            title: "Lage waterdruk",
            text: "Minder debiet aan de kraan of de douche: kalk, een half open kraan, een drukregelaar of een lek verderop. Zie ook [ontkalking](/nl/sanitair/ontkalking).",
          },
          {
            icon: "thermometer",
            title: "Veiligheidsgroep die lekt",
            text: "De veiligheidsgroep van uw boiler druppelt voortdurend: controle en vervanging indien nodig. Zie het [onderhoud van uw boiler](/nl/verwarming/onderhoud-boiler).",
          },
          {
            icon: "sink",
            title: "Trage of verstopte afvoer",
            text: "Gootsteen, douche of wc die slecht afloopt: bekijk onze [ontstopping van leidingen](/nl/sanitair/ontstopping).",
          },
          { icon: "faucet", title: "Defecte kranen", text: "Lekkende mengkraan, geblokkeerde of stroeve kraan: herstelling of vervanging." },
          { icon: "damage", title: "Waterschade", text: "Vlek op het plafond of een vochtige muur: we zoeken waar het lek vandaan komt en herstellen het." },
        ],
      },
      {
        type: "steps",
        title: "Uw depannage in 4 stappen",
        steps: [
          {
            title: "U belt",
            description: "Beschrijf ons het lek: we helpen u meteen de schade te beperken en spreken een bezoek af binnen 24 uur, 7 op 7.",
          },
          { title: "Diagnose ter plaatse", description: "De loodgieter zoekt waar het probleem zit en legt het u eenvoudig uit." },
          { title: "Prijs vooraf", description: "Onderdelen en nodige tijd: u keurt de prijs goed voor er iets hersteld wordt." },
          { title: "Herstelling en controle", description: "Dichtheid gecontroleerd, water weer open, tips om een nieuw lek te vermijden." },
        ],
      },
      {
        type: "pricing",
        title: "Tarief depannage sanitair in Brussel",
        intro:
          "Het forfait omvat de verplaatsing, de diagnose en het eerste werkuur. Eventuele onderdelen en extra tijd: vooraf meegedeeld en goedgekeurd.",
        items: [{ key: "depannage", label: "Depannage sanitair" }, { key: "debouchage" }],
      },
      {
        type: "callout",
        title: "Onzichtbaar lek: hou uw meter in het oog",
        paragraphs: [
          "Stijgt uw waterfactuur zonder reden? Draai alle kranen dicht, noteer de stand van uw meter van Vivaqua en kijk een uur later opnieuw, zonder water te gebruiken. Is hij gedraaid, dan is er ergens een lek.",
          "De meest voorkomende boosdoener blijft een **wc die blijft lopen**, gevolgd door de **veiligheidsgroep van de boiler**. Twee eenvoudige herstellingen die zich snel terugbetalen.",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over depannage sanitair",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost een dringende loodgieter?",
        answer: `Onze depannage kost **${prices.depannage.amount}€ btw inbegrepen**, verplaatsing, diagnose en eerste uur inbegrepen. Na het eerste uur kost elk extra uur **${prices.heureSupplementaire.amount}€ btw inbegrepen**. Zijn er onderdelen of extra tijd nodig, dan kent u de prijs voor de herstelling.`,
      },
      {
        id: 2,
        question: "Komt u ook in het weekend?",
        answer: `Ja. We nemen ${promises.emergency} op, en een loodgieter komt binnen 24 uur langs, ook in het weekend, in Brussel en de rand.`,
      },
      {
        id: 3,
        question: "Waar zit de hoofdkraan van het water?",
        answer:
          "Meestal bij de watermeter van Vivaqua: vaak in de kelder, in een technische ruimte of een technische koker in een appartement. Zoek ze vandaag al op: bij een lek telt elke minuut.",
      },
      {
        id: 4,
        question: "Mijn wc blijft lopen, wat doe ik?",
        answer:
          "Draai de stopkraan van de wc dicht, meestal achter de pot, om het lek te stoppen. Meestal ligt het aan het spoelmechanisme of de vlotter: een snelle herstelling.",
      },
      {
        id: 5,
        question: "Is waterschade gedekt door mijn verzekering?",
        answer: "Dat hangt af van uw contract. Neem foto's, beperk de schade en verwittig uw verzekeraar; wij geven u een gedetailleerde factuur van de herstelling.",
      },
      {
        id: 6,
        question: "Herstelt u ook boilers en geisers?",
        answer: "Ja: een lekkende veiligheidsgroep, lauw water, kalk… Bekijk onze pagina over het [onderhoud van boiler en geiser](/nl/verwarming/onderhoud-boiler).",
      },
      {
        id: 7,
        question: "Waarom is mijn waterdruk laag?",
        answer:
          "Kalk in de straalbrekers en douchekoppen is een veelvoorkomende oorzaak in Brussel, waar het water hard is. Geldt het voor het hele huis, dan kan een kraan, een drukregelaar of een lek de oorzaak zijn.",
      },
      {
        id: 8,
        question: "Krijg ik garantie op de depannage?",
        answer:
          "Ja, op onze depannages krijgt u 2 jaar garantie. Tijdens die periode mag geen ander bedrijf aan de betrokken installatie werken, anders vervalt de garantie.",
      },
    ],
    related: ["plomberie/debouchage", "plomberie/detartrage", "chauffage/entretien-chauffe-eau-boiler", "electricite/depannage-electrique"],
    cta: {
      title: "Een lek? Uw loodgieter is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Draai het water dicht en bel ons: een loodgieter komt binnen 24 uur, 7 op 7, in Brussel en de rand, en zegt u de prijs voor hij herstelt.",
    },
    draft: false,
  },

  // --- Ontstopping ---
  {
    category: "plomberie",
    slug: "debouchage",
    path: "/nl/sanitair/ontstopping",
    title: "Ontstopping",
    name: "Ontstopping van leidingen",
    pageTitle: "Leidingen en wc ontstoppen in Brussel",
    metaTitle: "Wc en leiding ontstoppen in Brussel",
    metaDescription: `Wc, gootsteen, douche of leiding verstopt in Brussel? Ontstopping aan ${prices.debouchage.amount}€ btw incl., interventie binnen 24 uur, 7 op 7, zonder uw leidingen te beschadigen. Bel ons.`,
    summary: "Wc, gootsteen, douche of afvoerkolom verstopt: professionele ontstopping binnen 24 uur, 7 op 7, zonder uw leidingen te beschadigen.",
    icon: "toilet",
    intent: "urgence",
    price: { key: "debouchage" },
    hero: {
      eyebrow: "Ontstopping · 7 op 7",
      intro:
        "Een gootsteen die niet meer afloopt, een wc die overloopt, een douche die terugslaat? We ontstoppen met het materiaal dat bij de verstopping past, zonder uw leidingen te beschadigen, en zoeken waarom het verstopt raakte zodat het niet opnieuw gebeurt.",
      image: { asset: "P31", alt: "Ontstopping van een douche-afvoer met een elektrische ontstoppingsveer" },
    },
    facts: [
      { icon: "euro", stat: `${prices.debouchage.amount}€ btw incl.`, label: "Leiding, wc of lavabo" },
      { icon: "clock", stat: "Binnen 24 uur", label: "Interventie, 7 op 7" },
      { icon: "phone", stat: capitalize(promises.emergency), label: "We nemen op voor dringende gevallen" },
      { icon: "tools", stat: "Professioneel materiaal", label: "Ontstoppingsveer of hogedrukreiniging, naargelang het geval" },
    ],
    blocks: [
      {
        type: "features",
        title: "Wat we ontstoppen",
        items: [
          { icon: "toilet", title: "Wc", text: "Verstopping, water dat stijgt, trage afvoer of overlopen." },
          { icon: "sink", title: "Gootsteen en lavabo", text: "Vet, etensresten, haar en kalk in de sifon of de leiding." },
          { icon: "shower", title: "Douche en bad", text: "Haar en zeep die de afvoer vertragen tot het water terugkomt." },
          { icon: "water", title: "Afvoerkolommen en leidingen", text: "Afvoerkolom van een gebouw, hoofdleiding of aansluiting op de riolering, afhankelijk van de toegang." },
        ],
      },
      {
        type: "options",
        title: "De juiste methode voor elke verstopping",
        intro: "We kiezen de techniek op basis van waar de verstopping zit en wat ze is, om te ontstoppen zonder uw leidingen te beschadigen.",
        items: [
          { title: "Professionele zuignap en pomp", text: "Voor een recente verstopping dicht bij het toestel: wc, lavabo, gootsteen." },
          {
            title: "Manuele of elektrische ontstoppingsveer",
            text: "Voor een verstopping verder in de leiding: de veer breekt de afzetting af en haalt ze naar boven (haar, vet, doekjes).",
          },
          {
            title: "Hogedrukreiniging",
            text: "Naargelang het geval, voor een leiding die over de hele lengte vervuild is: een waterstraal onder hoge druk reinigt de wanden.",
          },
        ],
      },
      {
        type: "steps",
        title: "Uw ontstopping in 4 stappen",
        steps: [
          {
            title: "U belt, eerste tips",
            description:
              "Spoel niet meer door, draai de watertoevoer van het overlopende toestel dicht en gebruik geen chemisch product. We plannen de interventie binnen 24 uur, 7 op 7.",
          },
          { title: "De verstopping lokaliseren", description: "De technicus zoekt waar de verstopping zit en kiest de juiste methode." },
          { title: "Ontstoppen", description: "Zuignap, ontstoppingsveer of hogedrukreiniging, aan de prijs die we vooraf zeggen." },
          { title: "Controle en advies", description: "Afvoertest, uitleg over de oorzaak en tips zodat het probleem niet terugkomt." },
        ],
      },
      {
        type: "alert",
        tone: "info",
        title: "Bijtende soda en chemische ontstoppers: beter niet",
        paragraphs: [
          "Agressieve producten kunnen sommige leidingen en dichtingen aantasten, en maken de interventie moeilijker als ze in een verstopte buis blijven staan.",
          "Hebt u er al gebruikt? Zeg het de technicus bij aankomst: dat is belangrijk voor zijn veiligheid.",
        ],
      },
      {
        type: "pricing",
        title: "Tarief ontstopping in Brussel",
        intro: "Een vaste prijs voor een leiding, een wc of een lavabo. Voor een afvoerkolom of riolering zeggen we u de prijs voor we beginnen.",
        items: [{ key: "debouchage" }, { key: "depannage", label: "Depannage sanitair" }],
      },
      {
        type: "callout",
        title: "Vermijden dat het opnieuw verstopt",
        paragraphs: [
          "Gooi geen doekjes (ook niet de « biologisch afbreekbare »), geen bakvet en geen wattenstaafjes in de afvoer.",
          "Leg een haarzeefje op de douche en het bad, een zeefje op de gootsteen, en laat regelmatig heel warm water lopen.",
          "In Brussel maakt kalk de leidingen met de jaren ook nauwer: denk aan [ontkalking](/nl/sanitair/ontkalking).",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over ontstopping",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost een ontstopping in Brussel?",
        answer: `Het ontstoppen van een leiding, een wc of een lavabo kost **${prices.debouchage.amount}€ btw inbegrepen**. Voor een afvoerkolom of riolering kent u de prijs voor de interventie.`,
      },
      {
        id: 2,
        question: "Komt u dringend voor een verstopte wc?",
        answer: `Ja. We nemen ${promises.emergency} op, en een technicus komt binnen 24 uur langs, 7 op 7. Spoel in afwachting niet meer door, zo vermijdt u dat hij overloopt.`,
      },
      {
        id: 3,
        question: "Moet ik een chemische ontstopper gebruiken voor ik bel?",
        answer: "Liever niet: die producten kunnen sommige leidingen beschadigen en de interventie moeilijker maken. Hebt u er al gebruikt, verwittig dan de technicus.",
      },
      {
        id: 4,
        question: "Waarom ruiken mijn leidingen slecht?",
        answer:
          "Vaak is een uitgedroogde of vuile sifon, of een beginnende verstopping, de oorzaak. Laat water lopen in afvoeren die weinig gebruikt worden; blijft de geur hangen, dan is reinigen nodig.",
      },
      {
        id: 5,
        question: "Ontstopt u ook afvoerkolommen van gebouwen?",
        answer: "Ja, afhankelijk van de toegang. Voor mede-eigendommen bekijkt u onze [diensten voor syndici](/nl/syndici).",
      },
      {
        id: 6,
        question: "Hoe vermijd ik dat mijn gootsteen verstopt raakt?",
        answer:
          "Geen vet of etensresten in de gootsteen, een zeefje en regelmatig heel warm water. Loopt hij traag af, wacht dan niet tot hij helemaal verstopt is.",
      },
      {
        id: 7,
        question: "Kan ontstoppen mijn leidingen beschadigen?",
        answer:
          "We passen de techniek (zuignap, ontstoppingsveer of hogedrukreiniging, naargelang het geval) aan het type en de staat van uw leidingen aan, precies om te ontstoppen zonder uw installatie te beschadigen.",
      },
    ],
    related: ["plomberie/depannage", "plomberie/detartrage", "professionnels/syndics-coproprietes", "chauffage/entretien-chauffe-eau-boiler"],
    cta: {
      title: "Verstopt? Uw technicus is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Wacht niet tot het overloopt: een technicus komt binnen 24 uur, 7 op 7, in Brussel en de rand, aan de prijs die we vooraf zeggen.",
    },
    draft: false,
  },

  // --- Ontkalking ---
  {
    category: "plomberie",
    slug: "detartrage",
    path: "/nl/sanitair/ontkalking",
    title: "Ontkalking",
    name: "Ontkalking van sanitair en leidingen",
    pageTitle: "Kranen, boiler en leidingen ontkalken in Brussel",
    metaTitle: "Sanitair en boiler ontkalken in Brussel",
    metaDescription:
      "Kalkrijk water in Brussel: ontkalking van kranen, douchekoppen, boiler en leidingen. Weer een goed debiet, toestellen die langer meegaan. Gratis offerte binnen 24 uur.",
    summary: "Brussels water is kalkrijk: we ontkalken kranen, douchekoppen, boiler en leidingen voor een goed debiet en warm water.",
    icon: "drop",
    intent: "entretien",
    price: { key: "detartrage" },
    hero: {
      eyebrow: "Kalkrijk water · Brussel",
      intro:
        "In Brussel is het leidingwater kalkrijk. Na verloop van maanden vermindert kalk het debiet, vervuilt hij uw boiler en verslijten kranen en mengkranen sneller. We ontkalken uw toestellen voor een normaal debiet en een langere levensduur.",
      image: { asset: "P32", alt: "Verkalkte straalbreker van een kraan" },
    },
    facts: [
      { icon: "pressure", stat: "Weer een goed debiet", label: "Kranen en douches" },
      { icon: "thermometer", stat: "Sneller warm water", label: "Ontkalkte boiler" },
      { icon: "piggy", stat: "Minder energie", label: "Verwarmingselement zonder kalk" },
      { icon: "clipboard", stat: "Gratis offerte", label: "Antwoord binnen 24 uur" },
    ],
    blocks: [
      {
        type: "features",
        layout: "list",
        title: "Tekenen van te veel kalk",
        intro: "Kalk zet zich langzaam af: deze symptomen tonen dat het tijd is om iets te doen, voor de panne.",
        items: [
          { icon: "pressure", title: "Laag debiet", text: "Minder water aan de kraan of de douche, terwijl de druk van het net normaal is." },
          { icon: "shower", title: "Douchekop met onregelmatige stralen", text: "Verstopte gaatjes, stralen die alle kanten op spuiten." },
          { icon: "faucet", title: "Stroeve of druppelende mengkraan", text: "Een verkalkte cartouche draait moeilijk en gaat uiteindelijk lekken." },
          { icon: "thermometer", title: "Warm water dat lang op zich laat wachten", text: "Het verwarmingselement van een verkalkte boiler verwarmt slechter en slijt sneller." },
          { icon: "volume", title: "Boiler die knettert", text: "Geknetter tijdens het opwarmen wijst vaak op kalk op de bodem van het vat." },
          { icon: "water", title: "Hardnekkige witte sporen", text: "Afzetting op kranen en douchewanden die meteen na het poetsen terugkomt." },
        ],
      },
      {
        type: "checklist",
        title: "Wat we ontkalken",
        items: [
          "Straalbrekers en kranen: lavabo's, gootsteen, bad",
          "Douchekoppen, flexibels en douchekolommen",
          "Cartouches van mengkranen (ontkalken of vervangen)",
          "Verwarmingselement en vat van uw elektrische boiler, zie [het onderhoud van boiler en geiser](/nl/verwarming/onderhoud-boiler)",
          "Veiligheidsgroep van de boiler",
          "Bereikbare verkalkte leidingen en koppelingen",
          "Tips om kalk in het dagelijks leven te beperken",
        ],
        note: "Een onderdeel te verkalkt om te redden? We zeggen het u en geven u de prijs van de vervanging voor we eraan beginnen.",
        image: { asset: "P33", alt: "Elektrische boiler die afgetapt wordt, verkalkt verwarmingselement op de grond" },
      },
      {
        type: "pricing",
        title: "Tarieven ontkalking en onderhoud van uw boiler",
        intro: "De prijs van de ontkalking hangt af van de toestellen die behandeld moeten worden. U kent hem altijd voor de interventie.",
        items: [{ key: "detartrage" }, { key: "entretienBoilerElectrique" }, { key: "entretienChauffeEau" }],
      },
      {
        type: "steps",
        title: "Uw ontkalking in 4 stappen",
        steps: [
          { title: "Diagnose", description: "We zoeken welke toestellen last hebben van kalk en bekijken hun staat." },
          { title: "Prijs vooraf", description: "U weet wat er gebeurt en wat het kost voor we beginnen." },
          {
            title: "Ontkalken",
            description: "Demonteren, ontkalken met aangepaste producten, onderdelen die niet te redden zijn vervangen als u akkoord gaat.",
          },
          { title: "Controle en advies", description: "Debiet en dichtheid gecontroleerd, tips om kalk minder snel te laten terugkomen." },
        ],
      },
      {
        type: "callout",
        title: "Waterverzachter, antikalkfilter: is het de moeite?",
        paragraphs: [
          "Een **waterverzachter** vermindert de kalk sterk in de hele installatie, maar vraagt regelmatige opvolging (zout, instellingen). Er bestaan andere oplossingen, eenvoudiger maar beperkter.",
          "We adviseren u volgens uw woning en uw verbruik, zonder u iets op te dringen. Zonder toestel blijft regelmatig ontkalken de eenvoudigste oplossing.",
          "Een vraag over uw installatie? [Stel ze ons](/nl/contact#terugbelformulier).",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over ontkalking",
    faqs: [
      {
        id: 1,
        question: "Is het water in Brussel kalkrijk?",
        answer:
          "Ja, het water in Brussel geldt als hard: het zet kalk af in de leidingen, de toestellen en de kranen. De eigenschappen van uw water vindt u op de site van [Vivaqua](https://www.vivaqua.be).",
      },
      {
        id: 2,
        question: "Hoe vaak moet ik mijn boiler ontkalken?",
        answer: "Dat hangt af van de hardheid van het water en uw verbruik. In een kalkrijke zone zoals Brussel is een controle om de 1 à 2 jaar meestal aangeraden.",
      },
      {
        id: 3,
        question: "Hoeveel kost een ontkalking?",
        answer: `De prijs hangt af van de toestellen die behandeld moeten worden en u kent hem voor de interventie. De ontkalking kost **${prices.detartrage.amount}€ btw inbegrepen**. Het onderhoud van een elektrische boiler kost **${prices.entretienBoilerElectrique.amount}€ btw inbegrepen** en dat van een gasboiler **${prices.entretienChauffeEau.amount}€ btw inbegrepen**.`,
      },
      {
        id: 4,
        question: "Kan ik mijn kranen zelf ontkalken?",
        answer:
          "Straalbrekers en douchekoppen wel: een bad in witte azijn volstaat vaak. Voor een mengkraan, een boiler of leidingen doet u beter een beroep op een vakman.",
      },
      {
        id: 5,
        question: "Kan kalk mijn boiler laten uitvallen?",
        answer:
          "Ja: kalk isoleert het verwarmingselement, dat heter wordt en sneller slijt, en kan de veiligheidsgroep laten druppelen. Regelmatig ontkalken verlengt de levensduur.",
      },
      {
        id: 6,
        question: "Plaatst u waterverzachters?",
        answer:
          "We adviseren u of een waterverzachter zinvol is voor uw woning. Laten we het erover hebben tijdens ons bezoek, of [stel ons uw vraag](/nl/contact#terugbelformulier).",
      },
    ],
    related: ["chauffage/entretien-chauffe-eau-boiler", "plomberie/depannage", "plomberie/debouchage", "chauffage/entretien-chaudiere"],
    cta: {
      title: "Weinig debiet, verkalkte boiler? Maak een afspraak.",
      body: "Kranen, douchekoppen, boiler, leidingen: we halen de kalk weg waar hij u het meest kost. Maak een afspraak, de prijs kent u op voorhand.",
    },
    draft: false,
  },
];
