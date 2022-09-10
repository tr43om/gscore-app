import Link from "next/link";
import styled from "styled-components";
import { CrossIcon } from "../../assets";
import Image from "next/image";
import { Divider } from "../ui";
import { Dropdown } from "../Dropdown";
import useOnClickOutside from "../../hooks/useOnOutsideClick";
import { useRef } from "react";

const Sidebar = (props: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sidebarRef, props.closeSidebar);
  return (
    <Root>
      <SidebarContent ref={sidebarRef}>
        <Header>
          <CrossIcon width={27} height={27} onClick={props.closeSidebar} />
          <Link href="/">
            <Image src="/images/Logo.svg" alt="logo" width="130" height="32" />
          </Link>
        </Header>
        <Navigation>
          <Link href="/subscriptions">
            <StyledLink>My subscriptions</StyledLink>
          </Link>
          <Divider />
          <Dropdown />
          <Divider />
        </Navigation>
      </SidebarContent>
    </Root>
  );
};

type SidebarProps = {
  closeSidebar: () => void;
};

const Root = styled.aside`
  display: flex;
  justify-content: end;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { colors } }) => colors.neutral700 + "8a"};
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
`;

const SidebarContent = styled.div.attrs(({ ref }) => ({
  ref: ref,
}))`
  width: 40vw;

  height: 100vh;
  padding: 2rem 1.5rem;
  background-color: ${({ theme: { colors } }) => colors.neutral700};

  font: ${({
    theme: {
      variants: {
        textSingle100Regular: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  @media ${({ theme: { devices } }) => devices.tabletAndBelow} {
    width: 100%;
    max-width: 13rem;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;

  color: ${({ theme: { colors } }) => colors.neutral100};
  text-decoration: none;

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

const Header = styled.header`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-bottom: 3rem;
`;
const Navigation = styled.nav`
  display: grid;
  gap: 1.3rem;
`;
export default Sidebar;
