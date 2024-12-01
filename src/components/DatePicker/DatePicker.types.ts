import { TextProps } from "@components/Text/Text.types";
import {
  DatePickerProps as ReactDatePickerProps,
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import { CSSProperties } from "styled-components";

export type DatePickerProps = ReactDatePickerProps & {
  _textStyle?: TextProps;
  label?: string;
  width?: CSSProperties["width"];
};

export type DatePickerHeaderProps = ReactDatePickerCustomHeaderProps & {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};
