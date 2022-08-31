import { DefaultTheme } from "styled-components";

const variants = {
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

const colors = {
  accent: "#FC5842",
  secondaryRed: "#D1311C",
  secondaryPink: "#FFF0EE",
  neutral800: "#0C0C0C",
  neutral700: "#272727",
  neutral600: "#393939",
  neutral500: "#969696",
  neutral400: "#C7C7C7",
  neutral300: "#D7D7D7",
  neutral200: "#FBFBFB",
  neutral100: "#FFFFFF",
  systemGreen: "#05C168",
  systemRed400: "#DC2B2B",
  systemRed300: "#FF5A65",
  systemRed200: "#FFBEC2",
  systemRed100: "#FFEFF0",
  systemOrange: "#FF9E2C",
  background: "#181818",
};

const fonts = {
  thicccboi: "THICCCBOI",
  thicccboi500: "THICCCBOI500",
  thicccboi600: "THICCCBOI600",
  thicccboi700: "THICCCBOI700",
  inter: "Inter",
  dmsans: "DM Sans",
};

const shadows = {
  color01: "0px 4px 10px rgba(252, 88, 66, 0.1)",
  color02: "0px 6px 20px rgba(252, 88, 66, 0.14)",
  color03: "0px 10px 28px rgba(252, 88, 66, 0.2)",
  white01: "0px 4px 10px rgba(20, 20, 43, 0.04)",
  white02: "0px 6px 20px rgba(20, 20, 43, 0.06)",
  white03: "0px 10px 28px rgba(20, 20, 43, 0.1)",
};

export const theme: DefaultTheme = {
  typography: {
    fonts,
    variants,
  },
  shadows,
  colors,
};
