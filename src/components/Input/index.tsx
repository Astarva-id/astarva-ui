import Flex from "@components/Flex";
import Text from "@components/Text";
import React, { useEffect, useRef, useState } from "react";

import { InputWrapper, PlainInput, StyledInput } from "./Input.styled";
import { AllInput, InputProps } from "./Input.types";
import { InputNumber } from "./InputNumber";
import { InputPassword } from "./InputPassword";

export const ForwardRefInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      prefix,
      sufix,
      label,
      _label,
      hint,
      isError,
      size = "regular",
      error,
      disabled,
      noBorder,
      isPlain = true,
      maxLength,
      placeholder = "Input Something..",
      value,
      onBlur,
      onChange,
      onFocus,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const inputRef =
      (ref as React.MutableRefObject<HTMLInputElement>) ||
      useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [textValue, setTextValue] = useState("");

    const onClickInput = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      if (maxLength) {
        if (value.length <= maxLength) {
          setTextValue(value);
          return onChange?.(event);
        }
        event.currentTarget.value = value.substring(0, maxLength);
        return onChange?.(event);
      } else {
        return onChange?.(event);
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(false);
      onBlur?.(event);
    };

    useEffect(() => {
      if (value) setTextValue(value);
    }, [value]);

    return (
      <Flex flexDirection="column" gap=".625rem" onClick={onClickInput}>
        {label && (
          <Text weight="medium" color="black900" {..._label}>
            {label}
          </Text>
        )}
        <Flex
          flexDirection="column"
          gap={size === "regular" ? ".375rem" : ".25rem"}
        >
          {prefix || sufix ? (
            <InputWrapper
              aria-label="input-wrapper"
              size={size}
              isError={isError}
              disabled={disabled}
              noBorder={noBorder}
              isFocus={isFocus}
              style={{
                backgroundColor: restProps?.style?.backgroundColor ?? "none",
              }}
              onClick={onClickInput}
            >
              {prefix}
              <PlainInput
                ref={inputRef}
                placeholder={placeholder}
                size={size}
                disabled={disabled}
                isError={isError}
                isPlain={isPlain}
                onChange={handleOnChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...restProps}
              />
              {sufix}
            </InputWrapper>
          ) : (
            <Flex position="relative">
              {maxLength && (
                <Flex position="absolute" right="10px" bottom="6px">
                  <Text variant="extra-small" color="black400">
                    {textValue.length || 0} / {maxLength}
                  </Text>
                </Flex>
              )}

              <StyledInput
                ref={inputRef}
                size={size}
                noBorder={noBorder}
                placeholder={placeholder}
                disabled={disabled}
                isError={isError}
                onChange={handleOnChange}
                {...restProps}
              />
            </Flex>
          )}
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

export const Input = {
  ...ForwardRefInput,
  Password: InputPassword,
  Number: InputNumber,
} as AllInput;

export default Input;
