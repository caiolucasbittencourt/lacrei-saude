import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProfessionalList } from "@/components/professionals/ProfessionalList";
import { professionals } from "@/data/professionals";
import { renderWithTheme } from "@/test/test-utils";

describe("ProfessionalList", () => {
  it("filters professionals by search text", async () => {
    const user = userEvent.setup();

    renderWithTheme(<ProfessionalList professionals={professionals} />);

    expect(screen.getAllByTestId("professional-card")).toHaveLength(6);

    await user.type(screen.getByLabelText("Buscar"), "Samuel");

    expect(screen.getAllByTestId("professional-card")).toHaveLength(1);
    expect(screen.getByText("Samuel Pereira")).toBeInTheDocument();
    expect(screen.queryByText("Marina Alves")).not.toBeInTheDocument();
  });

  it("filters by specialty and shows an empty state", async () => {
    const user = userEvent.setup();

    renderWithTheme(<ProfessionalList professionals={professionals} />);

    await user.selectOptions(screen.getByLabelText("Especialidade"), "Nutrição");

    expect(screen.getAllByTestId("professional-card")).toHaveLength(1);
    expect(screen.getByText("Renata Lima")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Buscar"), "cidade inexistente");

    expect(screen.getByRole("status")).toHaveTextContent(
      "Nenhum profissional encontrado",
    );
  });
});
