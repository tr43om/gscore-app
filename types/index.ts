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

export type PersonalDataType = {
  email: string;
  username: string;
};

export type ChangePasswordType = {
  currentPassword: string;
  newPassword: string;
};

export type PriceType = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};

export type ProductType = {
  id: number;
  sitesCount: number;
  name: string;
  prices: PriceType[];
};

export type ProductsType = Array<ProductType>;

export type SubscriptionCardType = {
  id: number;
  userId: number;
  productId: number;
  product: ProductType;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
};
