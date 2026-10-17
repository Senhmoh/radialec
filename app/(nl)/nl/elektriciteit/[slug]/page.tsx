import { localizedServiceRoute } from "@/app/sections/ServicePage";

// Contenu : app/data/nl/services/electricite.ts — une page statique par service traduit.
const route = localizedServiceRoute("electricite", "nl");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
