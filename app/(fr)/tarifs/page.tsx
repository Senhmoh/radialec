import { pageMetadata } from "@/lib/seo";
import { tarifs } from "@/app/data/tarifs-page";
import { TarifsPage } from "@/app/sections/TarifsPage";

// Contenu : app/data/tarifs-page.ts ; gabarit partagé avec /nl/tarieven : app/sections/TarifsPage.tsx.
export const metadata = pageMetadata({
  title: tarifs.metaTitle,
  description: tarifs.metaDescription,
  path: "/tarifs",
});

export default function Page() {
  return <TarifsPage content={tarifs} />;
}
