import React from "react";
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import OverrideColor from "@interfaces/OverrideColor.types";
import { BoxSizing, CursorType } from "@interfaces/global";
export interface FlexProps<C extends React.ElementType = React.ElementType>
  extends FlexboxProps,
    Omit<ColorProps, "color" | "bg" | "backgroundColor">,
    Omit<LayoutProps, "display">,
    BackgroundProps,
    Omit<
      BorderProps,
      | "borderColor"
      | "borderTopColor"
      | "borderRightColor"
      | "borderBottomColor"
      | "borderLeftColor"
    >,
    ShadowProps,
    SpaceProps,
    PositionProps,
    TypographyProps,
    OverrideColor {
  cursor?: CursorType;
  rowGap?: string;
  columnGap?: string;
  gap?: string;
  boxSizing?: BoxSizing;
  as?: C | React.ElementType;
}

export type PolymorphFlexProps<C extends React.ElementType> = FlexProps<C> &
  Omit<React.ComponentProps<C>, keyof FlexProps<C>>;

export type FlexComponent = React.ForwardRefExoticComponent<
  PolymorphFlexProps<React.ElementType> & React.RefAttributes<HTMLElement>
>;
