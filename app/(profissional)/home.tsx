import { useAuth } from "@/src/context/AuthContext";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeProfissional() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, Profissional!</Text>
      <Button mode="contained" onPress={handleLogout} style={styles.button}>
        Sair
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 16,
  },
  text: {
    fontSize: 20,
    color: "#1976D2",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
  },
});
