import colors from "@components/Colors";
import Flex from "@components/Flex";
import ScrollBar from "@components/ScrollBar";
import Text from "@components/Text";
import useClickOutside from "@hooks/useClickOutside";
import useDisclosure from "@hooks/useDisclosure";
import { lodash } from "@utils/lodash";
import React, { useEffect, useRef, useState } from "react";

import { Time } from "./TimePicker.styled";
import { TimePickerProps } from "./TimePicker.types";

const TimePicker: React.FC<TimePickerProps> = ({
  _label,
  label,
  value = "00:00",
  onSelect,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ open: false });
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const hours = lodash.range(0, 23, "A-Z");
  const minutes = lodash.range(0, 59, "A-Z");

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hoursRef = useRef<HTMLDivElement | null>(null);
  const minutesRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (hour: string, minute: string) => {
    const times = `${hour}:${minute}`;
    setHour(hour);
    setMinute(minute);
    onSelect?.(times);
  };

  useClickOutside(dropdownRef, onClose);

  useEffect(() => {
    if (value) {
      setHour(value.split(":")[0]);
      setMinute(value.split(":")[1]);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (hoursRef.current) {
        hoursRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      const timer = setTimeout(() => {
        if (minutesRef.current) {
          minutesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }
      }, 400);

      // Clean Timeout
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Flex flexDirection="column" gap=".625rem">
      {label && (
        <Text weight="medium" color="black900" {..._label}>
          {label}
        </Text>
      )}
      <Flex
        position="relative"
        border={`.0625rem solid ${colors.black100}`}
        borderRadius=".375rem"
        justifyContent="center"
        alignItems="center"
        gap=".5rem"
        width="3.75rem"
        padding=".6875rem 1rem"
        cursor="pointer"
        boxSizing="content-box"
        onClick={onOpen}
      >
        <Text variant="small" textAlign="center" color="black800">
          {hour} : {minute}
        </Text>

        {isOpen && (
          <Flex
            ref={dropdownRef}
            backgroundColor="white"
            position="absolute"
            top="50px"
            left="0"
            right="0"
            zIndex="1"
            boxShadow="0 .0625rem 1.25rem 0 rgba(166, 175, 195, 0.25)"
            padding=".75rem .375rem"
            gap=".25rem"
          >
            <ScrollBar
              flexDirection="column"
              hideScroll
              width="100%"
              overflowY="auto"
              maxHeight="6rem"
              gap=".25rem"
            >
              {hours.map((item, index) => {
                const isActive = lodash.formatTwoDigits(item) === hour;
                return (
                  <Time
                    key={index}
                    ref={isActive ? hoursRef : null}
                    isActive={isActive}
                    onClick={() =>
                      handleSelect(lodash.formatTwoDigits(item), minute)
                    }
                  >
                    {lodash.formatTwoDigits(item)}
                  </Time>
                );
              })}
            </ScrollBar>
            <ScrollBar
              flexDirection="column"
              hideScroll
              overflowY="auto"
              width="100%"
              maxHeight="6rem"
              gap=".25rem"
            >
              {minutes.map((item, index) => {
                const isActive = lodash.formatTwoDigits(item) === minute;
                return (
                  <Time
                    key={index}
                    ref={isActive ? minutesRef : null}
                    isActive={isActive}
                    onClick={() =>
                      handleSelect(hour, lodash.formatTwoDigits(item))
                    }
                  >
                    {lodash.formatTwoDigits(item)}
                  </Time>
                );
              })}
            </ScrollBar>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default TimePicker;
