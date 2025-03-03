// context/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { themes, lightTheme, Theme, ThemeName } from "../theme";
import { useAppColorScheme } from "../hooks/useColorScheme";

// Define the shape of the context value
type ThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  themeName: "light",
  setThemeName: () => {},
});

// Create a custom hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorScheme, isDarkColorScheme } = useAppColorScheme();
  const [themeName, setThemeName] = useState<ThemeName>("light");

  useEffect(() => {
    setThemeName(isDarkColorScheme ? "dark" : "light");
  }, [isDarkColorScheme]);

  const theme = themes[themeName];

  const value = {
    theme,
    themeName,
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
