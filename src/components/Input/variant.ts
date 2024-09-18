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
        lineHeight: "22px",
        color: colors.black800,
        border: props.noBorder
          ? "none"
          : props.isError
            ? `1px solid ${colors.red400}`
            : `1px solid ${colors.black100}`,
        fontSize: "14px",
        padding: "12px 16px",
        borderRadius: "8px",
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
          fontSize: "14px",
        },
      },
      small: {
        boxSizing: "border-box",
        width: "100%",
        lineHeight: "22px",
        color: colors.black800,
        border: props.isError
          ? `1px solid ${colors.red400}`
          : `1px solid ${colors.black100}`,
        fontSize: "12px",
        padding: "8px 10px",
        borderRadius: "6px",
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
          fontSize: "12px",
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
        padding: "12px 16px",
        columnGap: "8px",
        width: "100%",
        alignItems: "center",
        borderRadius: "8px",
        border: props.noBorder
          ? "none"
          : props.isError
            ? `1px solid ${colors.red400}`
            : props.isFocus
              ? `1px solid ${colors.blue400}`
              : `1px solid ${colors.black100}`,
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
          fontSize: "14px",
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
        padding: "8px 12px",
        width: "100%",
        columnGap: "8px",
        alignItems: "center",
        borderRadius: "6px",
        border: props.noBorder
          ? "none"
          : props.isError
            ? `1px solid ${colors.red400}`
            : props.isFocus
              ? `1px solid ${colors.blue400}`
              : `1px solid ${colors.black100}`,
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
          fontSize: "14px",
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
