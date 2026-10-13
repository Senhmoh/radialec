import { boilerBrandNames } from "./brands";
import type { FaqItem } from "./services/types";

// FAQ de la page d'accueil (section #faqs). Contenu repris de l'ancien site.
// Réponse 1 corrigée (Q34) : plus de « ou au mazout », renvoi vers la page
// remplacement, sans citer de règle régionale.
export const homeFaqs: FaqItem[] = [
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
