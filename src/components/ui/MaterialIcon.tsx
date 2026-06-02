"use client";

import type { HTMLAttributes } from "react";
import styled from "styled-components";

type MaterialIconProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  fill?: 0 | 1;
  grade?: number;
  icon: string;
  opticalSize?: number;
  size?: number;
  weight?: number;
};

export function MaterialIcon({
  fill = 0,
  grade = 0,
  icon,
  opticalSize,
  size = 24,
  weight = 400,
  ...props
}: MaterialIconProps) {
  return (
    <Icon
      $fill={fill}
      $grade={grade}
      $opticalSize={opticalSize ?? size}
      $size={size}
      $weight={weight}
      {...props}
    >
      {icon}
    </Icon>
  );
}

const Icon = styled.span<{
  $fill: number;
  $grade: number;
  $opticalSize: number;
  $size: number;
  $weight: number;
}>`
  display: inline-block;
  flex: 0 0 auto;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  overflow: hidden;
  direction: ltr;
  font-family: "Material Symbols Outlined";
  font-size: ${({ $size }) => `${$size}px`};
  font-style: normal;
  font-weight: normal;
  font-feature-settings: "liga";
  font-variation-settings:
    "FILL" ${({ $fill }) => $fill},
    "wght" ${({ $weight }) => $weight},
    "GRAD" ${({ $grade }) => $grade},
    "opsz" ${({ $opticalSize }) => $opticalSize};
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
`;
