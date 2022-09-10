import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../../styles";
import { Container } from "../Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { store, persistor } from "../../../store/store";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Head>
            <title>GSCORE</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Container>
            <Header />
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default BasicLayout;
