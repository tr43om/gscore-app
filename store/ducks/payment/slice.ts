import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import { makePayment } from "./actions";

interface PaymentSliceState {
  loading: boolean;
  error: SerializedError | null;
  currentPaymentId: number;
}

const initialState: PaymentSliceState = {
  error: null,
  loading: false,
  currentPaymentId: 0,
};

export const { actions, reducer } = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(makePayment.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.currentPaymentId = payload.subscribe.productId;
    });
    builder.addCase(makePayment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(makePayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const {} = actions;

export const paymentReducer = reducer;
