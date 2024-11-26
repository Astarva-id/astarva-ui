import { TextProps } from "@components/Text/Text.types";

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
  value?: string;
}

export interface AllInput
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Password: typeof InputPassword;
}
