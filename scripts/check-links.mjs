// Vérifie les liens internes de toutes les pages du plan du site (les deux
// langues quand le néerlandais est visible) sur un serveur lancé :
//   npm run dev   (ou npm run build && npm run start)
//   npm run check:links            → http://localhost:3000
//   npm run check:links -- http://localhost:3100
// À lancer avant de passer nlPublished à true (app/data/visibility.ts) : une
// page néerlandaise ne doit jamais renvoyer vers une adresse inexistante.

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const status = new Map();
async function check(path) {
  if (!status.has(path)) status.set(path, fetch(`${base}${path}`, { redirect: "manual" }).then((r) => r.status));
  return status.get(path);
}

const broken = [];
for (const page of pages) {
  const html = await (await fetch(`${base}${page}`)).text();
  const links = new Set(
    [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]).filter((href) => !href.startsWith("/_next") && !/\.\w{2,4}$/.test(href))
  );
  for (const link of links) {
    const code = await check(link);
    // 307/308 : redirections voulues (/avis, anciennes adresses).
    if (code >= 400) broken.push(`${code}  ${page}  →  ${link}`);
  }
}

console.log(`${pages.length} pages vérifiées, ${status.size} liens internes distincts.`);
if (broken.length) {
  console.log(`\n${broken.length} lien(s) cassé(s) :\n${broken.join("\n")}`);
  process.exit(1);
}
console.log("Aucun lien cassé.");
