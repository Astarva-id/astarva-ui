import Box from "@components/Box";
import { overrideColorConfig } from "@utils/globals";
import React from "react";
import styled, { css } from "styled-components";
import { space } from "styled-system";

import { TextProps, VariantMappingType } from "./Text.types";
import { textVariant, weightVariant } from "./variant";

const variantMapping: VariantMappingType = {
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  large: "p",
  medium: "p",
  small: "span",
  "extra-small": "small",
};

const StyledText = styled(Box)<TextProps>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

  font-family: "Inter", sans-serif;
  ${(props) =>
    props.strikeThrough &&
    css`
      text-decoration: line-through;
    `}
  width : ${(props) => props.width || "auto"};
  text-align: ${(props) => props.textAlign};
  margin: 0;
  ${space}
  ${overrideColorConfig}
  ${textVariant}
  ${weightVariant}
  display:inline;
  ${(props) =>
    props.lineClamp &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${props.lineClamp};
    `}
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
`;

const Text: React.FC<TextProps> = ({
  variant = "medium",
  weight = "regular",
  ...restProps
}) => (
  <StyledText
    as={variantMapping[variant]}
    variant={variant}
    weight={weight}
    {...restProps}
  />
);

export default Text;
