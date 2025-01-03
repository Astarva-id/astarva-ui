import Flex from "@components/Flex";
import Text from "@components/Text";
import { Meta } from "@storybook/react";
import React from "react";

import Input from ".";
import { InputProps } from "./Input.types";

const meta: Meta<InputProps> = {
  title: "Components/Input/Input Password",
  component: Input,
} as Meta<InputProps>;

export default meta;

export const InputPassword: React.FC = () => (
  <Flex flexDirection="column" gap="3rem" maxWidth="25rem">
    <Flex flexDirection="column" gap="1.5rem">
      <Text>Input Password - Regular</Text>
      <Flex flexDirection="column" gap=".5rem">
        <Input.Password label="Password" />

        <Input.Password disabled />
        <Input.Password noBorder disabled placeholder="Input without border" />
        <Input.Password hint="HINT. max character 28 char" />
        <Input.Password isError error="Field is required" />
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap="1.5rem">
      <Text>Input Password - Small</Text>
      <Flex flexDirection="column" gap=".5rem">
        <Input.Password size="small" label="Password" />

        <Input.Password size="small" disabled />
        <Input.Password
          size="small"
          noBorder
          disabled
          placeholder="Input without border"
        />
        <Input.Password size="small" hint="HINT. max character 28 char" />
        <Input.Password size="small" isError error="Field is required" />
      </Flex>
    </Flex>
  </Flex>
);
