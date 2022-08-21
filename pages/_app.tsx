import type { AppProps } from "next/app";
import { BasicLayout } from "../components";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}

export default MyApp;
