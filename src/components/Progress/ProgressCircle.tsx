import colors from "@components/Colors";
import React from "react";

import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";
import { ProgressCircleProps } from "./Progress.types";
import { CirclePath, CircleTrail } from "./ProgressCircle.styled";

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  color = "blue400",
  total = 5,
  value = 0,
  size = "7.5rem",
  _text,
  children,
  ...props
}) => {
  const getFinalValue = (value: number, total: number): number => {
    let finalValue: number = value;
    if (value >= total) {
      finalValue = total;
    }
    if (value <= 0) {
      finalValue = 0;
    }
    return finalValue;
  };

  const finalValue = getFinalValue(value, total);
  const percent = (finalValue / total) * 100;
  return (
    <Box
      className="ant-progress-inner"
      position="relative"
      width={size}
      height={size}
      {...props}
    >
      <Box
        as="svg"
        className="ant-progress-circle"
        viewBox="-52 -52 104 104"
        role="presentation"
      >
        <CircleTrail
          as="circle"
          className="ant-progress-circle-trail"
          r="47"
          cx="0"
          cy="0"
          strokeLinecap="round"
          strokeWidth="6"
          color={color}
        />
        <CirclePath
          as="circle"
          className="ant-progress-circle-path"
          r="47"
          cx="0"
          cy="0"
          strokeColor={colors[color]}
          percent={percent}
        />
      </Box>
      <Flex
        position="absolute"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        top="0"
        left="0"
      >
        {children ? (
          children
        ) : (
          <Text variant="heading1" weight="bold" {..._text}>
            {finalValue}
          </Text>
        )}
      </Flex>
    </Box>
  );
};
