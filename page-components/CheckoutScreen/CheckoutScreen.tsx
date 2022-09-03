import styled from "styled-components";
import { PrimaryButton, Stepper, CheckoutCard } from "../../components";

import { withAuth } from "../../hocs/withAuth";
import { ProductsType } from "../../types";

const CheckoutScreen = ({ products }: CheckoutScreenProps) => {
  return (
    <Main>
      <Stepper $step={3} $mb="4rem" />
      <Title mb={2}>Checkout</Title>

      <CheckoutCard products={products} />
    </Main>
  );
};

type CheckoutScreenProps = {
  products: ProductsType;
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

export default withAuth(CheckoutScreen);
