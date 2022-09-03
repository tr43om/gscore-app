import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectSubscriptionsSlice = createSelector(
  ({ subscriptions }: RootState) => subscriptions,
  (subscriptions) => subscriptions
);
