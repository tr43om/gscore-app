import { instance as axios } from "../../../services";

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post("users/sign-in", { email, password });

  return data;
};

export const signUp = async ({
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
