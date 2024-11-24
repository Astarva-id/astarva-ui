import colors from "@components/Colors";
import Flex from "@components/Flex";
import Icon from "@components/Icon";
import ScrollBar from "@components/ScrollBar";
import Text from "@components/Text";
import useClickOutside from "@hooks/useClickOutside";
import useDisclosure from "@hooks/useDisclosure";
import React, { useRef } from "react";

import { InputSelect, Item } from "./Select.styled";
import { Option, SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({
  error = "This field is required",
  isError,
  label,
  maxHeight = "12.5rem",
  options,
  placeholder = "Select Your Input...",
  size = "regular",
  value,
  onSelect,
  ...props
}) => {
  const selected = options.find((option) => option.value === value)?.label;
  const { isOpen, onClose, onOpen } = useDisclosure({ open: false });

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, onClose);

  const handleSelect = (option: Option) => {
    onSelect(option);
    setTimeout(() => onClose(), 30);
  };

  return (
    <Flex flexDirection="column" gap=".5rem">
      <Text weight="semi-bold">{label}</Text>

      <InputSelect
        ref={menuRef}
        isError={isError}
        size={size}
        onClick={onOpen}
        {...props}
      >
        <Text id="text-value-select" color={selected ? "black700" : "black300"}>
          {selected || placeholder}
        </Text>

        <Icon
          size={size === "regular" ? "1.25rem" : "1.25rem"}
          name={isOpen ? "Up-outline" : "Down-outline"}
        />
        {isOpen && (
          <ScrollBar
            id="list"
            position="absolute"
            left="0"
            right="0"
            zIndex="1"
            backgroundColor="white"
            flexDirection="column"
            border={`.0625rem solid ${colors.black100}`}
            borderRadius=".375rem"
            padding=".25rem"
            maxHeight={maxHeight}
            overflowY="auto"
          >
            {options.map((option, key) => {
              return (
                <Item
                  size={size}
                  key={key}
                  onClick={() => handleSelect(option)}
                >
                  <Text
                    variant={size === "regular" ? "medium" : "small"}
                    color="black800"
                  >
                    {option.label}
                  </Text>
                </Item>
              );
            })}
          </ScrollBar>
        )}
      </InputSelect>

      {isError && (
        <Text variant="small" color="red500">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default Select;
