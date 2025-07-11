import { AuthProvider, useAuth } from "@/src/context/AuthContext";
import { Stack, router } from "expo-router";

import { useEffect } from "react";

function LayoutWrapper() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user?.tipo === "cliente") {
      router.replace("/(cliente)/home");
    } else if (!loading && user?.tipo === "profissional") {
      router.replace("/(profissional)/home");
    }
  }, [user, loading]);

  if (loading) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/register" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <LayoutWrapper />
    </AuthProvider>
  );
}
