import { ButtonHTMLAttributes, ReactNode } from "react";

export type variantType = {
  fontSize: string;
  lineHeight: string;
};

export type User = {
  email: string;
  username: string;
  id: string;
  token: string;
};

export type SignInValues = {
  email: string;
  password: string;
};

export type SignUpValues = {
  username: string;
  email: string;
  password: string;
};
