import React from "react";

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  isError?: boolean;
  hint?: string;
  error?: string;
  label?: string;
  value?: string;
}
