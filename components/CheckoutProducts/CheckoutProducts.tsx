import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { makePayment, getPaymentStatus, useAppDispatch } from "../../store";
import { Divider, PrimaryButton, Error } from "../ui";
import { ProductResponseDto } from "../../types";
import { ShoppingBasketIcon } from "../../assets";
import { Routes } from "../../constants";

const CheckoutProducts = ({ products }: CheckoutProductsProps) => {
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector(getPaymentStatus);
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      product: 1,
    },
    mode: "onChange",
  });

  const productId = watch("product");
  const productPrice = products[productId - 1].prices[0].price;

  const onSubmit = handleSubmit((data) => {
    const { product } = data;
    dispatch(makePayment(+product));
    router.push(Routes.START_SUBSCRIPTION);
  });

  return (
    <Root>
      <Form onSubmit={onSubmit}>
        <PriceList>
          <Header>
            <Title>Package name</Title>
            <Title>Price</Title>
          </Header>
          <Divider />
          {products &&
            products.map((product, i) => (
              <Product key={product.id} active={i === productId - 1}>
                <Package>{product.name}</Package>
                <Price>
                  <span>{product.prices[0].price}$</span>
                  <StyledBasketIcon active={i === productId - 1} />
                </Price>
                <Radio
                  type="radio"
                  value={product.id}
                  {...register("product")}
                />
              </Product>
            ))}
        </PriceList>

        <TotalInfo>
          <TotalTitle>Total: </TotalTitle>
          <TotalPrice>{productPrice}$</TotalPrice>
        </TotalInfo>
        <PrimaryButton isLoading={loading}>Purchase</PrimaryButton>
      </Form>
      {error && <Error>{error.message}</Error>}
    </Root>
  );
};

const Root = styled.section``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 4.5rem 2rem 3rem;
`;

const PriceList = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral700};
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;
const Form = styled.form``;

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
const Product = styled.label<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 2rem 3rem 3rem 3rem;
  transition: all 0.2s;
  color: ${({ active, theme: { colors } }) => active && colors.accent};

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

const Radio = styled.input`
  display: none;
`;
const Package = styled(Content)``;
const Price = styled(Content)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
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
const StyledBasketIcon = styled(ShoppingBasketIcon)<{ active: boolean }>`
  & > path {
    fill: ${({ active, theme: { colors } }) => active && colors.accent};
  }
`;

type CheckoutProductsProps = {
  products: ProductResponseDto[];
};

export default CheckoutProducts;
