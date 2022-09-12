import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { selectUser } from "../../../store";
import { Dropdown } from "../../Dropdown";
import { Sidebar } from "../../Sidebar";

import { BurgerIcon } from "../../../assets";

import { Routes } from "../../../constants";

const Header = (props: HeaderProps) => {
  const { isAuthorized } = useSelector(selectUser);
  const { pathname } = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isShown =
    isAuthorized &&
    pathname !== Routes.START_SUBSCRIPTION &&
    pathname !== Routes.CHECKOUT;

  return (
    <HeaderContainer>
      <Link href={Routes.HOME}>
        <Image
          src="/images/Logo.svg"
          alt="logo"
          width="170"
          height="42"
          style={{ cursor: "pointer" }}
        />
      </Link>

      {isShown && (
        <>
          <LaptopAndBelow>
            <BurgerIcon onClick={() => setIsSidebarOpen(true)} />
            {isSidebarOpen && (
              <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
            )}
          </LaptopAndBelow>

          <Desktop>
            <Link href="/subscriptions">
              <StyledLink>My subscriptions</StyledLink>
            </Link>
            <Dropdown />
          </Desktop>
        </>
      )}
    </HeaderContainer>
  );
};

type HeaderProps = {};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

const LaptopAndBelow = styled(Navigation)`
  display: none;
  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    display: flex;
  }
`;
const Desktop = styled(Navigation)`
  display: none;
  @media ${({ theme: { devices } }) => devices.desktop} {
    display: flex;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;

  font: ${({
    theme: {
      variants: {
        textSingle300: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  color: ${({ theme: { colors } }) => colors.neutral100};
  text-decoration: none;

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

export default Header;
