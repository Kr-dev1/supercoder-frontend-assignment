import type { StyleProps } from "./types";

export interface BasicButtonProps extends StyleProps {
  children?: React.ReactNode;
  variant: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  title?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
