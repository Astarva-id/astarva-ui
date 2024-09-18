import Flex from "@components/Flex";
import Icon from "@components/Icon";
import Text from "@components/Text";
import React, { useRef, useState } from "react";

import { InputPasswordProps } from "./Input.types";
import { InputWrapper, PlainInput } from "./styled";

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>(
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
      onBlur,
      onFocus,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const inputRef =
      (ref as React.MutableRefObject<HTMLInputElement>) ||
      useRef<HTMLInputElement>(null);

    const [isShow, setIsShow] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState(false);

    const onClickInput = () => {
      if (inputRef.current) inputRef.current.focus();
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
          <PlainInput
            type={isShow ? "text" : "password"}
            aria-label="plain-input"
            ref={inputRef}
            size={size}
            isError={isError}
            isPlain
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...restProps}
          />
          <Icon
            icon={isShow ? "Eye-outline" : "Hide-outline"}
            cursor="pointer"
            size={size === "regular" ? 20 : 16}
            onClick={() => setIsShow((prev) => !prev)}
          />
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
