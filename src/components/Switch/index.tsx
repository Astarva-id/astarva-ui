import Box from "@components/Box";
import React, { useState } from "react";

import { SwitchComponent } from "./Switch.styled";
import { SwitchProps } from "./Switch.types";

const Switch: React.FC<SwitchProps> = ({
  active,
  disabled,
  size = "regular",
  onChange,
}) => {
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = () => {
    if (disabled) return;
    onChange(!active);
    setHasChanges(true);
  };

  return (
    <SwitchComponent
      disabled={disabled}
      active={active}
      size={size}
      hasChanges={hasChanges}
      onClick={handleChange}
    >
      <Box className="circle" />
    </SwitchComponent>
  );
};

export default Switch;
