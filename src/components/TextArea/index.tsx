import Flex from "@components/Flex";
import Text from "@components/Text";
import React, { useRef } from "react";

import { StyledTextArea } from "./TextArea.styled";
import { TextAreaProps } from "./TextArea.types";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { label, _label, isError, error, hint, maxLength, onChange, ...restProps },
    ref
  ) => {
    const textareaRef =
      (ref as React.MutableRefObject<HTMLTextAreaElement>) ||
      useRef<HTMLTextAreaElement>(null);

    const handleOnChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
      if (maxLength) {
        if (event.currentTarget.value.length <= maxLength) {
          return onChange?.(event);
        }
        const value = event.currentTarget.value;
        event.currentTarget.value = value.substring(0, maxLength);
        return onChange?.(event);
      } else {
        return onChange?.(event);
      }
    };

    return (
      <Flex flexDirection="column" gap=".625rem">
        {label && (
          <Text weight="medium" color="black900" {..._label}>
            {label}
          </Text>
        )}

        <Flex flex={1} position="relative">
          <StyledTextArea
            placeholder="Input here..."
            ref={textareaRef}
            isError={isError}
            onChange={handleOnChange}
            {...restProps}
          />

          {maxLength && (
            <Flex
              position="absolute"
              bottom=".375rem"
              right="1.5rem"
              padding=".125rem .25rem"
              borderRadius=".125rem"
              backgroundColor="white"
            >
              <Text variant="extra-small" color="black400">
                {textareaRef.current?.value.length || 0} / {maxLength}
              </Text>
            </Flex>
          )}
        </Flex>

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
