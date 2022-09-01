import { userReducer } from "./user";
import { cartReducer } from "./cart";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
};

export * from "./user";
