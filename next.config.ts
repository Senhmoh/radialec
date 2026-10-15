import type { NextConfig } from "next";
import { company } from "./app/data/company";
import { nlLiveSegments, showNl } from "./app/data/visibility";
import { shortLinkRedirects } from "./app/data/short-links";

const nextConfig: NextConfig = {
  // Deux mises en page racines (français, néerlandais) : la 404 des adresses
  // inconnues est app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  // Version néerlandaise pas encore en ligne (app/data/visibility.ts) : toute
  // adresse /nl est envoyée vers une adresse inexistante, donc la 404 globale
  // (française, gabarit complet). Avant le build : les pages /nl ne sont pas servies.
  async rewrites() {
    return {
      beforeFiles: showNl
        ? []
        : [
            { source: "/nl", destination: "/nl-indisponible" },
            // Sauf les pages déjà en ligne (offre flyer : /nl/aanbod) et l'image de partage néerlandaise.
            { source: `/nl/:path((?!(?:${[...nlLiveSegments, "opengraph-image"].join("|")})(?:$|[-/])).*)`, destination: "/nl-indisponible" },
          ],
      afterFiles: [],
      fallback: [],
    };
  },
  // Refonte 2026 : anciennes URL redirigées (301) vers leur équivalent, au cas
  // où elles auraient été indexées ou partagées.
  async redirects() {
    return [
      // Section ventilation supprimée.
      { source: "/ventilation", destination: "/climatisation", permanent: true },
      { source: "/ventilation/:slug*", destination: "/climatisation", permanent: true },
      // Dépannage chaudière : URL alignée sur la requête principale.
      { source: "/chauffage/reparation-chaudiere", destination: "/chauffage/depannage-chaudiere", permanent: true },
      // Professionnels : la catégorie et l'unique page service ne font plus qu'une.
      { source: "/professionnels/syndics-coproprietes", destination: "/professionnels", permanent: true },
      // Lien court des cartes QR, SMS et WhatsApp : ouvre le formulaire d'avis Google.
      // Temporaire (307) : la cible peut changer sans que les navigateurs gardent l'ancienne.
      { source: "/avis", destination: company.google.reviewUrl, permanent: false },
      // Liens courts des QR codes imprimés (flyer /f, autocollant /s, carte /c) : app/data/short-links.ts.
      ...shortLinkRedirects(),
    ];
  },
};

export default nextConfig;
