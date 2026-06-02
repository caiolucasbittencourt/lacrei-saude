"use client";

import { useMemo, useState } from "react";
import styled from "styled-components";

import { Filters } from "@/components/professionals/Filters";
import { ProfessionalCard } from "@/components/professionals/ProfessionalCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { media } from "@/styles/theme";
import type { Modality, Professional } from "@/types/professional";

type ProfessionalListProps = {
  professionals: Professional[];
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function ProfessionalList({ professionals }: ProfessionalListProps) {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [modality, setModality] = useState("");

  const specialties = useMemo(
    () =>
      Array.from(new Set(professionals.map((item) => item.specialty))).sort(
        (a, b) => a.localeCompare(b, "pt-BR"),
      ),
    [professionals],
  );

  const modalities = useMemo(
    () =>
      Array.from(new Set(professionals.map((item) => item.modality))).sort(
        (a, b) => a.localeCompare(b, "pt-BR"),
      ) as Modality[],
    [professionals],
  );

  const filteredProfessionals = useMemo(() => {
    const normalizedSearch = normalize(search);

    return professionals.filter((professional) => {
      const matchesSearch = normalizedSearch
        ? normalize(
            [
              professional.name,
              professional.specialty,
              professional.location,
              professional.description,
              professional.profileTags.join(" "),
            ].join(" "),
          ).includes(normalizedSearch)
        : true;

      const matchesSpecialty = specialty
        ? professional.specialty === specialty
        : true;

      const matchesModality = modality
        ? professional.modality === modality
        : true;

      return matchesSearch && matchesSpecialty && matchesModality;
    });
  }, [modality, professionals, search, specialty]);

  const hasActiveFilters = Boolean(search || specialty || modality);

  const handleClear = () => {
    setSearch("");
    setSpecialty("");
    setModality("");
  };

  return (
    <Section>
      <Container>
        <Intro>
          <SectionTitle
            eyebrow="Rede de cuidado"
            title="Encontre profissionais por necessidade, local e formato."
            description="Os dados abaixo são fictícios e demonstram uma experiência de busca simples, acessível e responsiva."
          />
        </Intro>

        <Filters
          hasActiveFilters={hasActiveFilters}
          modalities={modalities}
          modality={modality}
          onClear={handleClear}
          onModalityChange={setModality}
          onSearchChange={setSearch}
          onSpecialtyChange={setSpecialty}
          search={search}
          specialties={specialties}
          specialty={specialty}
        />

        <ResultSummary aria-live="polite">
          {filteredProfessionals.length === 1
            ? "1 profissional encontrado"
            : `${filteredProfessionals.length} profissionais encontrados`}
        </ResultSummary>

        {filteredProfessionals.length > 0 ? (
          <Grid aria-label="Lista de profissionais">
            {filteredProfessionals.map((professional) => (
              <li key={professional.id}>
                <ProfessionalCard professional={professional} />
              </li>
            ))}
          </Grid>
        ) : (
          <EmptyState role="status">
            <EmptyTitle>Nenhum profissional encontrado</EmptyTitle>
            <EmptyText>
              Ajuste os filtros ou busque por outra cidade, especialidade ou
              modalidade de atendimento.
            </EmptyText>
          </EmptyState>
        )}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const Intro = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.px32};
`;

const ResultSummary = styled.p`
  margin: ${({ theme }) => `${theme.spacing.px24} 0`};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

const Grid = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px20};
  margin: ${({ theme }) => theme.spacing.none};
  padding: ${({ theme }) => theme.spacing.none};
  list-style: none;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  > li {
    min-width: 0;
  }
`;

const EmptyState = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px8};
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.px32};
  background: ${({ theme }) => theme.colors.white};
`;

const EmptyTitle = styled.h2`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
`;

const EmptyText = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
