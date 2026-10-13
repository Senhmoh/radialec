import type { Metadata } from "next";
import "@/app/globals.css";
import { NotFoundContent } from "@/app/sections/NotFoundContent";
import { SiteShell } from "@/app/sections/v2/SiteShell";

// Page 404 des adresses inconnues (le site a deux mises en page racines, une par
// langue : la 404 globale reprend le gabarit français). Option
// experimental.globalNotFound de next.config.ts.
export const metadata: Metadata = {
  title: "Page introuvable | Radialec",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <SiteShell locale="fr">
      <NotFoundContent />
    </SiteShell>
  );
}
