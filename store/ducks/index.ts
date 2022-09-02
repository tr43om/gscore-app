import { userReducer } from "./user";
import { cartReducer } from "./cart";
import { productsReducer } from "./products";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
};

export * from "./user";
