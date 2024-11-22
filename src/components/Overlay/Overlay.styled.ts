import colors from "@components/Colors";
import Flex from "@components/Flex";
import { fadeIn, fadeOut } from "@styles/animation.styled";
import styled, { css } from "styled-components";

export const OverlayContainer = styled(Flex)`
  background-color: ${colors.overlay75};
  z-index: ${(props) => props.zIndex};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease-out;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition:
    visibility 0.3s,
    opacity 0.3s;

  /* Apply other dynamic props */
  ${(props) => {
    const styleProps = Object.keys(props).reduce(
      (styles, prop) => {
        if (prop === "isVisible") return styles; // Skip non-style props
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
