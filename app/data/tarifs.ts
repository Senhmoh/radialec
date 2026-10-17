import { categoryOrder } from "./categories";
import { pricingPolicy, pricingPolicyNl, resolvePrice, type PriceRef } from "./pricing";
import { findServiceByRef, getServiceByRef, serviceHref } from "./services";
import type { ServiceCategory, ServiceRef } from "./services/types";
import { defaultLocale, type Locale } from "@/lib/i18n/locale";
import { categoryPath } from "@/lib/i18n/routes";

// Contenu de /tarifs : quelles lignes de prix, dans quel ordre, vers quelle
// page. Les MONTANTS viennent de pricing.ts ; les conditions générales
// (heure supplémentaire, TVA, paiement…) de `pricingPolicy`.
//
// Questions sur les prix existants : répondues par le gestionnaire le 08/10/2026
// (notes reportées dans pricing.ts).

interface TarifLine {
  id: string;
  price: PriceRef;
  service: ServiceRef;
  /** Libellé et note en néerlandais quand la ligne en définit (sinon : ceux du tarif, pricing.ts). */
  nl?: { label?: string; note?: string };
}

interface TarifGroup {
  id: ServiceCategory;
  label: string;
  shortLabel: string;
  nl: { label: string; shortLabel: string };
  lines: TarifLine[];
}

const groups: TarifGroup[] = [
  {
    id: "chauffage",
    label: "Chauffage",
    shortLabel: "Chauffage",
    nl: { label: "Verwarming", shortLabel: "Verwarming" },
    lines: [
      { id: "entretien-gaz", price: { key: "entretienChaudiereGaz" }, service: "chauffage/entretien-chaudiere" },
      { id: "entretien-mazout", price: { key: "entretienChaudiereMazout" }, service: "chauffage/entretien-chaudiere" },
      { id: "contrat-entretien", price: { key: "contratEntretien" }, service: "chauffage/entretien-chaudiere" },
      {
        id: "depannage-chaudiere",
        price: { key: "depannage", label: "Dépannage chaudière" },
        service: "chauffage/depannage-chaudiere",
        nl: { label: "Depannage ketel" },
      },
      { id: "chauffe-eau", price: { key: "entretienChauffeEau" }, service: "chauffage/entretien-chauffe-eau-boiler" },
      { id: "boiler", price: { key: "entretienBoilerElectrique" }, service: "chauffage/entretien-chauffe-eau-boiler" },
      { id: "ramonage", price: { key: "ramonage" }, service: "chauffage/ramonage-cheminee" },
      {
        id: "remplacement-chaudiere",
        price: { label: "Remplacement de chaudière", note: "Gaz à condensation ou pompe à chaleur" },
        service: "chauffage/remplacement-chaudiere",
        nl: { label: "Ketel vervangen", note: "Gascondensatie of warmtepomp" },
      },
      {
        id: "pompe-a-chaleur",
        price: { label: "Pompe à chaleur", note: "Étude du logement et dimensionnement" },
        service: "chauffage/pompe-a-chaleur",
        nl: { label: "Warmtepomp", note: "Studie van de woning en dimensionering" },
      },
      {
        id: "desembouage",
        price: { label: "Désembouage", note: "Selon la taille de l'installation" },
        service: "chauffage/desembouage",
        nl: { label: "Ontslibben", note: "Volgens de grootte van de installatie" },
      },
      {
        id: "radiateurs",
        price: { label: "Radiateurs", note: "Selon le nombre et le modèle" },
        service: "chauffage/installation-radiateurs",
        nl: { label: "Radiatoren", note: "Volgens het aantal en het model" },
      },
    ],
  },
  {
    id: "plomberie",
    label: "Plomberie & sanitaire",
    shortLabel: "Plomberie",
    nl: { label: "Sanitair & loodgieterij", shortLabel: "Sanitair" },
    lines: [
      {
        id: "depannage-sanitaire",
        price: { key: "depannage", label: "Dépannage sanitaire" },
        service: "plomberie/depannage",
        nl: { label: "Depannage sanitair" },
      },
      { id: "debouchage", price: { key: "debouchage", label: "Débouchage" }, service: "plomberie/debouchage", nl: { label: "Ontstopping" } },
      {
        id: "detartrage",
        price: { key: "detartrage" },
        service: "plomberie/detartrage",
      },
    ],
  },
  {
    id: "electricite",
    label: "Électricité",
    shortLabel: "Électricité",
    nl: { label: "Elektriciteit", shortLabel: "Elektriciteit" },
    lines: [
      {
        id: "depannage-electrique",
        price: { key: "depannage", label: "Dépannage électrique" },
        service: "electricite/depannage-electrique",
        nl: { label: "Depannage elektriciteit" },
      },
      {
        id: "installation-electrique",
        price: { label: "Installation électrique", note: "Neuf, rénovation ou extension" },
        service: "electricite/installation-electricite",
        nl: { label: "Elektrische installatie", note: "Nieuw, renovatie of uitbreiding" },
      },
      {
        id: "conformite",
        price: { key: "miseEnConformite", label: "Mise en conformité RGIE" },
        service: "electricite/mise-en-conformite-electrique",
        nl: { label: "Installatie in orde brengen (AREI)" },
      },
      {
        id: "renovation-electrique",
        price: { label: "Rénovation électrique", note: "Partielle ou complète" },
        service: "electricite/renovation",
        nl: { label: "Elektrische renovatie", note: "Gedeeltelijk of volledig" },
      },
      {
        id: "schema",
        price: { label: "Schéma électrique", note: "Unifilaire + plans de position" },
        service: "electricite/schema-electrique",
        nl: { label: "Elektrische schema's", note: "Ééndraadschema + situatieschema" },
      },
      {
        id: "borne",
        price: { label: "Borne de recharge", note: "Selon la puissance et le raccordement" },
        service: "electricite/installation-borne-recharge",
        nl: { label: "Laadpaal", note: "Volgens het vermogen en de aansluiting" },
      },
      {
        id: "parlophonie",
        price: { label: "Parlophonie", note: "Maison ou immeuble" },
        service: "electricite/installation-parlophonie",
        nl: { label: "Parlofonie", note: "Huis of gebouw" },
      },
      {
        id: "videophonie",
        price: { label: "Vidéophonie", note: "Selon le modèle choisi" },
        service: "electricite/installation-videophonie",
        nl: { label: "Videofonie", note: "Volgens het gekozen model" },
      },
    ],
  },
  {
    id: "climatisation",
    label: "Climatisation & PAC",
    shortLabel: "Clim & PAC",
    nl: { label: "Airco & warmtepomp", shortLabel: "Airco & warmtepomp" },
    lines: [
      { id: "entretien-pac", price: { key: "entretienPac" }, service: "climatisation/entretien-climatisation" },
      {
        id: "depannage-clim",
        price: { key: "depannage", label: "Dépannage clim / PAC" },
        service: "climatisation/depannage-climatisation",
        nl: { label: "Depannage airco / warmtepomp" },
      },
      {
        id: "installation-clim",
        price: { label: "Installation de climatisation", note: "Selon le nombre d'unités" },
        service: "climatisation/installation-climatisation",
        nl: { label: "Airco plaatsen", note: "Volgens het aantal units" },
      },
      {
        id: "entretien-airco",
        price: { key: "entretienAirco", label: "Entretien airco" },
        service: "climatisation/entretien-climatisation",
        nl: { label: "Onderhoud airco" },
      },
    ],
  },
];

