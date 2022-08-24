import { createAsyncThunk } from "@reduxjs/toolkit";

import { logIn, signUp } from "../../../pages/api";

export const login = createAsyncThunk("user/login", logIn);
export const signup = createAsyncThunk("user/signup", signUp);
