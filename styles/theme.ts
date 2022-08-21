import { DefaultTheme } from "styled-components";

const variantsMapping: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  specialHeading1: {
    fontSize: "4.875rem", //78px
    lineHeight: "86px",
  },
  specialHeading2: {
    fontSize: "3.375rem", //54px
    lineHeight: "64px",
  },
  specialHeading3: {
    fontSize: "2.75rem", //44px
    lineHeight: "54px",
  },
  specialHeading4: {
    fontSize: "1.75rem", //28px
    lineHeight: "40px",
  },
  heading1: {
    fontSize: "3.375rem", //54px
    lineHeight: "66px",
  },
  heading2: {
    fontSize: "2,375rem", //38px
    lineHeight: "50px",
  },
  heading3: {
    fontSize: "1.5rem", //24px
    lineHeight: "34px",
  },
  heading4: {
    fontSize: "1.125rem", //18px
    lineHeight: "24px",
  },

  heading5: {
    fontSize: "1rem", //16px
    lineHeight: "22px",
  },

  paragraphLarge: {
    fontSize: "1.5rem", //24px
    lineHeight: "38px",
  },
  paragraphDefault: {
    fontSize: "1.125rem", //18px
    lineHeight: "30px",
  },
  paragraphSmall: {
    fontSize: "0.875rem", //14px
    lineHeight: "24px",
  },

  textSingle400: {
    fontSize: "1.5rem", //24px
    lineHeight: "26px",
  },

  textSingle300: {
    fontSize: "1.25rem", //20px
    lineHeight: "22px",
  },

  textSingle200: {
    fontSize: "1.125rem", //18px
    lineHeight: "20px",
  },

  textSingle100: {
    fontSize: "1rem", // 16px
    lineHeight: "18px",
  },
};

export const theme: DefaultTheme = {
  typography: {
    fonts: {
      thicccboi: "THICCCBOI",
      thicccboi500: "THICCCBOI500",
      thicccboi600: "THICCCBOI600",
      thicccboi700: "THICCCBOI700",
      inter: "INTER",
      dmsans: "DM Sans",
    },
    variants: variantsMapping,
  },
  shadows: {
    color01: "0px 4px 10px rgba(252, 88, 66, 0.1)",
    color02: "0px 6px 20px rgba(252, 88, 66, 0.14)",
    color03: "0px 10px 28px rgba(252, 88, 66, 0.2)",
    white01: "0px 4px 10px rgba(20, 20, 43, 0.04)",
    white02: "0px 6px 20px rgba(20, 20, 43, 0.06)",
    white03: "0px 10px 28px rgba(20, 20, 43, 0.1)",
  },
};
