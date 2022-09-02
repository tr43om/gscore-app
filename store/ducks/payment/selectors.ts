import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const getPaymentStatus = createSelector(
  (state: RootState) => state.payment,
  (payment) => payment
);

export const getCurrentPaymentId = createSelector(
  (state: RootState) => state.payment.currentPaymentId,
  (paymentId) => paymentId
);
