import Text from "@components/Text";
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
  const [switchActive, setSwitchActive] = useState(false);
  const [switchDisable, setSwitchDisable] = useState(true);
  return (
    <Flex flexDirection="column" rowGap="1rem" fontFamily="sans-serif">
      <Text>Regular - Switch Not Disabled</Text>
      <Switch active={switchActive} onChange={setSwitchActive} />
      <Text>Regular - Switch Disabled</Text>
      <Switch disabled active={switchDisable} onChange={setSwitchDisable} />

      <Text>Small - Switch Not Disabled</Text>
      <Switch active={switchActive} size="small" onChange={setSwitchActive} />
      <Text>Small - Switch Disabled</Text>
      <Switch
        active={switchDisable}
        disabled
        size="small"
        onChange={setSwitchDisable}
      />
    </Flex>
  );
};
