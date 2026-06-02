"use client";

import styled from "styled-components";

import { Card } from "@/components/ui/Card";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { Professional } from "@/types/professional";

type ProfessionalCardProps = {
  professional: Professional;
};

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const initials = professional.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <Wrapper data-testid="professional-card">
      <Header>
        <Avatar aria-hidden="true">{initials}</Avatar>
        <Identity>
          <Name>{professional.name}</Name>
          <Specialty>{professional.specialty}</Specialty>
        </Identity>
      </Header>

      <Description>{professional.description}</Description>

      <ProfileTags aria-label="Informações do perfil">
        {professional.profileTags.map((tag) => (
          <ProfileTag key={tag}>{tag}</ProfileTag>
        ))}
      </ProfileTags>

      {professional.verified ? (
        <VerifiedBadge>
          <MaterialIcon aria-hidden="true" icon="verified_user" size={18} />
          Profissional verificado
        </VerifiedBadge>
      ) : (
        <ReviewBadge>Cadastro em revisão</ReviewBadge>
      )}

      <MoreInfo
        type="button"
        aria-label={`Mais informações sobre ${professional.name}`}
      >
        <MaterialIcon aria-hidden="true" icon="add" size={18} weight={600} />
        Informações
      </MoreInfo>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  display: grid;
  min-height: 100%;
  gap: ${({ theme }) => theme.spacing.px20};
  padding: ${({ theme }) => theme.spacing.px24};
  transition:
    box-shadow 160ms ease,
    transform 160ms ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.professionalCardHover};
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.px16};
`;

const Avatar = styled.span`
  display: grid;
  width: ${({ theme }) => theme.spacing.px48};
  height: ${({ theme }) => theme.spacing.px48};
  flex: 0 0 auto;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.circle};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
`;

const Identity = styled.div`
  min-width: 0;
`;

const Name = styled.h3`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
`;

const Specialty = styled.p`
  margin: ${({ theme }) => `${theme.spacing.px4} 0 0`};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProfileTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.px8};
  margin: ${({ theme }) => theme.spacing.none};
  padding: ${({ theme }) => theme.spacing.none};
  list-style: none;
`;

const ProfileTag = styled.li`
  display: inline-flex;
  min-height: ${({ theme }) => theme.spacing.px32};
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ theme }) => `${theme.spacing.px6} ${theme.spacing.px12}`};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeights.none};
`;

const VerifiedBadge = styled.span`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.px6};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ theme }) => `${theme.spacing.px6} ${theme.spacing.px12}`};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

const ReviewBadge = styled.span`
  display: inline-flex;
  width: fit-content;
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ theme }) => `${theme.spacing.px6} ${theme.spacing.px12}`};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.alpha.black04};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

const MoreInfo = styled.button`
  display: inline-flex;
  width: fit-content;
  min-height: ${({ theme }) => theme.spacing.px40};
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.px6};
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ theme }) => `${theme.spacing.px8} ${theme.spacing.px16}`};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeights.none};
  transition:
    background 160ms ease,
    border-color 160ms ease,
    color 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;
