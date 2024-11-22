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
        border: `.0625rem solid ${colors[backgroundColor]}`,
        backgroundColor: colors[backgroundColor],
        color: colors.white,
        boxShadow: "0rem .25rem .5rem 0rem rgba(50, 132, 255, 0.25)",
        "&:hover": {
          boxShadow: "none",
          border: `.0625rem solid ${backgroundColorHover ? colors[backgroundColorHover] : colors.blue700}`,
          backgroundColor: backgroundColorHover
            ? colors[backgroundColorHover]
            : colors.blue700,
        },
        "&:disabled": {
          border: `.0625rem solid ${colors.black100}`,
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
        border: `.0625rem solid ${colors[backgroundColor]}`,
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
          border: `.0625rem solid ${colors.black100}`,
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
        border: `.0625rem solid ${colors.white}`,
        color: colors[backgroundColor],
        boxShadow: "0 .0625rem .25rem 0 rgba(166, 175, 195, 0.25)",
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
          border: `.0625rem solid ${colors.black100}`,
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
          border: `solid .0625rem ${colors.black50}`,
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
      borderRadius: ".625rem",
    },
    rounded: {
      borderRadius: "6249.9375rem",
    },
  },
});

const buttonSize = () =>
  variant({
    prop: "size",
    variants: {
      large: {
        fontWeight: "700",
        padding: ".75rem 2rem",
        fontSize: ".875rem",
        lineHeight: "1.5rem",
      },
      medium: {
        fontWeight: "700",
        padding: ".5rem 1.5rem",
        fontSize: ".875rem",
        lineHeight: "1.5rem",
      },
      small: {
        fontWeight: "700",
        padding: ".375rem 1.125rem",
        fontSize: ".75rem",
        lineHeight: "1.25rem",
      },
    },
  });

export { buttonShape, buttonSize, buttonVariant };
