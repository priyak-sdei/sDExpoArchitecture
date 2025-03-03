import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Login11 Screen</Text>
      <Link href="/auth/login">
        <Text>hii</Text>
      </Link>
    </View>
  );
}
