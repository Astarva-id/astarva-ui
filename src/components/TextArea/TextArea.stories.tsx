import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

import TextArea from ".";
import { TextAreaProps } from "./TextArea.types";

const meta: Meta<TextAreaProps> = {
  title: "Components/Textarea",
  component: TextArea,
} as Meta<TextAreaProps>;

export default meta;

export const TextAreaAll: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Flex flexDirection="column" gap="3rem" maxWidth="800px">
      <Flex flexDirection="column" gap="1.5rem">
        <TextArea label="Number" />

        <TextArea disabled />
        <TextArea disabled placeholder="Input without border" />
        <TextArea
          value={value}
          hint="HINT. max character 28 char"
          maxLength={1000}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <TextArea
          isError
          error="Field is required"
          hint="HINT. max character 28 char"
        />
      </Flex>
    </Flex>
  );
};
