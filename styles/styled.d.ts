import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      fonts: {
        [key: string]: string;
      };
      variants: {
        [key: string]: {
          fontSize: string;
          lineHeight: string;
        };
      };
    };
    shadows: {
      [key: string]: string;
    };
    colors: {
      [key: string]: string;
    };
  }
}
