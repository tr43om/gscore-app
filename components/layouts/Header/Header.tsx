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
  color: ${({ theme }) => theme.colors.neutral100};
  font-family: ${({ theme }) => theme.typography.fonts.thicccboi500};
  font-size: ${({ theme }) => theme.typography.variants.textSingle300.fontSize};
  line-height: ${({ theme }) =>
    theme.typography.variants.textSingle300.lineHeight};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default Header;
