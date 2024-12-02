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
    <Flex flexDirection="column" rowGap="1rem" fontFamily="sans-serif">
      <Flex width="60%" fontFamily="sans-serif" columnGap=".5rem">
        <DatePicker
          label="Date Picker - Single"
          selected={currentDate}
          width="15rem"
          onSelect={(date) => setCurrentDate(date)}
        />

        <DatePicker
          label="Date Picker - Range"
          selectsRange
          width="15rem"
          startDate={startDate}
          endDate={endDate}
          onChange={handleChangeRange}
        />
      </Flex>
    </Flex>
  );
};
