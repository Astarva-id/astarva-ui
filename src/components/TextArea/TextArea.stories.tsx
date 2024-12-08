import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React from "react";

import TextArea from ".";
import { TextAreaProps } from "./TextArea.types";

const meta: Meta<TextAreaProps> = {
  title: "Components/Textarea",
  component: TextArea,
} as Meta<TextAreaProps>;

export default meta;

export const TextAreaAll: React.FC = () => (
  <Flex flexDirection="column" gap="3rem" maxWidth="800px">
    <Flex flexDirection="column" gap="1.5rem">
      <TextArea label="Number" />

      <TextArea disabled />
      <TextArea disabled placeholder="Input without border" />
      <TextArea hint="HINT. max character 28 char" />
      <TextArea
        isError
        error="Field is required"
        hint="HINT. max character 28 char"
      />
    </Flex>
  </Flex>
);
