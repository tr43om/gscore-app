import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { login } from "./actions";

interface UserSliceState {
  loading: boolean;
  success: boolean;
  userToken: string;
  userInfo: object;
  error: boolean | null;
}

const initialState: UserSliceState = {
  loading: false,
  userToken: "",
  success: false,
  error: null,
  userInfo: {},
};

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      state.userToken = payload.token;
      state.success = true;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      // state.error = payload;
    });
  },
});

export const UserActions = actions;

export const UserReducer = reducer;
