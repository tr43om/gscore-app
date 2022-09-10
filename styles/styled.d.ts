import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      [key: string]: string;
    };
    variants: {
      [key: string]: {
        fontSize: string;
        lineHeight: string;
        fontFamily: string;
      };
    };

    shadows: {
      [key: string]: string;
    };
    colors: {
      [key: string]: string;
    };
    breakpoints: {
      [key: string]: string;
    };
    devices: {
      [key: string]: string;
    };
  }
}
