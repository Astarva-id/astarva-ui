import colors from "@components/Colors";
import Flex from "@components/Flex";
import styled from "styled-components";

export const Wrapper = styled(Flex)`
  position: relative;

  // Icon Calendar
  .icon-calendar {
    position: absolute;
    left: 0.75rem;
    top: 0.625rem;
    z-index: 1;
  }

  .react-datepicker__input-container {
    input {
      width: ${(props) => props.width};
      padding: 0.75rem 1rem 0.75rem 2.625rem;
      border-radius: 0.5rem;
      border: 0.0625rem solid ${colors.black100};
      height: 0.875rem;
      outline: none;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker {
    background-color: white;
    border: none;
    box-shadow: 0 0.0625rem 1.25rem 0 rgba(166, 175, 195, 0.25);
    position: relative;
  }

  .react-datepicker__header {
    background-color: ${colors.white};
    border-bottom: none;
    padding: 1rem;
  }

  .react-datepicker__day-names {
    margin-top: 0.8125rem;

    .react-datepicker__day-name {
      color: ${colors.black500};
      font-weight: 600;
    }
  }

  .react-datepicker__day {
    color: ${colors.black800};
    border-radius: 0.375rem;
    margin: 0;
    padding: 0.1875rem;

    &:hover {
      border-radius: 0.375rem !important;
      background-color: ${colors.blue50} !important;
      color: ${colors.black800};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${colors.white};
  }

  .react-datepicker__day--today {
    color: ${colors.blue400};
  }

  .react-datepicker__day--selected {
    background-color: ${colors.blue400};
    font-weight: 600;
    color: ${colors.white};
  }

  .react-datepicker__day--in-range {
    background-color: ${colors.blue400};
    color: ${colors.white};
    border-radius: 0.375rem;
  }

  .react-datepicker__day--outside-month {
    color: ${colors.black300};
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    gap: 0.25rem;
  }

  .select-month,
  .select-year {
    &:hover {
      background-color: ${colors.blue50};
      border-radius: 0.25rem;
    }
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    border-radius: 0;
    background-color: ${colors.blue50} !important;
    color: ${colors.black800};
  }

  .react-datepicker__day--selecting-range-start,
  .react-datepicker__day--range-start {
    border-radius: 0.375rem;
    background-color: ${colors.blue400} !important;
    color: ${colors.white};
    font-weight: 600;
  }

  .react-datepicker__day--selecting-range-end,
  .react-datepicker__day--range-end {
    border-radius: 0.375rem;
    background-color: ${colors.blue400} !important;
    color: ${colors.white};
    font-weight: 600;

    &:hover {
      border-radius: 0.375rem;
      background-color: ${colors.blue400} !important;
      color: ${colors.white};
      font-weight: 600;
    }
  }
`;
