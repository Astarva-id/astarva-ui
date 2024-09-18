import Flex from "@components/Flex";
import Icon from "@components/Icon";
import Text from "@components/Text";
import { Meta } from "@storybook/react";
import React from "react";

import Input from ".";
import { InputProps } from "./Input.types";

const meta: Meta<InputProps> = {
  title: "Components/Input/Input Text",
  component: Input,
} as Meta<InputProps>;

export default meta;

export const InputText: React.FC = () => (
  <Flex flexDirection="column" gap="48px">
    <Flex gap="64px">
      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Regular</Text>
        <Flex width="100%" flexDirection="column" gap="8px" minWidth="300px">
          <Input label="Email" />
          <Input disabled />
          <Input noBorder disabled placeholder="Input without border" />
          <Input hint="HINT. max character 28 char" />
          <Input isError error="Field is required" />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Regular</Text>
        <Flex width="100%" flexDirection="column" gap="8px" minWidth="300px">
          <Input
            label="Email"
            prefix={<Icon icon="Magnifier-outline" size={20} color="blue100" />}
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            disabled
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            noBorder
            disabled
            placeholder="Input without border"
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            hint="HINT. max character 28 char"
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            isError
            error="Field is required"
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Regular</Text>
        <Flex width="100%" flexDirection="column" gap="8px" minWidth="300px">
          <Input
            label="Email"
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            disabled
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            noBorder
            disabled
            placeholder="Input without border"
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            hint="HINT. max character 28 char"
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            isError
            error="Field is required"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Regular</Text>
        <Flex width="100%" flexDirection="column" gap="8px" minWidth="300px">
          <Input
            label="Email"
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            disabled
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            noBorder
            disabled
            placeholder="Input without border"
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            hint="HINT. max character 28 char"
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            isError
            error="Field is required"
          />
        </Flex>
      </Flex>
    </Flex>

    <Flex gap="64px">
      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Small</Text>
        <Flex flexDirection="column" gap="8px" minWidth="300px">
          <Input size="small" label="Password" />
          <Input size="small" disabled />
          <Input size="small" disabled noBorder />
          <Input size="small" hint="HINT" />
          <Input size="small" isError error="Field is required" hint="HINT" />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Small</Text>
        <Flex flexDirection="column" gap="8px" minWidth="300px">
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            size="small"
            label="Password"
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            size="small"
            disabled
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            size="small"
            disabled
            noBorder
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            size="small"
            hint="HINT"
          />
          <Input
            prefix={
              <Icon icon="Magnifier-outline" size={20} color="black200" />
            }
            size="small"
            isError
            error="Field is required"
            hint="HINT"
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Small</Text>
        <Flex flexDirection="column" gap="8px" minWidth="300px">
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            label="Password"
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            disabled
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            disabled
            noBorder
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            hint="HINT"
          />
          <Input
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            isError
            error="Field is required"
            hint="HINT"
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="24px">
        <Text>Input Text - Small</Text>
        <Flex flexDirection="column" gap="8px" minWidth="300px">
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            label="Password"
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            disabled
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            disabled
            noBorder
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            hint="HINT"
          />
          <Input
            prefix={<Icon icon="Info-circle" size={20} color="black200" />}
            sufix={<Icon icon="Eye-outline" size={20} color="black200" />}
            size="small"
            isError
            error="Field is required"
            hint="HINT"
          />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
