import { userReducer } from "./user";
import { paymentReducer } from "./payment";
import { productsReducer } from "./products";
import { subscriptionsReducer } from "./subscriptions/slice";
import { codesReducer } from "./codes";

// reducers
export const reducers = {
  user: userReducer,
  payment: paymentReducer,
  products: productsReducer,
  subscriptions: subscriptionsReducer,
  codes: codesReducer,
};

// selectors
export { selectUser, selectUsername } from "./user";
export { getPaymentStatus, getCurrentPaymentId } from "./payment";
export { selectProducts, selectProductById, getProducts } from "./products";
export {
  selectSubscriptionsSlice,
  selectDisplayedSubscriptionId,
} from "./subscriptions";
export { getActivationStatus, selectCodesById } from "./codes/selectors";

// actions
export {
  login,
  signup,
  logOut,
  changePersonalInfo,
  changePassword,
} from "./user";
export { makePayment } from "./payment";
export { getSubscriptions, setDisplayedSubscriptionId } from "./subscriptions";
export { activateCode, getCodes } from "./codes/actions";
