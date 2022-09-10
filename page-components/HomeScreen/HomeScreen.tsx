import styled from "styled-components";
import { ProductsList } from "../../components";

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <Root>
      <Title>Get started with Gscore today!</Title>
      <ProductsList />
    </Root>
  );
};

const Root = styled.main``;

const Title = styled.h1`
  font: ${({
    theme: {
      variants: {
        specialHeading3: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  text-align: center;
  margin-bottom: 6.125rem;

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    margin-bottom: 3rem;

    font: ${({
      theme: {
        variants: {
          specialHeading4: { lineHeight, fontFamily, fontSize },
        },
      },
    }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  }
`;

type HomeScreenProps = {};

export default HomeScreen;
