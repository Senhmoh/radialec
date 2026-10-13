import { localizedServiceRoute } from "@/app/sections/ServicePage";

// Contenu : app/data/nl/services/chauffage.ts — une page statique par service traduit.
const route = localizedServiceRoute("chauffage", "nl");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
