import colors from "@components/Colors";
import styled from "styled-components";

import { TextAreaProps } from "./TextArea.types";

export const StyledTextArea: React.FC<TextAreaProps> = styled.textarea<TextAreaProps>`
  border-radius: 0.5rem;
  border: solid 0.0625rem
    ${(props) => (props.isError ? colors.red500 : colors.black100)};
  padding: 0.75rem 1rem;
  height: 5rem;
  font-size: 0.875rem;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: ${colors.black200};
    font-size: 0.875rem;
  }
`;
