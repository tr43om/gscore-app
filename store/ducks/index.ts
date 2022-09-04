import { userReducer } from "./user";
import { paymentReducer } from "./payment";
import { productsReducer } from "./products";
import { subscriptionsReducer } from "./subscriptions/slice";

// reducers
export const reducers = {
  user: userReducer,
  payment: paymentReducer,
  products: productsReducer,
  subscriptions: subscriptionsReducer,
};

// selectors
export { selectUser } from "./user";
export { getPaymentStatus } from "./payment";
export { selectProducts, selectProductById } from "./products";
export { selectSubscriptionsSlice, selectCodes } from "./subscriptions";

// actions
export { login, signup } from "./user";
export { makePayment } from "./payment";
export { getSubscriptions, showCurrentCodes } from "./subscriptions";
