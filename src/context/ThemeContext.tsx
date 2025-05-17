import { createContext, useState, type ReactNode } from "react";
import type { ThemeContextData } from "./types";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextData);

const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark-theme"
  : "light-theme";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };

export default ThemeProvider;
