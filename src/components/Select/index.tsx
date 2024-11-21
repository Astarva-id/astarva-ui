import colors from "@components/Colors";
import Flex from "@components/Flex";
import Icon from "@components/Icon";
import Text from "@components/Text";
import useClickOutside from "@hooks/useClickOutside";
import useDisclosure from "@hooks/useDisclosure";
import React, { useRef } from "react";

import { Option, SelectProps } from "./Select.types";
import { InputSelect, Item } from "./styled";

const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = "Select Your Input...",
  value,
  error = "This field is required",
  size = "regular",
  isError,
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
          size={size === "regular" ? "20px" : "20px"}
          name={isOpen ? "Up-outline" : "Down-outline"}
        />
        {isOpen && (
          <Flex
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
          </Flex>
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
