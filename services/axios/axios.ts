import axios, { AxiosRequestConfig } from "axios";
import { store } from "../../store/store";

const baseURL = "https://gscore-back.herokuapp.com/api";

const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const instance = axios.create(config);
// instance.defaults.headers.common["Authorization"] = `Bearer ${
//   store.getcaState().user.token
// }`;
// export const setToken = (AUTH_TOKEN: string) => {
//   instance.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
// };

// instance.interceptors.request.use((config) => {
//   const token = store.getState()?.user.token;
//   if (token) config.headers = { Authorization: `Bearer ${token}` };
//   return config;
// });
// instance.interceptors.request.use((config) => {
//   const token = store.getState().user.token;
//   if (token) config.headers!.Authorization = `Bearer ${token}`;
//   return config;
// });

// ERRORS: baseReducer is not a function
//Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.
