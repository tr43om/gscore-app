import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../../types/index";
import { getProducts } from "./actions";

interface ProductsSliceState {
  products: ProductType[] | null;
}

const initialState: ProductsSliceState = {
  products: null,
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
