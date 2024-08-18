import React from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";
import { buttonShape, buttonSize, buttonVariant } from "./variant";

export const StyledButton: React.FC<ButtonProps> = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isBlock ? (props.suffix ? "space-between" : "center") : "unset"};
  ${buttonVariant}
  ${buttonShape}
  ${buttonSize}
  width: ${(props) => (props.isBlock ? "100% !important" : "fit-content")};
  height: fit-content;
  column-gap: 24px;
  backgroundcolor: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
`;

export const PreffixWrapper = styled.span`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
