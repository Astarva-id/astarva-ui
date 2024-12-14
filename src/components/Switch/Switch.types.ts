import { TextProps } from "@components/Text/Text.types";

export interface SwitchProps {
  active: boolean;
  disabled?: boolean;
  size?: "small" | "regular";
  label?: string;
  _label?: TextProps;
  onChange: (value: boolean) => void;
}
