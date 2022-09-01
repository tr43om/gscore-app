export * from "./ducks";

import { combineReducers } from "@reduxjs/toolkit";
import { reducers } from "./ducks";

export default combineReducers(reducers);
