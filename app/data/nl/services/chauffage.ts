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

  // --- Boiler & geiser ---
  {
    category: "chauffage",
    slug: "entretien-chauffe-eau-boiler",
    path: "/nl/verwarming/onderhoud-boiler",
    title: "Boiler & geiser",
    name: "Onderhoud van boiler en geiser",
    pageTitle: "Onderhoud van uw boiler of geiser in Brussel",
    metaTitle: "Onderhoud boiler en geiser in Brussel",
    metaDescription: `Onderhoud van uw boiler of elektrische boiler in Brussel: ontkalking, anode, veiligheidsgroep. Vanaf ${prices.entretienChauffeEau.amount}€ btw incl., prijs op de site. Maak een afspraak.`,
    summary:
      "Ontkalking, controle van de anode en de veiligheidsgroep: betrouwbaar warm water en een toestel dat langer meegaat.",
    icon: "drop",
    intent: "entretien",
    price: { key: "entretienChauffeEau", note: "Onderhoud gasboiler" },
    hero: {
      eyebrow: "Warm water · Onderhoud",
      intro:
        "Brussels leidingwater is kalkrijk: zonder onderhoud verkalkt uw boiler, verbruikt hij meer en geeft hij het uiteindelijk op. Onze technici ontkalken, controleren de anode en de veiligheidsgroep, voor betrouwbaar warm water het hele jaar door.",
      image: { asset: "P17", alt: "Verkalkte anode uit een elektrische boiler gehaald" },
    },
    facts: [
      { icon: "euro", stat: `Vanaf ${prices.entretienChauffeEau.amount}€ btw incl.`, label: "Onderhoud gasboiler" },
      { icon: "calendarCheck", stat: "Snel een afspraak", label: "Meestal binnen 24 uur" },
      { icon: "tools", stat: "Alle types", label: "Elektrische boiler, voorraadvat, combiketel" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    blocks: [
      {
        type: "features",
        title: "Waarom uw boiler laten onderhouden?",
        intro: "In Brussel is het leidingwater hard: kalk zet zich jaar na jaar af op het verwarmingselement en op de bodem van het vat.",
        items: [
          {
            icon: "piggy",
            title: "Minder verbruik",
            text: "Een verkalkt verwarmingselement verwarmt slechter: uw boiler draait langer voor dezelfde hoeveelheid warm water.",
          },
          {
            icon: "clock",
            title: "Een langere levensduur",
            text: "De anode beschermt het vat tegen roest. Op tijd vervangen voorkomt ze het lek waardoor het hele toestel eruit moet.",
          },
          {
            icon: "shield",
            title: "Meer veiligheid",
            text: "De veiligheidsgroep beschermt het vat tegen overdruk. Dan moet ze wel werken: we testen ze bij elk onderhoud.",
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat het onderhoud omvat",
        items: [
          "Gedeeltelijk of volledig aftappen van het vat, afhankelijk van de staat",
          "Ontkalking van het verwarmingselement en verwijderen van afzetting",
          "Controle van de anode, vervanging voorgesteld als ze versleten is",
          "Test van de veiligheidsgroep en het overdrukventiel",
          "Controle van de thermostaat en de ingestelde temperatuur",
          "Controle van de aansluitingen en de dichtheid",
          "Controle van de elektrische voeding (elektrische boiler)",
          "Tips om kalk en verbruik te beperken",
        ],
        note: "Moet er een onderdeel vervangen worden (anode, verwarmingselement, veiligheidsgroep)? U kent de prijs voor we eraan beginnen.",
        image: { asset: "P19", alt: "Verkalkt verwarmingselement van een boiler naast een nieuw exemplaar" },
      },
      {
        type: "options",
        title: "Welk toestel hebt u?",
        intro:
          "Het onderhoud hangt af van hoe uw warm water gemaakt wordt. Twijfelt u, dan volstaat een foto van het toestel om u verder te helpen.",
        items: [
          {
            title: "Elektrische boiler",
            text: "Een watervat dat verwarmd wordt door een elektrisch verwarmingselement. Dit toestel heeft het meest last van kalk.",
            points: ["Ontkalking van het verwarmingselement", "Controle van de anode", "Test van de veiligheidsgroep"],
          },
          {
            title: "Voorraadvat gekoppeld aan de ketel",
            text: "Het water in het vat wordt via een spiraal door uw ketel verwarmd. Het wordt onderhouden zoals een boiler.",
            points: ["Controle van de anode en de veiligheidsgroep", "Controle van de sonde en de spiraal"],
          },
          {
            title: "Combiketel",
            text: "Geen voorraad: de ketel verwarmt het water zelf, op het moment dat u het nodig hebt.",
            points: [
              "Gecontroleerd tijdens het [ketelonderhoud](/nl/verwarming/ketelonderhoud)",
              "Ontkalking van de sanitaire warmtewisselaar indien nodig",
            ],
          },
        ],
      },
      {
        type: "features",
        layout: "list",
        title: "Tekenen dat uw boiler onderhoud nodig heeft",
        items: [
          { icon: "tempLow", title: "Lauw water of water dat snel afkoelt", text: "Het verkalkte verwarmingselement krijgt het vat niet meer helemaal warm." },
          { icon: "volume", title: "Geluiden zoals een waterkoker", text: "Kraken of fluiten tijdens het opwarmen: er zit kalk op de bodem van het vat." },
          { icon: "drop", title: "Troebel of roestig water", text: "Mogelijk teken van een versleten anode en een vat dat begint te roesten." },
          {
            icon: "water",
            title: "Veiligheidsgroep die blijft lekken",
            text: "Een beetje water tijdens het opwarmen is normaal; water dat voortdurend loopt niet.",
          },
          { icon: "euro", title: "Hogere elektriciteitsfactuur", text: "Een vuile boiler verbruikt meer voor hetzelfde comfort." },
          {
            icon: "calendar",
            title: "Meer dan 2 jaar geen onderhoud",
            text: "Met water dat zo kalkrijk is als in Brussel is een onderhoud om de 1 à 2 jaar meestal aangeraden.",
          },
        ],
      },
      {
        type: "pricing",
        title: "Tarieven onderhoud boiler en geiser",
        items: [{ key: "entretienChauffeEau" }, { key: "entretienBoilerElectrique" }],
      },
    ],
    faqTitle: "Veelgestelde vragen over het onderhoud van boiler en geiser",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost het onderhoud van een boiler in Brussel?",
        answer: `Het onderhoud van een gasboiler kost **${prices.entretienChauffeEau.amount}€ btw inbegrepen** en dat van een elektrische boiler **${prices.entretienBoilerElectrique.amount}€ btw inbegrepen**. Moet er een onderdeel vervangen worden, dan kent u de prijs voor de interventie.`,
      },
      {
        id: 2,
        question: "Hoe vaak moet een boiler ontkalkt worden?",
        answer: "Met het kalkrijke Brusselse water is een onderhoud om de 1 à 2 jaar meestal aangeraden, afhankelijk van hoeveel warm water u gebruikt.",
      },
      {
        id: 3,
        question: "Waarvoor dient de anode van een boiler?",
        answer:
          "De anode slijt in de plaats van het vat, om het tegen roest te beschermen. Is ze opgebruikt, dan begint het vat te roesten: daarom controleert u ze best regelmatig.",
      },
      {
        id: 4,
        question: "Mijn veiligheidsgroep druppelt, is dat normaal?",
        answer:
          "Een beetje water tijdens het opwarmen is normaal: het water zet uit. Loopt ze voortdurend, dan is de veiligheidsgroep waarschijnlijk defect en moet ze vervangen worden.",
      },
      {
        id: 5,
        question: "Hoelang gaat een boiler mee?",
        answer: "Gemiddeld 10 à 15 jaar, afhankelijk van de waterkwaliteit en het onderhoud. Een boiler die in Brussel nooit ontkalkt wordt, veroudert merkbaar sneller.",
      },
      {
        id: 6,
        question: "Moet ik de boiler uitzetten tijdens de vakantie?",
        answer:
          "Voor een korte afwezigheid zet u de temperatuur gewoon lager. Voor een lange afwezigheid kunt u hem uitzetten: laat hem bij uw terugkeer minstens één keer tot 60 °C opwarmen voor u het water gebruikt.",
      },
      {
        id: 7,
        question: "Herstelt u ook boilers in panne?",
        answer: "Ja. Geen warm water meer, een lek, een zekering die springt: we komen voor een [depannage](/nl/sanitair/depannage) 7 op 7, binnen 24 uur.",
      },
    ],
    related: ["plomberie/detartrage", "chauffage/entretien-chaudiere", "plomberie/depannage", "chauffage/desembouage"],
    cta: {
      title: "Wordt uw boiler moe? Maak een afspraak (voor) de panne.",
      highlight: "(voor)",
      body: "Elektrische boiler, voorraadvat aan de ketel of combiketel? Maak een afspraak: de technicus ontkalkt, controleert en zegt u in welke staat uw toestel is. De prijs kent u op voorhand.",
    },
    draft: false,
  },

  // --- Ontslibben ---
  {
    category: "chauffage",
    slug: "desembouage",
    path: "/nl/verwarming/ontslibben",
    title: "Ontslibben",
    name: "Ontslibben van de verwarmingsinstallatie",
    pageTitle: "Uw verwarmingsinstallatie ontslibben in Brussel",
    metaTitle: "Radiatoren en verwarming ontslibben in Brussel",
    metaDescription:
      "Radiatoren onderaan koud, geluiden, hoger verbruik? Ontslibben van uw verwarmingsinstallatie in Brussel door een erkende chauffagist. Gratis offerte binnen 24 uur.",
    summary:
      "Slib en roest verstoppen uw radiatoren? We reinigen de hele installatie, zodat de warmte weer gelijk verdeeld wordt en de ketel beschermd is.",
    icon: "sync",
    intent: "entretien",
    hero: {
      eyebrow: "Verwarming · Radiatoren",
      intro:
        "Lauwe radiatoren, onderaan koud, geluiden in de leidingen? Er heeft zich slib opgehoopt in uw installatie. We reinigen de hele installatie: de radiatoren worden weer van boven tot onder warm, en de ketel moet minder hard werken.",
      image: { asset: "P16", alt: "Slibrijk water uit een verwarmingsinstallatie, naast de ontslibbingsmachine" },
    },
    facts: [
      { icon: "euro", stat: "Gratis offerte", label: "Binnen 24 uur" },
      { icon: "award", stat: "Erkende chauffagist", label: "Brussel, Vlaanderen, Wallonië" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
      { icon: "calendar", stat: "7 op 7", label: "Wanneer het u past" },
    ],
    blocks: [
      {
        type: "features",
        layout: "list",
        title: "Tekenen van slib in uw verwarmingsinstallatie",
        intro: "Na verloop van jaren vormen roest, kalk en resten een slib dat zich onderaan de radiatoren en tot in de ketel afzet.",
        items: [
          { icon: "tempLow", title: "Radiatoren onderaan koud", text: "Boven wordt het warm, onderaan blijft het koud: het slib ligt in het onderste deel van de radiator." },
          { icon: "thermometer", title: "Ongelijke warmte tussen de kamers", text: "Sommige radiatoren worden goed warm, andere nauwelijks, ondanks het ontluchten." },
          { icon: "volume", title: "Stromingsgeluiden", text: "Borrelen, fluiten of tikken in de leidingen en de ketel." },
          { icon: "drop", title: "Zwart water bij het ontluchten", text: "Zwart of roodachtig water uit de ontluchter wijst op slib en roest." },
          { icon: "euro", title: "Hoger verbruik", text: "De ketel draait langer om dezelfde temperatuur te halen." },
          { icon: "alert", title: "Ketel die in storing gaat", text: "Slib remt de waterstroom af en kan de warmtewisselaar oververhitten." },
        ],
      },
      {
        type: "options",
        title: "De juiste methode voor uw installatie",
        intro: "Na de diagnose stellen we de methode voor die past bij de leeftijd en de vervuiling van uw installatie.",
        items: [
          {
            title: "Chemisch ontslibben",
            text: "Een ontslibbingsmiddel wordt in de installatie gebracht en circuleert terwijl de verwarming werkt, meestal enkele weken, gevolgd door een volledige spoeling.",
            points: ["Lichte tot matige vervuiling", "Weinig werk ter plaatse", "Ideaal als preventief onderhoud"],
          },
          {
            title: "Hydrodynamisch ontslibben",
            badge: "Sterk vervuilde installatie",
            text: "Een ontslibbingspomp laat het water met een hoog debiet circuleren, met wisselende stroomrichting, om de afzetting radiator per radiator los te maken.",
            points: ["Resultaat zichtbaar in het afgevoerde water", "Vaak gecombineerd met een ontslibbingsmiddel", "Aangeraden voor een nieuwe ketel"],
          },
          {
            title: "De installatie nadien beschermen",
            text: "Een corrosie-inhibitor in het schone water vertraagt de vorming van nieuw slib. Op de retour van de ketel kan ook een magnetische filter geplaatst worden.",
            points: ["Corrosie-inhibitor", "Magnetische filter als optie, op offerte", "Tips om minder water bij te vullen"],
          },
        ],
      },
      {
        type: "steps",
        title: "Zo verloopt het ontslibben",
        steps: [
          {
            title: "Diagnose en offerte",
            description: "We controleren de staat van de installatie, de radiatoren en de ketel, en bezorgen u binnen 24 uur een gratis offerte.",
          },
          {
            title: "Voorbereiding",
            description: "Afschermen van de werkzone, de ketel afsluiten indien nodig, het materiaal aansluiten.",
          },
          { title: "Ontslibben", description: "De installatie radiator per radiator reinigen, tot het water er helder uitkomt." },
          { title: "Spoelen en beschermen", description: "Vullen met schoon water, inhibitor toevoegen, ontluchten en op druk brengen." },
          { title: "Eindcontrole", description: "Controle van de warmte van elke radiator en waterzijdig inregelen indien nodig." },
        ],
      },
      {
        type: "callout",
        title: "Nieuwe ketel of warmtepomp? Eerst ontslibben",
        paragraphs: [
          "Een nieuwe ketel plaatsen op een installatie vol slib betekent dat hij vanaf de eerste winter dezelfde afzetting krijgt. Veel fabrikanten vragen trouwens een schone installatie om hun garantie te laten gelden.",
          "Voor een [warmtepomp](/nl/verwarming/warmtepomp), die gevoelig is voor de waterkwaliteit van de installatie, geldt dat nog meer. Bij het [vervangen van een ketel](/nl/verwarming/ketel-vervangen) zeggen we u of ontslibben aangeraden is.",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over ontslibben",
    faqs: [
      {
        id: 1,
        question: "Wat is het ontslibben van een verwarming?",
        answer:
          "Het is de volledige reiniging van de centrale verwarming (leidingen, radiatoren, ketel) om slib, roest en kalk te verwijderen die zich met de tijd ophopen.",
      },
      {
        id: 2,
        question: "Hoe weet ik of mijn radiatoren ontslibd moeten worden?",
        answer:
          "Radiatoren die onderaan koud blijven, ongelijke warmte tussen de kamers, geluiden in de leidingen of zwart water bij het ontluchten zijn de meest voorkomende tekenen. Twijfelt u, dan doen wij de diagnose.",
      },
      {
        id: 3,
        question: "Hoeveel kost ontslibben in Brussel?",
        answer:
          "De prijs hangt af van het aantal radiatoren, de mate van vervuiling en de gekozen methode. U krijgt binnen 24 uur een gratis en gedetailleerde offerte, vrijblijvend.",
      },
      {
        id: 4,
        question: "Hoelang duurt het ontslibben?",
        answer:
          "Ontslibben met de pomp duurt meestal een halve tot een hele dag, afhankelijk van het aantal radiatoren. Een chemische behandeling werkt over enkele weken.",
      },
      {
        id: 5,
        question: "Hoe vaak moet ik laten ontslibben?",
        answer:
          "Er is geen vaste frequentie: een installatie met inhibitor en filter kan lang schoon blijven. Meestal raden we een controle om de 5 à 10 jaar aan, en ontslibben zodra de symptomen opduiken.",
      },
      {
        id: 6,
        question: "Is ontslibben verplicht voor een nieuwe ketel?",
        answer:
          "Het is geen wettelijke verplichting, maar het is sterk aangeraden en fabrikanten vragen het vaak voor de garantie. Een nieuwe ketel op een vervuilde installatie slijt sneller.",
      },
      {
        id: 7,
        question: "Moet ik mijn radiatoren aftappen voor u komt?",
        answer: "Nee, wij doen alles: aftappen, reinigen, vullen, ontluchten en op druk brengen.",
      },
    ],
    related: ["chauffage/entretien-chaudiere", "chauffage/installation-radiateurs", "chauffage/remplacement-chaudiere", "chauffage/depannage-chaudiere"],
    cta: {
      title: "Lauwe radiatoren? (Eindelijk) weer overal dezelfde warmte.",
      highlight: "(Eindelijk)",
      body: "Radiatoren onderaan koud, geluiden, een ketel die het moeilijk heeft: beschrijf ons de symptomen. We stellen de juiste ontslibbingsmethode voor, met een gratis en gedetailleerde offerte binnen 24 uur.",
    },
    draft: false,
  },

  // --- Radiatoren ---
  {
    category: "chauffage",
    slug: "installation-radiateurs",
    path: "/nl/verwarming/radiatoren-plaatsen",
    title: "Radiatoren",
    name: "Radiatoren plaatsen en vervangen",
    pageTitle: "Radiatoren plaatsen en vervangen in Brussel",
    metaTitle: "Radiatoren plaatsen in Brussel",
    metaDescription:
      "Radiatoren vervangen, bijplaatsen of verplaatsen in Brussel: staal, handdoekdroger, lage temperatuur. Verzorgde plaatsing, gratis offerte binnen 24 uur.",
    summary: "Een radiator vervangen, bijplaatsen of verplaatsen: we berekenen het vermogen, plaatsen en sluiten netjes aan op uw bestaande installatie.",
    icon: "thermometer",
    intent: "installation",
    hero: {
      eyebrow: "Centrale verwarming · Radiatoren",
      intro:
        "Een te oude radiator, een kamer die koud blijft, een badkamer die vernieuwd wordt? We kiezen het juiste vermogen, plaatsen uw radiatoren en sluiten ze aan op uw centrale verwarming, met thermostatische kranen en het inregelen van de installatie.",
      image: { asset: "P14", alt: "Nieuwe radiator geplaatst onder een raam" },
    },
    facts: [
      { icon: "euro", stat: "Gratis offerte", label: "Binnen 24 uur" },
      { icon: "ruler", stat: "Kamer per kamer", label: "Vermogen berekend voor elke kamer" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
      { icon: "award", stat: "Erkende chauffagist", label: "Plaatsing volgens de normen" },
    ],
    blocks: [
      {
        type: "options",
        title: "Welke radiator voor welke kamer?",
        intro: "De juiste radiator hangt af van de kamer, uw ketel en uw plannen. We adviseren u voor we iets plaatsen.",
        items: [
          {
            title: "Stalen paneelradiator",
            badge: "Het meest gebruikt",
            text: "De standaard voor centrale verwarming: goed rendement, beperkte prijs en veel afmetingen om aan te sluiten op de bestaande aansluitingen.",
            points: ["Snel op temperatuur", "Ook verticaal verkrijgbaar", "Werkt met elke ketel"],
          },
          {
            title: "Handdoekdroger",
            text: "Voor de badkamer: hij verwarmt de ruimte en droogt de handdoeken. Aangesloten op de centrale verwarming, elektrisch of gemengd.",
            points: ["Aansluiting op warm water of elektrisch", "Veel maten en afwerkingen", "Ideaal bij een badkamerrenovatie"],
          },
          {
            title: "Lagetemperatuurradiator",
            text: "Een groter verwarmend oppervlak om met minder warm water te verwarmen: ideaal bij een condensatieketel of een [warmtepomp](/nl/verwarming/warmtepomp).",
            points: ["Bereidt de overstap naar een warmtepomp voor", "Beter rendement van de condensatieketel", "Zachtere, gelijkmatige warmte"],
          },
        ],
      },
      {
        type: "features",
        title: "Wat we aan uw radiatoren doen",
        items: [
          {
            icon: "tools",
            title: "Vervangen",
            text: "Een oude radiator die lekt of slecht verwarmt? We vervangen hem door een passend model en gebruiken de aansluitingen opnieuw als het kan.",
          },
          {
            icon: "layers",
            title: "Bijplaatsen",
            text: "Een nieuwe kamer, veranda of ingerichte zolder: we breiden de installatie uit en plaatsen radiatoren die passen bij de ruimte.",
          },
          { icon: "sync", title: "Verplaatsen", text: "Renovatie, nieuwe keuken: we verplaatsen een radiator en passen de leidingen netjes aan." },
          {
            icon: "thermometer",
            title: "Thermostatische kranen",
            text: "Thermostatische kranen plaatsen of vervangen om elke kamer apart te regelen en niet nodeloos te verwarmen.",
          },
        ],
      },
      {
        type: "steps",
        title: "Van offerte tot de eerste warmte",
        steps: [
          { title: "Bezoek en advies", description: "We bekijken de kamers die verwarmd moeten worden, uw ketel en de bestaande aansluitingen." },
          { title: "Offerte binnen 24 uur", description: "Een gedetailleerde offerte: radiatoren, toebehoren en werkuren, lijn per lijn." },
          { title: "Plaatsen en aansluiten", description: "Aftappen van de installatie indien nodig, plaatsen, aansluiten en controleren of alles dicht is." },
          {
            title: "Opnieuw in gebruik",
            description: "Vullen, ontluchten, op druk brengen en inregelen, zodat elke radiator verwarmt zoals het hoort.",
          },
        ],
      },
      {
        type: "alert",
        tone: "info",
        title: "Een radiator die slecht verwarmt, hoeft niet altijd vervangen te worden",
        paragraphs: [
          "**Boven koud, onderaan warm?** Er zit lucht in: ontluchten volstaat vaak.",
          "**Onderaan koud, boven warm?** Er heeft zich slib afgezet: [ontslibben](/nl/verwarming/ontslibben) brengt de warmte terug in de hele installatie.",
        ],
      },
      {
        type: "callout",
        title: "Radiatoren en warmtepomp: denk vooruit",
        paragraphs: [
          "Overweegt u de komende jaren een [warmtepomp](/nl/verwarming/warmtepomp)? Een warmtepomp verwarmt met lauwer water dan een klassieke ketel: uw radiatoren moeten dus een groot genoeg verwarmend oppervlak hebben.",
          "Kiest u nu al radiatoren voor lage temperatuur, dan hoeft u ze later geen tweede keer te vervangen. We adviseren u over het juiste evenwicht tussen comfort, budget en de toekomst.",
        ],
      },
    ],
    faqTitle: "Veelgestelde vragen over het plaatsen van radiatoren",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost het plaatsen van een radiator in Brussel?",
        answer:
          "De prijs hangt af van het type en de grootte van de radiator, en van het aansluitwerk (vervanging door hetzelfde model, bijplaatsen, verplaatsen). U krijgt binnen 24 uur een gratis en gedetailleerde offerte.",
      },
      {
        id: 2,
        question: "Kan een radiator vervangen worden zonder de hele installatie af te tappen?",
        answer:
          "Vaak wel, door de radiator af te sluiten of maar een deel van de installatie af te tappen. Dat hangt af van de opbouw van uw installatie, die we ter plaatse bekijken.",
      },
      {
        id: 3,
        question: "Hoe kies je het vermogen van een radiator?",
        answer:
          "Dat hangt af van het volume van de kamer, de isolatie, de oriëntatie en de temperatuur van het water uit uw ketel. Wij maken die berekening voor u, kamer per kamer.",
      },
      {
        id: 4,
        question: "Werken mijn radiatoren met een warmtepomp?",
        answer:
          "Niet altijd: een warmtepomp maakt minder warm water, waarvoor grotere radiatoren of lagetemperatuurradiatoren nodig zijn. We controleren uw installatie voor elk [warmtepompproject](/nl/verwarming/warmtepomp).",
      },
      {
        id: 5,
        question: "Kunt u een handdoekdroger in mijn badkamer plaatsen?",
        answer: "Ja, aangesloten op de centrale verwarming, elektrisch of gemengd, afhankelijk van uw installatie en het gewenste gebruik.",
      },
      {
        id: 6,
        question: "Moeten de radiatoren ontlucht worden na de plaatsing?",
        answer:
          "Ja: na de plaatsing vullen we de installatie, ontluchten ze, brengen ze op druk en controleren we of elke radiator goed verwarmt.",
      },
      { id: 7, question: "Welke garantie krijg ik op de plaatsing?", answer: "Op ons werk krijgt u 2 jaar garantie." },
    ],
    related: ["chauffage/desembouage", "chauffage/pompe-a-chaleur", "chauffage/remplacement-chaudiere", "chauffage/entretien-chaudiere"],
    cta: {
      body: "Beschrijf ons uw project: we raden u het juiste model aan en u krijgt binnen 24 uur een offerte, plaatsing en aansluiting inbegrepen.",
    },
    draft: false,
  },

  // --- Warmtepomp ---
  {
    category: "chauffage",
    slug: "pompe-a-chaleur",
    path: "/nl/verwarming/warmtepomp",
    title: "Warmtepomp",
    name: "Een warmtepomp plaatsen",
    pageTitle: "Een warmtepomp plaatsen in Brussel en omgeving",
    metaTitle: "Warmtepomp plaatsen in Brussel",
    metaDescription:
      "Plaatsing van een lucht-waterwarmtepomp in Brussel: studie, dimensionering, plaatsing en onderhoud. Gratis offerte binnen 24 uur.",
    summary: "Uw ketel vervangen door een lucht-waterwarmtepomp: studie van de woning, berekening van het vermogen, plaatsing en opvolging.",
    icon: "leaf",
    intent: "installation",
    hero: {
      eyebrow: "Koolstofarm verwarmen",
      intro:
        "Uw ketel is aan het einde van zijn leven, of u wilt van stookolie af? We bestuderen uw woning, berekenen het nodige vermogen en plaatsen de warmtepomp, afstelling inbegrepen.",
      image: { asset: "P12", alt: "Buitenunit van een lucht-waterwarmtepomp in een tuin" },
    },
    facts: [
      { icon: "award", stat: "Dimensionering", label: "Vermogen berekend voor uw woning" },
      { icon: "euro", stat: "Gratis offerte", label: "Binnen 24 uur" },
      { icon: "handshake", stat: "Afstelling inbegrepen", label: "Stooklijn en uitleg" },
      { icon: "shield", stat: "2 jaar garantie", label: "Op ons werk" },
    ],
    blocks: [
      {
        type: "features",
        title: "Waarom een warmtepomp?",
        items: [
          {
            icon: "leaf",
            title: "Minder energieverbruik",
            text: "Een warmtepomp haalt het grootste deel van haar energie uit de buitenlucht: meestal geeft ze 3 à 4 keer meer warmte af dan ze aan elektriciteit verbruikt.",
          },
          {
            icon: "fire",
            title: "Het einde van stookolie",
            text: "Het Brussels Gewest verbiedt voortaan de plaatsing van nieuwe stookolieketels: de warmtepomp is een van de alternatieven.",
          },
          {
            icon: "snowflake",
            title: "Warm in de winter, fris in de zomer",
            text: "Sommige modellen zijn omkeerbaar en kunnen uw woning ook koelen tijdens hittegolven.",
          },
        ],
        note: "De RENOLUTION-premies zijn momenteel opgeschort. De regels veranderen regelmatig: kijk voor de actuele informatie op [leefmilieu.brussels](https://leefmilieu.brussels). Tijdens de studie helpen we u om het overzicht te bewaren.",
      },
      {
        type: "options",
        title: "Lucht-water, lucht-lucht of hybride: welke warmtepomp?",
        intro: "Niet elke warmtepomp beantwoordt aan dezelfde behoefte. De juiste keuze hangt af van uw woning, uw radiatoren of vloerverwarming en uw budget.",
        items: [
          {
            title: "Lucht-waterwarmtepomp",
            badge: "Vervangt de ketel",
            text: "Ze verwarmt het water van uw centrale verwarming (radiatoren of vloerverwarming) en, afhankelijk van het model, ook uw sanitair warm water.",
            points: ["Wordt aangesloten op de bestaande installatie", "Ideaal met vloerverwarming of lagetemperatuurradiatoren", "Kan sanitair warm water maken"],
          },
          {
            title: "Lucht-luchtwarmtepomp",
            text: "Een omkeerbare airco die warme of koude lucht blaast via binnenunits. Als aanvulling, of voor een woning zonder centrale verwarming.",
            points: ["Verwarmt en koelt", "Geen radiatoren nodig", "[Bekijk het plaatsen van een airco](/nl/airco/airco-plaatsen)"],
          },
          {
            title: "Hybride warmtepomp",
            text: "Een warmtepomp samen met een gasketel die het overneemt bij strenge vorst. Een zachte overgang voor weinig geïsoleerde huizen.",
            points: ["Behoudt een ketel als aanvulling", "Werkt makkelijker met bestaande radiatoren", "Schakelt automatisch naar de best geschikte bron"],
          },
        ],
      },
      {
        type: "steps",
        title: "Uw warmtepompproject, stap voor stap",
        steps: [
          {
            title: "Bezoek en studie",
            description: "We bekijken uw woning: oppervlakte, isolatie, radiatoren of vloerverwarming, plaats voor de buitenunit.",
          },
          {
            title: "Dimensionering en offerte",
            description:
              "We berekenen het nodige vermogen en bezorgen u binnen 24 uur een gedetailleerde offerte. Een slecht gedimensioneerde warmtepomp kost u comfort en geld.",
          },
          {
            title: "Plaatsing",
            description: "Plaatsing van de buitenunit en de binnenmodule, hydraulische en elektrische aansluitingen, inbedrijfstelling.",
          },
          {
            title: "Afstelling en opvolging",
            description: "Afstelling van de stooklijn, samen met u de bediening overlopen, daarna regelmatig onderhoud om de prestaties te behouden.",
          },
        ],
      },
      {
        type: "checklist",
        title: "Wat we controleren voor we plaatsen",
        items: [
          "De warmtebehoefte van uw woning (isolatie, oppervlakte, oriëntatie)",
          "Of uw radiatoren met water op lage temperatuur kunnen werken",
          "De plaats van de buitenunit: geluid, afstand, buren",
          "Eventuele toelatingen (mede-eigendom, stedenbouw afhankelijk van de plaats)",
          "Het beschikbare elektrische vermogen en de aansluiting op de zekeringkast",
          "De productie van sanitair warm water (ingebouwd of apart voorraadvat)",
          "De staat van de verwarmingsinstallatie ([ontslibben](/nl/verwarming/ontslibben) indien nodig)",
        ],
        note: "Afhankelijk van de plaats van de buitenunit (gevel aan de straat, mede-eigendom) kan een toelating nodig zijn: we helpen u dat na te gaan voor de werken.",
        image: { asset: "P13", alt: "Technicus van Radialec stelt de binnenmodule van een warmtepomp af, naast het warmwatervat" },
      },
      {
        type: "pricing",
        title: "Tarieven warmtepomp in Brussel",
        items: [
          { label: "Plaatsing van een warmtepomp", note: "Op gratis offerte, na studie van uw woning" },
          { key: "entretienPac" },
        ],
        note: "Prijzen btw inbegrepen. De plaatsing gebeurt op basis van een gratis en gedetailleerde offerte, en het bedrag van de offerte is het bedrag van de factuur.",
      },
    ],
    faqTitle: "Veelgestelde vragen over de warmtepomp",
    faqs: [
      {
        id: 1,
        question: "Hoeveel kost een warmtepomp in Brussel?",
        answer:
          "De prijs hangt af van het nodige vermogen, het type warmtepomp en eventuele aanpassingen (radiatoren, elektriciteit, warm water). Na een bezoek krijgt u binnen 24 uur een gratis en gedetailleerde offerte.",
      },
      {
        id: 2,
        question: "Zijn er premies voor een warmtepomp in Brussel?",
        answer: "De RENOLUTION-premies zijn momenteel opgeschort. Bekijk de actuele informatie op [leefmilieu.brussels](https://leefmilieu.brussels).",
      },
      {
        id: 3,
        question: "Werkt een warmtepomp met mijn radiatoren?",
        answer:
          "Vaak wel, op voorwaarde dat ze groot genoeg zijn om met minder warm water te verwarmen. We controleren het kamer per kamer; indien nodig kunnen enkele [radiatoren](/nl/verwarming/radiatoren-plaatsen) vervangen worden.",
      },
      {
        id: 4,
        question: "Werkt een warmtepomp ook midden in de winter?",
        answer:
          "Ja, de huidige lucht-waterwarmtepompen werken ook bij temperaturen onder nul. Hun rendement daalt bij strenge vorst, daarom zijn een goede dimensionering of een hybride oplossing in een weinig geïsoleerd huis belangrijk.",
      },
      {
        id: 5,
        question: "Maakt een warmtepomp lawaai?",
        answer:
          "Recente modellen worden steeds stiller, maar de buitenunit blijft hoorbaar. We kiezen haar plaats zo dat u en uw buren er zo weinig mogelijk last van hebben.",
      },
      {
        id: 6,
        question: "Moet een warmtepomp onderhouden worden?",
        answer: `Ja: regelmatig onderhoud behoudt de prestaties en de levensduur, en de meeste fabrikanten raden het jaarlijks aan. Het [onderhoud van een warmtepomp](/nl/airco/onderhoud-airco) kost **${prices.entretienPac.amount}€ btw inbegrepen**.`,
      },
      {
        id: 7,
        question: "Kan ik mijn stookolieketel vervangen door een warmtepomp?",
        answer:
          "Ja, dat komt vaak voor: nieuwe stookolieketels plaatsen mag niet meer in het Brussels Gewest. Samen bekijken we welke warmtepomp, of welke hybride oplossing, bij uw huis past.",
      },
      {
        id: 8,
        question: "Hoelang duurt de plaatsing?",
        answer: "Meestal enkele dagen, afhankelijk van de nodige aanpassingen (radiatoren, elektriciteit, warm water). De precieze planning staat in uw offerte.",
      },
    ],
    related: ["chauffage/remplacement-chaudiere", "chauffage/installation-radiateurs", "climatisation/installation-climatisation", "climatisation/entretien-climatisation"],
    cta: {
      body: "Een warmtepomp bereid je voor: we komen uw woning, radiatoren en isolatie bekijken, en u krijgt binnen 24 uur een gedetailleerde offerte. Is een warmtepomp bij u niet de juiste keuze, dan zeggen we het u.",
    },
    draft: false,
  },

  // --- Schoorsteenvegen ---
  {
    category: "chauffage",
    slug: "ramonage-cheminee",
    path: "/nl/verwarming/schoorsteenvegen",
    title: "Schoorsteenvegen",
    name: "Schoorsteen en rookkanalen vegen",
    pageTitle: "Schoorsteen en rookkanalen laten vegen in Brussel",
    metaTitle: `Schoorsteenvegen in Brussel – ${prices.ramonage.amount}€ btw incl.`,
    metaDescription: `Schoorsteenvegen voor open haard, kachel, inzethaard en rookkanaal van een stookolieketel in Brussel en omgeving. ${prices.ramonage.amount}€ btw incl., prijs op voorhand gekend. Maak een afspraak.`,
    summary: "Schouw, kachel, inzethaard of rookkanaal van een stookolieketel: regelmatig vegen beperkt het risico op brand en vergiftiging.",
    icon: "broom",
    intent: "entretien",
    price: { key: "ramonage" },
    hero: {
      eyebrow: "Veiligheid · Jaarlijks onderhoud",
      intro:
        "Open haard, inzethaard, houtkachel of stookolieketel: het roet in uw rookkanalen is een belangrijke oorzaak van schoorsteenbranden en vergiftigingen. Onze technici vegen en controleren uw rookkanalen, aan de prijs die op de site staat.",
      image: { asset: "P18", alt: "Technicus veegt een rookkanaal" },
    },
    facts: [
      { icon: "euro", stat: `${prices.ramonage.amount}€ btw incl.`, label: "Schoorsteenvegen" },
      { icon: "calendar", stat: "1 keer per jaar", label: "Meestal aangeraden frequentie" },
      { icon: "shield", stat: "Minder risico", label: "Schoorsteenbrand en koolmonoxide" },
      { icon: "calendarCheck", stat: "Snel een afspraak", label: "Meestal binnen 24 uur" },
    ],
    blocks: [
      {
        type: "features",
        title: "Waarom uw rookkanalen laten vegen?",
        intro: "Elk vuur en elke verbranding van stookolie laat roet achter in het rookkanaal. Zonder vegen hoopt het zich op tot het gevaarlijk wordt.",
        items: [
          {
            icon: "fire",
            title: "Schoorsteenbrand vermijden",
            text: "Roet en teer zijn brandbaar: ze kunnen vuur vatten en het rookkanaal, of zelfs het dak, beschadigen.",
          },
          {
            icon: "smog",
            title: "Rook goed afvoeren",
            text: "Een vuil of verstopt rookkanaal (nest, puin) voert de rook slecht af, met kans op terugslag van koolmonoxide.",
          },
          {
            icon: "file",
            title: "Verzekerd blijven",
            text: "Bij schade kan uw verzekeraar een bewijs van recent schoorsteenvegen vragen. Bewaar het document dat u na de interventie krijgt.",
          },
          { icon: "wind", title: "Een betere trek", text: "Een schoon rookkanaal trekt beter: het vuur gaat makkelijker aan en uw toestel brandt properder." },
        ],
      },
      {
        type: "options",
        title: "Welke rookkanalen vegen we?",
        items: [
          {
            title: "Open haard en inzethaard",
            text: "Bij houtvuren die regelmatig branden, hoopt de afzetting zich snel op in het gemetselde of gebuisde rookkanaal.",
            points: ["Mechanisch vegen van het rookkanaal", "Visuele controle van de trek", "Tips voor het gebruik (droog hout, aansteken)"],
          },
          {
            title: "Hout- of pelletkachel",
            text: "Kachels maken fijn roet dat het rookkanaal en de aansluitbuis snel vervuilt.",
            points: ["Vegen van het rookkanaal en de aansluiting", "Controle van de dichtheid van de aansluiting"],
          },
          {
            title: "Rookkanaal van een stookolieketel",
            text: "De verbranding van stookolie vervuilt het rookkanaal: regelmatig vegen is nodig om de ketel goed te laten werken.",
            points: ["Aanvulling op het [ketelonderhoud](/nl/verwarming/ketelonderhoud)", "Rookafvoer gecontroleerd"],
          },
        ],
      },
      {
        type: "alert",
        tone: "info",
        title: "Gasketel met ventouse?",
        paragraphs: [
          "Gascondensatieketels voeren hun rook af via een ventouse of een specifiek rookkanaal. Die rookafvoer wordt gecontroleerd tijdens het [ketelonderhoud](/nl/verwarming/ketelonderhoud), dat in het Brussels Gewest verplicht is: meestal is apart vegen niet nodig.",
        ],
      },
      {
        type: "steps",
        title: "Zo verloopt het schoorsteenvegen",
        steps: [
          {
            title: "Afspraak",
            description: "We kiezen een moment, liefst voor het stookseizoen. Maak de uren ervoor geen vuur: het rookkanaal moet koud zijn.",
          },
          { title: "Afschermen", description: "De zone rond het toestel wordt afgeschermd voor we beginnen." },
          { title: "Vegen", description: "De borstel gaat door het hele rookkanaal om roet en afzetting los te maken, daarna voeren we de resten af." },
          {
            title: "Controle en advies",
            description: "Controle van de trek en de zichtbare staat van het rookkanaal, tips voor het gebruik en een interventiedocument om te bewaren.",
          },
        ],
      },
      {
        type: "pricing",
        title: "Tarief schoorsteenvegen in Brussel",
        items: [{ key: "ramonage", popular: true }, { key: "entretienChaudiereMazout" }],
      },
    ],
    faqTitle: "Veelgestelde vragen over schoorsteenvegen",
    faqs: [
      {
        id: 1,
        question: "Is schoorsteenvegen verplicht?",
        answer:
          "De verplichtingen hangen af van uw toestel en uw brandstof, en ook uw verzekeraar of uw huurcontract kan het opleggen. In elk geval is minstens één keer per jaar vegen sterk aangeraden voor elk rookkanaal dat regelmatig gebruikt wordt.",
      },
      {
        id: 2,
        question: "Hoeveel kost schoorsteenvegen in Brussel?",
        answer: `Het vegen van een schoorsteen kost **${prices.ramonage.amount}€ btw inbegrepen**. Het veegattest is inbegrepen en u kent de prijs voor de interventie.`,
      },
      {
        id: 3,
        question: "Hoe vaak moet ik laten vegen?",
        answer:
          "Minstens één keer per jaar voor een schouw, kachel of rookkanaal van een stookolieketel dat regelmatig gebruikt wordt, liefst voor de winter. Bij intensief gebruik kan een tweede keer nodig zijn.",
      },
      {
        id: 4,
        question: "Moet het rookkanaal van een gasketel geveegd worden?",
        answer:
          "Bij een gasketel met ventouse wordt de rookafvoer gecontroleerd tijdens het [ketelonderhoud](/nl/verwarming/ketelonderhoud). Voor een oud gemetseld rookkanaal vraagt u ons best om advies.",
      },
      {
        id: 5,
        question: "Hoelang duurt schoorsteenvegen?",
        answer: "Meestal minder dan een uur voor een standaard rookkanaal, langer als het erg vuil of moeilijk bereikbaar is.",
      },
      {
        id: 6,
        question: "Wat doe ik bij een schoorsteenbrand?",
        answer: "Sluit indien mogelijk de luchttoevoer van het toestel, gooi nooit water in de haard, verlaat de woning en bel 112.",
      },
      {
        id: 7,
        question: "Moet ik iets voorbereiden voor u komt?",
        answer: "Maak de uren ervoor geen vuur, zodat het rookkanaal koud is, en maak de toegang tot het toestel vrij.",
      },
    ],
    related: ["chauffage/entretien-chaudiere", "chauffage/depannage-chaudiere", "chauffage/pompe-a-chaleur", "chauffage/desembouage"],
    cta: {
      title: "Moet uw schoorsteen (bijna) geveegd worden? Maak een afspraak.",
      highlight: "(bijna)",
      body: "Schouw, inzethaard, kachel of stookolieketel? Maak een afspraak voor het stookseizoen: vegen aan de prijs op de site, veegattest inbegrepen.",
    },
    draft: false,
  },
];
