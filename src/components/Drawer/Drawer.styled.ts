import Flex from "@components/Flex";
import { slideBottomIn, slideBottomOut } from "@styles/animation.styled";
import styled, { css } from "styled-components";

import { DrawerProps } from "./Drawer.types";

export const DrawerContent = styled(Flex)<DrawerProps>`
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: max-content;
  z-index: ${(props) => props.zIndex};
  padding: 1.25rem;
  animation: ${(props) => (props.isVisible ? slideBottomIn : slideBottomOut)}
    0.3s ease-in;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition:
    visibility 0.25s,
    opacity 0.5s;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  ${(props) =>
    props.isFullHeight &&
    css`
      top: 0;
      height: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}

  /* Apply other dynamic props */
  ${(props) => {
    const styleProps = Object.keys(props).reduce(
      (styles, prop) => {
        if (prop === "isVisible" || prop === "isFullHeight") return styles; // Skip non-style props
        const value = props[prop];
        if (value !== undefined) {
          styles[prop] = value;
        }
        return styles;
      },
      {} as Record<string, string>
    );

    return css`
      ${Object.entries(styleProps)
        .map(([key, value]) => {
          return `${key}: ${value};`; // Map the dynamic props to CSS styles
        })
        .join("\n")}
    `;
  }}
`;
