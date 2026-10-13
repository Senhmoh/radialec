import type { Locale } from "@/lib/i18n/locale";

export interface ZoneRegion {
  region: string;
  communes: string[];
}

export const zonesIntervention: ZoneRegion[] = [
  {
    region: "Région de Bruxelles-Capitale",
    communes: [
      "Anderlecht",
      "Auderghem",
      "Berchem-Sainte-Agathe",
      "Bruxelles-Ville",
      "Etterbeek",
      "Evere",
      "Forest",
      "Ganshoren",
      "Ixelles",
      "Jette",
      "Koekelberg",
      "Molenbeek-Saint-Jean",
      "Saint-Gilles",
      "Saint-Josse-ten-Noode",
      "Schaerbeek",
      "Uccle",
      "Watermael-Boitsfort",
      "Woluwe-Saint-Lambert",
      "Woluwe-Saint-Pierre",
    ],
  },
  {
    region: "Région flamande",
    communes: [
      "Rhode-Saint-Genèse",
      "Wezembeek-Oppem",
      "Kraainem",
      "Linkebeek",
      "Drogenbos",
      "Tervuren",
      "Overijse",
      "Hoeilaart",
      "Meise",
      "Grimbergen",
      "Keerbergen",
      "Tremelo",
      "Oud-Heverlee",
    ],
  },
  {
    region: "Région wallonne",
    communes: [
      "Lasne",
      "Waterloo",
      "La Hulpe",
      "Rixensart",
      "Braine-l'Alleud",
      "Chaumont-Gistoux",
      "Grez-Doiceau",
      "Beauvechain",
      "Incourt",
    ],
  },
];

// Noms officiels néerlandais (communes bilingues de Bruxelles et de Wallonie).
// Une commune absente garde le même nom dans les deux langues.
const namesNl: Record<string, string> = {
  "Région de Bruxelles-Capitale": "Brussels Hoofdstedelijk Gewest",
  "Région flamande": "Vlaams Gewest",
  "Région wallonne": "Waals Gewest",
  Auderghem: "Oudergem",
  "Berchem-Sainte-Agathe": "Sint-Agatha-Berchem",
  "Bruxelles-Ville": "Brussel-Stad",
  Forest: "Vorst",
  Ixelles: "Elsene",
  "Molenbeek-Saint-Jean": "Sint-Jans-Molenbeek",
  "Saint-Gilles": "Sint-Gillis",
  "Saint-Josse-ten-Noode": "Sint-Joost-ten-Node",
  Schaerbeek: "Schaarbeek",
  Uccle: "Ukkel",
  "Watermael-Boitsfort": "Watermaal-Bosvoorde",
  "Woluwe-Saint-Lambert": "Sint-Lambrechts-Woluwe",
  "Woluwe-Saint-Pierre": "Sint-Pieters-Woluwe",
  "Rhode-Saint-Genèse": "Sint-Genesius-Rode",
  "La Hulpe": "Terhulpen",
  "Braine-l'Alleud": "Eigenbrakel",
  "Grez-Doiceau": "Graven",
  Beauvechain: "Bevekom",
};

export function localeZones(locale: Locale): ZoneRegion[] {
  if (locale === "fr") return zonesIntervention;
  const name = (value: string) => namesNl[value] ?? value;
  return zonesIntervention.map((zone) => ({ region: name(zone.region), communes: zone.communes.map(name) }));
}
