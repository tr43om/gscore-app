import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      fonts: {
        [key: string]:
          | "thicccboi"
          | "thicccboi500"
          | "thicccboi600"
          | "thicccboi700"
          | "inter"
          | "dmsans"
          | string;
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
  }
}
