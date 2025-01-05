import Flex from "@components/Flex";
import Text from "@components/Text";
import { Meta } from "@storybook/react";
import React from "react";

import Input from ".";
import { InputProps } from "./Input.types";

const meta: Meta<InputProps> = {
  title: "Components/Input/Input Number",
  component: Input,
} as Meta<InputProps>;

export default meta;

export const InputNumber: React.FC = () => (
  <Flex flexDirection="column" gap="3rem" maxWidth="25rem">
    <Flex flexDirection="column" gap="1.5rem">
      <Text>Input Number - Regular</Text>
      <Flex flexDirection="column" gap=".5rem">
        <Input.Number label="Number" />

        <Input.Number min={10} label="Min Number" />
        <Input.Number max={99} label="Max Number" />
        <Input.Number disabled />
        <Input.Number noBorder disabled placeholder="Input without border" />
        <Input.Number hint="HINT. max character 28 char" />
        <Input.Number isError error="Field is required" />
        <Input.Number prefix={<Text>Rp.</Text>} suffix={<Text>,-</Text>} />
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap="1.5rem">
      <Text>Input Number - Small</Text>
      <Flex flexDirection="column" gap=".5rem">
        <Input.Number size="small" label="Number" />

        <Input.Number size="small" disabled />
        <Input.Number
          size="small"
          noBorder
          disabled
          placeholder="Input without border"
        />
        <Input.Number size="small" hint="HINT. max character 28 char" />
        <Input.Number size="small" isError error="Field is required" />
      </Flex>
    </Flex>
  </Flex>
);
