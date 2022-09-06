import { instance as axios } from "../../services";
import { ACCESS_TOKEN } from "../../constants";
import { setCookie } from "cookies-next";
import {
  SignInDto,
  SignUpDto,
  UpdatePasswordDto,
  ChangePersonalDataDto,
} from "../../types";

export const fetchLogIn = async ({ email, password }: SignInDto) => {
  const { data } = await axios.post("users/sign-in", { email, password });
  setCookie(ACCESS_TOKEN, data.token);
  return data;
};

export const fetchSignUp = async ({ username, email, password }: SignUpDto) => {
  const { data } = await axios.post("users/sign-up", {
    email,
    username,
    password,
  });
  setCookie(ACCESS_TOKEN, data.token);
  return data;
};

export const fetchChangePassword = async ({
  currentPassword,
  newPassword,
}: UpdatePasswordDto) => {
  const { data } = await axios.patch<UpdatePasswordDto>(
    "users/update-password",
    {
      currentPassword,
      newPassword,
    }
  );

  return data;
};

export const fetchChangePersonalInfo = async ({
  email,
  username,
}: ChangePersonalDataDto) => {
  const { data } = await axios.patch<ChangePersonalDataDto>("users", {
    email,
    username,
  });

  return data;
};
