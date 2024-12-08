import Flex from "@components/Flex";
import Text from "@components/Text";
import React from "react";

import { StyledTextArea } from "./TextArea.styled";
import { TextAreaProps } from "./TextArea.types";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, isError, error, hint, value, ...restProps }, ref) => {
    return (
      <Flex flexDirection="column" gap=".625rem">
        {label && (
          <Text weight="medium" color="black900">
            {label}
          </Text>
        )}
        <StyledTextArea
          placeholder="Input here..."
          value={value}
          ref={ref}
          isError={isError}
          {...restProps}
        />

        {isError && error && (
          <Text variant="extra-small" weight="light" color="red500">
            {error}
          </Text>
        )}
        {!isError && hint && (
          <Text variant="extra-small" weight="light" color="black400">
            {hint}
          </Text>
        )}
      </Flex>
    );
  }
);

export default TextArea;
