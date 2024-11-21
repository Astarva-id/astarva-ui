import React from "react";

import { OverlayContainer } from "./Overlay.styled";
import { OverlayProps } from "./Overlay.types";

const Overlay: React.FC<OverlayProps> = ({ isVisible = true, ...props }) => {
  return <OverlayContainer isVisible={isVisible} {...props} />;
};

export default Overlay;
