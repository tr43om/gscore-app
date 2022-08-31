export * from "./ducks";

import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./ducks";

export default combineReducers({ user: userReducer });
