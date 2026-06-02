import { screen } from "@testing-library/react";

import { ProfessionalCard } from "@/components/professionals/ProfessionalCard";
import { renderWithTheme } from "@/test/test-utils";
import type { Professional } from "@/types/professional";

const professional: Professional = {
  id: "teste",
  name: "Alex Nogueira",
  specialty: "Psicologia",
  location: "Salvador, BA",
  modality: "Online",
  verified: true,
  description: "Atendimento focado em saúde mental e acolhimento.",
  profileTags: ["Branca", "Mulher cis", "Heterossexual", "Atende convênio"],
};

describe("ProfessionalCard", () => {
  it("shows professional details and verified badge", () => {
    renderWithTheme(<ProfessionalCard professional={professional} />);

    expect(screen.getByText("Alex Nogueira")).toBeInTheDocument();
    expect(screen.getByText("Psicologia")).toBeInTheDocument();
    expect(screen.getByText("Branca")).toBeInTheDocument();
    expect(screen.getByText("Mulher cis")).toBeInTheDocument();
    expect(screen.getByText("Heterossexual")).toBeInTheDocument();
    expect(screen.getByText("Atende convênio")).toBeInTheDocument();
    expect(screen.queryByText("Salvador, BA")).not.toBeInTheDocument();
    expect(screen.queryByText("Online")).not.toBeInTheDocument();
    expect(screen.getByText("Profissional verificado")).toBeInTheDocument();
  });
});
