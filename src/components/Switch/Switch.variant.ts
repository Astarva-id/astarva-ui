import colors from "@components/Colors";
import { variant } from "styled-system";

import { SwitchProps } from "./Switch.types";

export const switchVariant = (props: SwitchProps) =>
  variant({
    prop: "size",
    variants: {
      small: {
        height: "1rem",
        maxWidth: "3rem",
      },
      regular: {
        position: "relative",
        borderRadius: "1.25rem",
        padding: ".25rem",
        height: "1.25rem",
        width: "100%",
        maxWidth: "3.75rem",
        cursor: "pointer",
        transition: "background-color .3s ease-in",
        backgroundColor: `${props.active ? colors.blue400 : colors.black100}`,
        opacity: `${props.disabled ? ".5" : "1"}`,
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
