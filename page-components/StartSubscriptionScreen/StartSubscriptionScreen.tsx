import styled, { useTheme } from "styled-components";
import { CheckoutCard, PrimaryButton, Typography } from "../../components";

const StartSubscriptionScreen = (props: StartSubscriptionScreenProps) => {
  const { typography } = useTheme();
  const { fonts, variants } = typography;
  return (
    <Main>
      <Typography
        $variant={variants.specialHeading3}
        $fontFamily={fonts.thicccboi700}
        $mb="1rem"
      >
        Start your subscription
      </Typography>
      <Typography $variant={variants.paragraphSmall} $mb="3rem">
        We have sent you a payment receipt by e-mail and a link to download the
        plugin with a license key.
      </Typography>
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

export default StartSubscriptionScreen;
