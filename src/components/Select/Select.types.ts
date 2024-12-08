import { FlexProps } from "@components/Flex/Flex.types";
import { CSSProperties } from "styled-components";

export interface Option {
  value: string | number;
  label: string;
}

export interface SelectProps {
  error?: string;
  isError?: boolean;
  label?: string;
  options: Option[];
  placeholder?: string;
  maxHeight?: CSSProperties["maxHeight"];
  size?: "small" | "regular";
  value: string | number;
  onSelect: (options: Option) => void;
}

export interface InputSelectProps extends FlexProps {
  isError?: boolean;
  size?: "small" | "regular";
}
