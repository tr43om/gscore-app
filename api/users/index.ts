import { instance as axios } from "../../services";
import { setAccessToken } from "../../store/rootReducer";
import { setCookie } from "cookies-next";

export const fetchLogIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post("users/sign-in", { email, password });
  setCookie("accessToken", data.token);
  console.log(data.token);
  return data;
};

export const fetchSignUp = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const { data } = await axios.post("users/sign-up", {
    email,
    username,
    password,
  });

  return data;
};

export const fetchChangePassword = async ({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) => {
  const { data } = await axios.patch("users/update-password", {
    currentPassword,
    newPassword,
  });

  return data;
};

export const fetchChangePersonalInfo = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  const { data } = await axios.patch("users", {
    email,
    username,
  });

  return data;
};
