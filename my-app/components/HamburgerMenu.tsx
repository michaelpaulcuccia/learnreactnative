import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (route: string) => {
    setIsOpen(false);
    router.push(route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.button}
      >
        <Ionicons name="menu" size={24} color="#000" />
      </TouchableOpacity>

      <Modal transparent visible={isOpen} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setIsOpen(false)}>
          <View style={styles.menu}>
            <Text style={styles.link} onPress={() => handleNavigate("/")}>
              LinkOne (Home)
            </Text>
            <Text style={styles.link} onPress={() => handleNavigate("/tab2")}>
              LinkTwo
            </Text>
            <Text style={styles.link} onPress={() => handleNavigate("/tab3")}>
              LinkThree
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    alignItems: "center",
  },
  button: {
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
  },
  menu: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 40,
    elevation: 5,
  },
  link: {
    fontSize: 18,
    paddingVertical: 10,
    color: "#000",
  },
});
