export * from "./ducks";

import { Action, combineReducers } from "@reduxjs/toolkit";
import { reducers } from "./ducks";
import { logOut } from "./ducks/user";
import { RootState } from "./store";

const appReducer = combineReducers(reducers);

const rootReducer = (state: RootState, action: Action) => {
  // Clear all data in redux store to initial.
  if (action.type === logOut.type) state = [];

  return appReducer(state, action);
};

export default rootReducer;
