import styled from "styled-components";
import { Divider, SecondaryButton } from "../ui";
import { SubscriptionCardType } from "../../types/index";

const SubscriptionCard = ({ subscription }: SubscriptionCardProps) => {
  return (
    <Root>
      <Header>
        <p>Gscore</p>
        <Status>Active</Status>
      </Header>
      <Divider />
      <Body>
        <Content>
          <div>
            <Package>Single site</Package>
            <ValidUntil>valid until 2023</ValidUntil>
          </div>
          <Price>$77</Price>
        </Content>

        <SecondaryButton>View</SecondaryButton>
      </Body>
    </Root>
  );
};

type SubscriptionCardProps = {
  subscription: SubscriptionCardType;
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
const Status = styled.p``;

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
