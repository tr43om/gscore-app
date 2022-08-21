import Image from "next/image";
import styled from "styled-components";

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      <Image src="/images/Logo.svg" alt="logo" width="170" height="42" />
    </HeaderContainer>
  );
};

type HeaderProps = {};

const HeaderContainer = styled.header`
  margin-bottom: 4rem;
`;

export default Header;
