import { StyleSheet, View, Text } from "react-native";
import { HamburgerMenu } from "@/components/HamburgerMenu";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HamburgerMenu />
      <View style={styles.body}>
        <Text style={styles.text}>🏠 Welcome to the Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
