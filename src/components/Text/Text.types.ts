import { BoxProps } from "@components/Box/Box.types";
import { colorIndex } from "@components/Colors/Colors.types";
import React from "react";

export type TextVariant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "large"
  | "medium"
  | "small"
  | "extra-small";

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "caption"
  | "small"
  | "span";

export type WeightVariant =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold";

export interface TextProps extends BoxProps {
  variant?: TextVariant;
  weight?: WeightVariant;
  strikeThrough?: boolean;
  color?: colorIndex;
  as?: TextElement;
  children: React.ReactNode;
  width?: string;
  lineClamp?: number;
  id?: string;
  italic?: boolean;
}

export type VariantMappingType = {
  [key in TextVariant]: TextElement;
};
