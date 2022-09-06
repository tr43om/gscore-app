import { instance as axios } from "../../services";
import { LicenceCodeResponseDto } from "../../types";

export const fetchActivateCode = async (code: string) => {
  const { data } = await axios.post<LicenceCodeResponseDto>("code/activate", {
    code: code,
  });
  return data;
};

export const fetchGetCodes = async () => {
  const { data } = await axios.get<LicenceCodeResponseDto[]>("code/self");
  return data;
};
