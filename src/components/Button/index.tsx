import React from "react";

import { ButtonProps } from "./Button.types";
import { PreffixWrapper, StyledButton } from "./styled";

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
