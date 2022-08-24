import GlobalStyle from "../../../styles/globals";
import { ReactNode } from "react";
import { Container } from "../container";
import { Header } from "../../header";
import { Footer } from "../../footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default BasicLayout;
