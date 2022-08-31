import { Divider } from "../Divider";
import styled from "styled-components";
import ShoppingBasket from "./assets/ShoppingBasket.svg";

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
          <ShoppingBasket />
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
  font: ${({ theme }) =>
    `700 ${[Object.values(theme.typography.variants.paragraphLarge)][0].join(
      "/"
    )} ${theme.typography.fonts.thicccboi700}`};
`;

const CheckoutCardText = styled.p`
  font: ${({ theme }) =>
    `${[Object.values(theme.typography.variants.paragraphLarge)][0].join(
      "/"
    )} ${theme.typography.fonts.thicccboi}`};
`;

const CheckoutCardPackage = styled(CheckoutCardText)``;
const CheckoutCardPrice = styled(CheckoutCardText)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

type CheckoutCardProps = {};

export default CheckoutCard;
