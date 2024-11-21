import colors from "@components/Colors";
import Flex from "@components/Flex";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-3.125rem);
    opacity: 0;
    }
    to {
      transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-3.125rem);
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`;

export const Overlay = styled(Flex)`
  zindex: 1000;
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
