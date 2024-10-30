import { ReactNode } from "react";

export interface ModalProps {
  isVisible: boolean;
  closable?: boolean;
  verticalCentered?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  children?: ReactNode;
  onClose?: () => void;
}
