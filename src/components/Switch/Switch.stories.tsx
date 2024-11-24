import { Meta } from "@storybook/react";
import React, { useState } from "react";

import Flex from "../Flex";
import Switch from "./index";
import { SwitchProps } from "./Switch.types";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<SwitchProps>;

export const AllSwitch = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <Flex flexDirection="column" rowGap="1rem" fontFamily="sans-serif">
      <Switch disabled active={isActive} onChange={setIsActive} />
    </Flex>
  );
};
