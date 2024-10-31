import { colorIndex } from "@components/Colors/Colors.types";
import { IconProps as IcomoonProps } from "react-icomoon";

export type IconNames =
  | "Alarm-outline"
  | "Alarm-solid"
  | "Alert-Triangle-outline"
  | "Alert-Triangle-solid"
  | "Arrow-Left-solid"
  | "Check-solid"
  | "Checkmark-Circle-outline"
  | "Clock-outline"
  | "Clock-solid"
  | "Close-solid"
  | "Eye-outline"
  | "Flame-solid"
  | "Grid-outline"
  | "Grid-solid"
  | "Hide-outline"
  | "Home-outline"
  | "Home-solid"
  | "Info-Circle-outline"
  | "Magnifier-outline"
  | "Pause-solid"
  | "Person-outline"
  | "Person-solid"
  | "Play-solid"
  | "Plus-solid";

export type IconProps = Omit<IcomoonProps, "icon" | "color"> & {
  icon: IconNames;
  color?: colorIndex;
};
