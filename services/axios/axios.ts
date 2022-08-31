import axios, { AxiosRequestConfig } from "axios";
import { store } from "../../store/store";
import { getCookie } from "cookies-next";

const baseURL = "https://gscore-back.herokuapp.com/api";

const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const instance = axios.create(config);

instance.interceptors.request.use((config) => {
  const token = getCookie("accessToken");
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  return config;
});
