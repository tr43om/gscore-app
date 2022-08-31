import styled from "styled-components";
import { PrimaryButton, Stepper, CheckoutCard } from "../../components";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/rootReducer";

const CheckoutScreen = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user?.isAuthorized) router.push("/signup");
  // }, [router, user]);

  return (
    <Main>
      <Stepper $step={3} $mb="4rem" />
      <Title mb={2}>Checkout</Title>

      <CheckoutCard />
      <TotalInfo>
        <TotalTitle>Total: </TotalTitle>
        <TotalPrice>$77</TotalPrice>
      </TotalInfo>
      <Link href="/start-subscription">
        <PrimaryButton>Purchase</PrimaryButton>
      </Link>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  max-width: 38.75rem;
  margin: 0 auto;
`;

const Title = styled.h1<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        specialHeading3: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

const TotalInfo = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  font: ${({
    theme: {
      variants: {
        specialHeading4: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const TotalTitle = styled.p``;
const TotalPrice = styled.p``;
export default CheckoutScreen;
