import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
// import { useColorScheme } from "@/hooks/useColorScheme";
import Fonts from "@/theme";
import theme from "../theme/theme";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { PoppinsBlack, PoppinsBold, PoppinsLight } = Fonts;
  console.log(theme, "theme.....");
  const { colorScheme } = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    [PoppinsBlack]: require("../assets/fonts/Poppins-Black.ttf"),
    [PoppinsBold]: require("../assets/fonts/Poppins-Bold.ttf"),
    [PoppinsLight]: require("../assets/fonts/Poppins-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const LIGHT_THEME: Theme = {
    dark: false,
    colors: {
      background: "hsl(0 0% 100%)",
      border: "hsl(240 5.9% 90%)",
      card: "hsl(0 0% 100%)",
      notification: "hsl(0 84.2% 60.2%)",
      primary: "hsl(240 5.9% 10%)",
      text: "hsl(240 10% 3.9%)",
    },
  };
  return (
    <ThemeProvider value={LIGHT_THEME}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
