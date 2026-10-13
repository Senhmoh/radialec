import type { StaticImageData } from "next/image";

import vaillant from "@/assets/vaillant.png";
import bulex from "@/assets/blx.png";
import buderus from "@/assets/buderus.png";
import bosch from "@/assets/bosch.png";
import junkers from "@/assets/junkers.png";
import viessmann from "@/assets/viessmann.png";
import chaffoteaux from "@/assets/chaffoteaux.png";

import environnement from "@/assets/enviro.png";
import vlaams from "@/assets/vlaams.png";
import wallonie from "@/assets/wallo.png";

export interface Logo {
  src: StaticImageData;
  alt: string;
  /** Texte alternatif néerlandais, s'il diffère (nom officiel de l'organisme). */
  altNl?: string;
}

// Marques de chaudières installées et entretenues (logos réels du repo). C'est
// la liste officielle des marques du site (réponse Q24 du 08/10/2026 : « celles
// qu'on a en logo ») : les textes la citent via `boilerBrandNames`, jamais
// « toutes les marques ». Aucun logo de climatisation / électricité n'existe encore.
export const boilerBrands: Logo[] = [
  { src: vaillant, alt: "Vaillant" },
  { src: bulex, alt: "Bulex" },
  { src: bosch, alt: "Bosch" },
  { src: buderus, alt: "Buderus" },
  { src: junkers, alt: "Junkers" },
  { src: viessmann, alt: "Viessmann" },
  { src: chaffoteaux, alt: "Chaffoteaux" },
];

const brandList = (and: string) => {
  const names = boilerBrands.map((brand) => brand.alt);
  return `${names.slice(0, -1).join(", ")} ${and} ${names[names.length - 1]}`;
};

/** « Vaillant, Bulex, Bosch, Buderus, Junkers, Viessmann et Chaffoteaux ». */
export const boilerBrandNames = brandList("et");

/** Néerlandais : « … Viessmann en Chaffoteaux ». */
export const boilerBrandNamesNl = brandList("en");

// Agréments régionaux (Bruxelles, Flandre, Wallonie).
export const certifications: Logo[] = [
  { src: environnement, alt: "Bruxelles Environnement", altNl: "Leefmilieu Brussel" },
  { src: vlaams, alt: "VEKA – Vlaams Energie- en Klimaatagentschap" },
  { src: wallonie, alt: "Wallonie Environnement", altNl: "Wallonië Leefmilieu" },
];
