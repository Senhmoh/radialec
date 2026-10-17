import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { getService, serviceHref } from "@/app/data/services";
import { showNl } from "@/app/data/visibility";
import { ServicePageV2 } from "@/app/sections/v2/ServicePageV2";

// Page unique « syndici » (équivalent de /professionnels) : contenu dans
// app/data/nl/services/professionnels.ts.
export function generateMetadata(): Metadata {
  const service = getService("professionnels", "syndics-coproprietes", "nl");
  return service ? pageMetadata({ title: service.metaTitle, description: service.metaDescription, path: serviceHref(service) }) : {};
}

export default function Page() {
  const service = showNl ? getService("professionnels", "syndics-coproprietes", "nl") : undefined;
  if (!service) notFound();
  setRequestLocale("nl");
  return <ServicePageV2 service={service} />;
}
