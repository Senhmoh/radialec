import { pageMetadata } from "@/lib/seo";
import { home } from "@/app/data/home";
import { HomePage } from "@/app/sections/HomePage";

// Contenu : app/data/home.ts ; gabarit partagé avec /nl : app/sections/HomePage.tsx.
export const metadata = pageMetadata({
  title: home.metaTitle,
  description: home.metaDescription,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return <HomePage content={home} />;
}
