import Box from "@components/Box";
import styled, { css } from "styled-components";

import { SkeletonProps } from "./Skeleton.types";

const animations = () => {
  return css`
    overflow: hidden;
    position: relative;
    ::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-6.25rem);
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 1),
        transparent
      );
      animation: loading 0.8s infinite;
      border-radius: 0.5rem;
    }

    @keyframes loading {
      100% {
        transform: translateX(100%);
      }
    }
  `;
};

export const StyledBox = styled(Box)<SkeletonProps>`
  ${animations}
`;
