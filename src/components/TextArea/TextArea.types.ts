import { TextProps } from "@components/Text/Text.types";
import React from "react";

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  isError?: boolean;
  hint?: string;
  error?: string;
  label?: string;
  _label?: TextProps;
  value?: string;
}
