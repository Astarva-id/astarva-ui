import { overrideColorConfig } from "@utils/globals";
import React from "react";
import styled from "styled-components";
import {
  border,
  color,
  flex,
  layout,
  opacity,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

import type {
  BoxComponent,
  BoxProps,
  PolymorphBoxProps,
  PolymorphicRef,
} from "./Box.types";

const StyledBox: React.FC<PolymorphBoxProps<React.ElementType>> = styled.div<
  BoxProps<React.ElementType>
>`
  cursor: ${(props) => props.cursor};
  box-sizing: ${(props) => props.boxSizing};
  ${color}
  ${layout}
  ${border}
  ${shadow}
  ${space}
  ${position}
  ${typography}
  ${opacity}
  ${overrideColorConfig}
  ${flex}
`;

const Box: BoxComponent = React.forwardRef(
  <C extends React.ElementType = "div">(
    props: PolymorphBoxProps<C>,
    ref?: PolymorphicRef<C>
  ) => <StyledBox ref={ref} {...props} />
);

export default Box;
