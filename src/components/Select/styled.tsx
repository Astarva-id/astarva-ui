import Box from "@components/Box";
import colors from "@components/Colors";
import Flex from "@components/Flex";
import styled, { css } from "styled-components";

import { InputSelectProps } from "./Select.types";
import { itemSelect, selectVariant, textValueSelect } from "./variants";

export const Item = styled(Box)`
  ${itemSelect}

  &:hover {
    background-color: ${colors.blue50};
    border-radius: 0.375rem;
  }
`;

export const InputSelect = styled(Flex)<InputSelectProps>`
  ${(props) => selectVariant(props)}
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: .0625rem solid ${colors.black100}
  cursor: pointer;

  ${(props) =>
    props.isError &&
    css`
      border: 0.0625rem solid ${colors.red500};
    `}

  #text-value-select {
    ${textValueSelect}
    line-height: 1.375rem;
  }

  #list {
    ${(props) =>
      props.size === "regular"
        ? css`
            top: 3.4375rem;
          `
        : css`
            top: 2.8125rem;
          `}
  }
`;
