import styled from "styled-components";
import { Product } from "../Product";

const ProductsList = (props: ProductsListProps) => {
  return (
    <Root>
      <Product
        price="77"
        offer="Single site license"
        description="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
        features={[
          "Single site license",
          "Special introductory pricing",
          "Unlimited Pages and Keywords",
          "Billed annually",
        ]}
      />

      <Product
        price="117"
        offer="3 site license"
        description="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
        features={[
          "All features for 3 sites",
          "Special introductory pricing",
          "Unlimited Pages and Keywords",
          "Billed annually",
        ]}
        accent
      />

      <Product
        price="167"
        offer="10 site license"
        description="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
        features={[
          "All features for 10 sites",
          "Special introductory pricing",
          "Unlimited Pages and Keywords",
          "Billed annually",
        ]}
      />
    </Root>
  );
};

const Root = styled.section`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.7rem;
`;

type ProductsListProps = {};

export default ProductsList;
