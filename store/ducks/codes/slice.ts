import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";
import { activateCode, getCodes } from "./actions";
import { LicenceCodeResponseDto } from "../../../types";

interface CodesSliceState {
  loading: boolean;
  error: SerializedError | null;
  codes: LicenceCodeResponseDto[];
}

const initialState: CodesSliceState = {
  error: null,
  loading: false,
  codes: [],
};

export const { actions, reducer } = createSlice({
  name: "codes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(activateCode.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.codes = state.codes.map((code) => {
        if (payload.code === code.code) {
          return { ...code, status: payload.status };
        }

        return code;
      });
    });
    builder.addCase(activateCode.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(activateCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(getCodes.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.codes = payload;
    });
    builder.addCase(getCodes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCodes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const {} = actions;

export const codesReducer = reducer;
