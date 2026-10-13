import { company } from "./company";
import { prices } from "./pricing";
import type { FaqItem } from "./services/types";

/** Contenu de la page contact (gabarit : app/sections/ContactPage.tsx), une version par langue. */
export interface ContactContent {
  metaTitle: string;
  metaDescription: string;
  header: { eyebrow: string; title: string; intro: string };
  callback: { eyebrow: string; title: string; intro: string; emergency: string };
  band: { title: string; text: string };
  faqTitle: string;
  faqs: FaqItem[];
}

export const contact: ContactContent = {
  metaTitle: "Contact et devis gratuit à Bruxelles",
  metaDescription:
    "Devis gratuit sous 24h, rendez-vous en ligne ou rappel : contactez Radialec pour votre chauffage, électricité ou plomberie à Bruxelles, 7j/7.",
  header: {
    eyebrow: "Contact · Bruxelles et environs",
    title: "Contactez Radialec, votre technicien à Bruxelles",
    intro: `Le plus rapide, c'est d'appeler : on décroche ${company.promises.availability} de 10h à 21h, et ${company.promises.emergency} pour les urgences. Vous préférez écrire ? Demandez un devis, prenez rendez-vous ou laissez votre numéro.`,
  },
  callback: {
    eyebrow: "Être rappelé",
    title: "Laissez votre numéro, on vous rappelle",
    intro: `Pas le temps d'appeler maintenant ? Indiquez quand vous êtes joignable : nous vous rappelons${
      company.promises.callback ? ` ${company.promises.callback}` : ""
    } pour répondre à votre question ou organiser l'intervention. Sans engagement.`,
    emergency: "Une panne en cours ? Appelez plutôt :",
  },
  band: {
    title: "Une urgence ? N'attendez pas de formulaire.",
    text: `Appelez directement, on décroche ${company.promises.emergency}. Un technicien passe sous 24h, week-end compris, à Bruxelles et en périphérie.`,
  },
  faqTitle: "Questions fréquentes",
  faqs: [
    {
      id: 1,
      question: "Le devis est-il vraiment gratuit ?",
      answer:
        "Oui, gratuit et sans engagement, et vous le recevez sous 24h. Le montant du devis est celui de la facture : rien n'est ajouté après coup.",
    },
    {
      id: 2,
      question: "Dans quel délai pouvez-vous intervenir ?",
      answer: `Un technicien passe sous 24h, 7j/7, à Bruxelles et en périphérie. Pour une urgence, appelez directement le **${company.phone.display}** : on décroche ${company.promises.emergency}.`,
    },
    {
      id: 3,
      question: "Combien coûte un dépannage ?",
      answer: `Le dépannage est facturé ${prices.depannage.amount}€ TVAC, déplacement, diagnostic et première heure compris. Si une réparation supplémentaire est nécessaire, le prix vous est annoncé avant toute intervention. Voir [tous nos tarifs](/tarifs).`,
    },
    {
      id: 4,
      question: "Quelles communes desservez-vous ?",
      answer:
        "Les 19 communes de la Région bruxelloise, ainsi qu'une partie du Brabant flamand et du Brabant wallon : [voir la liste complète](#zones).",
    },
    {
      id: 5,
      question: "Intervenez-vous pour les syndics et les copropriétés ?",
      answer:
        "Oui, nous accompagnons syndics et gestionnaires pour les installations des parties communes : [découvrir nos services pour professionnels](/professionnels).",
    },
    {
      id: 6,
      question: "Que préparer avant de nous appeler ?",
      answer:
        "Si possible, la marque et le modèle de l'appareil, une description du problème (code erreur, bruit, fuite…) et une photo. Cela nous aide à poser un premier diagnostic et à venir avec le bon matériel.",
    },
  ],
};
