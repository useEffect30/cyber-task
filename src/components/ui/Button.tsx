import { useContext } from "react";
import { ThemedButtonProps } from "./button.types";
import { ThemeContext } from "@/context/ThemeProvider";

const ThemedButton = ({
  onClick,
  type = "button",
  children,
  isLoading,
  className = "",
  fullWidth = false,
}: ThemedButtonProps) => {
  const { toggle } = useContext(ThemeContext);

  const baseClasses = `
    border-2 font-semibold rounded-md py-2 px-4  text-sm cursor-pointer
    transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95
    ${fullWidth ? "w-[220px] " : ""}
  `;

  const themedClasses = !toggle
    ? "bg-[#ebf615] border-[#7f92e2] hover:bg-[#7f92e2] text-[#7f92e2] hover:text-[#ebf615] hover:border-[#ebf615]"
    : "bg-[#fa87b6] border-[#fa87b6] text-white hover:bg-[#ebf615] hover:text-[#fa87b6] hover:border-[#fa87b6]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${themedClasses} ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default ThemedButton;
