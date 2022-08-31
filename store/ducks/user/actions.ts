import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchChangePassword,
  fetchLogIn,
  fetchSignUp,
  fetchChangePersonalInfo,
} from "../../../pages/api";

export const login = createAsyncThunk("user/login", fetchLogIn);
export const signup = createAsyncThunk("user/signup", fetchSignUp);
export const changePassword = createAsyncThunk(
  "user/changePassword",
  fetchChangePassword
);
export const changePersonalInfo = createAsyncThunk(
  "user/changePersonalInfo",
  fetchChangePersonalInfo
);
