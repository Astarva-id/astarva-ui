import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(-3.125rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-3.125rem);
    opacity: 0;
  }
`;

export const slideBottomIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

export const slideBottomOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

export const slideLeftToRight = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(200%); }
`;

export const slideRightToLeft = keyframes`
  from { transform: translateX(200%); }
  to { transform: translateX(0%); }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`;
