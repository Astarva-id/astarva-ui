import colors from "@components/Colors";
import { variant } from "styled-system";

import { InputProps } from "./Input.types";

export const inputVariant = (props: InputProps) => {
  return variant({
    prop: "size",
    variants: {
      regular: {
        boxSizing: "border-box",
        width: "100%",
        lineHeight: "1.375rem",
        color: colors.black800,
        border: props.noBorder
          ? "none"
          : props.isError
            ? `.0625rem solid ${colors.red400}`
            : `.0625rem solid ${colors.black100}`,
        fontSize: ".875rem",
        padding: ".75rem 1rem",
        borderRadius: ".5rem",
        backgroundColor: colors.white,
        "&:focus,&:hover": {
          borderColor: props.isError ? colors.red400 : colors.blue400,
          outline: "none",
        },
        "&:disabled": {
          backgroundColor: colors.black50,
          borderColor: props.noBorder ? colors.black50 : colors.black100,
          cursor: "not-allowed",
        },
        "&::placeholder": {
          color: colors.black300,
          fontSize: ".875rem",
        },
      },
      small: {
        boxSizing: "border-box",
        width: "100%",
        lineHeight: "1.375rem",
        color: colors.black800,
        border: props.isError
          ? `.0625rem solid ${colors.red400}`
          : `.0625rem solid ${colors.black100}`,
        fontSize: ".75rem",
        padding: ".5rem .625rem",
        borderRadius: ".375rem",
        backgroundColor: colors.white,
        "&:focus,&:hover": {
          borderColor: props.isError ? colors.red400 : colors.blue400,
          outline: "none",
        },
        "&:disabled": {
          backgroundColor: colors.black50,
          borderColor: props.noBorder ? colors.black50 : colors.black100,
          cursor: "not-allowed",
        },
        "&::placeholder": {
          color: colors.black300,
          fontSize: ".75rem",
        },
      },
    },
  });
};

export const inputWrapperVariant = (props: InputProps) => {
  return variant({
    prop: "size",
    variants: {
      regular: {
        boxSizing: "border-box",
        padding: ".75rem 1rem",
        columnGap: ".5rem",
        width: "100%",
        alignItems: "center",
        borderRadius: ".5rem",
        border: props.noBorder
          ? "none"
          : props.isError
            ? `.0625rem solid ${colors.red400}`
            : props.isFocus
              ? `.0625rem solid ${colors.blue400}`
              : `.0625rem solid ${colors.black100}`,
        color: colors.black700,
        "&:hover": {
          borderColor: props.noBorder
            ? "none"
            : props.disabled
              ? colors.black100
              : props.isError
                ? colors.red400
                : colors.blue400,
          outline: "none",
        },
        "&:disabled": {
          backgroundColor: colors.black50,
          borderColor: colors.black50,
          cursor: "not-allowed",
        },
        "&::placeholder": {
          color: colors.black200,
          fontSize: ".875rem",
        },
        svg: {
          flexShrink: 0,
          path: {
            fill: props.isFocus
              ? props.isError
                ? colors.red400
                : colors.blue500
              : colors.black400,
          },
        },
      },
      small: {
        boxSizing: "border-box",
        padding: ".5rem .75rem",
        width: "100%",
        columnGap: ".5rem",
        alignItems: "center",
        borderRadius: ".375rem",
        border: props.noBorder
          ? "none"
          : props.isError
            ? `.0625rem solid ${colors.red400}`
            : props.isFocus
              ? `.0625rem solid ${colors.blue400}`
              : `.0625rem solid ${colors.black100}`,
        color: colors.black700,
        "&:hover": {
          borderColor: props.noBorder
            ? "none"
            : props.disabled
              ? colors.black100
              : props.isError
                ? colors.red400
                : colors.blue400,
          outline: "none",
        },
        "&:disabled": {
          backgroundColor: colors.black50,
          borderColor: colors.black50,
          cursor: "not-allowed",
        },
        "&::placeholder": {
          color: colors.black200,
          fontSize: ".875rem",
        },
        svg: {
          flexShrink: 0,
          path: {
            fill: props.isError
              ? colors.red400
              : props.isFocus
                ? colors.blue500
                : colors.black400,
          },
        },
      },
    },
  });
};
