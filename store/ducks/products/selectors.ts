import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = createSelector(
  ({ products: { products } }: RootState) => products,
  (products) => products
);
