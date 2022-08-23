import axios from "axios";

const baseURL = "https://gscore-back.herokuapp.com/api/";

const instance = axios.create({ baseURL: baseURL });

export const setToken = (AUTH_TOKEN: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
};
