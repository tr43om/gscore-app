import { instance as axios } from "../../services";

export const fetchGetProducts = async () => {
  const { data } = await axios.get("products");
  return data;
};
