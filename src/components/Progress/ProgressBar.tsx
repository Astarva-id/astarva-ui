import Box from "@components/Box";
import Text from "@components/Text";
import React from "react";

import { ProgressBarProps } from "./Progress.types";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent = 0,
  color = "red400",
  _text,
  ...props
}) => {
  const renderPercentage = () => {
    if (percent <= 0) return "0%";
    if (percent >= 100) return "100%";
    return `${percent}%`;
  };

  return (
    <Box
      position="relative"
      width="100%"
      height={20}
      borderRadius={100}
      backgroundColor="black50"
      {...props}
    >
      <Box
        position="relative"
        backgroundColor={color}
        height="100%"
        width={renderPercentage()}
        borderRadius={100}
      />
      <Box position="absolute" top="0" left="0" right="0" textAlign="center">
        <Text variant="micro" {..._text}>
          {renderPercentage()}
        </Text>
      </Box>
    </Box>
  );
};
