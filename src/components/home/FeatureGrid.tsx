"use client";

import styled from "styled-components";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { features } from "@/data/features";
import { media } from "@/styles/theme";

const icons = {
  "verified-network": "fact_check",
  "integral-care": "diversity_3",
  "clear-journey": "search",
};

export function FeatureGrid() {
  return (
    <Section aria-labelledby="features-title">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Como funciona"
          title="Uma experiência feita para reduzir barreiras no acesso ao cuidado."
          titleId="features-title"
          description="A interface organiza informações essenciais para que a escolha do atendimento seja mais clara e segura."
        />

        <Grid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconWrap>
                <MaterialIcon
                  aria-hidden="true"
                  icon={icons[feature.id as keyof typeof icons]}
                  size={28}
                />
              </IconWrap>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.description}</FeatureText>
            </FeatureCard>
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FeatureCard = styled(Card)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};
  padding: ${({ theme }) => theme.spacing.px24};
`;

const IconWrap = styled.span`
  display: grid;
  width: ${({ theme }) => theme.spacing.px48};
  height: ${({ theme }) => theme.spacing.px48};
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.primaryLight};
`;

const FeatureTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
`;

const FeatureText = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
