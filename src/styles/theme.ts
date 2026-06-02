type HexColor = `#${string}`;
type RgbColor = `rgb(${string})`;
type RgbaColor = `rgba(${string})`;
type ColorValue = HexColor | RgbColor | RgbaColor | "transparent";
type CssLength = "0" | "auto" | `${number}px` | `${number}rem` | `${number}%`;
type FontWeight = 400 | 600 | 700 | 800;
type GradientValue = `linear-gradient(${string})`;

type ThemeContract = {
  colors: Record<string, ColorValue | Record<string, ColorValue>>;
  fonts: {
    family: string;
    weights: Record<string, FontWeight>;
    sizes: Record<string, CssLength>;
    lineHeights: Record<string, `${number}`>;
    letterSpacings: Record<string, CssLength>;
  };
  spacing: Record<string, CssLength>;
  radii: Record<string, CssLength>;
  borders: {
    widths: Record<string, CssLength>;
    styles: Record<string, string>;
    colors: Record<string, ColorValue>;
  };
  shadows: Record<string, string>;
  gradients: Record<string, GradientValue>;
  breakpoints: Record<string, `${number}px`>;
};

export const theme = {
  colors: {
    primary: "#018762",
    primaryDark: "#014C37",
    primaryDarker: "#007756",
    primaryLight: "#DFF2ED",
    primaryMid: "#4FB494",
    secondary: "#014687",
    white: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#555555",
    textMuted: "#888888",
    borderLight: "#E0F0EA",
    borderLightOverlay: "#E0F0EAcc",
    backgroundLight: "#F8FDFA",
    highlight: "#ffb340",
    warning: "#f59e0b",
    overlay: {
      dark: "rgba(1, 55, 37, 0.85)",
      medium: "rgba(1, 55, 37, 0.55)",
      light: "rgba(1, 55, 37, 0.1)",
      white: "rgba(255, 255, 255, 0.7)",
    },
    alpha: {
      white10: "rgba(255, 255, 255, 0.1)",
      white70: "rgba(255,255,255,0.7)",
      white80: "rgba(255,255,255,0.8)",
      black02: "rgba(0, 0, 0, 0.02)",
      black04: "rgba(0, 0, 0, 0.04)",
      black05: "rgba(0, 0, 0, 0.05)",
      black06: "rgba(0, 0, 0, 0.06)",
      black15: "rgba(0, 0, 0, 0.15)",
      primary05: "rgba(1, 135, 98, 0.05)",
      primary10: "rgba(1, 135, 98, 0.1)",
      primary12: "rgba(1, 135, 98, 0.12)",
    },
  },
  fonts: {
    family: "var(--font-nunito), system-ui, sans-serif",
    weights: {
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      openGraphCaption: "24px",
      openGraphSubtitle: "32px",
      openGraphTitle: "72px",
    },
    lineHeights: {
      none: "1",
      openGraph: "1.1",
      tight: "1.2",
      normal: "1.5",
      relaxed: "1.6",
    },
    letterSpacings: {
      none: "0",
      wide: "1px",
    },
  },
  spacing: {
    none: "0",
    auto: "auto",
    px1: "1px",
    px2: "2px",
    px4: "4px",
    px5: "5px",
    px6: "6px",
    px8: "8px",
    px10: "10px",
    px12: "12px",
    px16: "16px",
    px20: "20px",
    px24: "24px",
    px28: "28px",
    px32: "32px",
    px36: "36px",
    px40: "40px",
    px48: "48px",
    px64: "64px",
    px80: "80px",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    section: "4rem",
  },
  radii: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
    circle: "50%",
  },
  borders: {
    widths: {
      none: "0",
      hairline: "1px",
      md: "2px",
    },
    styles: {
      none: "none",
      solid: "solid",
    },
    colors: {
      transparent: "transparent",
      light: "#E0F0EA",
      primary: "#018762",
      primaryAlpha: "rgba(1, 135, 98, 0.1)",
      divider: "rgba(0, 0, 0, 0.15)",
      white: "#FFFFFF",
    },
  },
  shadows: {
    focusRing: "0 0 0 1px rgba(1, 55, 37, 0.1)",
    professionalCardHover: "0 4px 20px rgba(1, 135, 98, 0.12)",
    imageCard: "0 10px 30px rgba(0, 0, 0, 0.05)",
    beliefCard:
      "0 20px 40px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
    beliefCardHover:
      "0 30px 50px rgba(0, 0, 0, 0.06), 0 4px 10px rgba(1, 135, 98, 0.05)",
  },
  gradients: {
    ecosystem: "linear-gradient(to top, #014687 0%, #018762 90%)",
    overlayHorizontal:
      "linear-gradient(to right, rgba(1, 55, 37, 0.85) 0%, rgba(1, 55, 37, 0.55) 50%, rgba(1, 55, 37, 0.1) 100%)",
    overlayVertical:
      "linear-gradient(to top, rgba(1, 55, 37, 0.85) 0%, rgba(1, 55, 37, 0.55) 50%, rgba(1, 55, 37, 0.1) 100%)",
  },
  breakpoints: {
    mobile: "375px",
    tablet: "768px",
    desktop: "1024px",
    desktopMax: "1279px",
    wide: "1280px",
  },
} as const satisfies ThemeContract;

export type Theme = typeof theme;

export const media = {
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  desktopOnly: `@media (min-width: ${theme.breakpoints.desktop}) and (max-width: ${theme.breakpoints.desktopMax})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`,
} as const;
