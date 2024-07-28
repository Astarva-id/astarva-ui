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
import { PolymorphicRef } from "@components/Box/Box.types";

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

type PolymorphicComponentPropWithRef<C extends React.ElementType> =
  PolymorphFlexProps<C> & {
    ref?: PolymorphicRef<C>;
  };

export type FlexComponent = <C extends React.ElementType = "div">(
  props: PolymorphicComponentPropWithRef<C>
) => React.ReactElement | null;
