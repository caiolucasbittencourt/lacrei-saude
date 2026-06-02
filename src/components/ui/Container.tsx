"use client";

import styled from "styled-components";

import { media } from "@/styles/theme";

export const Container = styled.div`
  width: min(100%, ${({ theme }) => theme.breakpoints.wide});
  margin-inline: ${({ theme }) => theme.spacing.auto};
  padding-inline: ${({ theme }) => theme.spacing.px20};

  ${media.tablet} {
    padding-inline: ${({ theme }) => theme.spacing.px32};
  }

  ${media.desktop} {
    padding-inline: ${({ theme }) => theme.spacing.px40};
  }
`;
