import { variant } from "styled-system";

const textVariant = variant({
  prop: "variant",
  variants: {
    heading1: {
      fontSize: "3.75rem",
    },
    heading2: {
      fontSize: "3rem",
    },
    heading3: {
      fontSize: "2.5rem",
    },
    heading4: {
      fontSize: "1.875rem",
    },
    heading5: {
      fontSize: "1.75rem",
    },
    heading6: {
      fontSize: "1.5rem",
    },
    large: {
      fontSize: "1.125rem",
    },
    medium: {
      fontSize: "1rem",
    },
    small: {
      fontSize: ".875rem",
    },
    "extra-small": {
      fontSize: ".75rem",
    },
    micro: {
      fontSize: ".625rem",
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
