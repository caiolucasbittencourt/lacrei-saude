"use client";

import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "outline" | "white";
type ButtonSize = "md" | "lg";

type CommonButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonLinkProps = CommonButtonProps &
  LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    href: LinkProps["href"];
  };

type NativeButtonProps = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonLinkProps | NativeButtonProps;

type StyledControlProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
};

const variantStyles = {
  primary: css`
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
      border-color: ${({ theme }) => theme.colors.primaryDark};
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  outline: css`
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
  white: css`
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
};

const controlStyles = css<StyledControlProps>`
  display: inline-flex;
  min-height: ${({ $size, theme }) =>
    $size === "lg" ? theme.spacing.px48 : theme.spacing.px40};
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.px8};
  border: ${({ theme }) => theme.borders.widths.md}
    ${({ theme }) => theme.borders.styles.solid};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ $size, theme }) =>
    $size === "lg"
      ? `${theme.spacing.px12} ${theme.spacing.px24}`
      : `${theme.spacing.px10} ${theme.spacing.px20}`};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeights.none};
  text-align: center;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;

  ${({ $variant }) => variantStyles[$variant]}

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled,
  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }
`;

const StyledButton = styled.button<StyledControlProps>`
  ${controlStyles}
`;

const StyledLink = styled(Link)<StyledControlProps>`
  ${controlStyles}
`;

export function Button({
  children,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <StyledLink
        data-variant={variant}
        href={href}
        $size={size}
        $variant={variant}
        {...linkProps}
      >
        {children}
      </StyledLink>
    );
  }

  const { type = "button", ...buttonProps } = props as NativeButtonProps;

  return (
    <StyledButton
      data-variant={variant}
      type={type}
      $size={size}
      $variant={variant}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
}
