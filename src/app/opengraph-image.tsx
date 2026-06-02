import { ImageResponse } from "next/og";

import { theme } from "@/styles/theme";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: theme.gradients.ecosystem,
          color: theme.colors.white,
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: theme.spacing.px64,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: theme.fonts.sizes.openGraphCaption,
              fontWeight: theme.fonts.weights.bold,
              letterSpacing: theme.fonts.letterSpacings.wide,
              marginBottom: theme.spacing.px24,
              textTransform: "uppercase",
            }}
          >
            Lacrei Saúde
          </div>
          <div
            style={{
              fontSize: theme.fonts.sizes.openGraphTitle,
              fontWeight: theme.fonts.weights.extrabold,
              lineHeight: theme.fonts.lineHeights.openGraph,
              marginBottom: theme.spacing.px24,
            }}
          >
            Cuidado inclusivo para todos os encontros de saúde.
          </div>
          <div
            style={{
              fontSize: theme.fonts.sizes.openGraphSubtitle,
              lineHeight: theme.fonts.lineHeights.tight,
            }}
          >
            Profissionais verificados, escuta respeitosa e uma jornada mais
            segura para pessoas LGBTQIAPN+.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
