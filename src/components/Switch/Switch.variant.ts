import colors from "@components/Colors";
import { variant } from "styled-system";

export const switchVariant = () =>
  variant({
    prop: "size",
    variants: {
      small: {
        maxWidth: "3.5rem",
      },
      regular: {
        maxWidth: "4.25rem",
      },
    },
  });

export const switchCircleVariant = () =>
  variant({
    prop: "size",
    variants: {
      small: {
        height: "1rem",
        width: "1rem",
        borderRadius: "6.1875rem",
        backgroundColor: colors.white,
      },
      regular: {
        height: "1.25rem",
        width: "1.25rem",
        borderRadius: "6.1875rem",
        backgroundColor: colors.white,
      },
    },
  });
