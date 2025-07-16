import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, router } from "expo-router";

import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";

function LayoutWrapper() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user?.role === "cliente") {
      router.replace("/(cliente)/home");
    } else if (!loading && user?.role === "profissional") {
      router.replace("/(profissional)/home");
    }
  }, [user, loading]);

  if (loading) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/register" />

      <Stack.Screen name="(cliente)" />
      <Stack.Screen name="(profissional)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <LayoutWrapper />
      </PaperProvider>
    </AuthProvider>
  );
}
