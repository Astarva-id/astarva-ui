export interface AlertProps {
  message: string;
  description?: string;
  variant: "warning" | "success" | "error";
  onClose?: () => void;
}
