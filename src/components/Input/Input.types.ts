import { TextProps } from "@components/Text/Text.types";
import { ReactNode } from "react";

import { InputNumber } from "./InputNumber";
import { InputPassword } from "./InputPassword";

export interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "size" | "prefix"> {
  size?: "small" | "regular";
  prefix?: React.ReactNode;
  sufix?: React.ReactNode;
  isError?: boolean;
  error?: string;
  hint?: string;
  label?: string;
  _label?: TextProps;
  maxLength?: number;
  value?: string;
  noBorder?: boolean;
  isPlain?: boolean;
  isFocus?: boolean;
}

export interface InputPasswordProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "size" | "prefix"> {
  size?: "small" | "regular";
  isError?: boolean;
  hint?: string;
  noBorder?: boolean;
  error?: string;
  label?: string;
  _label?: TextProps;
  value?: string;
}

export interface InputNumberProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    "size" | "prefix" | "onChange"
  > {
  size?: "small" | "regular";
  isError?: boolean;
  hint?: string;
  noBorder?: boolean;
  error?: string;
  _label?: TextProps;
  label?: string;
  value?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onChange?: (value: number) => void;
}

export interface AllInput
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Password: typeof InputPassword;
  Number: typeof InputNumber;
}
