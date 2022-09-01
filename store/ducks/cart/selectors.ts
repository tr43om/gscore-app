import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectPriceId = createSelector(
  ({ cart: { priceId } }: RootState) => priceId,
  (priceId) => priceId
);
