import {
  horizontalScale,
  verticalScale,
  moderateScale,
  screenHeight,
  screenWidth,
} from "./scaling";
import Fonts from "./fonts";
import colors from "./color";
import theme from "./theme";

export default {
  horizontalScale,
  verticalScale,
  moderateScale,
  screenHeight,
  screenWidth,
  ...Fonts,
  colors,
  theme,
};
