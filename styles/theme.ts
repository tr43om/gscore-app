import { DefaultTheme } from "styled-components";

const fonts = {
  default: "THICCCBOI",
  thicccboi500: "THICCCBOI500",
  thicccboi600: "THICCCBOI600",
  thicccboi700: "THICCCBOI700",
  inter: "Inter",
  dmsans: "DM Sans",
};

const variants = {
  specialHeading1: {
    fontSize: "4.875rem", //78px
    lineHeight: "86px",
    fontFamily: fonts.dmsans,
  },
  specialHeading2: {
    fontSize: "3.375rem", //54px
    lineHeight: "64px",
    fontFamily: fonts.thicccboi700,
  },
  specialHeading3: {
    fontSize: "2.75rem", //44px
    lineHeight: "54px",
    fontFamily: fonts.thicccboi700,
  },
  specialHeading4: {
    fontSize: "1.75rem", //28px
    lineHeight: "40px",
    fontFamily: fonts.thicccboi700,
  },
  heading1: {
    fontSize: "3.375rem", //54px
    lineHeight: "66px",
    fontFamily: fonts.thicccboi700,
  },
  heading2: {
    fontSize: "2,375rem", //38px
    lineHeight: "50px",
    fontFamily: fonts.thicccboi700,
  },
  heading3: {
    fontSize: "1.5rem", //24px
    lineHeight: "34px",
    fontFamily: fonts.thicccboi700,
  },
  heading4: {
    fontSize: "1.125rem", //18px
    lineHeight: "24px",
    fontFamily: fonts.thicccboi700,
  },

  heading5: {
    fontSize: "1rem", //16px
    lineHeight: "22px",
    fontFamily: fonts.thicccboi700,
  },

  paragraphLarge: {
    fontSize: "1.5rem", //24px
    lineHeight: "38px",
    fontFamily: fonts.default,
  },
  paragraphDefault: {
    fontSize: "1.125rem", //18px
    lineHeight: "30px",
    fontFamily: fonts.default,
  },
  paragraphSmall: {
    fontSize: "0.875rem", //14px
    lineHeight: "24px",
    fontFamily: fonts.default,
  },

  textSingle400: {
    fontSize: "1.5rem", //24px
    lineHeight: "26px",
    fontFamily: fonts.thicccboi700,
  },

  textSingle400Regular: {
    fontSize: "1.5rem", //24px
    lineHeight: "26px",
    fontFamily: fonts.default,
  },

  textSingle300: {
    fontSize: "1.25rem", //20px
    lineHeight: "22px",
    fontFamily: fonts.thicccboi500,
  },

  textSingle200: {
    fontSize: "1.125rem", //18px
    lineHeight: "20px",
    fontFamily: fonts.thicccboi500,
  },

  textSingle100: {
    fontSize: "1rem", // 16px
    lineHeight: "18px",
    fontFamily: fonts.thicccboi700,
  },

  textSingle100Regular: {
    fontSize: "1rem", // 16px
    lineHeight: "18px",
    fontFamily: fonts.default,
  },

  typography4: {
    fontSize: "1.375rem", // 22px
    lineHeight: "28px",
    fontFamily: fonts.thicccboi700,
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

const shadows = {
  color01: "0px 4px 10px rgba(252, 88, 66, 0.1)",
  color02: "0px 6px 20px rgba(252, 88, 66, 0.14)",
  color03: "0px 10px 28px rgba(252, 88, 66, 0.2)",
  white01: "0px 4px 10px rgba(20, 20, 43, 0.04)",
  white02: "0px 6px 20px rgba(20, 20, 43, 0.06)",
  white03: "0px 10px 28px rgba(20, 20, 43, 0.1)",
  general01: "0px 2px 6px rgba(20, 20, 43, 0.06)",
};

const breakpoints = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "768",
  laptop: "1024",
  laptopL: "1440",
  desktop: "2560",
};

const devices = {
  mobile: `(min-width: ${breakpoints.mobileL}px)`,
  tabletAndBelow: `(max-width: ${breakpoints.tablet}px)`,
  laptopAndBelow: `(max-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.laptop}px)`,
};

export const theme: DefaultTheme = {
  fonts,
  variants,
  shadows,
  colors,
  breakpoints,
  devices,
};
