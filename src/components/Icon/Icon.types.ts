import { IconProps as IcomoonProps } from "react-icomoon";

export type IconNames =
  | "Checkmark-circle"
  | "Hide-outline"
  | "Info-circle"
  | "Eye-outline"
  | "Left-outline"
  | "Magnifier-outline";

export type IconProps = Omit<IcomoonProps, "icon"> & {
  icon: IconNames;
};
