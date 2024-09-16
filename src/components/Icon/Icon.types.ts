import { IconProps as IcomoonProps } from "react-icomoon";

export type IconNames =
  | "Checkmark-circle"
  | "Hide-outline"
  | "Info-circle"
  | "Show-outline";

export type IconProps = Omit<IcomoonProps, "icon"> & {
  icon: IconNames;
};
