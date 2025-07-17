// app/(profissional)/index.tsx
import { router } from "expo-router";
import { useEffect } from "react";

export default function ProfissionalIndex() {
  useEffect(() => {
    router.replace("/(profissional)/home");
  }, []);

  return null;
}
