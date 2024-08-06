import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { styled } from "nativewind";
import Fonts from "@/theme";
import "../global.css";
const StyledText = styled(Text);
export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      className="text-l text-light-secondary font-text-light"
      // style={[
      //   { color },
      //   type === "default" ? styles.default : undefined,
      //   type === "title" ? styles.title : undefined,
      //   type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
      //   type === "subtitle" ? styles.subtitle : undefined,
      //   type === "link" ? styles.link : undefined,
      //   style,
      // ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
