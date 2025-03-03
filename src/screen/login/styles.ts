// src/app/(tabs)/explore.styles.ts
import { StyleSheet } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { useMemo } from "react";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 8,
      backgroundColor: theme.colors.primary,
    },
  });

// export const useExploreStyles = () => {
//   const { theme } = useTheme();
//   const styles = useMemo(() => createStyles(theme), [theme]);
//   return styles;
// };
