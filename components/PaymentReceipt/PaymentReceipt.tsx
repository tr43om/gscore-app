import styled from "styled-components";
import { Divider } from "../ui";
import { ProductType } from "../../types/index";

const PaymentReceipt = ({ product }: PaymentReceiptProps) => {
  return (
    <PriceList>
      <Header>
        <Title>Package name</Title>
        <Title>Price</Title>
      </Header>
      <Divider />
      <Product key={product.id}>
        <Package>{product.name}</Package>
        <Price>
          <span>${product.prices[0].price}</span>
        </Price>
      </Product>
    </PriceList>
  );
};

type PaymentReceiptProps = {
  product: ProductType;
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 3rem 4.5rem 2rem 3rem;
`;

const PriceList = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral700};
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

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

const Content = styled.p`
  font: ${({
    theme: {
      variants: {
        paragraphLarge: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const Product = styled.label`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 2rem 5rem 3rem 3rem;
  transition: all 0.2s;
`;

const Package = styled(Content)``;
const Price = styled(Content)``;

export default PaymentReceipt;
