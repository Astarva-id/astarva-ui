import colors from "@components/Colors";
import React from "react";

import Box from "../Box";
import Text from "../Text";
import { DividerProps } from "./Divider.types";
import { StyledDivider } from "./styled";

const Divider: React.FC<DividerProps> = ({
  children,
  orientation = "horizontal",
  _textStyle,
  ...restProps
}) => (
  <StyledDivider
    backgroundColor={!children && colors.black100}
    {...restProps}
    aria-label="divider-wrapper"
  >
    <Box paddingX={orientation === "horizontal" && "12px"}>
      <Text variant="small" color="black500" {..._textStyle}>
        {children}
      </Text>
    </Box>
  </StyledDivider>
);

export default Divider;
