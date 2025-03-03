import { useTheme } from "@/context/ThemeContext";
import { useEffect, useMemo } from "react";
import { createStyles } from "./styles";
import { View, Text } from "react-native";

export default function Login() {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text>Hiiii</Text>
    </View>
  );
}
