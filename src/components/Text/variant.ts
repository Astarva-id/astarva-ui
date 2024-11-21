import { variant } from "styled-system";

const textVariant = variant({
  prop: "variant",
  variants: {
    heading1: {
      fontSize: "3.75rem",
      lineHeight: "4.5rem",
    },
    heading2: {
      fontSize: "3rem",
      lineHeight: "3.625rem",
    },
    heading3: {
      fontSize: "2.5rem",
      lineHeight: "3.625rem",
    },
    heading4: {
      fontSize: "1.875rem",
      lineHeight: "2.375rem",
    },
    heading5: {
      fontSize: "1.75rem",
      lineHeight: "2.375rem",
    },
    heading6: {
      fontSize: "1.5rem",
      lineHeight: "1.875rem",
    },
    large: {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
    },
    medium: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    small: {
      fontSize: ".875rem",
      lineHeight: "1.375rem",
    },
    "extra-small": {
      fontSize: ".75rem",
      lineHeight: "1.25rem",
    },
    micro: {
      fontSize: ".625rem",
      lineHeight: "1.125rem",
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
