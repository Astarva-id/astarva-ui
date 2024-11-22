import React from "react";

import { PreffixWrapper, StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "large",
  children,
  preffix,
  suffix,
  shape = "square",
  ...restProps
}) => (
  <StyledButton variant={variant} size={size} shape={shape} {...restProps}>
    <PreffixWrapper>
      {preffix}
      {children}
    </PreffixWrapper>
    {suffix}
  </StyledButton>
);

export default Button;
