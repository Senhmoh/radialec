import { localizedServiceRoute } from "@/app/sections/ServicePage";

// Contenu : app/data/nl/services/climatisation.ts — une page statique par service traduit.
const route = localizedServiceRoute("climatisation", "nl");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
