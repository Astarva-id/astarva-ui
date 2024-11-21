import { BoxProps } from "@components/Box/Box.types";

export interface OverlayProps extends BoxProps {
  isVisible?: boolean;
  onClick?: () => void;
}
