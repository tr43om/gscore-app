import styled from "styled-components";
import { SubscriptionCard } from "../../components";
import { withAuth } from "../../hocs/withAuth";
import { useSelector } from "react-redux";
import { selectSubscriptionsSlice } from "../../store/ducks/subscriptions/selectors";

const SubscriptionsScreen = (props: SubscriptionsScreenProps) => {
  const { subscriptions } = useSelector(selectSubscriptionsSlice);
  console.log(subscriptions);
  return (
    <Root>
      <Title mb={3}>My subscriptions</Title>
      {/* <SubscriptionCard /> */}
    </Root>
  );
};

type SubscriptionsScreenProps = {};

const Root = styled.div``;

const Title = styled.h3<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        specialHeading2: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

export default withAuth(SubscriptionsScreen);
