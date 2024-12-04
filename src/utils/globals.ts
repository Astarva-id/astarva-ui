import colors from "@components/Colors";
import { colorIndex } from "@components/Colors/Colors.types";
import { system } from "styled-system";

export const getColor = (colorIndex: colorIndex) => {
  if (colorIndex in colors) return colors[colorIndex];
  return colorIndex;
};

export const overrideColorConfig = system({
  color: {
    property: "color",
    transform: (value: colorIndex) => getColor(value),
  },
  backgroundColor: {
    property: "backgroundColor",
    transform: (value: colorIndex) => getColor(value),
  },
  bg: {
    property: "backgroundColor",
    transform: (value: colorIndex) => getColor(value),
  },
  borderColor: {
    property: "borderColor",
    transform: (value: colorIndex) => getColor(value),
  },
  borderTopColor: {
    property: "borderTopColor",
    transform: (value: colorIndex) => getColor(value),
  },
  borderRightColor: {
    property: "borderRightColor",
    transform: (value: colorIndex) => getColor(value),
  },
  borderBottomColor: {
    property: "borderBottomColor",
    transform: (value: colorIndex) => getColor(value),
  },
  borderLeftColor: {
    property: "borderLeftColor",
    transform: (value: colorIndex) => getColor(value),
  },
});
