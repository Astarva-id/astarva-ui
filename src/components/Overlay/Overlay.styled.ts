import Box from "@components/Box";
import colors from "@components/Colors";
import { fadeIn, fadeOut } from "@styles/animation.styled";
import styled from "styled-components";

export const OverlayContainer = styled(Box)`
  background-color: ${colors.overlay75};
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease-out;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition:
    visibility 0.3s,
    opacity 0.3s;
`;
