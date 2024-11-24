import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

import Select from ".";
import { Option } from "./Select.types";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

export const SingleSelect: React.FC = () => {
  const [selectValue, setSelectValue] = useState(null);
  const options = [
    {
      label: "Reading",
      value: "reading",
    },
    {
      label: "Watching",
      value: "watching",
    },
    {
      label: "Running",
      value: "running",
    },
    {
      label: "Sleeping",
      value: "sleeping",
    },
    {
      label: "Vacation",
      value: "vacation",
    },
    {
      label: "Photography",
      value: "photography",
    },
    {
      label: "Language",
      value: "language",
    },
  ];

  const handleSelect = (option: Option) => {
    setSelectValue(option.value);
  };

  return (
    <Flex
      flexDirection="column"
      maxWidth="25rem"
      gap="1rem"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <Select
        label="Select Category"
        value={selectValue}
        options={options}
        onSelect={handleSelect}
      />
      <Select
        label="Select Category - Small"
        size="small"
        value={selectValue}
        options={options}
        onSelect={handleSelect}
      />
      <Select
        label="Select Category - Error"
        size="small"
        isError
        value={selectValue}
        options={options}
        onSelect={handleSelect}
      />
    </Flex>
  );
};
