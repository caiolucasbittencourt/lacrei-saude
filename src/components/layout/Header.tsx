"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { media } from "@/styles/theme";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/profissionais", label: "Profissionais" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <HeaderShell>
      <HeaderInner>
        <Brand href="/" aria-label="Lacrei Saúde - ir para home">
          <Image
            alt="Lacrei Saúde"
            height={40}
            priority
            src="/images/logo-lacrei.svg"
            width={150}
          />
        </Brand>

        <DesktopNav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </DesktopNav>

        <MenuButton
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <MaterialIcon
            aria-hidden="true"
            icon={isOpen ? "close" : "menu"}
            size={24}
          />
        </MenuButton>
      </HeaderInner>

      <MobileNav
        id="mobile-navigation"
        aria-label="Navegação principal mobile"
        hidden={!isOpen}
      >
        <MobileNavInner>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </MobileNavInner>
      </MobileNav>
    </HeaderShell>
  );
}

const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.white};
`;

const HeaderInner = styled(Container)`
  display: flex;
  min-height: ${({ theme }) => theme.spacing.px80};
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.px20};
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.px8};

  ${media.tablet} {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ theme }) => `${theme.spacing.px8} ${theme.spacing.px16}`};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  &:hover,
  &[aria-current="page"] {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const MenuButton = styled.button`
  display: inline-grid;
  width: ${({ theme }) => theme.spacing.px48};
  height: ${({ theme }) => theme.spacing.px48};
  place-items: center;
  border: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  border-top: ${({ theme }) => theme.borders.widths.hairline}
    ${({ theme }) => theme.borders.styles.solid}
    ${({ theme }) => theme.borders.colors.light};
  background: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    display: none;
  }
`;

const MobileNavInner = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.px8};
  padding-block: ${({ theme }) => theme.spacing.px16};

  ${NavLink} {
    padding-block: ${({ theme }) => theme.spacing.px12};
  }
`;
