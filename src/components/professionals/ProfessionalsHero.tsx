"use client";

import styled from "styled-components";

import { Container } from "@/components/ui/Container";
import { media } from "@/styles/theme";

export function ProfessionalsHero() {
  return (
    <HeroSection aria-labelledby="professionals-title">
      <HeroContent>
        <Eyebrow>Profissionais</Eyebrow>
        <Title id="professionals-title">
          Busque atendimento com informações claras antes da consulta.
        </Title>
        <Lead>
          Filtre a rede demonstrativa por especialidade, modalidade e termos de
          busca para encontrar uma opção compatível com sua necessidade.
        </Lead>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background:
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primaryLight} 0%,
      ${({ theme }) => theme.colors.white} 65%
    );
`;

const HeroContent = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};
  padding-block: ${({ theme }) => theme.spacing.px48};

  ${media.desktop} {
    padding-block: ${({ theme }) => theme.spacing.px64};
  }
`;

const Eyebrow = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  letter-spacing: ${({ theme }) => theme.fonts.letterSpacings.wide};
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 820px;
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: clamp(
    ${({ theme }) => theme.fonts.sizes["3xl"]},
    6vw,
    ${({ theme }) => theme.fonts.sizes["4xl"]}
  );
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
`;

const Lead = styled.p`
  max-width: 720px;
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;
