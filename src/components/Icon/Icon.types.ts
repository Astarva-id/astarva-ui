import { colorIndex } from "@components/Colors/Colors.types";
import { IconProps as IcomoonProps } from "react-icomoon";

export type IconNames =
  | "Activity-outline"
  | "Activity-solid"
  | "Alarm-outline"
  | "Alarm-solid"
  | "Alert-Triangle-outline"
  | "Alert-Triangle-solid"
  | "Arrow-Left-solid"
  | "Checkmark-outline"
  | "Check-solid"
  | "Clock-outline"
  | "Clock-solid"
  | "Close-solid"
  | "Eye-outline"
  | "Filter-outline"
  | "Filter-solid"
  | "Flame-solid"
  | "Grid-outline"
  | "Grid-solid"
  | "Hide-outline"
  | "Home-outline"
  | "Home-solid"
  | "Info-Circle-outline"
  | "Instant-outline"
  | "Instant-solid"
  | "Magnifier-outline"
  | "Pause-solid"
  | "Person-outline"
  | "Person-solid"
  | "Play-solid"
  | "Plus-solid"
  | "Trash-outline"
  | "Trash-solid";

export type IconProps = Omit<IcomoonProps, "icon" | "color"> & {
  icon: IconNames & IconNames;
  color?: colorIndex;
};
