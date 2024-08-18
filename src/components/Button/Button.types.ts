import { colorIndex } from "@components/Colors/Colors.types";
import React from "react";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  variant?: "primary" | "secondary" | "tertiary";
  shape?: "square" | "semi-round" | "rounded";
  size?: "large" | "medium" | "small";
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  isBlock?: boolean;
  padding?: string;
  backgroundColor?: colorIndex;
  backgroundColorHover?: colorIndex;
}
