import { Meta } from "@storybook/react";
import React, { useState } from "react";

import Flex from "../Flex";
import { DatePickerProps } from "./DatePicker.types";
import DatePicker from "./index";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta<DatePickerProps>;

export const AllDatePicker = () => {
  const [currentDate, setCurrentDate] = useState(undefined);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChangeRange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Flex
      width="80%"
      flexDirection="column"
      fontFamily="sans-serif"
      columnGap=".5rem"
      gap="1rem"
    >
      <DatePicker
        label="Date Picker - Single"
        selected={currentDate}
        onSelect={(date) => setCurrentDate(date)}
      />

      <DatePicker
        label="Date Picker - Range"
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleChangeRange}
      />
    </Flex>
  );
};
