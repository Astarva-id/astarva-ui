import React from "react";
import IcoMoon from "react-icomoon";

import { IconProps } from "./Icon.types";
import iconSet from "./selection.json";

const Icon: React.FC<IconProps> = ({ size = "24px", ...props }) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} />
);

export default Icon;
