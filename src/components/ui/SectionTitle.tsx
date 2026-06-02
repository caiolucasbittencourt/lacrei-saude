"use client";

import styled, { css } from "styled-components";

type SectionTitleProps = {
  align?: "left" | "center";
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
};

export function SectionTitle({
  align = "left",
  eyebrow,
  title,
  titleId,
  description,
}: SectionTitleProps) {
  return (
    <Wrapper $align={align}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Title id={titleId}>{title}</Title>
      {description ? <Description>{description}</Description> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $align: "left" | "center" }>`
  max-width: 720px;

  ${({ $align }) =>
    $align === "center" &&
    css`
      margin-inline: auto;
      text-align: center;
    `}
`;

const Eyebrow = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  letter-spacing: ${({ theme }) => theme.fonts.letterSpacings.wide};
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.px8} 0 0`};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: clamp(
    ${({ theme }) => theme.fonts.sizes["2xl"]},
    4vw,
    ${({ theme }) => theme.fonts.sizes["3xl"]}
  );
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
`;

const Description = styled.p`
  margin: ${({ theme }) => `${theme.spacing.px16} 0 0`};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
`;
