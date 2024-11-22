import colors from "@components/Colors";
import { variant } from "styled-system";

const dividerVariant = () =>
  variant({
    prop: "orientation",
    variants: {
      horizontal: {
        position: "relative",
        display: "block",
        height: `.0625rem`,
        width: "100%",
      },

      vertical: {
        height: "auto",
        width: ".0625rem",
      },
    },
  });

const dividerAlign = () =>
  variant({
    prop: "align",
    variants: {
      left: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        "&:before": {
          content: "",
          height: ".0625rem",
          background: colors.black100,
          flex: 1,
          margin: "0 .25em 0 0",
        },
        "&:after": {
          content: "",
          height: ".0625rem",
          background: colors.black100,
          flex: 12,
          margin: "0 0 0 .25em",
        },
      },
      center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        "&:before": {
          content: "",
          height: ".0625rem",
          background: colors.black100,
          flex: 1,
          margin: "0 .25em 0 0",
        },
        "&:after": {
          content: "",
          height: ".0625rem",
          background: colors.black100,
          flex: 1,
          margin: "0 0 0 .25em",
        },
      },
      right: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        "&:before": {
          content: "",
          height: ".0625rem",
          background: colors.black100,
          flex: 12,
          margin: "0 .25em 0 0",
        },
        "&:after": {
          content: "",
          height: ".0625rem",
          background: colors.black100,
          flex: 1,
          margin: "0 0 0 .25em",
        },
      },
    },
  });

export { dividerAlign, dividerVariant };
