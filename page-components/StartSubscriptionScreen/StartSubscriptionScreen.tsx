import { useSelector } from "react-redux";
import styled from "styled-components";
import { Error, PrimaryButton } from "../../components";
import {
  selectProductById,
  selectProducts,
} from "../../store/ducks/products/selectors";
import { getCurrentPaymentId } from "../../store/ducks/payment/selectors";
import { PaymentReceipt } from "../../components";
import { withAuth } from "../../hocs/withAuth";
import { getSubscriptions, getCodes } from "../../store/ducks";
import { selectSubscriptionsSlice } from "../../store/ducks";
import { useAppDispatch } from "../../store/store";
import Link from "next/link";

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
