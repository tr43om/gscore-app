import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import { getSubscriptions } from "./actions";
import { SubscribeResponseDto, LicenceCodeResponseDto } from "../../../types";

interface SubscriptionsSliceState {
  subscriptions: SubscribeResponseDto[];
  loading: boolean;
  error: SerializedError | null;
  displayedSubscriptionId: number;
}

const initialState: SubscriptionsSliceState = {
  subscriptions: [],
  displayedSubscriptionId: 0,
  error: null,
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    setDisplayedSubscriptionId: (state, { payload }: PayloadAction<number>) => {
      state.displayedSubscriptionId = payload;
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

export const { setDisplayedSubscriptionId } = actions;

export const subscriptionsReducer = reducer;
