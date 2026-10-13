/** Contenu de la page rendez-vous (gabarit : app/sections/BookingPage.tsx), une version par langue. */
export interface BookingContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  checkCommune: string;
}

export const rendezVous: BookingContent = {
  metaTitle: "Prendre rendez-vous en ligne à Bruxelles",
  metaDescription:
    "Réservez en ligne l'entretien de votre chaudière à Bruxelles, ou laissez votre numéro pour être rappelé : Radialec, chauffage, électricité, plomberie et climatisation.",
  breadcrumb: "Prendre rendez-vous",
  eyebrow: "Rendez-vous · Bruxelles et environs",
  title: "Prenez rendez-vous avec Radialec",
  intro:
    "Choisissez votre créneau directement dans notre agenda. Pour une prestation qui ne se réserve pas encore en ligne, laissez votre numéro : nous vous rappelons pour fixer le rendez-vous.",
  checkCommune: "Vérifier que votre commune est desservie",
};
