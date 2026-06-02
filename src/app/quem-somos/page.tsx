import type { Metadata } from "next";

import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Conheça a proposta da Lacrei Saúde para uma jornada de cuidado mais inclusiva, segura e respeitosa.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
    </>
  );
}
