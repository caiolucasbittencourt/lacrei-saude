"use client";

import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

export function StyledComponentsRegistry({ children }: PropsWithChildren) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  const themedChildren = (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  if (typeof window !== "undefined") {
    return themedChildren;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {themedChildren}
    </StyleSheetManager>
  );
}
