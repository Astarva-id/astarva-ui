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
      label: "Running",
      value: "running",
    },
    {
      label: "Fishing",
      value: "fishing",
    },
    {
      label: "Reading",
      value: "reading",
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
