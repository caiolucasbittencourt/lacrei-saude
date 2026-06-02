"use client";

import styled from "styled-components";

import { ProfessionalCard } from "@/components/professionals/ProfessionalCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { professionals } from "@/data/professionals";
import { media } from "@/styles/theme";

export function ProfessionalPreview() {
  const preview = professionals.slice(0, 3);

  return (
    <Section aria-labelledby="professional-preview-title">
      <Container>
        <HeaderRow>
          <SectionTitle
            eyebrow="Profissionais"
            title="Especialidades para diferentes momentos da jornada."
            titleId="professional-preview-title"
            description="Conheça uma amostra da rede fictícia criada para este protótipo."
          />
          <Button href="/profissionais" variant="outline">
            Ver todos
            <MaterialIcon aria-hidden="true" icon="arrow_forward" size={18} />
          </Button>
        </HeaderRow>

        <Grid>
          {preview.map((professional) => (
            <li key={professional.id}>
              <ProfessionalCard professional={professional} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.white};
`;

const HeaderRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px20};
  align-items: end;

  ${media.tablet} {
    grid-template-columns: 1fr auto;
  }
`;

const Grid = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px20};
  margin: ${({ theme }) => `${theme.spacing.px40} 0 0`};
  padding: ${({ theme }) => theme.spacing.none};
  list-style: none;

  ${media.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  > li {
    min-width: 0;
  }
`;
