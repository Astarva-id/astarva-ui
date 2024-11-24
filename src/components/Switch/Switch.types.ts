export interface SwitchProps {
  active: boolean;
  disabled?: boolean;
  size?: "small" | "regular";
  onChange: (value: boolean) => void;
}
