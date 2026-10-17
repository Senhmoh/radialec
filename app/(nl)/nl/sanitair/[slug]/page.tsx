import { localizedServiceRoute } from "@/app/sections/ServicePage";

// Contenu : app/data/nl/services/plomberie.ts — une page statique par service traduit.
const route = localizedServiceRoute("plomberie", "nl");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
