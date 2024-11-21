import colors from "@components/Colors";
import { variant } from "styled-system";

import { InputSelectProps } from "./Select.types";

export const selectVariant = (props: InputSelectProps) => {
  return variant({
    prop: "size",
    variants: {
      small: {
        padding: ".5rem .625rem",
        fontSize: ".875rem",
        border: props.isError
          ? `.0625rem solid ${colors.red500}`
          : `.0625rem solid ${colors.black100}`,
        borderRadius: ".375rem",
      },
      regular: {
        padding: ".75rem 1rem",
        borderRadius: ".5rem",
      },
    },
  });
};

export const textValueSelect = () => {
  return variant({
    prop: "size",
    variants: {
      small: {
        fontSize: ".875rem",
      },
      regular: {
        fontSize: "1rem",
      },
    },
  });
};

export const itemSelect = () => {
  return variant({
    prop: "size",
    variants: {
      small: {
        padding: ".25rem .625rem",
      },
      regular: {
        padding: "0.5rem 0.75rem",
      },
    },
  });
};
