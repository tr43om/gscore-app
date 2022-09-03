import { instance as axios } from "../../services";

export const fetchGetSubscriptions = async () => {
  const { data } = await axios.get("subscribe/self");
  return data;
};
