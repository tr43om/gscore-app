import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchGetSubscriptions } from "../../../api";

export const getSubscriptions = createAsyncThunk(
  "subscriptions/getSubscriptions",
  fetchGetSubscriptions
);
