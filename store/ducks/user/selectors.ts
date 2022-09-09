import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = createSelector(
  (state: RootState) => state.user,
  (user) => user
);

export const selectUsername = createSelector(
  (state: RootState) => state.user.userInfo?.username,
  (username) => username
);
