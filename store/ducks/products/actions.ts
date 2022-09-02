import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchGetProducts } from "../../../api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  fetchGetProducts
);
