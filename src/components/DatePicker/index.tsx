import "react-datepicker/dist/react-datepicker.css";

import Box from "@components/Box";
import Button from "@components/Button";
import colors from "@components/Colors";
import Divider from "@components/Divider";
import Flex from "@components/Flex";
import Icon from "@components/Icon";
import ScrollBar from "@components/ScrollBar";
import Text from "@components/Text";
import useClickOutside from "@hooks/useClickOutside";
import useDisclosure from "@hooks/useDisclosure";
import { lodash } from "@utils/lodash";
import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";

import { Wrapper } from "./DatePicker.styled";
import { DatePickerHeaderProps, DatePickerProps } from "./DatePicker.types";

const DatePicker: React.FC<DatePickerProps> = ({
  dateFormat = "dd/MM/YYYY",
  selected,
  _textStyle,
  label,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ open: false });

  const selectMonthYearRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(selectMonthYearRef, onClose);

  return (
    <Flex flexDirection="column" gap=".5rem" width="100%">
      {label && (
        <Text color="black900" weight="medium" {..._textStyle}>
          {label}
        </Text>
      )}
      <Wrapper ref={selectMonthYearRef}>
        <Box className="icon-calendar">
          <Icon
            name="Calendar-outline"
            color={selected ? "blue400" : "black400"}
            size="1.25rem"
          />
        </Box>
        <ReactDatePicker
          selected={selected}
          placeholderText="Select Date..."
          dateFormat={dateFormat}
          renderCustomHeader={({ ...headerProps }) => (
            <HeaderDatePicker
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              {...headerProps}
            />
          )}
          {...props}
        />
      </Wrapper>
    </Flex>
  );
};

const HeaderDatePicker: React.FC<DatePickerHeaderProps> = ({
  date,
  isOpen,
  nextMonthButtonDisabled,
  prevMonthButtonDisabled,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
  onOpen,
  onClose,
}) => {
  const years = lodash.range(1900, new Date().getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleClear = (
    onClose: () => void,
    changeMonth: (month: number) => void,
    changeYear: (year: number) => void
  ) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    changeMonth(month);
    changeYear(year);
    onClose();
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`.125rem solid ${colors.black50}`}
      paddingBottom="1rem"
    >
      <Flex cursor="pointer">
        <Flex onClick={onOpen}>
          <Text variant="extra-small" weight="semi-bold" color="black400">
            {months[date.getMonth()]} {date.getFullYear()}
          </Text>
        </Flex>

        {isOpen && (
          <Flex
            flexDirection="column"
            position="absolute"
            top="0"
            left="0"
            right="0"
            backgroundColor="white"
            boxShadow="0 .0625rem 1.25rem 0 rgba(166, 175, 195, 0.25)"
            height="19.375rem"
            borderRadius=".25rem"
            zIndex="1"
          >
            <Flex padding="1rem .75rem">
              <Text variant="extra-small" weight="semi-bold" color="black400">
                {months[date.getMonth()]} {date.getFullYear()}
              </Text>
            </Flex>

            <Flex width="100%" maxHeight="12.5rem">
              {/* Month */}
              <ScrollBar
                flexDirection="column"
                alignItems="flex-start"
                overflowY="auto"
                width="100%"
                hideScroll
                paddingX=".25rem"
              >
                {months.map((month, key) => {
                  const selectedMonth = date.getMonth();
                  const isActive = selectedMonth === months.indexOf(month);
                  return (
                    <Flex
                      key={key}
                      padding=".5rem .75rem"
                      className="select-month"
                      width="100%"
                      boxSizing="border-box"
                      backgroundColor={isActive ? "blue400" : "white"}
                      borderRadius=".25rem"
                      onClick={() => changeMonth(months.indexOf(month))}
                    >
                      <Text
                        variant="extra-small"
                        color={isActive ? "white" : "black900"}
                      >
                        {month}
                      </Text>
                    </Flex>
                  );
                })}
              </ScrollBar>

              <Divider width=".0625rem" />

              {/* Year */}
              <ScrollBar
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                overflowY="auto"
                hideScroll
                paddingX=".25rem"
              >
                {years.map((year, key) => {
                  const isActive = date.getFullYear() === year;
                  return (
                    <Flex
                      key={key}
                      padding=".5rem .75rem"
                      className="select-year"
                      width="100%"
                      borderRadius=".25rem"
                      boxSizing="border-box"
                      backgroundColor={isActive ? "blue400" : "white"}
                      onClick={() => changeYear(year)}
                    >
                      <Text
                        variant="extra-small"
                        color={isActive ? "white" : "black900"}
                      >
                        {year}
                      </Text>
                    </Flex>
                  );
                })}
              </ScrollBar>
            </Flex>

            <Flex justifyContent="center" gap=".5rem" padding="1rem .75rem">
              <Button
                isBlock
                size="small"
                shape="semi-round"
                variant="secondary"
                onClick={() => handleClear(onClose, changeMonth, changeYear)}
              >
                Clear
              </Button>
              <Button isBlock size="small" shape="semi-round" onClick={onClose}>
                Save
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>

      <Flex gap=".75rem">
        <Flex
          padding=".25rem"
          borderRadius="1.25rem"
          boxShadow="0 .0625rem 1.25rem 0 rgba(166, 175, 195, 0.25)"
          disabled={prevMonthButtonDisabled}
          cursor="pointer"
          onClick={decreaseMonth}
        >
          <Icon name="Left-outline" size=".75rem" />
        </Flex>

        <Flex
          padding=".25rem"
          borderRadius="1.25rem"
          boxShadow="0 .0625rem 1.25rem 0 rgba(166, 175, 195, 0.25)"
          disabled={nextMonthButtonDisabled}
          cursor="pointer"
          onClick={increaseMonth}
        >
          <Icon name="Right-outline" size=".75rem" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
