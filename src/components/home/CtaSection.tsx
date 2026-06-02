"use client";

import styled from "styled-components";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function CtaSection() {
  return (
    <Section aria-labelledby="home-cta-title">
      <Content>
        <Title id="home-cta-title">
          Comece por uma busca simples e escolha o cuidado que faz sentido para
          você.
        </Title>
        <Text>
          Este protótipo demonstra uma experiência de descoberta com filtros,
          dados claros e uma linguagem centrada em acolhimento.
        </Text>
        <Button href="/profissionais" size="lg" variant="white">
          Buscar profissionais
          <MaterialIcon aria-hidden="true" icon="arrow_forward" size={20} />
        </Button>
      </Content>
    </Section>
  );
}

const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.ecosystem};
`;

const Content = styled(Container)`
  display: grid;
  justify-items: start;
  gap: ${({ theme }) => theme.spacing.px20};
`;

const Title = styled.h2`
  max-width: 780px;
  margin: ${({ theme }) => theme.spacing.none};
  font-size: clamp(
    ${({ theme }) => theme.fonts.sizes["2xl"]},
    5vw,
    ${({ theme }) => theme.fonts.sizes["3xl"]}
  );
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
`;

const Text = styled.p`
  max-width: 680px;
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.alpha.white80};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;