export interface ResolvedTarif {
  id: string;
  label: string;
  note?: string;
  amount?: number;
  originalAmount?: number;
  href: string;
  serviceName: string;
}

export interface ResolvedGroup {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  lines: ResolvedTarif[];
}

export function getTarifGroups(locale: Locale = defaultLocale): ResolvedGroup[] {
  // Même ordre que la navigation (priorité commerciale, Q13).
  const rank = (id: string) => categoryOrder.indexOf(id as (typeof categoryOrder)[number]);
  return [...groups].sort((a, b) => rank(a.id) - rank(b.id)).map((group) => ({
    id: group.id,
    label: locale === "nl" ? group.nl.label : group.label,
    shortLabel: locale === "nl" ? group.nl.shortLabel : group.shortLabel,
    href: categoryPath(group.id, locale),
    lines: group.lines.map((line) => {
      const price = resolvePrice(line.price, locale);
      // Néerlandais : la page traduite (toutes le sont), sinon la page française.
      const service = (locale !== "fr" && findServiceByRef(line.service, locale)) || getServiceByRef(line.service);
      const label = locale === "nl" ? (line.nl?.label ?? (line.price.label ? undefined : price.label)) : price.label;
      return {
        id: line.id,
        label: label ?? price.label,
        note: locale === "nl" ? (line.nl?.note ?? (line.price.note ? undefined : price.note)) : price.note,
        amount: price.amount,
        originalAmount: price.originalAmount,
        href: serviceHref(service),
        serviceName: service.name,
      };
    }),
  }));
}

/** Conditions générales affichées sous la carte. `value: null` = encore à confirmer. */
/**
 * Conditions affichées sous la carte des prix. Une condition encore non décidée
 * (`null`) n'est pas affichée du tout : le site ne dit rien plutôt que « à
 * confirmer » (04-reponses, Q22).
 */
export function getPolicyRows(locale: Locale = defaultLocale): { label: string; value: string }[] {
  const nl = locale === "nl";
  const rows = [
    { label: nl ? "Depannage na het 1e uur" : "Dépannage au-delà de la 1ère heure", value: nl ? pricingPolicyNl.extraHour : pricingPolicy.extraHour },
    { label: nl ? "Weekend" : "Week-end", value: pricingPolicy.weekendSurcharge },
    { label: nl ? "Feestdagen" : "Jours fériés", value: pricingPolicy.holidaySurcharge },
    {
      label: nl ? "Spoed (interventie binnen 2 uur)" : "Urgence (intervention dans les 2 heures)",
      value: pricingPolicy.urgentSurcharge,
    },
    { label: nl ? "Verplaatsing" : "Déplacement", value: nl ? pricingPolicyNl.travel : pricingPolicy.travel },
    { label: nl ? "Betaling" : "Paiement", value: nl ? pricingPolicyNl.payment : pricingPolicy.payment },
    { label: nl ? "Aanbod onderhoud gasketel" : "Offre entretien gaz", value: nl ? pricingPolicyNl.promoValidity : pricingPolicy.promoValidity },
  ];
  return rows.flatMap((row) => (row.value ? [{ label: row.label, value: row.value }] : []));
}
