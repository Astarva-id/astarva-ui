import { css } from "styled-components";

import { FlexProps } from "./Flex.types";

export const getGapUtils = (props: FlexProps) => {
  return css`
    gap: ${props.gap};
    column-gap: ${props.columnGap};
    row-gap: ${props.rowGap};
  `;
};
