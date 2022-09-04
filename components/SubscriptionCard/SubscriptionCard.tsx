import styled from "styled-components";
import { Divider, SecondaryButton } from "../ui";
import { SubscribeResponseDto } from "../../types";
import { useAppDispatch } from "../../store/store";
import { showCurrentCodes } from "../../store/ducks";

const SubscriptionCard = ({ subscription }: SubscriptionCardProps) => {
  const {
    product: { prices, name },
    id,
  } = subscription;
  const status =
    subscription.status.charAt(0) +
    subscription.status.substring(1).toLowerCase();
  const validDate = new Date(
    +subscription.currentPeriodEnd * 1000
  ).toDateString();
  const price = prices[0].price;

  const dispatch = useAppDispatch();

  return (
    <Root>
      <Header>
        <p>Gscore</p>
        <Status isActive={status === "Active"}>{status}</Status>
      </Header>
      <Divider />
      <Body>
        <Content>
          <div>
            <Package>{name} license</Package>
            <ValidUntil>valid until {validDate}</ValidUntil>
          </div>
          <Price>${price}</Price>
        </Content>

        <SecondaryButton
          onClick={() => {
            console.log(id);
            dispatch(showCurrentCodes(id));
          }}
        >
          View
        </SecondaryButton>
      </Body>
    </Root>
  );
};

type SubscriptionCardProps = {
  subscription: SubscribeResponseDto;
};

const Root = styled.section`
  background-color: ${({ theme: { colors } }) => colors.neutral600};
  border-radius: 12px;
  max-width: 38.75rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem 2rem 2rem;

  font: ${({
    theme: {
      variants: {
        typography4: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const Status = styled.p<{ isActive: boolean }>`
  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.systemGreen : colors.systemRed300};
`;

const Body = styled.main`
  padding: 1rem 5rem 3rem 2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;
`;
const Package = styled.p`
  font: ${({
    theme: {
      variants: {
        textSingle400Regular: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const Price = styled(Package)``;

const ValidUntil = styled.p`
  color: ${({ theme: { colors } }) => colors.neutral500};

  font: ${({
    theme: {
      variants: {
        textSingle100Regular: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  padding-top: 0.8rem;
`;

export default SubscriptionCard;
