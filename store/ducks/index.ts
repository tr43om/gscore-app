export * from "./user";
import { UserReducer } from "./user/slice";

export const reducers = {
  user: UserReducer,
};

export { UserActions } from "./user";
