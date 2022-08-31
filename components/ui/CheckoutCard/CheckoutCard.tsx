import { Divider } from "../Divider";
import styled from "styled-components";
import { ShoppingBasketIcon } from "../../../assets";

const CheckoutCard = (props: CheckoutCardProps) => {
  return (
    <Root>
      <CheckoutCardHeader>
        <CheckoutCardTitle>Package name</CheckoutCardTitle>
        <CheckoutCardTitle>Price</CheckoutCardTitle>
      </CheckoutCardHeader>
      <Divider />
      <CheckoutCardBody>
        <CheckoutCardPackage>Single site license</CheckoutCardPackage>
        <CheckoutCardPrice>
          <span>$77</span>
          <ShoppingBasketIcon />
        </CheckoutCardPrice>
      </CheckoutCardBody>
    </Root>
  );
};

const Root = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral700};
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const CheckoutCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 4.5rem 2rem 3rem;
`;
const CheckoutCardBody = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 3rem 3rem 3rem;
`;

const CheckoutCardTitle = styled.h3`
  font: ${({
    theme: {
      variants: {
        paragraphLarge: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  font-weight: 700;
`;

const CheckoutCardText = styled.p`
  font: ${({
    theme: {
      variants: {
        paragraphLarge: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;

const CheckoutCardPackage = styled(CheckoutCardText)``;
const CheckoutCardPrice = styled(CheckoutCardText)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

type CheckoutCardProps = {};

export default CheckoutCard;
