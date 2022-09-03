import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN } from "../constants";
import { useRouter } from "next/router";
import { Spinner } from "../components";
import type { FC } from "react";

type withAuthType = (Component: FC) => FC;

export const withoutAuth: withAuthType = (Component) => {
  const Wrapper: FC = (props): JSX.Element | null => {
    const token = getCookie(ACCESS_TOKEN);
    const router = useRouter();

    useEffect(() => {
      if (!token) router.push("/subscriptions");
    }, [router, token]);

    return token ? <Component {...props} /> : <Spinner />;
  };

  return Wrapper;
};
