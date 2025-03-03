import {
  horizontalScale,
  verticalScale,
  moderateScale,
  screenHeight,
  screenWidth,
} from "./scaling";
import Fonts from "./fonts";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { Theme } from "./types";

export type ThemeName = "light" | "dark";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export { lightTheme, darkTheme };
export type { Theme };

export default {
  horizontalScale,
  verticalScale,
  moderateScale,
  screenHeight,
  screenWidth,
  ...Fonts,
};
