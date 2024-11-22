import { FlexProps } from "@components/Flex/Flex.types";
import { ReactNode } from "react";

export interface DrawerProps extends Omit<FlexProps, "zIndex"> {
  isVisible: boolean;
  isFullHeight?: boolean;
  children?: ReactNode;
  closeable?: boolean;
  zIndex?: number;
  onClose: () => void;
}
