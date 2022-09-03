import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import { ProductType } from "../../../types/index";
import { getSubscriptions } from "./actions";

interface SubscriptionsSliceState {
  subscriptions: ProductType[];
  loading: boolean;
  error: SerializedError | null;
}

const initialState: SubscriptionsSliceState = {
  subscriptions: [],
  error: null,
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {},
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

export const {} = actions;

export const subscriptionsReducer = reducer;