import { FlexProps } from "@components/Flex/Flex.types";

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  error?: string;
  isError?: boolean;
  label?: string;
  options: Option[];
  placeholder?: string;
  size?: "small" | "regular";
  value: string;
  onSelect: (options: Option) => void;
}

export interface InputSelectProps extends FlexProps {
  isError?: boolean;
  size?: "small" | "regular";
}