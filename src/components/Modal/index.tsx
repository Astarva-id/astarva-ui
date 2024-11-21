import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "./Modal.types";
import { ModalContent, Overlay } from "./styled";

const Modal: React.FC<ModalProps> = ({
  isVisible,
  verticalCentered,
  children,
  closable,
  padding,
  width = "100%",
  height = "fit-content",
  onClose,
  ...props
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    }
    document.body.style.removeProperty("overflow-y");
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    <Overlay
      isVisible={isVisible}
      verticalCentered={verticalCentered}
      onClick={closable && onClose}
    >
      <ModalContent
        isVisible={isVisible}
        verticalCentered={verticalCentered}
        aria-label="dialog-content"
        padding={padding || "2.5rem"}
        width={width}
        height={height}
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          event.stopPropagation()
        }
        {...props}
      >
        {children}
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default Modal;
