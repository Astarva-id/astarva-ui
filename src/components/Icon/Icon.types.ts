import { colorIndex } from "@components/Colors/Colors.types";
import { iconOutline, iconSolid } from "@constants/icons";
import { IconProps as IcomoonProps } from "react-icomoon";

export type IconOutlineTypes = (typeof iconOutline)[number];
export type IconSolidTypes = (typeof iconSolid)[number];

export type IconNames = IconOutlineTypes | IconSolidTypes;

export type IconProps = Omit<IcomoonProps, "icon" | "color"> & {
  name: IconNames & IconNames;
  color?: colorIndex;
};
