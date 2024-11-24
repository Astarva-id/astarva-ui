import colors from "@components/Colors";
import Flex from "@components/Flex";
import { slideLeftToRight, slideRightToLeft } from "@styles/animation.styled";
import styled, { css } from "styled-components";

import { switchCircleVariant, switchVariant } from "./Switch.variant";

export const SwitchComponent = styled(Flex)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  border-radius: 1.25rem;
  padding: 0.25rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? colors.blue400 : colors.black100};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  transition: background-color 0.3s ease-in;
  ${switchVariant}

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
