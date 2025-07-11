import { useAuth } from "@/src/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: z.string(),
    acceptTerms: z?.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar os termos de uso" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const success = await register(data.name, data.email, data.password);
    if (success) {
      alert("Cadastro realizado com sucesso!");
      // Redirecionar com base no tipo de usuário (cliente/profissional)
      router.replace("/"); // ou /home, etc.
    } else {
      alert("Erro no cadastro.");
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Cadastrar" />
        <Card.Content>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Nome completo"
                value={value}
                onChangeText={onChange}
                style={styles.input}
                error={!!errors.name}
                left={<TextInput.Icon icon="account" />}
              />
            )}
          />
          {errors.name && (
            <Text style={styles.error}>{errors.name.message}</Text>
          )}

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Email"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                error={!!errors.email}
                left={<TextInput.Icon icon="email" />}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Senha"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showPassword}
                style={styles.input}
                error={!!errors.password}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
            )}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Confirmar senha"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showConfirmPassword}
                style={styles.input}
                error={!!errors.confirmPassword}
                left={<TextInput.Icon icon="lock-check" />}
                right={
                  <TextInput.Icon
                    icon={showConfirmPassword ? "eye-off" : "eye"}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                }
              />
            )}
          />
          {errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword.message}</Text>
          )}

          <Controller
            control={control}
            name="acceptTerms"
            render={({ field: { value, onChange } }) => (
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={value ? "checked" : "unchecked"}
                  onPress={() => onChange(!value)}
                />
                <TouchableOpacity onPress={() => onChange(!value)}>
                  <Text style={styles.checkboxLabel}>
                    Eu aceito os <Text style={styles.link}>termos de uso</Text>{" "}
                    e a <Text style={styles.link}>política de privacidade</Text>
                    .
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          {errors.acceptTerms && (
            <Text style={styles.error}>{errors.acceptTerms.message}</Text>
          )}

          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
          >
            Criar conta
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  input: { marginBottom: 12 },
  button: { marginTop: 16 },
  error: { color: "red", fontSize: 12, marginBottom: 8, marginLeft: 4 },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  checkboxLabel: { flex: 1, color: "#555", fontSize: 13 },
  link: { color: "#1e88e5", textDecorationLine: "underline" },
});
