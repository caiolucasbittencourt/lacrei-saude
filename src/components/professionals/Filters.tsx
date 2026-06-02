"use client";

import styled from "styled-components";

import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { media } from "@/styles/theme";
import type { Modality } from "@/types/professional";

type FiltersProps = {
  hasActiveFilters: boolean;
  modalities: Modality[];
  modality: string;
  onClear: () => void;
  onModalityChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
  search: string;
  specialties: string[];
  specialty: string;
};

export function Filters({
  hasActiveFilters,
  modalities,
  modality,
  onClear,
  onModalityChange,
  onSearchChange,
  onSpecialtyChange,
  search,
  specialties,
  specialty,
}: FiltersProps) {
  return (
    <FilterPanel
      aria-label="Filtros de profissionais"
      onSubmit={(event) => event.preventDefault()}
    >
      <FieldGroup>
        <Label htmlFor="professional-search">Buscar</Label>
        <SearchField>
          <MaterialIcon aria-hidden="true" icon="search" size={20} />
          <Input
            id="professional-search"
            placeholder="Nome, cidade ou cuidado"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </SearchField>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="specialty-filter">Especialidade</Label>
        <Select
          id="specialty-filter"
          value={specialty}
          onChange={(event) => onSpecialtyChange(event.target.value)}
        >
          <option value="">Todas</option>
          {specialties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="modality-filter">Modalidade</Label>
        <Select
          id="modality-filter"
          value={modality}
          onChange={(event) => onModalityChange(event.target.value)}
        >
          <option value="">Todas</option>
          {modalities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FieldGroup>

      <ClearButton
        disabled={!hasActiveFilters}
        type="button"
        variant="outline"
        onClick={onClear}
      >
        Limpar
      </ClearButton>
    </FilterPanel>
  );
}

const FilterPanel = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.px20};
  background: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    grid-template-columns: minmax(240px, 1.5fr) 1fr 1fr auto;
    align-items: end;
  }
`;

const FieldGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px8};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
`;

const SearchField = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.px8};
  min-height: ${({ theme }) => theme.spacing.px48};
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding-inline: ${({ theme }) => theme.spacing.px12};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.focusRing};
  }
`;

const Input = styled.input`
  width: 100%;
  min-width: 0;
  border: ${({ theme }) => theme.borders.styles.none};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: transparent;

  &:focus {
    outline: ${({ theme }) => theme.borders.styles.none};
  }
`;

const Select = styled.select`
  width: 100%;
  min-height: ${({ theme }) => theme.spacing.px48};
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding-inline: ${({ theme }) => theme.spacing.px12};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: ${({ theme }) => theme.borders.styles.none};
    box-shadow: ${({ theme }) => theme.shadows.focusRing};
  }
`;

const ClearButton = styled(Button)`
  width: 100%;

  ${media.tablet} {
    width: auto;
  }
`;
