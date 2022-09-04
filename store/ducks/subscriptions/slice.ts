import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import { getSubscriptions } from "./actions";
import { SubscribeResponseDto, LicenceCodeResponseDto } from "../../../types";

interface SubscriptionsSliceState {
  subscriptions: SubscribeResponseDto[];
  loading: boolean;
  error: SerializedError | null;
  currentCodes: LicenceCodeResponseDto[];
}

const initialState: SubscriptionsSliceState = {
  subscriptions: [],
  currentCodes: [],
  error: null,
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    showCurrentCodes: (state, action: PayloadAction<number>) => {
      state.currentCodes =
        state.subscriptions.find((sub) => sub.id === action.payload)?.codes ||
        [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSubscriptions.fulfilled, (state, { payload }) => {
      state.subscriptions = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getSubscriptions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSubscriptions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { showCurrentCodes } = actions;

export const subscriptionsReducer = reducer;
