import styled from "styled-components";
import { Divider, SecondaryButton } from "../ui";
import _ from "lodash";

import CheckIcon from "./assets/CheckIcon.svg";

const Product = (props: ProductProps) => {
  // PRODUCT
  return (
    <Root accent={props.$accent || false}>
      <Info>
        <Price>${props.price}</Price>
        <Offer>{props.offer}</Offer>
        <Description accent={props.$accent || false}>
          {props.description}
        </Description>
      </Info>
      <Divider />
      <Features>
        {props.features.map((feature, i) => (
          <Feature key={i}>
            <StyledCheckIcon />
            <span>{feature}</span>
          </Feature>
        ))}
      </Features>
      <OfferButton onClick={props.onClick}>Get Gscore</OfferButton>
    </Root>
  );
};

type ProductProps = {
  price: string;
  offer: string;
  description: string;
  features: string[];
  $accent?: boolean;
  onClick?: () => void;
};

const Root = styled.section<{ accent: boolean }>`
  background-color: ${({ theme, accent }) =>
    !accent ? theme.colors.neutral700 : theme.colors.accent};
  padding-inline: 3rem;
  padding-block: 2.625rem;
  border-radius: 12px;
  max-width: 24.5rem;

  @media screen and (min-width: 1200px) {
    transform: ${({ accent }) => accent && "translateY(-3rem)"};
  }
`;

const Info = styled.div`
  display: grid;
  gap: 0.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Price = styled.p`
  font: ${({ theme }) =>
    `700 ${[_.values(theme.typography.variants.heading1)][0].join("/")} ${
      theme.typography.fonts.dmsans
    }`};
`;
const Offer = styled.p`
  font: ${({ theme }) =>
    `${[_.values(theme.typography.variants.textSingle400)][0].join("/")} ${
      theme.typography.fonts.thicccboi700
    }`};
`;
const Description = styled.p<{ accent: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.thicccboi500};
  color: ${({ theme, accent }) =>
    !accent ? theme.colors.neutral400 : theme.colors.neutral100};
`;

const Features = styled.ul`
  display: grid;
  padding: 0;
  gap: 1.3rem;
  font: ${({ theme }) =>
    `${[_.values(theme.typography.variants.textSingle200)][0].join("/")} ${
      theme.typography.fonts.thicccboi500
    }`};
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  list-style: none;
`;
const Feature = styled.li`
  display: flex;

  align-items: center;
  gap: 0.5rem;
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 29px;
  height: 29px;
`;

const OfferButton = styled(SecondaryButton)`
  color: #000;
  mix-blend-mode: screen;
  max-width: 100%;
  box-shadow: none;
`;
export default Product;
