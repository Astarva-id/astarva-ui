import { variant } from "styled-system";

const textVariant = variant({
  prop: "variant",
  variants: {
    heading1: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    heading2: {
      fontSize: "48px",
      lineHeight: "58px",
    },
    heading3: {
      fontSize: "40px",
      lineHeight: "58px",
    },
    heading4: {
      fontSize: "30px",
      lineHeight: "38px",
    },
    heading5: {
      fontSize: "28px",
      lineHeight: "38px",
    },
    heading6: {
      fontSize: "24px",
      lineHeight: "30px",
    },
    large: {
      fontSize: "18px",
      lineHeight: "26px",
    },
    medium: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    small: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    "extra-small": {
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
});

const weightVariant = variant({
  prop: "weight",
  variants: {
    thin: {
      fontWeight: "100",
    },
    "extra-light": {
      fontWeight: "200",
    },
    light: {
      fontWeight: "300",
    },
    regular: {
      fontWeight: "400",
    },
    medium: {
      fontWeight: "500",
    },
    "semi-bold": {
      fontWeight: "600",
    },
    bold: {
      fontWeight: "700",
    },
    "extra-bold": {
      fontWeight: "800",
    },
  },
});

export { textVariant, weightVariant };
