import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { login, signup, changePassword, changePersonalInfo } from "./actions";
import { User } from "../../../types";
import { deleteCookie } from "cookies-next";
import { ACCESS_TOKEN } from "../../../constants";

interface UserSliceState {
  loading: boolean;
  isAuthorized: boolean | null;
  userInfo: User | null;
  error: SerializedError | null;
}

const initialState: UserSliceState = {
  loading: false,
  isAuthorized: null,
  error: null,
  userInfo: null,
};

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.loading = false;
      state.isAuthorized = false;
      state.error = null;
      state.userInfo = null;
      deleteCookie(ACCESS_TOKEN);
    },
  },
  extraReducers: (builder) => {
    // LOG IN
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      state.isAuthorized = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // SIGN UP
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.isAuthorized = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // CHANGE PASSWORD
    builder.addCase(changePassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(changePassword.fulfilled, (state) => {
      state.loading = false;
      state.userInfo = null;

      state.isAuthorized = false;
    });

    builder.addCase(changePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // CHANGE PERSONAL INFO
    builder.addCase(changePersonalInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(changePersonalInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });

    builder.addCase(changePersonalInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { logOut } = actions;

export const userReducer = reducer;
