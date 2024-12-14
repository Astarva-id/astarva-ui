import { TextProps } from "@components/Text/Text.types";

export interface TimePickerProps {
  _label?: TextProps;
  label?: string;
  value?: string;
  onSelect?: (value: string) => void;
}
