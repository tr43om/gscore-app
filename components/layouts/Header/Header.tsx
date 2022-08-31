import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/rootReducer";
import { Dropdown } from "../../Dropdown";

const Header = (props: HeaderProps) => {
  const user = useSelector(selectUser);

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

      {user?.userInfo && (
        <Navigation>
          <Link href="/">
            <StyledLink>My subscriptions</StyledLink>
          </Link>
          <Dropdown label={user.userInfo?.username} />
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