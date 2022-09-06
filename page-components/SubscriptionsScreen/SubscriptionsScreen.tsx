import styled from "styled-components";
import {
  LicenseCodeCard,
  PrimaryButton,
  SubscriptionsList,
} from "../../components";
import { withAuth } from "../../hocs/withAuth";
import { useSelector } from "react-redux";
import { selectSubscriptionsSlice } from "../../store/ducks";

import {
  selectCodesById,
  selectDisplayedSubscriptionId,
} from "../../store/ducks";

import { RootState } from "../../store/store";

const SubscriptionsScreen = (props: SubscriptionsScreenProps) => {
  const { subscriptions } = useSelector(selectSubscriptionsSlice);
  const displayedSubscriptionId = useSelector(selectDisplayedSubscriptionId);
  const codes = useSelector((state: RootState) =>
    selectCodesById(state, displayedSubscriptionId)
  );

  return (
    <Root>
      <Header>
        <Title>My subscriptions</Title>
        <StyledPrimaryButton>Upgrade</StyledPrimaryButton>
      </Header>

      <SubscriptionsList subscriptions={subscriptions} />

      <LicenseCodesList>
        {codes.map((code) => (
          <LicenseCodeCard key={code.id} code={code} />
        ))}
      </LicenseCodesList>
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

const LicenseCodesList = styled.section`
  display: grid;
  gap: 1rem;
`;

export default withAuth(SubscriptionsScreen);
