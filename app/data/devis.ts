import { company } from "./company";
import { prices } from "./pricing";
import type { FaqItem, ServiceRef } from "./services/types";

/** Domaine proposé à la 1re étape du devis (identifiant = catégorie, ou « autre »). */
export interface QuoteCategoryOption {
  id: string;
  label: string;
  /** Exemples affichés sous le libellé (« Chaudière, radiateurs… »). */
  hint?: string;
  placeholder: string;
}

/** Contenu de la page devis (gabarit : app/sections/QuotePage.tsx), une version par langue. */
export interface QuoteContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  reviewSource: string;
  categories: QuoteCategoryOption[];
  related: { title: string; intro: string; refs: ServiceRef[] };
  faqTitle: string;
  faqs: FaqItem[];
}

export const devis: QuoteContent = {
  metaTitle: "Devis gratuit chauffage, électricité, plomberie à Bruxelles",
  metaDescription:
    "Demandez votre devis gratuit en 2 minutes : chaudière, pompe à chaleur, électricité, plomberie, climatisation à Bruxelles. Rappel sous 2 h, devis sous 24h, sans engagement.",
  breadcrumb: "Demander un devis",
  eyebrow: "Devis gratuit · Rappel sous 2 h",
  title: "Demandez votre devis gratuit à Bruxelles",
  intro:
    "Décrivez votre besoin en deux minutes : un technicien vous rappelle sous 2 heures, puis vous envoie un devis clair et sans engagement.",
  reviewSource: "Avis Google",
  categories: [
    {
      id: "chauffage",
      label: "Chauffage",
      hint: "Chaudière, radiateurs, pompe à chaleur",
      placeholder: "Ex. : chaudière gaz d'une quinzaine d'années à remplacer, maison 3 façades, 4 radiateurs par étage…",
    },
    {
      id: "electricite",
      label: "Électricité",
      hint: "Tableau, prises, borne de recharge",
      placeholder: "Ex. : tableau à fusibles à remplacer avant la vente de la maison, contrôle RGIE prévu le mois prochain…",
    },
    {
      id: "plomberie",
      label: "Plomberie",
      hint: "Fuite, débouchage, détartrage",
      placeholder: "Ex. : évier de cuisine qui s'écoule très mal depuis une semaine, appartement au 3e étage…",
    },
    {
      id: "climatisation",
      label: "Clim & PAC",
      hint: "Airco et pompe à chaleur",
      placeholder: "Ex. : airco réversible pour 2 chambres à l'étage, maison mitoyenne, jardin à l'arrière…",
    },
    {
      id: "professionnels",
      label: "Syndic / copropriété",
      hint: "Parties communes d'immeuble",
      placeholder: "Ex. : immeuble de 12 logements, entretien annuel de la chaufferie collective et du parlophone…",
    },
    {
      id: "autre",
      label: "Autre besoin",
      hint: "Nous vous orientons",
      placeholder: "Décrivez votre besoin : nous vous orientons vers la bonne solution.",
    },
  ],
  related: {
    title: "Les devis les plus demandés à Bruxelles",
    intro: "Vous préférez d'abord vous renseigner ? Chaque page détaille la prestation, le déroulement et les questions fréquentes.",
    refs: [
      "chauffage/remplacement-chaudiere",
      "chauffage/pompe-a-chaleur",
      "electricite/installation-borne-recharge",
      "electricite/mise-en-conformite-electrique",
      "electricite/renovation",
      "climatisation/installation-climatisation",
      "chauffage/installation-radiateurs",
      "chauffage/desembouage",
    ],
  },
  faqTitle: "Questions fréquentes sur nos devis",
  faqs: [
    {
      id: 1,
      question: "Le devis est-il vraiment gratuit ?",
      answer: "Oui. Le devis est gratuit et sans engagement : si vous ne l'acceptez pas, vous ne nous devez rien.",
    },
    {
      id: 2,
      question: "Sous quel délai vais-je recevoir mon devis ?",
      answer:
        "Un technicien vous rappelle sous 2 heures (entre 10h et 21h). Pour la plupart des demandes, vous recevez ensuite votre devis détaillé sous 24h ; un projet plus important peut demander une visite sur place au préalable.",
    },
    {
      id: 3,
      question: "Faut-il une visite technique avant le devis ?",
      answer:
        "Pas toujours. Pour un remplacement de chaudière, une installation électrique ou une pompe à chaleur, un passage sur place permet de chiffrer au plus juste. Nous vous le proposons seulement si c'est utile.",
    },
    {
      id: 4,
      question: "Quelles informations préparer ?",
      answer:
        "L'essentiel : ce qui doit être fait et où. Si vous le pouvez, ajoutez des photos (l'appareil, sa plaque signalétique, le tableau électrique…), la marque et l'âge de l'installation. Plus la demande est précise, plus le devis est juste.",
    },
    {
      id: 5,
      question: "J'ai une panne, dois-je demander un devis ?",
      answer: `Non, appelez-nous directement au **${company.phone.display}**. Le dépannage a un prix fixe de ${prices.depannage.amount}€ TVAC (déplacement, diagnostic et première heure) et nous intervenons sous 24h, 7j/7.`,
    },
    {
      id: 6,
      question: "Faites-vous des devis pour les syndics et les copropriétés ?",
      answer:
        "Oui, pour les parties communes comme pour les logements : chaufferie collective, parlophonie, colonnes, électricité des communs. [Nos services pour les professionnels](/professionnels).",
    },
    {
      id: 7,
      question: "Que devient ma demande ?",
      answer:
        "Elle est transmise directement à nos techniciens. Vos coordonnées servent uniquement à traiter votre demande de devis.",
    },
  ],
};
