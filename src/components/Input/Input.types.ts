export interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "size" | "prefix"> {
  size?: "small" | "regular";
  prefix?: React.ReactNode;
  sufix?: React.ReactNode;
  isError?: boolean;
  error?: string;
  hint?: string;
  label?: string;
  // showCount?: boolean;
  // maxLength?: number;
  value?: string;
  // noBorder?: boolean;
}
