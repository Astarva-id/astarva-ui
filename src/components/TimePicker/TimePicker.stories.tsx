import { Meta } from "@storybook/react";
import React, { useState } from "react";

import Flex from "../Flex";
import TimePicker from "./index";
import { TimePickerProps } from "./TimePicker.types";

export default {
  title: "Components/TimePicker",
  component: TimePicker,
} as Meta<TimePickerProps>;

export const AllTimePicker = () => {
  const [time, setTime] = useState(undefined);
  return (
    <Flex flexDirection="column" rowGap="1rem" fontFamily="sans-serif">
      <TimePicker />
      <TimePicker value={time} label="Time Picker" onSelect={setTime} />
      <TimePicker
        value={time}
        label="Time Picker"
        isError
        error="Time Picker is required"
        onSelect={setTime}
      />
    </Flex>
  );
};
