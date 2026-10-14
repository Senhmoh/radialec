import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { pageMetadata } from "@/lib/seo";
import { company, contactActionHref } from "@/app/data/company";
import { prices } from "@/app/data/pricing";
import { gasLeakAlert } from "@/app/data/safety";
import { AlertV2 } from "@/app/sections/v2/content";
import { ServiceHeroV2 } from "@/app/sections/v2/ServiceHeroV2";
import { backgrounds } from "@/app/sections/v2/tones";

// Page d'arrivée de l'autocollant posé sur la chaudière (QR radialec.be/s, voir
// app/data/short-links.ts). Le client a un souci ou veut reprogrammer son
// entretien : il veut appeler, pas lire (brief : prompts/refonte/09-qr-code.md).
// Non indexée, hors menus et hors plan du site.
export const metadata = pageMetadata({
  title: "Votre chaudière Radialec",
  description: `Un souci avec votre chaudière ? Appelez Radialec : on décroche ${company.promises.emergency} pour les urgences, un technicien passe sous 24h.`,
  path: "/ma-chaudiere",
  noindex: true,
});

// Les deux autres raisons de scanner l'autocollant, après l'appel.
const actions = [
  {
    title: "Reprogrammer l'entretien",
    text: "Choisissez votre créneau en ligne, ou appelez-nous.",
    href: contactActionHref("rendezVous", "chauffage/entretien-chaudiere"),
  },
  {
    title: "Être rappelé",
    text: `Laissez votre numéro, on vous rappelle ${company.promises.callback ?? "rapidement"}.`,
    href: contactActionHref("rappel", "chauffage"),
  },
];

export default function MaChaudierePage() {
  const bg = backgrounds();
  const alert = bg.attach();

  return (
    <>
      <ServiceHeroV2
        breadcrumbs={[]}
        eyebrow="Votre chaudière Radialec"
        title="Un souci avec votre chaudière ? Appelez-nous."
        intro={`On décroche ${company.promises.emergency} pour les urgences. Un technicien passe sous 24h, 7j/7, et vous connaissez le prix avant qu'il commence.`}
        panel={
          <div className="rounded-[28px] bg-white p-6 text-night shadow-[0_24px_60px_-32px_rgba(11,18,34,0.4)] ring-1 ring-night/[0.06] sm:p-8">
            <ul className="divide-y divide-night/[0.08]">
              {actions.map((action, index) => (
                <li key={action.href}>
                  <Link href={action.href} className="group flex items-start gap-4 py-5 first:pt-0">
                    <span className="v2-wide pt-1 font-display text-sm font-bold text-flame">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">
                      <span className="v2-semi block font-display text-lg font-bold group-hover:text-flame">{action.title}</span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-night/65">{action.text}</span>
                    </span>
                    <BsArrowRight className="mt-1.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-2 border-t border-night/[0.08] pt-5 text-sm text-night/65">
              <strong className="font-semibold text-night">Dépannage : {prices.depannage.amount}€ TVAC</strong>, déplacement, diagnostic et
              première heure compris.
            </p>
          </div>
        }
        facts={[]}
        context="chauffage/depannage-chaudiere"
        intent="urgence"
        topic="Ma chaudière (autocollant)"
      />
      {/* Consignes « odeur de gaz » validées (Q33), mot pour mot : l'autocollant est posé sur la chaudière. */}
      <AlertV2 tone="danger" {...gasLeakAlert} bg={alert.tone} attached={alert.attached} />
    </>
  );
}
