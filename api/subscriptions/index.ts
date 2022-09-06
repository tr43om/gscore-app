import { instance as axios } from "../../services";
import { SubscribeResponseDto } from "../../types";

export const fetchGetSubscriptions = async () => {
  const { data } = await axios.get<SubscribeResponseDto[]>("subscribe/self");
  return data;
};
