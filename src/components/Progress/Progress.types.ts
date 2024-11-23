import { BoxProps } from "@components/Box/Box.types";
import { colorIndex } from "@components/Colors/Colors.types";
import { TextProps } from "@components/Text/Text.types";

export interface ProgressBarProps extends BoxProps {
  percent: number;
  _text?: TextProps;
  color?: colorIndex;
  textInside?: boolean;
  withoutLimit?: boolean;
}

export interface ProgressCircleProps extends BoxProps {
  color?: colorIndex;
  size?: string;
  total: number;
  value: number;
  _text?: TextProps;
  children?: React.ReactNode;
}

export interface ProgressProps {
  Bar: React.FC<ProgressBarProps>;
  Circle: React.FC<ProgressCircleProps>;
}
