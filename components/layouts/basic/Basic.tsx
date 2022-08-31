import GlobalStyle from "../../../styles/globals";
import { ReactNode } from "react";
import { Container } from "../Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { store, persistor } from "../../../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
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
