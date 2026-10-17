import { prices } from "./pricing";
import type { Fact, FaqItem } from "./services/types";

/** Contenu de la page tarifs (gabarit : app/sections/TarifsPage.tsx), une version par langue. */
export interface TarifsContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** « Dès 149€ » / « Sur devis » dans les raccourcis par métier. */
  from: (amount: number) => string;
  onQuote: string;
  shortcutsLabel: string;
  engagementsTitle: string;
  engagements: Fact[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaBody: string;
  catalogName: string;
  areaServed: string;
}

const year = new Date().getFullYear();
const p = prices;

export const tarifs: TarifsContent = {
  metaTitle: `Tarifs ${year} : chauffagiste et plombier à Bruxelles`,
  metaDescription: `Entretien chaudière gaz ${p.entretienChaudiereGaz.amount}€, dépannage ${p.depannage.amount}€ déplacement compris, débouchage ${p.debouchage.amount}€ : tous nos prix TVAC à Bruxelles, sans frais cachés.`,
  breadcrumb: "Tarifs",
  eyebrow: `Tarifs ${year} · Prix TVAC`,
  title: "Tarifs chauffagiste, électricien et plombier à Bruxelles",
  intro:
    "Entretien, dépannage : le prix est affiché ici, TVA comprise, avant même que vous nous appeliez. Pour une installation, le devis est gratuit et vous l'avez sous 24h.",
  from: (amount) => `Dès ${amount}€`,
  onQuote: "Sur devis",
  shortcutsLabel: "Aller aux tarifs par métier",
  engagementsTitle: "Nos engagements",
  engagements: [
    { icon: "euro", stat: "Prix TVAC affichés", label: "Entretiens et dépannages à prix fixe" },
    { icon: "handshake", stat: "Rien sans votre accord", label: "Tout supplément annoncé avant l'intervention" },
    { icon: "clipboard", stat: "Devis gratuit sous 24h", label: "Pour toute installation, sans engagement" },
    { icon: "shield", stat: "Garantie 2 ans", label: "Sur nos pièces et interventions" },
  ],
  faqTitle: "Questions fréquentes sur nos tarifs",
  faqs: [
    {
      id: 1,
      question: "Combien coûte un entretien de chaudière à Bruxelles ?",
      answer: `${p.entretienChaudiereGaz.amount}€ TVAC pour une chaudière gaz et ${p.entretienChaudiereMazout.amount}€ TVAC pour une chaudière mazout. Contrôle complet, tests de sécurité et attestation remise le jour même compris. [En savoir plus sur l'entretien](/chauffage/entretien-chaudiere).`,
    },
    {
      id: 2,
      question: "Quel est le prix d'un dépannage ?",
      answer: `${p.depannage.amount}€ TVAC, déplacement, diagnostic et première heure compris — que la panne touche votre chaudière, votre sanitaire, votre électricité ou votre clim / PAC. Si une pièce ou du temps supplémentaire est nécessaire, le prix vous est annoncé avant toute intervention.`,
    },
    {
      id: 3,
      question: "Combien coûte un débouchage de canalisation ?",
      answer: `${p.debouchage.amount}€ TVAC pour déboucher un évier, un lavabo ou un WC. [Tout savoir sur le débouchage](/plomberie/debouchage).`,
    },
    {
      id: 4,
      question: "Quel est le prix de l'entretien d'une pompe à chaleur ?",
      answer: `${p.entretienPac.amount}€ TVAC. Un entretien régulier préserve le rendement de votre PAC et sa durée de vie : [voir le détail](/climatisation/entretien-climatisation).`,
    },
    {
      id: 5,
      question: "Combien coûte l'entretien d'un chauffe-eau ou d'un boiler ?",
      answer: `${p.entretienChauffeEau.amount}€ TVAC pour un chauffe-eau et ${p.entretienBoilerElectrique.amount}€ TVAC pour un boiler électrique. [Chauffe-eau et boiler : ce que nous contrôlons](/chauffage/entretien-chauffe-eau-boiler).`,
    },
    {
      id: 6,
      question: "Vos prix sont-ils TVA comprise ?",
      answer: "Oui, tous les prix affichés sur notre site sont TVAC : c'est le montant que vous payez.",
    },
    {
      id: 7,
      question: "Pourquoi certains services sont-ils « sur devis » ?",
      answer:
        "Une installation ou une rénovation dépend de votre logement : puissance, emplacement, état de l'existant. Nous préférons un devis précis à un prix d'appel trompeur. Il est gratuit, sans engagement, et vous le recevez sous 24h : [demander un devis](/devis).",
    },
    {
      id: 8,
      question: "Y a-t-il des frais cachés ?",
      answer: "Non. Le prix annoncé est le prix payé, et rien n'est facturé sans votre accord préalable.",
    },
    {
      id: 9,
      question: "Vos interventions sont-elles garanties ?",
      answer:
        "Oui, nos pièces et nos interventions sont couvertes par une garantie de 2 ans. Pour une nouvelle chaudière, la garantie fabricant de 2 ans sur les pièces s'ajoute à notre garantie de 2 ans sur la pose.",
    },
  ],
  ctaBody:
    "Décrivez-nous votre projet : vous recevez un devis détaillé sous 24h, gratuit et sans engagement. Son montant est celui de la facture.",
  catalogName: `Tarifs Radialec ${year} — chauffage, plomberie, électricité, climatisation à Bruxelles`,
  areaServed: "Bruxelles",
};
