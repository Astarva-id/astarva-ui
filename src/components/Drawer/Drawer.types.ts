import { FlexProps } from "@components/Flex/Flex.types";
import { ReactNode } from "react";

export interface DrawerProps extends FlexProps {
  isVisible: boolean;
  isFullHeight?: boolean;
  children?: ReactNode;
  closeable?: boolean;
  onClose: () => void;
}
