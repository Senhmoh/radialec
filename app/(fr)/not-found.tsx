import { NotFoundContent } from "@/app/sections/NotFoundContent";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
