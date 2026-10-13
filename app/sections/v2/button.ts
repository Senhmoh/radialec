import { cn } from "@/lib/utils";

// Classes des boutons du design refondu (partagées par ui.tsx et les composants client).

export type V2Variant = "primary" | "light" | "dark" | "outline" | "outlineLight";

const variantClass: Record<V2Variant, string> = {
  primary: "v2-btn-primary",
  light: "bg-white text-night shadow-[0_12px_32px_-14px_rgba(0,0,0,0.45)] hover:bg-chalk",
  dark: "bg-night text-white hover:bg-black",
  outline: "border border-night/15 bg-white text-night hover:border-night/40",
  outlineLight: "border border-white/25 text-white hover:border-white/50 hover:bg-white/10",
};

export function btn(variant: V2Variant, className?: string) {
  return cn("v2-btn", variantClass[variant], className);
}
