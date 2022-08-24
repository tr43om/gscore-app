import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { login, signup } from "./actions";
import { setToken } from "../../../services";

interface UserSliceState {
  loading: boolean;
  success: boolean;
  userInfo: object;
  error: SerializedError | null;
}

const initialState: UserSliceState = {
  loading: false,
  success: false,
  error: null,
  userInfo: {},
};

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state = initialState;
      setToken("");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      setToken(payload.token);
      state.success = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      setToken(payload.token);
      state.success = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const UserActions = actions;

export const UserReducer = reducer;
