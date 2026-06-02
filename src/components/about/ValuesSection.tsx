"use client";

import styled from "styled-components";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { values } from "@/data/values";
import { media } from "@/styles/theme";

const valueIcons = {
  acolhimento: "volunteer_activism",
  seguranca: "health_and_safety",
  respeito: "diversity_3",
  continuidade: "cycle",
} as const;

export function ValuesSection() {
  return (
    <Section aria-labelledby="values-title">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Valores"
          title="Princípios que guiam cada decisão de produto."
          titleId="values-title"
          description="O protótipo prioriza clareza, dignidade e continuidade no relacionamento com profissionais de saúde."
        />

        <Grid>
          {values.map((value) => (
            <ValueCard key={value.id}>
              <IconWrap>
                <MaterialIcon
                  aria-hidden="true"
                  icon={valueIcons[value.id as keyof typeof valueIcons]}
                  size={24}
                />
              </IconWrap>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueText>{value.description}</ValueText>
            </ValueCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px20};
  margin-top: ${({ theme }) => theme.spacing.px40};

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const ValueCard = styled(Card)`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing.px16};
  padding: ${({ theme }) => theme.spacing.px24};
  transition:
    box-shadow 160ms ease,
    transform 160ms ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.beliefCardHover};
    transform: translateY(-2px);
  }
`;

const IconWrap = styled.span`
  display: grid;
  width: ${({ theme }) => theme.spacing.px40};
  height: ${({ theme }) => theme.spacing.px40};
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.primaryLight};
`;

const ValueTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;

const ValueText = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
