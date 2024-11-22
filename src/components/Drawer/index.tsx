import Box from "@components/Box";
import Overlay from "@components/Overlay";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { DrawerContent } from "./Drawer.styled";
import { DrawerProps } from "./Drawer.types";

const Drawer: React.FC<DrawerProps> = ({
  children,
  closeable,
  isVisible,
  isFullHeight,
  onClose,
  zIndex = 1,
  ...props
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.removeProperty("overflow-y");
    }
  }, [isVisible]);

  return createPortal(
    <Box>
      <Overlay
        zIndex={zIndex}
        isVisible={isVisible}
        onClick={closeable && onClose}
      />

      <DrawerContent
        zIndex={zIndex}
        isVisible={isVisible}
        isFullHeight={isFullHeight}
        {...props}
      >
        {children}
      </DrawerContent>
    </Box>,
    document.body
  );
};

export default Drawer;
