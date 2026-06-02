"use client";

import styled from "styled-components";

import { Container } from "@/components/ui/Container";
import { media } from "@/styles/theme";

export function AboutHero() {
  return (
    <HeroSection aria-labelledby="about-title">
      <HeroGrid>
        <Content>
          <Eyebrow>Quem somos</Eyebrow>
          <Title id="about-title">
            Uma iniciativa para tornar a saúde mais acessível, respeitosa e
            segura.
          </Title>
        </Content>
        <Lead>
          A Lacrei Saúde nasce da ideia de que acesso ao cuidado não deve exigir
          explicações repetidas sobre identidade, orientação ou vivências. A
          plataforma organiza caminhos para que a pessoa encontre profissionais
          alinhados com escuta qualificada e prática inclusiva.
        </Lead>
      </HeroGrid>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.ecosystem};
`;

const HeroGrid = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px32};
  padding-block: ${({ theme }) => theme.spacing.px64};

  ${media.desktop} {
    grid-template-columns: 1fr 0.8fr;
    align-items: end;
    padding-block: ${({ theme }) => theme.spacing.px80};
  }
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};
`;

const Eyebrow = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.alpha.white80};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  letter-spacing: ${({ theme }) => theme.fonts.letterSpacings.wide};
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 820px;
  margin: ${({ theme }) => theme.spacing.none};
  font-size: clamp(
    ${({ theme }) => theme.fonts.sizes["3xl"]},
    6vw,
    ${({ theme }) => theme.fonts.sizes["4xl"]}
  );
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
`;

const Lead = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.alpha.white80};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;
