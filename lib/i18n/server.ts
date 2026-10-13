/// <reference types="react/canary" />
import { cache } from "react";
import { defaultLocale, type Locale } from "./locale";

// Langue de la page en cours de rendu, pour les composants serveur (sans la
// faire passer en props partout). Mémorisée le temps d'un rendu par
// React.cache ; les pages et la mise en page néerlandaises appellent
// setRequestLocale("nl") avant de rendre quoi que ce soit. Par défaut : français.
const store = cache(() => ({ locale: defaultLocale as Locale }));

export function setRequestLocale(locale: Locale): void {
  store().locale = locale;
}

export function getRequestLocale(): Locale {
  return store().locale;
}
