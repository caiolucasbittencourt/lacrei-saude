"use client";

import Image from "next/image";
import styled from "styled-components";

import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { media } from "@/styles/theme";

export function StorySection() {
  return (
    <Section aria-labelledby="mission-title">
      <Grid>
        <TextColumn>
          <SectionTitle
            eyebrow="Missão"
            title="Cuidado integral também depende de contexto, linguagem e confiança."
            titleId="mission-title"
            description="O produto foi desenhado para mostrar, antes da consulta, informações que costumam fazer diferença na decisão de buscar atendimento."
          />
          <MissionText>
            A proposta combina informação clara, profissionais preparados e
            escolhas mais simples para que a pessoa chegue ao atendimento com
            menos receio e mais autonomia.
          </MissionText>
        </TextColumn>

        <ImageFrame>
          <StyledImage
            alt="Profissional de saúde sorrindo enquanto segura uma bandeira arco-íris"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            src="/images/mission.webp"
          />
        </ImageFrame>

        <Commitments>
          <Commitment>
            <MaterialIcon aria-hidden="true" icon="verified_user" size={28} />
            <div>
              <CommitmentTitle>Ambiente mais seguro</CommitmentTitle>
              <CommitmentText>
                Profissionais sinalizam modalidade, localidade e compromisso
                com atendimento sem julgamento.
              </CommitmentText>
            </div>
          </Commitment>

          <Commitment>
            <MaterialIcon aria-hidden="true" icon="medical_services" size={28} />
            <div>
              <CommitmentTitle>Saúde em rede</CommitmentTitle>
              <CommitmentText>
                A experiência considera diferentes áreas de cuidado para apoiar
                continuidade, prevenção e autonomia.
              </CommitmentText>
            </div>
          </Commitment>
        </Commitments>
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.white};
`;

const Grid = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px32};

  ${media.desktop} {
    grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.9fr);
    align-items: center;
  }
`;

const TextColumn = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};
  align-content: center;
`;

const MissionText = styled.p`
  max-width: 680px;
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;

const ImageFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ theme }) => theme.shadows.imageCard};
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Commitments = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px16};

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-column: 1 / -1;
  }
`;

const Commitment = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.px16};
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.px24};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const CommitmentTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing.none};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
`;

const CommitmentText = styled.p`
  margin: ${({ theme }) => `${theme.spacing.px8} 0 0`};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
