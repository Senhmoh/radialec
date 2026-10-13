import { boilerBrandNames } from "./brands";
import { company } from "./company";
import type { PriceRef } from "./pricing";
import type { Fact, FaqItem, ImageSpec, ServiceCategory, ServiceRef } from "./services/types";

/** Contenu de la page d'accueil (gabarit : app/sections/HomePage.tsx), une version par langue. */
export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    imageAlt: string;
    shortcutsLabel: string;
    /** Raccourcis « Votre chaudière est… » : page service, ou la section des métiers. */
    shortcuts: { label: string; ref: ServiceRef | "metiers" }[];
  };
  trust: Fact[];
  boilers: { eyebrow: string; title: string };
  trades: {
    eyebrow: string;
    title: string;
    intro: string;
    allServices: string;
    items: { category: ServiceCategory; title: string; image: ImageSpec; links: { label: string; ref: ServiceRef }[] }[];
  };
  pricing: { title: string; intro: string; items: PriceRef[] };
  faqTitle: string;
  faqs: FaqItem[];
  cta: { body: string };
}

// FAQ de la page d'accueil (section #faqs). Contenu repris de l'ancien site.
// Réponse 1 corrigée (Q34) : plus de « ou au mazout », renvoi vers la page
// remplacement, sans citer de règle régionale.
const homeFaqs: FaqItem[] = [
    {
        id: 1,
        question: "Comment obtenir un devis pour l'installation d'une nouvelle chaudière ?",
        answer: "Remplissez le [formulaire de devis](/devis) (deux minutes, photos bienvenues) ou appelez-nous. Vous recevez un devis détaillé sous 24h, gratuit et sans engagement. Tout savoir sur le [remplacement de chaudière](/chauffage/remplacement-chaudiere)."
    },
    {
        id: 2,
        question: "Sur quelles chaudières intervenez-vous ?",
        answer: `Nos chauffagistes interviennent sur les chaudières au gaz et au mazout des marques ${boilerBrandNames}.`
    },
    {
        id: 3,
        question: "Quel est le type de chaudières que vous prenez en charge ?",
        answer: "Nous installons des chaudières gaz à condensation, et des pompes à chaleur quand le logement s’y prête. Nous vous aidons à choisir la marque et le modèle adaptés à votre logement."
    },
    {
        id: 4,
        question: "Quel est le meilleur moment pour faire l'entretien de ma chaudière ?",
        answer: "Il est recommandé de faire l’entretien de votre chaudière au gaz tous les deux ans et de votre chaudière au mazout chaque année. Le bon moment : avant l’hiver, pour que tout soit prêt quand vous en aurez besoin."
    },
    {
        id: 5,
        question: "Quand remplacer votre chaudière ?",
        answer: "La durée de vie d’une chaudière est de plus ou moins 15 ans. Nous vous conseillons donc de réfléchir à remplacer votre chaudière si elle a plus de 12 à 15 ans. Néanmoins, si vous ne possédez pas encore de chaudière à condensation actuellement, n’hésitez pas à remplacer votre système dès maintenant."
    },
];

