import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// CSS RESET
*, *::before, *::after {
    box-sizing: border-box; 
}

* {
  margin: 0;
}

html, body {
  font: ${({
    theme: {
      variants: {
        paragraphDefault: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  overflow-x: hidden;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.neutral100};
}

#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
} 
`;

export default GlobalStyle;
