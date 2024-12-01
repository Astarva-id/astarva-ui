import { variant } from "styled-system";

export const inputVariant = () => {
  return variant({
    prop: "size",
    variants: {
      regular: {},
      small: {},
    },
  });
};
