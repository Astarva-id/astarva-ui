import colors from "@components/Colors";
import { variant } from "styled-system";

import { ButtonProps } from "./Button.types";

const buttonVariant = ({
  backgroundColor = "blue500",
  backgroundColorHover,
}: ButtonProps) =>
  variant({
    prop: "variant",
    variants: {
      primary: {
        border: `1px solid ${colors[backgroundColor]}`,
        backgroundColor: colors[backgroundColor],
        color: colors.white,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "&:hover": {
          boxShadow: "none",
          border: `1px solid ${backgroundColorHover ? colors[backgroundColorHover] : colors.blue700}`,
          backgroundColor: backgroundColorHover
            ? colors[backgroundColorHover]
            : colors.blue700,
        },
        "&:disabled": {
          border: `1px solid ${colors.black100}`,
          boxShadow: "none",
          backgroundColor: colors.black100,
          cursor: "not-allowed",
          color: colors.black500,
        },
        svg: {
          path: {
            fill: colors.black500,
          },
        },
      },
      secondary: {
        backgroundColor: colors.white,
        color: colors[backgroundColor],
        border: `1px solid ${colors[backgroundColor]}`,
        svg: {
          path: {
            fill: colors[backgroundColor],
          },
        },
        "&:hover": {
          backgroundColor: backgroundColorHover
            ? colors[backgroundColorHover]
            : colors.blue100,
          color: colors[backgroundColor],
          svg: {
            path: {
              fill: colors[backgroundColor],
            },
          },
        },
        "&:disabled": {
          border: `1px solid ${colors.black100}`,
          backgroundColor: colors.black100,
          cursor: "not-allowed",
          color: colors.black500,
          svg: {
            path: {
              fill: colors.black500,
            },
          },
        },
      },
      tertiary: {
        backgroundColor: colors.white,
        border: `1px solid ${colors.white}`,
        color: colors[backgroundColor],
        boxShadow: "0 1px 4px 0 rgba(166, 175, 195, 0.25)",
        svg: {
          path: {
            fill: colors[backgroundColor],
          },
        },
        "&:hover": {
          backgroundColor: colors.black50,
          boxShadow: "none",
          color: colors.black500,
          svg: {
            path: {
              fill: colors.black500,
            },
          },
        },
        "&:disabled": {
          boxShadow: "none",
          border: `1px solid ${colors.black100}`,
          backgroundColor: colors.black100,
          cursor: "not-allowed",
          color: colors.black500,
          svg: {
            path: {
              fill: colors.black500,
            },
          },
        },
        "&:active": {
          backgroundColor: colors.white,
          border: `solid 1px ${colors.black50}`,
          color: colors.black100,
          svg: {
            path: {
              fill: colors.black100,
            },
          },
        },
      },
    },
  });

const buttonShape = variant({
  prop: "shape",
  variants: {
    square: {},
    "semi-round": {
      borderRadius: "10px",
    },
    rounded: {
      borderRadius: "99999px",
    },
  },
});

const buttonSize = () =>
  variant({
    prop: "size",
    variants: {
      large: {
        fontWeight: "700",
        padding: "12px 32px",
        fontSize: "14px",
        lineHeight: "24px",
      },
      medium: {
        fontWeight: "700",
        padding: "8px 24px",
        fontSize: "14px",
        lineHeight: "24px",
      },
      small: {
        fontWeight: "700",
        padding: "6px 18px",
        fontSize: "12px",
        lineHeight: "20px",
      },
    },
  });

export { buttonShape, buttonSize, buttonVariant };
