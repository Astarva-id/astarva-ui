import Flex from "@components/Flex";
import Text from "@components/Text";
import React, { useRef, useState } from "react";

import { AllInput, InputProps } from "./Input.types";
import { InputPassword } from "./InputPassword";
import { InputWrapper, PlainInput, StyledInput } from "./styled";

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
      // showCount,
      placeholder = "Input Something..",
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

    const onClickInput = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
      if (maxLength) {
        if (event.currentTarget.value.length <= maxLength) {
          return onChange(event);
        }
        const value = event.currentTarget.value;
        event.currentTarget.value = value.substring(0, maxLength);
        return onChange(event);
      } else {
        return onChange(event);
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);
      onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(false);
      onBlur(event);
    };

    return (
      <Flex flexDirection="column" gap="10px" onClick={onClickInput}>
        {label && (
          <Text weight="medium" color="black900" {..._label}>
            {label}
          </Text>
        )}
        <Flex flexDirection="column" gap={size === "regular" ? "6px" : "4px"}>
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
} as AllInput;

export default Input;
