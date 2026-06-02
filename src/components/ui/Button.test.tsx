import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "@/components/ui/Button";
import { renderWithTheme } from "@/test/test-utils";

describe("Button", () => {
  it("renders as a link when href is provided", () => {
    renderWithTheme(
      <Button href="/profissionais" variant="outline">
        Ver profissionais
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Ver profissionais" });

    expect(link).toHaveAttribute("href", "/profissionais");
    expect(link).toHaveAttribute("data-variant", "outline");
  });

  it("renders as a native button and handles clicks", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    renderWithTheme(<Button onClick={onClick}>Confirmar</Button>);

    await user.click(screen.getByRole("button", { name: "Confirmar" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