export const home: HomeContent = {
  metaTitle: "Chauffagiste, électricien et plombier à Bruxelles | Radialec",
  metaDescription: company.description,
  hero: {
    eyebrow: "Chauffagiste à Bruxelles · 7j/7",
    title: "Votre chaudière, notre spécialité.",
    intro:
      "Entretien, dépannage et installation de chaudières à Bruxelles et ses environs, 7/7. Nous intervenons également pour vos équipements électriques.",
    imageAlt: "Chaudière murale gaz à condensation",
    shortcutsLabel: "Votre chaudière est…",
    shortcuts: [
      { label: "En panne", ref: "chauffage/depannage-chaudiere" },
      { label: "À entretenir", ref: "chauffage/entretien-chaudiere" },
      { label: "À remplacer", ref: "chauffage/remplacement-chaudiere" },
      { label: "Autre besoin", ref: "metiers" },
    ],
  },
  // Bandeau confiance (validé, brief accueil) : chiffres clés du haut de page.
  trust: [
    { icon: "users", stat: company.promises.clients, label: "Ils nous recommandent partout à Bruxelles." },
    { icon: "shield", stat: company.promises.warranty, label: "Toutes nos pièces et interventions couvertes." },
    // « le jour même » remplacé le 13/10 : contredisait « sous 24h » sur la même tuile.
    { icon: "clock", stat: company.promises.intervention, label: `Une urgence ? On décroche ${company.promises.emergency}, 7j/7.` },
    { icon: "euro", stat: "Prix transparents", label: "Le prix annoncé est le prix payé, point final." },
  ],
  boilers: { eyebrow: "Notre spécialité", title: "Votre chaudière, de l'entretien au remplacement" },
  // Les 4 métiers (brief accueil) : sous-services cliquables.
  // Photo de chaque métier : app/data/photos.ts (identifiants de 02-assets.md).
  trades: {
    eyebrow: "Nos métiers",
    title: "Spécialistes en chauffage, mais pas seulement",
    intro:
      "Nos techniciens s'occupent aussi de l'électricité, de la plomberie et de la climatisation. Pour tout ce qui touche à la maison, à Bruxelles et alentour, c'est le même numéro.",
    allServices: "Tous les services",
    items: [
      {
        category: "chauffage",
        title: "Chauffage",
        image: { asset: "P05", alt: "Chaudière murale neuve installée, raccords visibles" },
        links: [
          { label: "Dépannage chaudière", ref: "chauffage/depannage-chaudiere" },
          { label: "Entretien chaudière gaz", ref: "chauffage/entretien-chaudiere" },
          { label: "Radiateurs", ref: "chauffage/installation-radiateurs" },
          { label: "Désembouage", ref: "chauffage/desembouage" },
        ],
      },
      {
        category: "electricite",
        title: "Électricité",
        image: { asset: "P20", alt: "Électricien intervenant sur un tableau électrique ouvert" },
        links: [
          { label: "Installation électrique", ref: "electricite/installation-electricite" },
          { label: "Dépannage électrique", ref: "electricite/depannage-electrique" },
          { label: "Mise en conformité", ref: "electricite/mise-en-conformite-electrique" },
          { label: "Bornes de recharge", ref: "electricite/installation-borne-recharge" },
        ],
      },
      {
        category: "climatisation",
        title: "Climatisation & pompes à chaleur",
        image: { asset: "P43", alt: "Technicien posant une unité intérieure de climatisation" },
        links: [
          { label: "Installation airco", ref: "climatisation/installation-climatisation" },
          { label: "Entretien clim & PAC", ref: "climatisation/entretien-climatisation" },
          { label: "Dépannage clim & PAC", ref: "climatisation/depannage-climatisation" },
          { label: "Pompes à chaleur (PAC)", ref: "chauffage/pompe-a-chaleur" },
        ],
      },
      {
        category: "plomberie",
        title: "Plomberie & sanitaire",
        image: { asset: "P30", alt: "Plombier réparant un siphon sous un évier" },
        links: [
          { label: "Dépannage plomberie", ref: "plomberie/depannage" },
          { label: "Détartrage", ref: "plomberie/detartrage" },
          { label: "Débouchage", ref: "plomberie/debouchage" },
        ],
      },
    ],
  },
  // Tarifs mis en avant (ordre et montants : app/data/pricing.ts).
  pricing: {
    title: "Tarifs chauffage, électricité et plomberie à Bruxelles",
    intro:
      "Les interventions courantes ont un prix fixe, TVAC, affiché ici. Pour un projet, le devis est gratuit, et rien n'est commencé sans votre accord sur le prix.",
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
  faqTitle: "Questions fréquentes",
  faqs: homeFaqs,
  cta: {
    body: `Une panne tombe toujours au mauvais moment. Appelez-nous, on décroche ${company.promises.emergency} : un technicien passe sous 24h, week-end compris, et vous connaissez le prix avant qu'il commence.`,
  },
};
