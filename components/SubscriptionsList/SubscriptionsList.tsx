import styled from "styled-components";
import { SubscribeResponseDto } from "../../types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import _ from "lodash";
import { SubscriptionCard } from "../SubscriptionCard";
import { SubscriptionsListActions } from "../SubscriptionsListActions.tsx";
import { useState } from "react";

import { useTheme } from "styled-components";

const SubscriptionsList = ({ subscriptions }: SubscriptionsListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    breakpoints: { tablet, mobileS },
  } = useTheme();

  return (
    <SwiperContainer
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        [mobileS]: {
          slidesPerView: 1,
        },
        [tablet]: {
          slidesPerView: 2,
        },
      }}
      navigation
      allowSlideNext
      allowSlidePrev
      onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
    >
      {subscriptions.map((subscription) => (
        <SwiperSlide key={subscription.id}>
          {({ isActive }) => (
            <SubscriptionCard
              subscription={subscription}
              $isActive={isActive}
            />
          )}
        </SwiperSlide>
      ))}

      <SubscriptionsListActions
        activeIndex={currentIndex + 1}
        slidesLength={subscriptions.length}
      />
    </SwiperContainer>
  );
};

type SubscriptionsListProps = {
  subscriptions: SubscribeResponseDto[];
};

const SwiperContainer = styled(Swiper)`
  position: relative;
  z-index: 1;
  margin-bottom: 2.5rem;

  .swiper-wrapper {
    position: relative;
    display: flex;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper-pagination-current {
    color: red;
  }
`;

export default SubscriptionsList;
