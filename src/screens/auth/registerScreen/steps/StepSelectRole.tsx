import StepNavigation from "@/components/Buttons/StepNavigation";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

interface Props {
  // A prop 'role' vem do pai e diz qual card deve estar selecionado
  role: "cliente" | "profissional" | null;
  // A prop 'onSelect' é uma função do pai que será chamada quando um card for clicado
  onSelect: (value: "cliente" | "profissional") => void;
  // Adicionamos um botão de "Próximo" que só aparece quando um perfil é selecionado
  onNext: () => void;
  onBack: () => void;
}

// Renomeei para ficar consistente com seu fluxo de "Steps"
export default function StepSelectProfile({
  role,
  onSelect,
  onBack,
  onNext,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem-vindo(a)!</Text>
          <Text style={styles.subtitle}>
            Para começar, nos diga como você pretende usar o aplicativo.
          </Text>
        </View>

        {/* Card para Cliente */}
        <TouchableOpacity onPress={() => onSelect("cliente")}>
          <Card
            style={[
              styles.card,
              // A seleção agora é controlada pela prop 'role' que vem do pai
              role === "cliente" && styles.cardSelected,
            ]}
          >
            <Card.Content style={styles.cardContent}>
              <Avatar.Icon
                size={48}
                icon="account-search"
                style={styles.icon}
              />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Sou Cliente</Text>
                <Text style={styles.cardDescription}>
                  Quero contratar serviços e encontrar os melhores
                  profissionais.
                </Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        {/* Card para Profissional */}
        <TouchableOpacity onPress={() => onSelect("profissional")}>
          <Card
            style={[
              styles.card,
              // A seleção agora é controlada pela prop 'role' que vem do pai
              role === "profissional" && styles.cardSelected,
            ]}
          >
            <Card.Content style={styles.cardContent}>
              <Avatar.Icon
                size={48}
                icon="briefcase-account"
                style={styles.icon}
              />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Sou Profissional</Text>
                <Text style={styles.cardDescription}>
                  Quero oferecer meus serviços, gerenciar minha agenda e
                  encontrar clientes.
                </Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <StepNavigation onNext={onNext} onBack={onBack} disableNext={!role} />
      </View>
    </SafeAreaView>
  );
}

// Os estilos continuam os mesmos, estão ótimos!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,

    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  card: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
  },
  cardSelected: {
    borderColor: "#6200ee",
    backgroundColor: "#f0eaff",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  icon: {
    backgroundColor: "transparent",
  },
  cardTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  button: {
    marginTop: 40,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
