import { FlexProps } from "@components/Flex/Flex.types";
import { TextProps } from "@components/Text/Text.types";
import { CSSProperties } from "styled-components";

export interface Option {
  value: string | number;
  label: string;
}

export interface SelectProps {
  error?: string;
  isError?: boolean;
  options: Option[];
  placeholder?: string;
  maxHeight?: CSSProperties["maxHeight"];
  size?: "small" | "regular";
  value: string | number;
  label?: string;
  _label?: TextProps;
  disabled?: boolean;
  onSelect: (options: Option) => void;
}

export interface InputSelectProps extends FlexProps {
  isError?: boolean;
  disabled?: boolean;
  size?: "small" | "regular";
}
