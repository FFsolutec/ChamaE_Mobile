import { useAuth } from "@/context/AuthContext";
import FooterMenu from "components/menu";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeCliente() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.text}>Bem-vindo, Cliente!</Text>
        <Button mode="contained" onPress={handleLogout} style={styles.button}>
          Sair
        </Button>
      </View>

      <FooterMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
