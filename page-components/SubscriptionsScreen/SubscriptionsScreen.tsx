import styled from "styled-components";
import {
  PrimaryButton,
  SubscriptionCard,
  SubscriptionsList,
} from "../../components";
import { withAuth } from "../../hocs/withAuth";
import { useSelector } from "react-redux";
import { selectSubscriptionsSlice } from "../../store/ducks";
import { selectCodes } from "../../store/ducks";

import _ from "lodash";
import { useSwiper } from "swiper/react";

const SubscriptionsScreen = (props: SubscriptionsScreenProps) => {
  const { subscriptions } = useSelector(selectSubscriptionsSlice);
  const codes = useSelector(selectCodes);

  const swiper = useSwiper();

  return (
    <Root>
      <Header>
        <Title>My subscriptions</Title>
        <StyledPrimaryButton>Upgrade</StyledPrimaryButton>
      </Header>

      <SubscriptionsList subscriptions={subscriptions} />

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  max-width: 150px;
  padding-block: 26px;
`;

export default withAuth(SubscriptionsScreen);
