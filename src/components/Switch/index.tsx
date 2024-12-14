import Box from "@components/Box";
import Flex from "@components/Flex";
import Text from "@components/Text";
import React, { useState } from "react";

import { SwitchComponent } from "./Switch.styled";
import { SwitchProps } from "./Switch.types";

const Switch: React.FC<SwitchProps> = ({
  active,
  disabled,
  size = "regular",
  label,
  _label,
  onChange,
}) => {
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = () => {
    if (disabled) return;
    onChange(!active);
    setHasChanges(true);
  };

  return (
    <Flex flexDirection="column" gap=".625rem">
      {label && (
        <Text weight="medium" color="black900" {..._label}>
          {label}
        </Text>
      )}
      <SwitchComponent
        disabled={disabled}
        active={active}
        size={size}
        hasChanges={hasChanges}
        onClick={handleChange}
      >
        <Box className="circle" />
      </SwitchComponent>
    </Flex>
  );
};

export default Switch;
