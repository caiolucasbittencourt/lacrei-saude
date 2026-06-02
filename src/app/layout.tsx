import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StyledComponentsRegistry } from "@/lib/StyledComponentsRegistry";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lacrei-saude.local";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lacrei Saúde | Cuidado inclusivo",
    template: "%s | Lacrei Saúde",
  },
  description:
    "Plataforma responsiva para conectar pessoas LGBTQIAPN+ a profissionais de saúde preparados para um cuidado seguro e acolhedor.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    title: "Lacrei Saúde",
    description:
      "Encontre profissionais de saúde com atendimento inclusivo, seguro e respeitoso.",
    url: siteUrl,
    siteName: "Lacrei Saúde",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
