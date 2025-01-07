import { colorIndex } from "@components/Colors/Colors.types";

export interface CheckboxProps {
  checked: boolean;
  backgroundColor?: colorIndex;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}
