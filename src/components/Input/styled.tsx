import colors from "@components/Colors";
import styled, { css } from "styled-components";

import { InputProps } from "./Input.types";
import { inputVariant, inputWrapperVariant } from "./variant";

export const StyledInput: React.FC<InputProps> = styled.input<InputProps>`
  ${(props) => inputVariant(props)}
`;

export const PlainInput: React.FC<InputProps> = styled.input<InputProps>`
  ${(props) =>
    props.isPlain
      ? css`
          border: none;
          flex-grow: 1;
          flex: 1;
          line-height: 20px;
          width: 100%;
          outline: none;
          &::placeholder {
            color: ${colors.black200};
            font-size: 14px;
          }
          &:disabled {
            background-color: ${colors.black50};
            cursor: not-allowed;
          }
        `
      : inputVariant(props)}
`;

export const InputWrapper: React.FC<InputProps> = styled.span<InputProps>`
  ${(props) => inputWrapperVariant(props)}
  background-color: ${(props) =>
    props.disabled ? colors.black50 : colors.white};
  cursor: ${(props) => props.disabled && "not-allowed"};
  display: flex;
  align-items: center;
`;
