import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "@/lib/i18n/server";
import { showNl } from "@/app/data/visibility";
import { CategoryPage, categoryMetadata } from "@/app/sections/CategoryPage";

// Contenu : app/data/nl/categories.ts (hub) et app/data/nl/services/climatisation.ts (cartes).
export function generateMetadata(): Metadata {
  return showNl ? categoryMetadata("climatisation", "nl") : {};
}

export default function Page() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return <CategoryPage category="climatisation" />;
}
