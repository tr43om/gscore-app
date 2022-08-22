import GlobalStyle from "../../../styles/globals";
import { ReactNode } from "react";
import { Container } from "../container";
import { Header } from "../../header";
import { Footer } from "../../footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { store, persistor } from "../../../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default BasicLayout;
