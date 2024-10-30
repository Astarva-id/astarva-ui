import Box from "@components/Box";
import Flex from "@components/Flex";
import Icon from "@components/Icon";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  isVisible,
  verticalCentered,
  children,
  closable,
  padding,
  width = "fit-content",
  height = "fit-content",
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    }
    document.body.style.removeProperty("overflow-y");
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    <Flex
      zIndex={1000}
      width="100vh"
      height="100vh"
      position="fixed"
      backgroundColor="overlay75"
      justifyContent="center"
      alignItems={verticalCentered ? "center" : "flex-start"}
      onClick={closable && onClose}
      top={0}
      left={0}
      paddingTop={!verticalCentered && "16px"}
    >
      <Flex
        backgroundColor="white"
        borderRadius="1rem"
        padding={padding || "2.5rem"}
        justifyContent="flex-start"
        alignContent="flex-start"
        aria-label="dialog-content"
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          event.stopPropagation()
        }
      >
        <Flex position="relative" width={width} height={height}>
          {closable && (
            <Box position="absolute" top="0" right="0">
              <Icon
                icon="Close-solid"
                aria-label="modal-close-button"
                cursor="pointer"
                color="black60"
                onClick={onClose}
              />
            </Box>
          )}
          {children}
        </Flex>
      </Flex>
    </Flex>,
    document.body
  );
};

export default Modal;
