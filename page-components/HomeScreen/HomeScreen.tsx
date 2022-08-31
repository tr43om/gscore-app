import Head from "next/head";
import styled from "styled-components";
import { ProductsList } from "../../components";

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <>
      <Head>
        <title>GSCORE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title>Get started with Gscore today!</Title>
        <ProductsList />
      </div>
    </>
  );
};

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
`;

type HomeScreenProps = {};

export default HomeScreen;
