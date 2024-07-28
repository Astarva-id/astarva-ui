import type {
  BackgroundProps,
  BorderProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  OpacityProps,
} from "styled-system";
import OverrideColor from "@interfaces/OverrideColor.types";
import { BoxSizing, CursorType } from "@interfaces/global";

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

type PolymorphicComponentPropWithRef<C extends React.ElementType> =
  PolymorphBoxProps<C> & {
    ref?: PolymorphicRef<C>;
  };

export type BoxComponent = <C extends React.ElementType = "div">(
  props: PolymorphicComponentPropWithRef<C>
) => React.ReactElement | null;
