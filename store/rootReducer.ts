export * from "./ducks";

import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { reducers } from "./ducks";
import { logOut } from "./ducks/user";

const appReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  // Clear all data in redux store to initial.
  if (action.type === logOut.type) state = {} as RootState;

  return appReducer(state, action);
};

export default rootReducer;
