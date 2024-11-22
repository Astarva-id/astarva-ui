import styled from "styled-components";

import Flex from "../Flex";
import { DividerProps } from "./Divider.types";
import { dividerAlign, dividerVariant } from "./Divider.variant";

export const StyledDivider = styled(Flex)<DividerProps>`
  ${dividerVariant};
  ${dividerAlign};
  ::after {
    content: "";
  }
  ::before {
    content: "";
  }
`;
