import styled, { useTheme } from "styled-components";
import {
  PrimaryButton,
  Stepper,
  Typography,
  CheckoutCard,
} from "../../components";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/rootReducer";

const CheckoutScreen = () => {
  const { typography } = useTheme();
  const { fonts, variants } = typography;
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user?.isAuthorized) router.push("/signup");
  }, [router, user]);

  return (
    <Main>
      <Stepper $step={3} $mb="4rem" />
      <Typography
        $variant={variants.specialHeading3}
        $fontFamily={fonts.thicccboi700}
        $mb="2rem"
      >
        Checkout
      </Typography>

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

const TotalInfo = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  font: ${({ theme }) =>
    `700 ${[Object.values(theme.typography.variants.specialHeading4)][0].join(
      "/"
    )} ${theme.typography.fonts.thicccboi700}`};
`;
const TotalTitle = styled.p``;
const TotalPrice = styled.p``;
export default CheckoutScreen;
