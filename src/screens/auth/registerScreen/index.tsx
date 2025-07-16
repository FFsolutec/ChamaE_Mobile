import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";

// Componentes de etapas
import StepInfoRegister from "./steps/StepInfoRegister";
import StepSelectCategory from "./steps/StepSelectCategory";
import StepSelectProfile from "./steps/StepSelectRole";
import StepSelectSubcategories from "./steps/StepSelectSubcategories";
import StepUserInfo, { UserInfoData } from "./steps/StepUserInfo";

export default function RegisterScreen() {
  const { register } = useAuth();

  const [step, setStep] = useState(0); // Começa na introdução

  const [role, setRole] = useState<"cliente" | "profissional" | null>(null);
  const [formData, setFormData] = useState<UserInfoData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [category, setCategory] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<string[]>([]);

  const handleFinalSubmit = async () => {
    await register(
      formData.name,
      formData.email,
      formData.password,
      role || "cliente",
      category || "",
      subcategories
    );

    router.push("/home"); // Redireciona após cadastro
  };

  return (
    <View style={styles.container}>
      {/* Step 0 - Tela de introdução (100% tela) */}
      {step === 0 && (
        <StepInfoRegister defaultValues={{}} onNext={() => setStep(1)} />
      )}

      {/* Etapas do formulário */}
      {step > 0 && (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Card.Content>
            {step === 1 && (
              <StepSelectProfile
                role={role}
                onSelect={setRole}
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
              />
            )}

            {step === 2 && (
              <StepUserInfo
                defaultValues={formData}
                onNext={(data) => {
                  setFormData(data);
                  role === "profissional" ? setStep(3) : handleFinalSubmit();
                }}
                onBack={() => setStep(1)}
              />
            )}

            {role === "profissional" && step === 3 && (
              <StepSelectCategory
                category={category}
                onSelect={(value) => {
                  setCategory(value);
                  setStep(4);
                }}
                onBack={() => setStep(2)}
              />
            )}

            {role === "profissional" && step === 4 && (
              <StepSelectSubcategories
                selected={subcategories}
                category={category}
                onSelect={setSubcategories}
                onBack={() => setStep(3)}
                onFinish={handleFinalSubmit}
              />
            )}

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text style={styles.linkVoltar}>
                Já tem uma conta? Faça login
              </Text>
            </TouchableOpacity>
          </Card.Content>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 5,
  },
  linkVoltar: {
    marginTop: 16,
    textAlign: "center",
    color: "#1e88e5",
    textDecorationLine: "underline",
  },
});
