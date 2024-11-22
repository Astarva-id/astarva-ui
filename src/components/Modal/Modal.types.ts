import { FlexProps } from "@components/Flex/Flex.types";
import { ReactNode } from "react";

export interface ModalProps extends Omit<FlexProps, "zIndex"> {
  isVisible: boolean;
  closable?: boolean;
  verticalCentered?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  children?: ReactNode;
  zIndex?: number;
  onClose?: () => void;
}
