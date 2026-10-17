import { localizedServiceRoute } from "@/app/sections/ServicePage";
import { serviceOgImage } from "@/lib/og";

export const alt = "Radialec — dienst in Brussel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const generateStaticParams = localizedServiceRoute("electricite", "nl").generateStaticParams;

export default serviceOgImage("electricite", "nl");
