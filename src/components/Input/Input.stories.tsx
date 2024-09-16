import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React from "react";

import { InputProps } from "./Input.types";
import { InputText } from "./InputText";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: InputText,
} as Meta<InputProps>;

export default meta;

export const AllInputText: React.FC = () => (
  <Flex flexDirection="column">
    <Flex flexDirection="column" gap="8px">
      <InputText label="Email" />
      <InputText />
      <InputText disabled />
      <InputText hint="HINT" />
      <InputText isError error="Field is required" hint="HINT" />
    </Flex>
  </Flex>
);
