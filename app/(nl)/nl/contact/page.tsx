import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "@/lib/i18n/server";
import { contactNl } from "@/app/data/nl/contact";
import { showNl } from "@/app/data/visibility";
import { ContactPage } from "@/app/sections/ContactPage";

// Contenu : app/data/nl/contact.ts ; gabarit : app/sections/ContactPage.tsx.
export const metadata = pageMetadata({
  title: contactNl.metaTitle,
  description: contactNl.metaDescription,
  path: "/nl/contact",
});

export default function Page() {
  if (!showNl) notFound();
  setRequestLocale("nl");
  return <ContactPage content={contactNl} />;
}
