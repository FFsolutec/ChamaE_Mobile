import ProfileScreen from "@/screens/perfil";

import FooterMenu from "components/menu";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeProfissionalAPp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileScreen />
      </View>
      <FooterMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // mesma cor do app
  },
  content: {
    flex: 1,
  },
});
