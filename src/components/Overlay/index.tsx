import React from "react";

import { OverlayContainer } from "./Overlay.styled";
import { OverlayProps } from "./Overlay.types";

const Overlay: React.FC<OverlayProps> = ({
  isVisible = true,
  zIndex = 1,
  ...props
}) => {
  return <OverlayContainer zIndex={zIndex} isVisible={isVisible} {...props} />;
};

export default Overlay;
