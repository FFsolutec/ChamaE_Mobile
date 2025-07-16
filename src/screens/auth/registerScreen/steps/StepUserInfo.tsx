import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";
import { z } from "zod";

// Schema de validação
export const userInfoSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar os termos" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type UserInfoData = z.infer<typeof userInfoSchema>;

interface Props {
  defaultValues: UserInfoData;
  onNext: (data: UserInfoData) => void;
  onBack?: any;
}

export default function StepUserInfo({ defaultValues, onNext, onBack }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoData>({
    defaultValues,
    resolver: zodResolver(userInfoSchema),
  });

  return (
    <View>
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
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Email"
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
            error={!!errors.email}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Senha"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            style={styles.input}
            error={!!errors.password}
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
            label="Confirmar Senha"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            style={styles.input}
            error={!!errors.confirmPassword}
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
            <Text> Aceito os termos e políticas</Text>
          </View>
        )}
      />
      {errors.acceptTerms && (
        <Text style={styles.error}>{errors.acceptTerms.message}</Text>
      )}

      <Button
        mode="contained"
        onPress={handleSubmit(onNext)}
        style={styles.button}
      >
        Próximo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { marginBottom: 12 },
  error: { color: "red", fontSize: 12, marginBottom: 8 },
  button: { marginTop: 16 },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});
