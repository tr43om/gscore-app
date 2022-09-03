import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getProducts } from "./actions";
import { ProductResponseDto } from "../../../types";

interface ProductsSliceState {
  products: ProductResponseDto[];
}

const initialState: ProductsSliceState = {
  products: [],
};

export const { actions, reducer } = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const {} = actions;

export const productsReducer = reducer;
