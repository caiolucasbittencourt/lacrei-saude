"use client";

import Image from "next/image";
import styled from "styled-components";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { media } from "@/styles/theme";

export function Hero() {
  return (
    <HeroSection aria-labelledby="home-hero-title">
      <HeroImage
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        src="/images/greetings-banner-image.png"
      />
      <HeroOverlay aria-hidden="true" />
      <HeroContent>
        <Content>
          <Eyebrow>Saúde inclusiva e conectada</Eyebrow>
          <Title id="home-hero-title">
            Encontre cuidado profissional com respeito desde o primeiro contato.
          </Title>
          <Lead>
            A Lacrei Saúde aproxima pessoas LGBTQIAPN+ de profissionais
            preparados para escutar, orientar e acompanhar com segurança.
          </Lead>

          <Actions>
            <Button href="/profissionais" size="lg">
              Ver profissionais
              <MaterialIcon aria-hidden="true" icon="arrow_forward" size={20} />
            </Button>
            <Button href="/quem-somos" size="lg" variant="outline">
              Conhecer a iniciativa
            </Button>
          </Actions>
        </Content>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primaryLight};
`;

const HeroImage = styled(Image)`
  z-index: 0;
  object-fit: cover;
  object-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} 0%,
      ${({ theme }) => theme.colors.alpha.white80} 45%,
      ${({ theme }) => theme.colors.alpha.white10} 76%
    ),
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.alpha.white70} 0%,
      transparent 35%
    );
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 2;
  display: grid;
  min-height: 520px;
  align-items: center;
  padding-block: ${({ theme }) => theme.spacing.px64};

  ${media.desktop} {
    min-height: 560px;
    padding-block: ${({ theme }) => theme.spacing.px80};
  }
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px24};
  max-width: 620px;
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
  max-width: 620px;
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
  max-width: 580px;
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.px12};
`;
