import localFont from "next/font/local";
import { Archivo } from "next/font/google";

// Police de la refonte : Archivo (gratuite, Google Fonts), variable en graisse
// et en largeur — titres en version large (font-stretch), texte en largeur normale.
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Geist : uniquement le mot « Radialec » du logo (variable sur <html>, voir SiteShell).
export const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
