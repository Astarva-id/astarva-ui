import { TextProps } from "@components/Text/Text.types";
import {
  DatePickerProps as ReactDatePickerProps,
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";

export type DatePickerProps = ReactDatePickerProps & {
  _textStyle?: TextProps;
  label?: string;
};

export type DatePickerHeaderProps = ReactDatePickerCustomHeaderProps & {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};
