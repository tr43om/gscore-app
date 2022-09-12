import Link from "next/link";
import styled from "styled-components";

import { Divider, SecondaryButton } from "../ui";
import { CheckIconRounded } from "../../assets";

import { Routes } from "../../constants";

const Product = (props: ProductProps) => {
  return (
    <Root $accent={props.accent || false}>
      <Info>
        <Price>${props.price}</Price>
        <Offer>{props.offer}</Offer>
        <Description $accent={props.accent || false}>
          {props.description}
        </Description>
      </Info>
      <Divider />
      <Features>
        {props.features.map((feature, i) => (
          <Feature key={i}>
            <CheckIconRounded width="29px" height="29px" />
            <span>{feature}</span>
          </Feature>
        ))}
      </Features>
      <Link href={Routes.CHECKOUT}>
        <OfferButton>Get Gscore</OfferButton>
      </Link>
    </Root>
  );
};

type ProductProps = {
  price: string;
  offer: string;
  description: string;
  features: string[];
  accent?: boolean;
  onClick?: () => void;
};

const Root = styled.section<{ $accent: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral700};

  border-radius: 12px;
  max-width: 24.5rem;

  padding-inline: 1.5rem;
  padding-block: 2rem;

  @media screen and (min-width: 1299px) {
    transform: ${({ $accent }) => $accent && "translateY(-3rem)"};
    background-color: ${({ theme, $accent }) =>
      !$accent ? theme.colors.neutral700 : theme.colors.accent};
    padding-inline: 3rem;
    padding-block: 2.625rem;
  }
`;

const Info = styled.div`
  display: grid;
  gap: 0.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Price = styled.p`
  font: ${({
    theme: {
      variants: {
        specialHeading1: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const Offer = styled.p`
  font: ${({
    theme: {
      variants: {
        textSingle400: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;

const Description = styled.p<{ $accent: boolean }>`
  font-family: ${({ theme: { fonts } }) => fonts.thicccboi500};
  color: ${({ theme, $accent }) =>
    !$accent ? theme.colors.neutral400 : theme.colors.neutral100};
`;

const Features = styled.ul`
  display: grid;
  padding: 0;
  gap: 1.3rem;
  font: ${({
    theme: {
      variants: {
        textSingle200: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  list-style: none;
`;
const Feature = styled.li`
  display: flex;

  align-items: center;
  gap: 0.5rem;
`;

const OfferButton = styled(SecondaryButton)`
  color: #000;
  mix-blend-mode: screen;
  max-width: 100%;
  box-shadow: none;
`;
export default Product;
