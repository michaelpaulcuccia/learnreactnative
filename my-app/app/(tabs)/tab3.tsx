import { View, Text, StyleSheet } from "react-native";
import { HamburgerMenu } from "@/components/HamburgerMenu";

export default function TabTwo() {
  return (
    <View style={styles.container}>
      <HamburgerMenu />
      <View style={styles.body}>
        <Text style={styles.text}>📄 This is Tab Three, Yo Leela!</Text>
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
