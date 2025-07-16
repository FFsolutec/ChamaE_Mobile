import StepNavigation from "components/Buttons/StepNavigation";
import SelectableCard from "components/cards/SelectableCard";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

interface Props {
  role: "cliente" | "profissional" | null;
  onSelect: (value: "cliente" | "profissional") => void;
  onNext: () => void;
  onBack: () => void;
}

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

        {/* Card Cliente */}
        <SelectableCard
          selected={role === "cliente"}
          onPress={() => onSelect("cliente")}
          style={styles.card}
        >
          <Card.Content style={styles.cardContent}>
            <Avatar.Icon size={48} icon="account-search" style={styles.icon} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Sou Cliente</Text>
              <Text style={styles.cardDescription}>
                Quero contratar serviços e encontrar os melhores profissionais.
              </Text>
            </View>
          </Card.Content>
        </SelectableCard>

        {/* Card Profissional */}
        <SelectableCard
          selected={role === "profissional"}
          onPress={() => onSelect("profissional")}
          style={styles.card}
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
                Quero oferecer meus serviços, gerenciar minha agenda e encontrar
                clientes.
              </Text>
            </View>
          </Card.Content>
        </SelectableCard>

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

    borderWidth: 2,

    borderRadius: 12,
    borderColor: "#fcfcfcff",
    backgroundColor: "#d0bcffff",
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
