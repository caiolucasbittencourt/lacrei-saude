import type { Metadata } from "next";

import { ProfessionalList } from "@/components/professionals/ProfessionalList";
import { ProfessionalsHero } from "@/components/professionals/ProfessionalsHero";
import { getProfessionals } from "@/services/professionals";

export const metadata: Metadata = {
  title: "Profissionais",
  description:
    "Busque profissionais fictícios por especialidade, cidade, modalidade e perfil de cuidado inclusivo.",
};

export default async function ProfessionalsPage() {
  const professionals = await getProfessionals();

  return (
    <>
      <ProfessionalsHero />
      <ProfessionalList professionals={professionals} />
    </>
  );
}
