import type { Metadata } from "next";

import { CtaSection } from "@/components/home/CtaSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Cuidado inclusivo",
  description:
    "Encontre profissionais de saúde preparados para atender pessoas LGBTQIAPN+ com respeito, escuta e segurança.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <CtaSection />
    </>
  );
}
