import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    const { data } = await axios.post(
      "https://gscore-back.herokuapp.com/api/users/sign-in",
      { email, password }
    );

    return data;
  }
);
