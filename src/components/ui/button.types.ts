export type ThemedButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  fullWidth?: boolean;
};
