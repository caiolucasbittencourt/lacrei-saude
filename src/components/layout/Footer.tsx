"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Container } from "@/components/ui/Container";

type SocialIconName = "facebook" | "instagram" | "linkedin" | "mail";

const footerColumns = [
  {
    title: "Lacrei Saúde",
    links: [
      { href: "/quem-somos", label: "Quem Somos" },
      { href: "/quem-somos", label: "Nosso Propósito" },
      { href: "/quem-somos", label: "Missão, Visão e Valor" },
      { href: "/quem-somos", label: "Acessibilidade" },
    ],
  },
  {
    title: "Saúde",
    links: [
      { href: "/profissionais", label: "Buscar atendimento" },
      { href: "/profissionais", label: "Oferecer atendimento" },
    ],
  },
  {
    title: "Segurança e Privacidade",
    links: [
      { href: "/quem-somos", label: "Política de Privacidade" },
      { href: "/quem-somos", label: "Termos de Uso" },
      { href: "/quem-somos", label: "Direitos de Titular" },
    ],
  },
];

const socialLinks: Array<{
  href: string;
  icon: SocialIconName;
  label: string;
}> = [
  { href: "https://lacreisaude.com.br", label: "Facebook", icon: "facebook" },
  {
    href: "https://lacreisaude.com.br",
    label: "Instagram",
    icon: "instagram",
  },
  { href: "https://lacreisaude.com.br", label: "LinkedIn", icon: "linkedin" },
  { href: "mailto:contato@lacrei-saude.local", label: "E-mail", icon: "mail" },
];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "facebook") {
    return (
      <SocialSvg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M14.2 8.2H16V5.1h-2.4c-3 0-4.8 1.8-4.8 4.8v2H6.4v3.2h2.4V21h3.4v-5.9h2.8l.7-3.2h-3.5V10c0-1.1.7-1.8 2-1.8Z"
          fill="currentColor"
          stroke="none"
        />
      </SocialSvg>
    );
  }

  if (name === "instagram") {
    return (
      <SocialSvg aria-hidden="true" viewBox="0 0 24 24">
        <rect height="15.5" rx="4" width="15.5" x="4.25" y="4.25" />
        <circle cx="12" cy="12" r="3.35" />
        <circle cx="16.85" cy="7.15" fill="currentColor" r="0.75" />
      </SocialSvg>
    );
  }

  if (name === "linkedin") {
    return (
      <SocialSvg aria-hidden="true" viewBox="0 0 24 24">
        <rect height="15.5" rx="2" width="15.5" x="4.25" y="4.25" />
        <path d="M8.3 10.6v5.4" />
        <path d="M8.3 8.1v.1" />
        <path d="M11.5 16v-5.4" />
        <path d="M11.5 12.9c0-1.4.9-2.4 2.3-2.4 1.5 0 2.4 1 2.4 2.7V16" />
      </SocialSvg>
    );
  }

  return (
    <SocialSvg aria-hidden="true" viewBox="0 0 24 24">
      <rect height="12.5" rx="1.6" width="17" x="3.5" y="6" />
      <path d="m4.5 7.2 7.5 5.7 7.5-5.7" />
    </SocialSvg>
  );
}

export function Footer() {
  return (
    <FooterShell>
      <FooterInner>
        <BrandColumn>
          <LogoLink href="/" aria-label="Lacrei Saúde - ir para home">
            <Image
              alt="Lacrei Saúde"
              height={97}
              src="/images/global-logo.svg"
              width={169}
            />
          </LogoLink>

          <SocialList aria-label="Redes sociais e contato">
            {socialLinks.map(({ href, icon, label }) => (
              <SocialItem key={label}>
                <SocialLink href={href} aria-label={label}>
                  <SocialIcon name={icon} />
                </SocialLink>
              </SocialItem>
            ))}
          </SocialList>
        </BrandColumn>

        {footerColumns.map((column) => (
          <FooterNav key={column.title} aria-label={column.title}>
            <FooterTitle>{column.title}</FooterTitle>
            <FooterList>
              {column.links.map((item) => (
                <li key={`${column.title}-${item.label}`}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </FooterList>
          </FooterNav>
        ))}
      </FooterInner>
    </FooterShell>
  );
}

const FooterShell = styled.footer`
  border-top: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  background: ${({ theme }) => theme.colors.white};
`;

const FooterInner = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px40};
  padding-block: ${({ theme }) => theme.spacing.px48};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(180px, 1.15fr) repeat(3, minmax(0, 1fr));
    align-items: start;
  }
`;

const BrandColumn = styled.div`
  display: grid;
  width: fit-content;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing.px40};
`;

const LogoLink = styled(Link)`
  display: inline-flex;
`;

const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.px28};
  margin: ${({ theme }) => theme.spacing.none};
  padding: ${({ theme }) => theme.spacing.none};
  list-style: none;
`;

const SocialItem = styled.li`
  display: flex;
`;

const SocialLink = styled.a`
  display: inline-grid;
  width: ${({ theme }) => theme.spacing.px32};
  height: ${({ theme }) => theme.spacing.px32};
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const SocialSvg = styled.svg`
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.9;
`;

const FooterNav = styled.nav`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing.px24};
`;

const FooterTitle = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
`;

const FooterList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};
  margin: ${({ theme }) => theme.spacing.none};
  padding: ${({ theme }) => theme.spacing.none};
  list-style: none;
`;

const FooterLink = styled(Link)`
  width: fit-content;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
