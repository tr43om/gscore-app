import { instance as axios } from "../../services";

export const fetchMakePayment = async (productId: number) => {
  const { data } = await axios.post("payments/buy", { priceId: productId });
  return data;
};
