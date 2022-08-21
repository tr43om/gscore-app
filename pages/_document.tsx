import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* DM Sans(400) & Inter(500) */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
