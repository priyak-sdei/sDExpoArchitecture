// theme/dark.ts
import { Theme } from "./types";

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "red", // Dark mode can also use blue
    secondary: "#adb5bd", // Lighter gray in dark mode
    background: "#212529", // Dark gray background
    text: "#f8f9fa", // Light text
    border: "#495057", // Darker gray border
    cardBackground: "#343a40", // Slightly lighter than background
    error: "#f8d7da", // light red
  },
};
