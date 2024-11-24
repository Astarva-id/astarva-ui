import colors from "@components/Colors";
import { variant } from "styled-system";

export const switchVariant = () =>
  variant({
    prop: "size",
    variants: {
      small: {
        height: "1.25rem",
        width: "1.25rem",
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
