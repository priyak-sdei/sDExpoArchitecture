import React, { createContext } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import theme from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<{
  theme: "light" | "dark";
}>({
  theme: "light",
});
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme } = useColorScheme();
  console.log(colorScheme, "colorScheme......");
  return (
    <ThemeContext.Provider value={{ theme: colorScheme }}>
      <View style={theme[colorScheme]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
