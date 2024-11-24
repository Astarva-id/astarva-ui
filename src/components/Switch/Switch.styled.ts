import Box from "@components/Box";
import colors from "@components/Colors";
import Flex from "@components/Flex";
import { slideLeftToRight, slideRightToLeft } from "@styles/animation.styled";
import styled, { css } from "styled-components";

import { switchCircleVariant, switchVariant } from "./Switch.variant";

export const Circle = styled(Box)``;

export const SwitchComponent = styled(Flex)`
  ${switchVariant}
  position: relative;
  border-radius: 1.25rem;
  padding: 0.25rem;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  background-color: ${(props) =>
    props.active ? colors.blue400 : colors.black100};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};

  .circle {
    ${switchCircleVariant}
    transform: ${(props) =>
      props.active ? "translateX(200%)" : "translateX(0%)"};

    ${(props) =>
      props.hasChanges &&
      css`
        animation: ${() => (props.active ? slideLeftToRight : slideRightToLeft)}
          0.3s ease-in;
      `}
  }
`;
