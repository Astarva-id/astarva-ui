import Flex from "@components/Flex";
import Text from "@components/Text";
import React, { useEffect, useRef, useState } from "react";

import { InputWrapper, PlainInput } from "./Input.styled";
import { InputNumberProps } from "./Input.types";

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      isError,
      size = "regular",
      error,
      hint,
      value,
      noBorder = false,
      disabled,
      placeholder = "Input Something..",
      suffix,
      prefix,
      onBlur,
      onFocus,
      onChange,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const inputRef =
      (ref as React.MutableRefObject<HTMLInputElement>) ||
      useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);

    const numberInputChecking = (val: string) => {
      const cleansingValue = val.replace(/\D/g, "");
      const parsedValue = parseInt(cleansingValue);
      const formattedValue = new Intl.NumberFormat(["id"]).format(
        parsedValue || 0
      );
      return { parsedValue, formattedValue };
    };
    const [tempValue, setTempValue] = useState<string>(
      value ? numberInputChecking(value.toString()).formattedValue : ""
    );

    const onClickInput = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus?.(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value || "0";

      const { formattedValue, parsedValue } = numberInputChecking(value);

      setTempValue(formattedValue);
      if (onChange) onChange(parsedValue);
    };

    useEffect(() => {
      setTempValue(
        value ? numberInputChecking(value.toString()).formattedValue : ""
      );
    }, [value]);

    return (
      <Flex flexDirection="column" gap=".625rem" onClick={onClickInput}>
        {label && (
          <Text weight="medium" color="black900">
            {label}
          </Text>
        )}
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
            type="text"
            aria-label="plain-input"
            ref={inputRef}
            size={size}
            isError={isError}
            isPlain
            value={tempValue}
            disabled={disabled}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...restProps}
          />
          {suffix}
        </InputWrapper>
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
