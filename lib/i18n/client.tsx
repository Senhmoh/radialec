"use client";
import { createContext, useContext, type ReactNode } from "react";
import { defaultLocale, type Locale } from "./locale";

// Langue de la page pour les composants client (en-tête, formulaires, barre mobile…).
const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
