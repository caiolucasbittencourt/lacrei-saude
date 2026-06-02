"use client";

import styled from "styled-components";

export const Card = styled.article`
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.beliefCard};
`;
