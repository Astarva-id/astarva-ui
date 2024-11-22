import { FlexProps } from "@components/Flex/Flex.types";
import { PropsWithChildren } from "react";

export interface OverlayProps
  extends Omit<FlexProps, "zIndex">,
    PropsWithChildren {
  isVisible?: boolean;
  zIndex?: number;
  onClick?: () => void;
}
