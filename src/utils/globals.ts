import colors from "@components/Colors";
import { colorIndex } from "@components/Colors/Colors.types";
import { system } from "styled-system";

export const getColor = (colorIndex: colorIndex) => {
  return colors[colorIndex];
};

export const overrideColorConfig = system({
  color: {
    property: "color",
    transform: (value: colorIndex) => colors[value],
  },
  backgroundColor: {
    property: "backgroundColor",
    transform: (value: colorIndex) => colors[value],
  },
  bg: {
    property: "backgroundColor",
    transform: (value: colorIndex) => colors[value],
  },
  borderColor: {
    property: "borderColor",
    transform: (value: colorIndex) => colors[value],
  },
  borderTopColor: {
    property: "borderTopColor",
    transform: (value: colorIndex) => colors[value],
  },
  borderRightColor: {
    property: "borderRightColor",
    transform: (value: colorIndex) => colors[value],
  },
  borderBottomColor: {
    property: "borderBottomColor",
    transform: (value: colorIndex) => colors[value],
  },
  borderLeftColor: {
    property: "borderLeftColor",
    transform: (value: colorIndex) => colors[value],
  },
});
