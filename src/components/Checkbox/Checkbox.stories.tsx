import { Meta } from "@storybook/react";
import React from "react";

import Flex from "../Flex";
import Checkbox from ".";
import { CheckboxProps } from "./Checkbox.types";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

export const AllCheckbox = () => {
  return (
    <Flex
      width="80%"
      flexDirection="column"
      fontFamily="sans-serif"
      columnGap=".5rem"
      gap="1rem"
    >
      <Checkbox checked onChange={() => {}} />
      <Checkbox checked={false} disabled onChange={() => {}} />
      <Checkbox checked disabled onChange={() => {}} />
    </Flex>
  );
};
