import { TextProps } from "@components/Text/Text.types";
import React from "react";

import { FlexProps } from "../Flex/Flex.types";

export interface DividerProps extends FlexProps {
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
  _textStyle?: TextProps;
  align?: "left" | "right" | "center";
}
