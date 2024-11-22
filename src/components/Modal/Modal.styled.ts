import colors from "@components/Colors";
import Flex from "@components/Flex";
import {
  fadeIn,
  fadeOut,
  scaleIn,
  scaleOut,
  slideIn,
  slideOut,
} from "@styles/animation.styled";
import styled, { css } from "styled-components";

export const Overlay = styled(Flex)`
  z-index: ${(props) => props.zIndex};
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: ${colors.overlay75};
  justify-content: center;
  align-items: ${(props) => (props.verticalCentered ? "center" : "flex-start")};
  top: 0;
  left: 0;
  padding-top: ${(props) => !props.verticalCentered && "1rem"};
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease-out;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition:
    visibility 0.3s,
    opacity 0.3s;
`;

export const ModalContent = styled(Flex)`
  background-color: white;
  border-radius: 1rem;
  position: relative;
  ${(props) =>
    props.verticalCentered
      ? css`
          animation: ${() => (props.isVisible ? scaleIn : scaleOut)} 0.3s
            ease-out;
        `
      : css`
          animation: ${() => (props.isVisible ? slideIn : slideOut)} 0.3s
            ease-out;
          transform: ${() =>
            props.isVisible ? "translateY(0)" : "translateY(-3.125rem)"};
        `}
`;
