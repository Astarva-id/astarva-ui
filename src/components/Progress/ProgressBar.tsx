import Box from "@components/Box";
import Flex from "@components/Flex";
import Text from "@components/Text";
import React from "react";

import { ProgressBarProps } from "./Progress.types";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent = 0,
  color = "red400",
  _text,
  textInside = true,
  withoutLimit = false,
  ...props
}) => {
  const renderPercentage = (withoutLimit?: boolean) => {
    if (!withoutLimit && percent <= 0) return "0%";
    if (!withoutLimit && percent >= 100) return "100%";
    return `${percent}%`;
  };

  return (
    <Flex flexDirection="row" alignItems="center" gap=".625rem">
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
        {textInside && (
          <TextPercentage
            _textStyle={_text}
            percent={renderPercentage(withoutLimit)}
          />
        )}
      </Box>

      {!textInside && (
        <Text variant="micro" color="black500" {..._text}>
          {renderPercentage(withoutLimit)}
        </Text>
      )}
    </Flex>
  );
};

function TextPercentage({ percent, _textStyle }) {
  return (
    <Box position="absolute" top="0" left="0" right="0" textAlign="center">
      <Text variant="micro" {..._textStyle}>
        {percent}
      </Text>
    </Box>
  );
}
