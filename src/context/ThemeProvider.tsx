import { createContext, ReactNode, useState } from "react";

type themeTypes = {
  children: ReactNode;
};

type toggleTypes = {
  toggle: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleFunction?: () => void;
};

const ThemeContext = createContext<toggleTypes>({
    toggle: false
});

const ThemeProvider = ({ children }: themeTypes) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
