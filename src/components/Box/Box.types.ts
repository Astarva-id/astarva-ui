import { BoxSizing, CursorType } from "@interfaces/global";
import OverrideColor from "@interfaces/OverrideColor.types";
import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export interface BoxProps<C extends React.ElementType = React.ElementType>
  extends OverrideColor,
    LayoutProps,
    GridProps,
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
    OpacityProps,
    Omit<
      FlexboxProps,
      | "alignItems"
      | "alignContent"
      | "justifyItems"
      | "justifyContent"
      | "flexWrap"
      | "flexDirection"
      | "justifySelf"
      | "alignSelf"
      | "order"
    > {
  boxSizing?: BoxSizing;
  cursor?: CursorType;
  as?: C | React.ElementType;
}

export type PolymorphBoxProps<C extends React.ElementType> = BoxProps<C> &
  Omit<React.ComponentPropsWithRef<C>, keyof BoxProps<C>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type BoxComponent = React.ForwardRefExoticComponent<
  PolymorphBoxProps<React.ElementType> & React.RefAttributes<HTMLElement>
>;
