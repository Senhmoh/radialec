import { boilerBrandNamesNl } from "../../brands";
import { companyCopy } from "../../company";
import { prices, pricingPolicy } from "../../pricing";
import { gasLeakAlertNl } from "../../safety";
import type { Service } from "../../services/types";

import boilerMaintenance from "@/assets/boiler-maintenance.png";

// Pages service « verwarming » en néerlandais. Traduction des pages de
// app/data/services/chauffage.ts : mêmes category / slug (identifiants : liens
// entre pages, contexte des formulaires), adresse néerlandaise dans `path`.
// Mêmes faits, prix et promesses que le français, rien d'ajouté. À faire relire
// par un néerlandophone (app/data/visibility.ts, nlPublished).

const promises = companyCopy.nl.promises;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const chauffageServicesNl: Service[] = [
  // --- Vervanging / installatie ---
  {
    category: "chauffage",
    slug: "remplacement-chaudiere",
    path: "/nl/verwarming/ketel-vervangen",
    title: "Nieuwe ketel",
    name: "Ketel vervangen of plaatsen",
    pageTitle: "Uw verwarmingsketel vervangen of plaatsen in Brussel en omgeving",
    metaTitle: "Verwarmingsketel vervangen of plaatsen in Brussel",
    metaDescription:
      "Uw verwarmingsketel vervangen of een nieuwe laten plaatsen in Brussel en omgeving. Offerte binnen 24 uur, 2 jaar garantie. Gascondensatieketel, warmtepomp.",
    summary:
      "Gascondensatieketel of warmtepomp: offerte binnen 24 uur, plaatsing in 1 à 2 dagen, 2 jaar garantie op de plaatsing + 2 jaar op de onderdelen.",
    icon: "tools",
    intent: "installation",
    hero: {
      eyebrow: "Installatie & vervanging",
      intro:
        "We vervangen uw oude ketel of plaatsen een nieuw verwarmingssysteem dat bij uw woning en uw budget past: gascondensatieketel, warmtepomp of centrale verwarming. Elke installatie voldoet aan de geldende normen (EPB, AREI), met een gedetailleerde offerte binnen 24 uur.",
      image: {
        asset: "P02",
        alt: "Technicus van Radialec opent een nieuwe wandketel",
      },
    },
    facts: [
      { icon: "clipboard", stat: "Offerte binnen 24 uur", label: "Duidelijk en gedetailleerd" },
      { icon: "shield", stat: "2 + 2 jaar garantie", label: "Plaatsing Radialec + onderdelen fabrikant" },
      { icon: "clock", stat: "1 à 2 dagen", label: "Voor een standaardinstallatie" },
      { icon: "award", stat: "Conform EPB & AREI", label: "Volgens de geldende normen" },
    ],
    blocks: [
      {
        type: "steps",
        title: "Zo verloopt uw installatie",
        steps: [
          {
            title: "Offerte binnen 24 uur",
            description: "We bekijken wat u nodig hebt en sturen u een gedetailleerde offerte.",
            image: {
              src: boilerMaintenance,
              alt: "Technicus van Radialec noteert de gegevens van een ketel voor de offerte",
            },
          },
          {
            title: "Planning",
            description: "Samen kiezen we een datum die u past.",
            image: {
              asset: "P04",
              alt: "Open gereedschapskist op een beschermzeil, aan de voet van een ketel",
            },
          },
          {
            title: "Installatie",
            description:
              "Een gekwalificeerde technicus plaatst uw nieuwe ketel (reken op 1 à 2 dagen voor een standaardinstallatie).",
            image: {
              asset: "P01",
              alt: "Handen van een technicus die een koppeling aandraaien onder een nieuwe ketel",
            },
          },
          {
            title: "Opvolging",
            description: "We controleren of alles goed werkt en geven u onderhoudstips.",
            image: {
              asset: "P03",
              alt: "Technicus stelt het scherm van een nieuwe ketel in",
            },
          },
        ],
      },
      {
        type: "brands",
        title: "De merken die we installeren",
        intro:
          "We plaatsen en onderhouden de grootste merken van ketels en warmtepompen: betrouwbaar materiaal, met onderdelen die lang verkrijgbaar blijven.",
      },
      {
        type: "callout",
        title: "Gas, stookolie of warmtepomp: wat kiest u in 2026?",
        paragraphs: [
          "Het Brussels Gewest verbiedt voortaan de plaatsing van nieuwe stookolieketels. De RENOLUTION-premies voor de vervanging van een ketel zijn momenteel opgeschort. We adviseren u over de oplossing die het best bij uw woning past en verwijzen u naar de actuele informatie op [leefmilieu.brussels](https://leefmilieu.brussels).",
        ],
        verdicts: [
          { label: "Stookolie", status: "Verboden", note: "Voor nieuwe installaties in het Brussels Gewest", tone: "off" },
          { label: "Gascondensatie", status: "Mogelijk", note: "Een alternatief voor stookolie bij de vervanging van uw ketel", tone: "flame" },
          { label: "Warmtepomp", status: "Te bekijken", note: "We adviseren u volgens uw woning", tone: "water" },
        ],
      },
      {
        type: "highlight",
        eyebrow: "Garantie",
        title: "Uw installatie gewaarborgd, onderdelen en plaatsing",
        figures: [
          { value: "2 jaar", label: "Fabrieksgarantie op de onderdelen" },
          { value: "2 jaar", label: "Garantie van Radialec op de plaatsing" },
        ],
        paragraphs: [
          "Op uw nieuwe ketel krijgt u 2 jaar fabrieksgarantie op de onderdelen, en 2 jaar garantie van Radialec op de plaatsing.",
        ],
        note: "Voorwaarde: tijdens die 2 jaar mag geen ander bedrijf aan uw installatie werken, anders vervalt de garantie.",
      },
    ],
    faqTitle: "Veelgestelde vragen over het vervangen of plaatsen van een ketel",
    faqs: [
      {
        id: 1,
        question: "Hoelang duurt de plaatsing van een ketel?",
        answer: "Reken op 1 à 2 dagen voor een standaardinstallatie.",
      },
      {
        id: 2,
        question: "Welke garantie krijg ik op de installatie?",
        answer:
          "Op uw nieuwe ketel krijgt u 2 jaar fabrieksgarantie op de onderdelen, en 2 jaar garantie van Radialec op de plaatsing. Tijdens die 2 jaar mag geen ander bedrijf aan uw installatie werken, anders vervalt de garantie.",
      },
      {
        id: 3,
        question: "Mag ik in Brussel nog een stookolieketel laten plaatsen?",
        answer:
          "Nee, nieuwe stookolieketels plaatsen mag niet meer in het Brussels Gewest. We begeleiden u naar een alternatief (gascondensatieketel of warmtepomp).",
      },
      {
        id: 4,
        question: "Moet ik thuis zijn tijdens de installatie?",
        answer: "Nee, dat hoeft niet. Wij doen de volledige installatie en houden u bij elke stap op de hoogte.",
      },
    ],
    related: [
      "chauffage/pompe-a-chaleur",
      "chauffage/desembouage",
      "chauffage/installation-radiateurs",
      "chauffage/entretien-chaudiere",
    ],
    cta: {
      body: "Uw ketel wordt oud, of u denkt aan een warmtepomp? Laten we erover praten: een erkende technicus komt uw installatie bekijken, geeft u advies, en u krijgt binnen 24 uur een gedetailleerde offerte, gratis en vrijblijvend.",
    },
    zonesIntro:
      "We vervangen en plaatsen ketels in de 19 Brusselse gemeenten en in de rand, in Vlaams-Brabant en Waals-Brabant.",
    draft: false,
  },

  // --- Ketelonderhoud ---
  {
    category: "chauffage",
    slug: "entretien-chaudiere",
    path: "/nl/verwarming/ketelonderhoud",
    title: "Ketelonderhoud",
    name: "Onderhoud van uw verwarmingsketel",
    pageTitle: "Ketelonderhoud in Brussel en omgeving",
    metaTitle: "Ketelonderhoud in Brussel",
    metaDescription:
      "Verplicht ketelonderhoud in Brussel: gas of stookolie, erkende technicus, attest dezelfde dag. Duidelijke prijs, afspraak binnen 24 uur.",
    summary:
      "Verplicht onderhoud van uw gas- of stookolieketel door een erkende technicus, met het attest dezelfde dag.",
    icon: "clipboard",
    intent: "entretien",
    price: { key: "entretienChaudiereGaz" },
    hero: {
      eyebrow: "Wettelijk verplicht · Om de 1 à 2 jaar",
      intro:
        "Onze erkende technici doen het verplichte onderhoud van uw gas- of stookolieketel, controleren de beveiligingen en bezorgen u het attest dezelfde dag. De prijs staat op deze pagina: ter plaatse verandert hij niet.",
      image: {
        asset: "P06",
        alt: "Technicus reinigt de warmtewisselaar van een geopende ketel",
      },
    },
    facts: [
      { icon: "euro", stat: `Vanaf ${prices.entretienChaudiereGaz.amount}€ btw incl.`, label: "Onderhoud gasketel" },
      { icon: "clock", stat: "~1 uur", label: "Gemiddelde duur" },
      { icon: "clipboard", stat: "Attest meteen", label: "Dezelfde dag bezorgd" },
      { icon: "shield", stat: "Erkende technicus", label: "Veiligheidscontrole inbegrepen" },
    ],
    blocks: [
      {
        type: "features",
        title: "Waarom het onderhoud verplicht is",
        intro:
          "In het Brussels Gewest is het onderhoud van uw ketel geen advies maar een wettelijke verplichting: om de twee jaar voor een gasketel, elk jaar voor een stookolieketel. Een erkende technicus voert de controle uit en bezorgt u daarna een officieel onderhoudsattest.",
        items: [
          {
            icon: "alert",
            title: "Veiligheid",
            text: "Een slecht onderhouden ketel is een van de belangrijkste oorzaken van koolmonoxidevergiftiging.",
          },
          {
            icon: "file",
            title: "Verzekering",
            text: "Bij schade door de verwarming kan uw verzekeraar een geldig onderhoudsattest vragen voor hij tussenkomt.",
          },
          {
            icon: "home",
            title: "Verkoop & verhuur",
            text: "Bij de verkoop of verhuur van een woning wordt het onderhoudsattest vaak gevraagd.",
          },
        ],
        note: "De precieze frequentie en de sancties bij niet-naleving legt het Brussels Gewest vast. We verwijzen u naar de officiële informatie op [leefmilieu.brussels](https://leefmilieu.brussels), en we herinneren u eraan wanneer uw volgende onderhoud nadert.",
      },
      {
        type: "checklist",
        title: "Wat uw onderhoud omvat",
        items: [
          "Reiniging van de verbrandingskamer",
          "**Gasketel**: reiniging van de elektrische en elektronische onderdelen, lekcontrole, controle van het expansievat, verbrandingsanalyse",
          "**Stookolieketel**: controle en reiniging van de motor, controle van de pomp, afstelling van de verstuiver, controle en reiniging van de filter",
          "Controle van de afvoer van verbrandingsgassen en rook",
          "Conformiteitsattest per pdf bezorgd",
        ],
        note: "Reken op ongeveer een uur, voor een gasketel én voor een stookolieketel.",
        image: {
          asset: "P07",
          alt: "Verbrandingsanalysator aangesloten op een ketel tijdens het onderhoud",
        },
      },
      {
        type: "steps",
        title: "Zo verloopt het onderhoud",
        steps: [
          {
            title: "Afspraak maken",
            description: "Snel een moment, online of telefonisch: meestal binnen 24 uur.",
            image: {
              asset: "P04",
              alt: "Gereedschapskist aan de voet van de ketel, op een beschermzeil",
            },
          },
          {
            title: "Volledige controle",
            description: "Reiniging, afstellingen en controles volgens de geldende normen.",
            image: {
              asset: "P03",
              alt: "Technicus stelt het scherm van een ketel in",
            },
          },
          {
            title: "Veiligheidstests",
            description: "Controle van de verbranding, de dichtheid en de beveiligingen.",
            image: {
              asset: "P09",
              alt: "Elektrische controle van een ketel met een multimeter",
            },
          },
          {
            title: "Attest bezorgd",
            description: "Uw conformiteitsattest, dezelfde dag per pdf.",
            image: {
              asset: "P08",
              alt: "Onderhoudsattest op een smartphone voor de ketel",
            },
          },
        ],
      },
      {
        type: "brands",
        title: "De merken die we installeren",
        intro: `We onderhouden ketels van ${boilerBrandNamesNl}, ongeacht hun leeftijd of model.`,
      },
      {
        type: "pricing",
        eyebrow: "Onze prijzen",
        title: "Tarieven ketelonderhoud in Brussel",
        items: [{ key: "entretienChaudiereGaz" }, { key: "entretienChaudiereMazout" }, { key: "contratEntretien" }],
      },
    ],
    faqTitle: "Veelgestelde vragen over ketelonderhoud",
    faqs: [
      {
        id: 1,
        question: "Is het onderhoud van mijn ketel echt verplicht?",
        answer:
          "Ja. In het Brussels Gewest is het periodieke onderhoud van uw ketel een wettelijke verplichting: om de twee jaar voor gas, elk jaar voor stookolie. Een erkende technicus moet het uitvoeren en u een officieel attest bezorgen.",
      },
      {
        id: 2,
        question: "Wat als ik mijn ketel niet laat onderhouden?",
        answer:
          "Naast het risico voor uw veiligheid (koolmonoxidevergiftiging, pannes, hoger verbruik) kan een ontbrekend attest problemen geven bij uw verzekering na schade, of bij de verkoop of verhuur van uw woning.",
      },
      {
        id: 3,
        question: "Hoeveel kost een ketelonderhoud in Brussel?",
        answer: `Reken op ${prices.entretienChaudiereGaz.amount}€ btw inbegrepen voor het onderhoud van een gasketel, en ${prices.entretienChaudiereMazout.amount}€ btw inbegrepen voor een stookolieketel. De prijs omvat de volledige controle, de veiligheidstests en uw conformiteitsattest. Particulieren kunnen ook kiezen voor een onderhoudscontract van 2 jaar aan ${prices.contratEntretien.amount}€ btw inbegrepen.`,
      },
      {
        id: 4,
        question: "Wat houdt een ketelonderhoud in?",
        answer:
          "Ons onderhoud omvat de reiniging van de brander, de verbrandingsanalyse, de controle van de dichtheid en de druk, de test van de beveiligingen, de controle van de rookafvoer en uw officieel attest.",
      },
      {
        id: 5,
        question: "Hoe vaak moet ik mijn ketel laten onderhouden?",
        answer:
          "Om de twee jaar voor een gasketel, elk jaar voor een stookolieketel. We kunnen u een herinnering sturen voor de vervaldatum, zodat u er niet meer aan hoeft te denken.",
      },
      {
        id: 6,
        question: "Hoelang duurt een onderhoud?",
        answer: "Reken op ongeveer een uur, voor een gasketel én voor een stookolieketel.",
      },
      {
        id: 7,
        question: "Krijg ik een attest na het onderhoud?",
        answer: "Ja, uw conformiteitsattest krijgt u per pdf, dezelfde dag als de interventie.",
      },
      {
        id: 8,
        question: "Mijn ketel is al lang niet meer onderhouden, is dat erg?",
        answer:
          "Geen paniek. Onze technici doen een volledige controle en zeggen u of er herstellingen nodig zijn voor ze het attest afleveren. Het is nooit te laat om in orde te zijn.",
      },
    ],
    related: [
      "chauffage/desembouage",
      "chauffage/entretien-chauffe-eau-boiler",
      "chauffage/ramonage-cheminee",
      "chauffage/depannage-chaudiere",
    ],
    cta: {
      body: "Kies online een moment of bel ons. De technicus doet het volledige onderhoud en bezorgt u het attest dezelfde dag: u bent in orde tot het volgende.",
    },
    draft: false,
  },

  // --- Depannage / herstelling ---
  {
    category: "chauffage",
    slug: "depannage-chaudiere",
    path: "/nl/verwarming/depannage-ketel",
    title: "Depannage ketel",
    name: "Depannage en herstelling van uw ketel",
    pageTitle: "Depannage en herstelling van uw verwarmingsketel in Brussel, 7 op 7",
    metaTitle: "Depannage verwarmingsketel in Brussel – 7 op 7, binnen 24 uur",
    metaDescription: `Ketel in panne in Brussel? Depannage 7 op 7, interventie binnen 24 uur, Vaillant, Bulex, Bosch… ${prices.depannage.amount}€ btw incl. verplaatsing + diagnose + 1e uur. Bel ons.`,
    summary:
      "Geen verwarming of warm water meer? Diagnose en herstelling van de grote merken (Vaillant, Bulex, Bosch…), 7 op 7, met interventie binnen 24 uur.",
    icon: "wrench",
    intent: "urgence",
    price: { key: "depannage", label: "Depannage verwarmingsketel" },
    hero: {
      eyebrow: "Depannage 7 op 7 · Binnen 24 uur",
      intro: `Geen verwarming, geen warm water, ketel in storing? Bel ons, we nemen ${promises.emergency} op. Onze erkende technici herstellen ketels van ${boilerBrandNamesNl} en komen binnen 24 uur bij u langs, 7 op 7. U kent de prijs voor we iets herstellen.`,
      image: {
        asset: "P09",
        alt: "Technicus zoekt met een multimeter de oorzaak van een ketelpanne",
      },
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
        title: "De ketelpannes die we herstellen",
        intro: "We zoeken altijd eerst de oorzaak. Daarna kent u de prijs van de herstelling, voor we eraan beginnen.",
        items: [
          {
            icon: "fire",
            title: "Geen verwarming meer",
            text: "Koude radiatoren terwijl de ketel lijkt te draaien: circulatiepomp, driewegklep, thermostaat of elektronische kaart kunnen de oorzaak zijn.",
          },
          {
            icon: "drop",
            title: "Geen warm water meer",
            text: "De verwarming werkt, maar het water aan de kraan blijft koud: vaak de sanitaire warmtewisselaar, de driewegklep of een debietsensor.",
          },
          {
            icon: "pressure",
            title: "De druk zakt",
            text: "Naald onder 1 bar, vaak bijvullen: wellicht een lek in de leidingen of een expansievat dat opnieuw opgepompt moet worden.",
          },
          {
            icon: "alert",
            title: "Ketel in storing of foutcode",
            text: "Rood lampje of een code op het scherm: noteer hem samen met het merk van uw ketel, zo kunnen we de interventie voorbereiden.",
          },
          {
            icon: "volume",
            title: "Vreemde geluiden",
            text: "Tikken, fluiten of borrelen: lucht in de leidingen, kalk in de warmtewisselaar of een vermoeide circulatiepomp.",
          },
          {
            icon: "water",
            title: "Lek onder de ketel",
            text: "Druppels of een plas: overdrukventiel, koppeling of dichting defect. Draai de watertoevoer dicht als het lek groot is.",
          },
          {
            icon: "burn",
            title: "Ontsteking mislukt",
            text: "De vlam of de waakvlam gaat na enkele seconden uit: elektrode, gastoevoer, ventilator of rookafvoer moeten gecontroleerd worden.",
          },
          {
            icon: "smog",
            title: "Slechte verbranding",
            text: "Gele vlam, roetsporen of brandgeur: zet de ketel uit en laat de verbranding meteen controleren.",
          },
        ],
      },
      {
        type: "alert",
        tone: "danger",
        ...gasLeakAlertNl,
      },
      {
        type: "callout",
        title: "Voor u belt: 3 snelle controles",
        paragraphs: [
          "**De druk.** Op de manometer staat de naald meestal tussen 1 en 2 bar als de ketel koud is. Staat hij lager, dan kan bijvullen volstaan: volg de handleiding van uw ketel.",
          "**De thermostaat.** Lege batterijen, een verkeerd programma of een te lage instelling: zo'n « panne » komt vaker voor dan u denkt.",
          "**De stroom.** Kijk of de zekering van de ketel niet is gesprongen. Staat de ketel in storing, dan kunt u hem een keer resetten; komt de fout terug, probeer dan niet verder en [bel ons](/nl/contact).",
        ],
      },
      {
        type: "steps",
        title: "Zo verloopt een depannage van uw ketel",
        steps: [
          {
            title: "U belt ons",
            description:
              "Vertel ons wat er mis is: wat niet meer werkt, de code op het scherm, het merk van de ketel. We komen binnen 24 uur langs, 7 op 7.",
          },
          {
            title: "De technicus vindt de panne",
            description: `Hij zoekt de precieze oorzaak: circulatiepomp, klep, ontsteking, elektronische kaart… Verplaatsing, diagnose en eerste uur: ${prices.depannage.amount}€ btw inbegrepen.`,
          },
          {
            title: "U keurt de prijs goed",
            description: "Moet er een onderdeel vervangen worden, dan kent u de prijs voor we beginnen. U beslist.",
          },
          {
            title: "De ketel draait weer",
            description: "Controle van de druk en de beveiligingen, en enkele tips zodat de panne niet terugkomt.",
          },
        ],
      },
      {
        type: "pricing",
        title: "Tarief depannage verwarmingsketel in Brussel",
        intro:
          "Verplaatsing, diagnose en eerste uur hebben een vaste prijs: u kent hem nog voor de technicus aanbelt.",
        items: [
          { key: "depannage", label: "Depannage verwarmingsketel", popular: true },
          {
            label: "Ketel vervangen",
            note: "Als herstellen niet meer loont: gratis offerte",
          },
        ],
        note: "Prijzen btw inbegrepen. Moet er een onderdeel vervangen worden, dan krijgt u de prijs en wachten we op uw akkoord voor we herstellen.",
      },
      {
        type: "brands",
        title: "De merken die we herstellen",
        intro: `${boilerBrandNamesNl}: onze technici herstellen gas- en stookolieketels van deze merken.`,
      },
    ],
    faqTitle: "Veelgestelde vragen over de depannage van uw ketel",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost een depannage van een ketel in Brussel?",
        answer: `De depannage kost **${prices.depannage.amount}€ btw inbegrepen**, verplaatsing, diagnose en eerste werkuur inbegrepen. Na het eerste uur kost elk extra uur **${prices.heureSupplementaire.amount}€ btw inbegrepen**. Moet er een onderdeel vervangen worden, dan krijgt u de prijs voor de herstelling.`,
      },
      {
        id: 2,
        question: "Hoe snel kunt u komen?",
        answer: `We nemen ${promises.emergency} op, en een technicus komt binnen 24 uur langs, 7 dagen op 7, in Brussel en de rand. Hebt u hem binnen 2 uur nodig? Zeg het ons: dat kan met de toeslag voor spoed (${pricingPolicy.urgentSurcharge}, [zie de tarieven](/nl/tarieven)).`,
      },
      {
        id: 3,
        question: "Welke ketelmerken herstelt u?",
        answer: `We werken op gas- en stookolieketels van ${boilerBrandNamesNl}.`,
      },
      {
        id: 4,
        question: "Mijn ketel toont een foutcode, wat nu?",
        answer:
          "Noteer de code en het merk van uw ketel. U kunt hem een keer resetten; komt de fout terug, probeer dan niet verder en bel ons: met de code kunnen we de interventie voorbereiden.",
      },
      {
        id: 5,
        question: "De druk van mijn ketel zakt telkens weer, is dat erg?",
        answer:
          "Een druk die regelmatig zakt, wijst meestal op een lek in de leidingen of een leeg expansievat. Het is niet meteen gevaarlijk, maar de ketel gaat uiteindelijk in storing: laat de installatie beter controleren.",
      },
      {
        id: 6,
        question: "Kan ik mijn ketel beter herstellen of vervangen?",
        answer:
          "Een ketel gaat ongeveer 15 jaar mee. Na 12 à 15 jaar, of als de pannes terugkomen, is een [vervanging](/nl/verwarming/ketel-vervangen) vaak voordeliger. Na de diagnose adviseren we u, met een offerte erbij.",
      },
      {
        id: 7,
        question: "Valt een onderhouden ketel minder vaak in panne?",
        answer:
          "Ja: bij een [regelmatig onderhoud](/nl/verwarming/ketelonderhoud) zien we slijtage aan onderdelen voor de panne komt. In het Brussels Gewest is het onderhoud trouwens verplicht.",
      },
      {
        id: 8,
        question: "Ik ruik gas, moet ik u bellen?",
        answer:
          "Niet als eerste: verlaat meteen de woning zonder aan schakelaars te komen, en bel van buitenaf het noodnummer gas van uw regio (Sibelga **0800 19 400** in Brussel, Fluvius **0800 65 0 65** in Vlaams-Brabant, ORES **0800 87 087** in Waals-Brabant) of 112. Neem daarna contact met ons op, zodra de situatie veilig is.",
      },
      {
        id: 9,
        question: "Krijg ik garantie op de depannage?",
        answer:
          "Ja, op onze depannages krijgt u 2 jaar garantie. Tijdens die periode mag geen ander bedrijf aan de betrokken installatie werken, anders vervalt de garantie.",
      },
    ],
    related: [
      "chauffage/entretien-chaudiere",
      "chauffage/remplacement-chaudiere",
      "chauffage/desembouage",
      "plomberie/depannage",
    ],
    cta: {
      title: "Ketel in panne? Uw technicus is (bijna) al onderweg.",
      highlight: "(bijna)",
      body: "Vertel ons aan de telefoon wat er mis is: een technicus komt binnen 24 uur langs, 7 op 7, in Brussel en omgeving, en zegt u de prijs voor hij herstelt.",
    },
    zonesIntro:
      "Depannage van uw ketel binnen 24 uur in de 19 Brusselse gemeenten en in de rand, in Vlaams-Brabant en Waals-Brabant.",
    draft: false,
  },
];
