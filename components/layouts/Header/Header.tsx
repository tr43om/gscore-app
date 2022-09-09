import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/rootReducer";
import { Dropdown } from "../../Dropdown";
import { useRouter } from "next/router";
import { useTabletAndBelowMediaQuery } from "../../../styles/breakpoints";
import { BurgerIcon } from "../../../assets";
import { Sidebar } from "../../Sidebar";
import { useState } from "react";

const Header = (props: HeaderProps) => {
  const { isAuthorized, userInfo } = useSelector(selectUser);
  const { pathname } = useRouter();
  const isTabletAndBelow = useTabletAndBelowMediaQuery();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <Link href="/">
        <Image
          src="/images/Logo.svg"
          alt="logo"
          width="170"
          height="42"
          style={{ cursor: "pointer" }}
        />
      </Link>

      {isAuthorized &&
        pathname !== "/start-subscription" &&
        pathname !== "/checkout" && (
          <Navigation>
            {isTabletAndBelow ? (
              <>
                <BurgerIcon onClick={() => setIsSidebarOpen(true)} />
                {isSidebarOpen && (
                  <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
                )}
              </>
            ) : (
              <>
                <Link href="/subscriptions">
                  <StyledLink>My subscriptions</StyledLink>
                </Link>
                <Dropdown />
              </>
            )}
          </Navigation>
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
