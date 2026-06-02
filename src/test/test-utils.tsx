import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";

export function renderWithTheme(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}
