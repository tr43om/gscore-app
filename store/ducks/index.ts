import { userReducer } from "./user";
import { paymentReducer } from "./payment";
import { productsReducer } from "./products";

// reducers
export const reducers = {
  user: userReducer,
  payment: paymentReducer,
  products: productsReducer,
};

// selectors
export { selectUser } from "./user";
export { getPaymentStatus } from "./payment";
export { selectProducts, selectProductById } from "./products";

// actions
export { login, signup } from "./user";
export { makePayment } from "./payment";
