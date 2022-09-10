import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN } from "../constants";
import { useRouter } from "next/router";
import { Spinner } from "../components";
import type { FC } from "react";

export const withAuth = <P extends object>(Component: FC<P>) => {
  const Wrapper: FC<P> = (props): JSX.Element | null => {
    const token = getCookie(ACCESS_TOKEN);
    const router = useRouter();

    useEffect(() => {
      if (!token) router.push("/signup");
    }, [router, token]);

    return token ? <Component {...props} /> : <Spinner />;
  };

  return Wrapper;
};
