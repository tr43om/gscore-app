import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";

interface CartSliceState {
  priceId: number | null;
}

const initialState: CartSliceState = {
  priceId: null,
};

export const { actions, reducer } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<number>) => {
      state.priceId = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {} = actions;

export const cartReducer = reducer;
