import { FlexProps } from "@components/Flex/Flex.types";
import { ReactNode } from "react";

export interface ModalProps extends FlexProps {
  isVisible: boolean;
  closable?: boolean;
  verticalCentered?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  children?: ReactNode;
  onClose?: () => void;
}
