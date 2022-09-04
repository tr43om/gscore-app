import styled from "styled-components";
import { SubscriptionCard } from "../../components";
import { withAuth } from "../../hocs/withAuth";
import { useSelector } from "react-redux";
import { selectSubscriptionsSlice } from "../../store/ducks";
import { selectCodes } from "../../store/ducks";
import _ from "lodash";

const SubscriptionsScreen = (props: SubscriptionsScreenProps) => {
  const { subscriptions } = useSelector(selectSubscriptionsSlice);
  const codes = useSelector(selectCodes);
  console.log(subscriptions);
  console.log("codes", codes);
  return (
    <Root>
      <Title mb={3}>My subscriptions</Title>
      {_.take(subscriptions, 3).map((subscription) => (
        <SubscriptionCard subscription={subscription} key={subscription.id} />
      ))}

      {codes.map((code) => (
        <div key={code.id}>{code.code}</div>
      ))}
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
