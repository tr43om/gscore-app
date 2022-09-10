import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  useAppDispatch,
  selectProductById,
  selectProducts,
  selectSubscriptionsSlice,
  getCurrentPaymentId,
  getSubscriptions,
  getCodes,
} from "../../store";

import { Error, PrimaryButton, PaymentReceipt } from "../../components";

import { withAuth } from "../../hocs";

const StartSubscriptionScreen = (props: StartSubscriptionScreenProps) => {
  const currentPaymentId = useSelector(getCurrentPaymentId);
  const products = useSelector(selectProducts);
  const product = useSelector(selectProductById(currentPaymentId - 1));
  console.log(products);
  const { loading, error } = useSelector(selectSubscriptionsSlice);
  const dispatch = useAppDispatch();

  const storeSubscriptions = async () => {
    await dispatch(getSubscriptions());
    await dispatch(getCodes());
  };
  return (
    <Main>
      <Title mb={1}>Start your subscription</Title>
      <Description mb={3}>
        We have sent you a payment receipt by e-mail and a link to download the
        plugin with a license key.
      </Description>

      <PaymentReceipt product={product} />
      <Link href="/subscriptions">
        <PrimaryButton
          $fullWidth
          $mt="3rem"
          onClick={storeSubscriptions}
          isLoading={loading}
        >
          Go to my subscriptions
        </PrimaryButton>
      </Link>

      {error && <Error>{error.message} </Error>}
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

export default withAuth(StartSubscriptionScreen);
