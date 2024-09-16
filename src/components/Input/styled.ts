import colors from "@components/Colors";
import styled, { css } from "styled-components";

import { InputProps } from "./Input.types";

export const PlainInput: React.FC<InputProps> = styled.input<InputProps>`
  ${(props) => css`
    border: 1px solid ${props.isError ? colors.red400 : colors.black200};
    border-radius: 6px;
    padding: 12px 20px;
    flex-grow: 1;
    flex: 1;
    line-height: 20px;

    &:not(:placeholder-shown) {
      border-color: ${props.isError ? colors.red400 : colors.black300};
    }

    &:hover {
      border-color: ${props.isError ? colors.red600 : colors.blue600};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 3px ${props.isError ? colors.red500 : colors.blue500}
      border: 1px solid ${props.isError ? colors.red500 : colors.blue500};
    }

    &::placeholder {
      color: ${colors.black300};
      font-size: 14px;
    }

    &:disabled {
      background-color: ${colors.black100};
      border-color: ${colors.black100};
      cursor: not-allowed;

      &::placeholder {
        color: ${colors.black400};
      }

      &:hover {
        border-color: ${colors.black100};
      }
    }
  `}
`;
