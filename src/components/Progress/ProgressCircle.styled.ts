import Box from "@components/Box";
import colors from "@components/Colors";
import styled from "styled-components";

export const CircleTrail = styled(Box)`
  direction: initial;
  color: rgba(0, 0, 0, 0.88);
  list-style: none;
  line-height: 1;
  stroke-linecap: round;
  stroke-width: 8;
  box-sizing: border-box;
  stroke: ${colors.black50};
  transform: rotate(-90deg);
  fill-opacity: 0;
`;

export const CirclePath = styled(Box)<{ percent: number; strokeColor: string }>`
  direction: initial;
  line-height: 1;
  stroke-width: 8;
  opacity: 1;
  box-sizing: border-box;
  stroke-dasharray: 18.4569rem, 295.31;
  stroke-dashoffset: ${(props) => 295.31 / (100 / (100 - props.percent))};
  transform: rotate(-90deg);
  transform-origin: 0rem 0rem;
  fill-opacity: 0;
  stroke: ${(props) => props.strokeColor};
`;
