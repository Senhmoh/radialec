// Brouillons (`draft: true`) : visibles en développement (`npm run dev`) et sur
// un déploiement d'aperçu où SHOW_DRAFTS=1, jamais sur le site en production :
// pas de page, pas d'entrée dans le plan du site, les menus ni la barre mobile.
// Un contenu passe en ligne quand le gestionnaire l'a relu (draft: false).

export const showDrafts = process.env.NODE_ENV !== "production" || process.env.SHOW_DRAFTS === "1";

export function isVisible(item: { draft?: boolean }): boolean {
  return !item.draft || showDrafts;
}

// Version néerlandaise (/nl) : traduction à faire relire par un néerlandophone
// avant la mise en ligne. Tant que nlPublished est false, elle n'existe qu'en
// développement et sur un aperçu SHOW_DRAFTS=1 (pas de page /nl en production,
// pas de sélecteur de langue, pas de hreflang ni d'entrée dans le plan du site).
export const nlPublished = false;
export const showNl = nlPublished || showDrafts;
