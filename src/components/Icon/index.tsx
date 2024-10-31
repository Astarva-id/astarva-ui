import colors from "@components/Colors";
import { colorIndex } from "@components/Colors/Colors.types";
import React from "react";
import IcoMoon from "react-icomoon";

import { IconProps } from "./Icon.types";
import iconSet from "./selection.json";

const Icon: React.FC<IconProps> = ({
  size = "24px",
  color = "black500",
  ...props
}) => (
  <IcoMoon
    iconSet={iconSet}
    size={size}
    color={colors[color as colorIndex]}
    {...props}
  />
);

export default Icon;
