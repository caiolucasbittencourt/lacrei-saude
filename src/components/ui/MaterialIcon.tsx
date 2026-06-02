"use client";

import type { ReactNode, SVGAttributes } from "react";
import styled from "styled-components";

type MaterialIconProps = Omit<SVGAttributes<SVGSVGElement>, "children"> & {
  fill?: 0 | 1;
  grade?: number;
  icon: string;
  opticalSize?: number;
  size?: number;
  weight?: number;
};

export function MaterialIcon({
  icon,
  size = 24,
  ...props
}: MaterialIconProps) {
  return (
    <Icon
      $size={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {icons[icon] ?? icons.add}
    </Icon>
  );
}

const icons: Record<string, ReactNode> = {
  add: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  arrow_forward: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  medical_services: (
    <>
      <path d="M10 6h4" />
      <path d="M9 6V4h6v2" />
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </>
  ),
  verified_user: (
    <>
      <path d="M12 3 5 6v5c0 4.5 2.9 8.4 7 10 4.1-1.6 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
};

const Icon = styled.svg<{
  $size: number;
}>`
  display: inline-block;
  flex: 0 0 auto;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
`;
