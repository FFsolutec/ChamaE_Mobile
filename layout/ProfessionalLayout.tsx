import FooterMenu from "components/menu"; // Verifique se o caminho está correto
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfessionalLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Stack screenOptions={{ headerShown: false }}></Stack>
        <FooterMenu />
      </View>
    </SafeAreaView>
  );
}
