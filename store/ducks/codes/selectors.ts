import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const getActivationStatus = createSelector(
  ({ codes: { error, loading } }: RootState) => {
    return { error, loading };
  },
  (payment) => payment
);

export const selectCodes = createSelector(
  ({ codes: { codes } }: RootState) => {
    return codes;
  },
  (codes) => codes
);

const selectId = (state: RootState, subscriptionId: number) => subscriptionId;

export const selectCodesById = createSelector(
  [selectCodes, selectId],
  (codes, subscriptionId) => {
    return codes.filter((code) => code.subscribeId == subscriptionId);
  }
);
