import { pageMetadata } from "@/lib/seo";
import { contact } from "@/app/data/contact";
import { ContactPage } from "@/app/sections/ContactPage";

// Contenu : app/data/contact.ts ; gabarit partagé avec /nl/contact : app/sections/ContactPage.tsx.
export const metadata = pageMetadata({
  title: contact.metaTitle,
  description: contact.metaDescription,
  path: "/contact",
});

export default function Page() {
  return <ContactPage content={contact} />;
}
