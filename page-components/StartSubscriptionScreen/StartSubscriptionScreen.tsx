import styled from "styled-components";
import { CheckoutCard, PrimaryButton } from "../../components";

const StartSubscriptionScreen = (props: StartSubscriptionScreenProps) => {
  return (
    <Main>
      <Title mb={1}>Start your subscription</Title>
      <Description mb={3}>
        We have sent you a payment receipt by e-mail and a link to download the
        plugin with a license key.
      </Description>
      <CheckoutCard />
      <PrimaryButton $fullWidth $mt="3rem">
        Go to my subscriptions
      </PrimaryButton>
    </Main>
  );
};

type StartSubscriptionScreenProps = {};

const Main = styled.main`
  width: 100%;
  max-width: 38.75rem;
  margin: 0 auto;
`;

const Title = styled.h1<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        specialHeading3: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

const Description = styled.p<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        paragraphSmall: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

export default StartSubscriptionScreen;
