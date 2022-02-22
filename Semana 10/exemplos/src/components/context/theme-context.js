import { createContext, useContext } from "react";

const theme = {
  light: {
    background: "#eeeeee",
  },
  dark: {
    background: "#222222",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
