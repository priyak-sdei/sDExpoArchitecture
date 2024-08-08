import { Text, useColorScheme, type TextProps } from "react-native";

import "../global.css";
export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  // style,
  // lightColor,
  // darkColor,
  ...rest
}: ThemedTextProps) {
  const theme = useColorScheme() ?? "light";
  return (
    <Text
      // className=" dark text-l  text-dark-secondary  font-text-light"
      className={`text-l font-text-light ${
        theme === "dark" ? "text-dark-secondary" : "text-light-secondary"
      }`}
      //  className="text-l text-light-secondary font-text-light"
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
