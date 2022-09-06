import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchActivateCode, fetchGetCodes } from "../../../api";

export const activateCode = createAsyncThunk(
  "codes/makePayment",
  fetchActivateCode
);

export const getCodes = createAsyncThunk("codes/getCodes", fetchGetCodes);
