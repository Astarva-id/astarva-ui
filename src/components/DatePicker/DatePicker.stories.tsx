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
  return (
    <Flex flexDirection="column" rowGap="1rem" fontFamily="sans-serif">
      <Flex width="60%" fontFamily="sans-serif" columnGap=".5rem">
        <DatePicker
          selected={currentDate}
          width="15rem"
          onSelect={(date) => setCurrentDate(date)}
        />
      </Flex>
    </Flex>
  );
};
