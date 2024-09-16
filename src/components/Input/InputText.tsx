import Flex from "@components/Flex";
import Text from "@components/Text";
import React, { useRef } from "react";

import { InputProps } from "./Input.types";
import { PlainInput } from "./styled";

export const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // prefix,
      // sufix,
      label,
      hint,
      isError,
      // size,
      error,
      // maxLength,
      // showCount,
      // value,
      // noBorder,
      placeholder = "Input Something..",
      onChange,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const inputRef =
      (ref as React.MutableRefObject<HTMLInputElement>) ||
      useRef<HTMLInputElement>(null);

    const onClickInput = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    return (
      <Flex flexDirection="column" gap="10px" onClick={onClickInput}>
        {label && (
          <Text weight="medium" color="black900">
            {label}
          </Text>
        )}
        <Flex flexDirection="column" gap="4px">
          <PlainInput
            ref={inputRef}
            placeholder={placeholder}
            isError={isError}
            onChange={onChange}
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
      </Flex>
    );
  }
);
