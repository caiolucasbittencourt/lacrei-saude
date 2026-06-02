import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePathname } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { renderWithTheme } from "@/test/test-utils";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockedUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe("Header", () => {
  afterEach(() => {
    document.body.className = "";
    jest.clearAllMocks();
  });

  it("renders navigation links and marks the active route", async () => {
    const user = userEvent.setup();
    mockedUsePathname.mockReturnValue("/profissionais");

    renderWithTheme(<Header />);

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    const mobileNavigation = screen.getByRole("navigation", {
      name: "Navegação principal mobile",
    });

    expect(
      within(mobileNavigation).getByRole("link", { name: "Home" }),
    ).toBeInTheDocument();
    expect(
      within(mobileNavigation).getByRole("link", { name: "Quem somos" }),
    ).toBeInTheDocument();
    expect(
      within(mobileNavigation).getByRole("link", { name: "Profissionais" }),
    ).toHaveAttribute("aria-current", "page");
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    mockedUsePathname.mockReturnValue("/");

    renderWithTheme(<Header />);

    const menuButton = screen.getByRole("button", { name: "Abrir menu" });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    const mobileNavigation = screen.getByRole("navigation", {
      name: "Navegação principal mobile",
    });
    expect(
      within(mobileNavigation).getByRole("link", { name: "Quem somos" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Fechar menu" }));

    expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
