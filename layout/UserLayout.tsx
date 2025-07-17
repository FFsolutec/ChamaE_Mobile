import { useAuth } from "@/context/AuthContext";
import FooterMenu from "components/menu"; // Verifique se o caminho está correto
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClientLayout() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/(auth)/login");
      }
    }
  }, [user, loading]);

  if (loading || !user) {
    return router.replace("/(auth)/login");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
        <FooterMenu />
      </View>
    </SafeAreaView>
  );
}
