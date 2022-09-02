import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = createSelector(
  ({ products: { products } }: RootState) => products,
  (products) => products
);

export const selectProductById = (id: number) =>
  createSelector(selectProducts, (products) => products[id]);
