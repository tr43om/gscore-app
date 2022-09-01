import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN } from "../../constants";

const baseURL = "https://gscore-back.herokuapp.com/api";

const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const instance = axios.create(config);

instance.interceptors.request.use((config) => {
  const token = getCookie(ACCESS_TOKEN);
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  return config;
});
