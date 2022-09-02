import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMakePayment } from "../../../api/";

export const makePayment = createAsyncThunk(
  "payment/makePayment",
  fetchMakePayment
);
