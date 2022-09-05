import { useSwiper } from "swiper/react";
import styled from "styled-components";
import { ArrowRightIcon, ArrowLeftIcon } from "../../assets";

const SubscriptionsListActions = ({
  activeIndex,
  slidesLength,
}: SubscriptionsListActionsProps) => {
  const swiper = useSwiper();

  return (
    <Root>
      <Action disabled={activeIndex <= 1} onClick={() => swiper.slidePrev()}>
        <ButtonPrev />
      </Action>

      <Pagination>
        <ActiveIndex>{activeIndex}</ActiveIndex>
        <Total>/{slidesLength}</Total>
      </Pagination>

      <Action
        disabled={activeIndex === slidesLength}
        onClick={() => swiper.slideNext()}
      >
        <ButtonNext />
      </Action>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font: ${({
    theme: {
      variants: {
        typography4: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-top: 2rem;
`;

const Action = styled.div<{ disabled: boolean }>`
  display: flex;
  border: 1px solid ${({ theme: { colors } }) => colors.neutral500};
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;

  &,
  & > * {
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  }

  & > * {
    width: 20px;
    height: 20px;
  }
`;

const ButtonNext = styled(ArrowRightIcon)``;
const ButtonPrev = styled(ArrowLeftIcon)``;

const Pagination = styled.div`
  user-select: none;
`;
const ActiveIndex = styled.span``;
const Total = styled.span`
  color: ${({ theme: { colors } }) => colors.neutral600};
`;

type SubscriptionsListActionsProps = {
  activeIndex: number;
  slidesLength: number;
};

export default SubscriptionsListActions;
