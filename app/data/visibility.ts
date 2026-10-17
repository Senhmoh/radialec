// Brouillons (`draft: true`) : visibles en développement (`npm run dev`) et sur
// un déploiement d'aperçu où SHOW_DRAFTS=1, jamais sur le site en production :
// pas de page, pas d'entrée dans le plan du site, les menus ni la barre mobile.
// Un contenu passe en ligne quand le gestionnaire l'a relu (draft: false).

export const showDrafts = process.env.NODE_ENV !== "production" || process.env.SHOW_DRAFTS === "1";

export function isVisible(item: { draft?: boolean }): boolean {
  return !item.draft || showDrafts;
}

// Version néerlandaise (/nl) : publiée le 17/10/2026, après relecture (accord du
// propriétaire). Repasser à false la masque à nouveau en production (404 sur /nl,
// pas de sélecteur de langue, pas de hreflang ni d'entrée dans le plan du site) ;
// elle reste alors visible en développement et sur un aperçu SHOW_DRAFTS=1.
export const nlPublished = true;
export const showNl = nlPublished || showDrafts;

// Pages néerlandaises déjà en ligne avant le reste (/nl/<segment>) : la page
// d'offre du flyer néerlandais (lien court /fn, 15/10/2026). Tant que le site
// néerlandais est masqué, leurs liens vers d'autres pages mènent aux pages
// françaises (lib/i18n/routes.ts, routeLocale).
export const nlLiveSegments = ["aanbod"];
