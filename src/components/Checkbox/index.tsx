import colors from "@components/Colors";
import Flex from "@components/Flex";
import Icon from "@components/Icon";
import React, { useState } from "react";

import { CheckboxProps } from "./Checkbox.types";

const Checkbox: React.FC<CheckboxProps> = ({
  backgroundColor = "blue600",
  checked,
  disabled,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    setIsChecked((prev) => !prev);
    onChange(!isChecked);
  };

  return (
    <Flex
      borderRadius=".25rem"
      width="1.25rem"
      height="1.25rem"
      alignItems="center"
      justifyContent="center"
      cursor={disabled ? "not-allowed" : "pointer"}
      border=".0625rem solid"
      borderColor={isChecked ? backgroundColor : colors.black400}
      backgroundColor={isChecked && backgroundColor}
      opacity={disabled && ".5"}
      onClick={handleChange}
    >
      {isChecked && <Icon name="Check-solid" color="white" size="16px" />}
    </Flex>
  );
};

export default Checkbox;
