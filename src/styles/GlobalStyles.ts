import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Material Symbols Outlined";
    font-display: block;
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/material-symbols-outlined.ttf") format("truetype");
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100%;
    margin: ${({ theme }) => theme.spacing.none};
    font-family: ${({ theme }) => theme.fonts.family};
    font-size: ${({ theme }) => theme.fonts.sizes.base};
    line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.white};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body.menu-open {
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }

  :focus-visible {
    outline: ${({ theme }) => theme.borders.widths.md} ${({ theme }) =>
      theme.borders.styles.solid} ${({ theme }) => theme.colors.primary};
    outline-offset: ${({ theme }) => theme.spacing.px4};
    box-shadow: ${({ theme }) => theme.shadows.focusRing};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
