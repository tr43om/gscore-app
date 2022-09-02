import { Divider } from "../Divider";
import styled from "styled-components";
import { ShoppingBasketIcon } from "../../../assets";
import { ProductsType } from "../../../types";

const CheckoutCard = (props: CheckoutCardProps) => {
  return (
    <Root>
      <Header>
        <Title>Package name</Title>
        <Title>Price</Title>
      </Header>
      <Divider />
      <Body>
        {props.products &&
          props.products.map((product) => (
            <Product key={product.id}>
              <Package>{product.name}</Package>
              <Price>
                <span>{product.prices[0].price}$</span>
                <ShoppingBasketIcon />
              </Price>
            </Product>
          ))}
      </Body>
    </Root>
  );
};

const Root = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral700};
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 4.5rem 2rem 3rem;
`;
const Body = styled.div``;

const Title = styled.h3`
  font: ${({
    theme: {
      variants: {
        paragraphLarge: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  font-weight: 700;
`;

const Text = styled.p`
  font: ${({
    theme: {
      variants: {
        paragraphLarge: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem 3rem 3rem 3rem;
`;
const Package = styled(Text)``;
const Price = styled(Text)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

type CheckoutCardProps = {
  products?: ProductsType;
};

export default CheckoutCard;
